#!/bin/bash
set -euo pipefail

echo "Entry point script running"

CONFIG_FILE=_config.yml
DOCKER_DESTINATION=/tmp/_site
jekyll_pid=
watcher_pid=

ensure_bundle_deps() {
    # Keep Gemfile.lock intact so local previews use the selected plugin versions.
    if bundle check >/dev/null 2>&1; then
        echo "Bundler dependencies already satisfied"
        return
    fi

    echo "Installing missing bundler dependencies"
    bundle install --jobs 4 --retry 3
}

stop_jekyll() {
    if [ -n "$jekyll_pid" ]; then
        kill "$jekyll_pid" 2>/dev/null || true
        wait "$jekyll_pid" 2>/dev/null || true
        jekyll_pid=
    fi
}

cleanup() {
    if [ -n "$watcher_pid" ]; then
        kill "$watcher_pid" 2>/dev/null || true
        wait "$watcher_pid" 2>/dev/null || true
    fi
    stop_jekyll
}

trap 'exit 0' INT TERM
trap cleanup EXIT

start_jekyll() {
    ensure_bundle_deps
    # Keep notebook and generated asset writes off the host bind mount.
    mkdir -p "$DOCKER_DESTINATION"
    bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload --verbose --trace --force_polling --destination "$DOCKER_DESTINATION" --config "$CONFIG_FILE" &
    jekyll_pid=$!
}

start_jekyll

while true; do
    inotifywait -q -e modify,move,create,delete "$CONFIG_FILE" &
    watcher_pid=$!
    if wait -n "$jekyll_pid" "$watcher_pid"; then
        child_status=0
    else
        child_status=$?
    fi

    # Surface build/server failures instead of leaving an idle container running.
    if ! kill -0 "$jekyll_pid" 2>/dev/null; then
        if wait "$jekyll_pid"; then
            child_status=0
        else
            child_status=$?
        fi
        jekyll_pid=
        echo "Jekyll exited with status $child_status"
        exit "$child_status"
    fi
    if [ "$child_status" -ne 0 ]; then
        echo "Configuration watcher exited with status $child_status"
        exit "$child_status"
    fi

    watcher_pid=
    echo "Change detected to $CONFIG_FILE, restarting Jekyll"
    stop_jekyll
    start_jekyll
done
