# Coding Agent Instructions

## Repository Overview

This is Sheila Schoepp’s personal academic website at `https://sheilaschoepp.github.io`, built with Jekyll and the al-folio v1 plugin architecture. It is a customized user site, not the upstream al-folio starter or a plugin development repository.

Read [MIGRATION.md](../MIGRATION.md) for the migration decisions and [INSTALL.md](../INSTALL.md) for preview, build, and upgrade commands. Older customization guides may refer to files that now come from installed gems; check ownership before recreating them locally.

## Tech Stack & Runtime Ownership

- **Jekyll:** 4.x, with Ruby 3.3.5 in deployment workflows.
- **Python:** 3.13 in deployment workflows, with nbconvert for notebooks.
- **Node.js:** 22 in site build workflows, with Prettier and PurgeCSS.
- **Docker:** the image and local build options are defined in `docker-compose.yml` and `Dockerfile`.
- **Theme:** `al_folio_core`, selected by `theme: al_folio_core` in `_config.yml`.
- **Features:** independently versioned `al_*` gems, pinned in `Gemfile` and activated in `_config.yml`.

The core gem provides the standard layouts, includes, Sass, scripts, and assets. Feature gems own search, CV rendering, Distill, citations, charts, math, comments, image tools, analytics, and other optional features. Do not restore old vendored runtime files merely because they no longer exist in this repository. See upstream [architecture](https://github.com/alshedivat/al-folio/blob/main/docs/ARCHITECTURE.md) and [ownership boundaries](https://github.com/alshedivat/al-folio/blob/main/docs/BOUNDARIES.md).

Intentional local overrides are supported in this personal site. Local files with the same path as a gem file take precedence over the gem. The upstream starter-only rule forbidding `_includes/`, `_layouts/`, and `_sass/` does not apply here. Keep customizations focused, and review `.al-folio-overrides.yml` after upgrades so that an old local copy does not hide a new upstream fix.

## Building & Local Development

### Docker (Recommended)

Use Docker to avoid changing the host Ruby and Python environment:

```bash
docker compose pull
docker compose up
```

Preview the site at `http://localhost:8080/`. The entry point installs missing gems and restarts Jekyll when `_config.yml` changes. Preview output is written to `/tmp/_site` inside the container, not the host `_site/` directory.

```bash
docker compose up --build   # Build the image from the local Dockerfile
docker compose down        # Stop the preview
```

The slim alternative is `docker compose -f docker-compose-slim.yml up`.

The exact production build and audit commands are in [INSTALL.md](../INSTALL.md#upgrade-and-production-checks). Use `JEKYLL_ENV=production` for production validation; a successful development preview does not exercise all minification behavior. ImageMagick and nbconvert are required for image and notebook content and are available in the build environment.

### Existing Local Ruby Environment

If a working local environment already exists, `bundle install`, `bundle exec jekyll serve`, and `bundle exec jekyll build` remain valid. Do not install or replace system Ruby solely to run this site. `bin/setup-python-deps` installs notebook dependencies using an active Python virtual environment when available.

## Project Layout & Key Files

| Path                                                     | Purpose                                                                                |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `_config.yml`                                            | Site identity, URLs, feature settings, collection configuration, and plugin activation |
| `Gemfile`                                                | Ruby dependencies and explicit al-folio plugin version pins                            |
| `_data/`                                                 | Site data, including socials, coauthors, venues, citations, repositories, and CV       |
| `_bibliography/papers.bib`                               | Publication bibliography                                                               |
| `_pages/`                                                | Static pages and navigation, including the “beyond research” dropdown                  |
| `_news/`, `_posts/`, `_projects/`, `_teachings/`         | News, blog, project, and teaching content                                              |
| `_books/`, `_conferences/`, `_services/`, `_travels/`    | Site collections                                                                       |
| `_includes/`, `_layouts/`                                | Intentional site templates; most standard templates live in gems                       |
| `_sass/_site-customizations.scss`                        | Site-specific styling kept separate from the core theme                                |
| `assets/`                                                | Site images, documents, content embeds, and intentional CSS overrides                  |
| `.al-folio-overrides.yml`                                | Reviewed upstream/local checksums for gem-owned file overrides                         |
| `docker-compose.yml`, `Dockerfile`, `bin/entry_point.sh` | Container build and local preview                                                      |
| `purgecss.config.js`                                     | Production CSS optimization, preserving the compiled v1 Tailwind asset                 |

`Gemfile` contains the exact al-folio plugin pins. The migration removes the historical tracked `Gemfile.lock` so the existing `.gitignore` rule takes effect; locally generated lock files are preserved for preview use. Preserve an existing local lock during preview restarts and do not force-add it. If working on an older branch, inspect its tracked status before staging: ignore rules do not untrack files already in Git. Do not commit `_site/`, caches, dependencies, credentials, or OS/editor files.

## Configuration Rules

1. Preserve `url: https://sheilaschoepp.github.io` and an empty `baseurl:`. The upstream demo uses `/al-folio`; copying that value here breaks personal-site links.
2. Keep `theme: al_folio_core` and the `al_folio` namespace, including API version, style engine, Tailwind settings, Distill settings, and feature flags.
3. A plugin must be present in both `Gemfile` and `_config.yml`'s `plugins:` list. Feature-specific flags and page front matter must also enable the feature.
4. Bootstrap compatibility is intentionally enabled while existing content uses Bootstrap markup. It is supported through v1.2, deprecated in v1.3, and removed in v2.0. Review the compatibility requirement before changing versions.
5. When updating a third-party library version, update its Subresource Integrity hashes at the same time.
6. Quote YAML values containing special characters such as `:` or `#`.
7. Preserve disabled features unless the task requests enabling them. Search is disabled. Travels remains commented out in the “beyond research” dropdown; hiding it from the menu does not unpublish its existing URL.
8. `output: false` collections supply entries to listing pages without generating an individual page per entry. Do not add links to nonexistent individual book or conference pages.

## CI/CD Pipeline & Validation

`.github/workflows/deploy.yml` installs dependencies, builds with `JEKYLL_ENV=production`, optimizes eligible CSS, and publishes `_site/` to `gh-pages` on eligible pushes. Pull requests build without deploying. GitHub Pages serves the generated `gh-pages` branch; its built-in Jekyll environment is not the source build environment.

`theme-upgrade-audit.yml` checks the v1 upgrade contract and fails on stale override baselines while allowing reviewed intentional overrides. Other workflows provide formatting, link, accessibility, security, citation, and CV checks. Check their actual definitions before assuming that an unrelated workflow uses the same tool versions or trigger paths.

Before committing:

1. Read `git status` and review the task diff. Preserve the user's existing edits.
2. Run `npm ci` if formatting dependencies are missing; format changed files using `npx prettier --write <files>` and verify with `npx prettier --check <files>`.
3. Run the production build. For theme/config/plugin changes, also run the upgrade and override audits from [INSTALL.md](../INSTALL.md#upgrade-and-production-checks).
4. Check the homepage, Publications, Conferences, Books and navigation, light/dark mode, and narrow-screen layout. Confirm Travels remains hidden from navigation.
5. Stage explicit files or hunks. Use commit types `feat`, `fix`, `docs`, `style`, `config`, or `chore`.

Do not automatically accept every override after a dependency update. Use `bundle exec al-folio upgrade overrides diff <path>` to inspect changed upstream files, adapt the local customization, then accept only the reviewed path.

## Common Pitfalls & Workarounds

### Feature Does Not Render

Check the gem dependency, the `_config.yml` plugin entry, the site-wide feature flag, the page front matter, and the relevant `third_party_libraries` entry. Some missing features emit no error. Do not vendor old scripts to work around incorrect plugin wiring.

### CSS or Links Missing After Deployment

Verify the effective `url` and `baseurl`. This personal site has no `/al-folio` prefix. Also check that the compiled Tailwind asset is present and excluded from PurgeCSS; runtime class names may not all occur in generated HTML.

### Local Override Hides an Upstream Fix

Run the override audit and diff the affected path. `.al-folio-overrides.yml` records the reviewed gem version and file checksum, allowing the next dependency upgrade to report upstream changes without relying on Git merge conflicts.

### YAML or Unknown Liquid Tag Errors

Inspect the build error and the relevant configuration. An unknown plugin tag can mean the owning gem is absent from the dependency or activation list. Confirm that the normal deployment workflow is used rather than GitHub Pages' restricted source builder.

### Formatting Failure

Format only the affected files with the installed project formatter. Do not rewrite the entire repository or stage unrelated changes to fix a narrow formatting failure.

### Port Already in Use

Stop the relevant preview with `docker compose down`, or choose another host port in a local Compose override. Do not kill unrelated processes.

### Related Posts Error: “Zero vectors cannot be normalized”

Empty posts or posts containing only stop words can confuse `classifier-reborn`. Add meaningful content or set `related_posts: false` in the affected post's front matter.

## Content Conventions

Read the corresponding instruction in `.github/instructions/` before changing Markdown content, YAML, BibTeX, Liquid, or JavaScript. Standard examples remain:

```yaml
---
layout: post
title: Post Title
date: YYYY-MM-DD
categories: category-name
---
```

```yaml
---
layout: page
title: Project Name
description: Short description
img: /assets/img/project-image.jpg
importance: 1
---
```

Publications use standard BibTeX with al-folio fields such as `pdf`, `code`, `preview`, and `doi`; see [CUSTOMIZE.md](../CUSTOMIZE.md). When older instructions contradict the installed v1 runtime or the preserved site configuration, inspect those sources and update the documentation instead of restoring obsolete runtime code.
