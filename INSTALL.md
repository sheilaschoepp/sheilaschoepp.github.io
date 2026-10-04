# Installing and Deploying

<!--ts-->

- [Installing and Deploying](#installing-and-deploying)
  - [This Personal Site](#this-personal-site)
  - [Recommended Approach](#recommended-approach)
    - [Important Notes for GitHub Pages Sites](#important-notes-for-github-pages-sites)
    - [Automatic Deployment](#automatic-deployment)
    - [Local Development](#local-development)
  - [Local setup on Windows](#local-setup-on-windows)
  - [Local setup using Docker (Recommended)](#local-setup-using-docker-recommended)
    - [Build your own docker image](#build-your-own-docker-image)
    - [Have Bugs on Docker Image?](#have-bugs-on-docker-image)
  - [Local Setup with Development Containers](#local-setup-with-development-containers)
  - [Local Setup (Legacy, no longer supported)](#local-setup-legacy-no-longer-supported)
  - [Deployment](#deployment)
    - [For personal and organization webpages](#for-personal-and-organization-webpages)
    - [For project pages](#for-project-pages)
    - [Enabling automatic deployment](#enabling-automatic-deployment)
    - [Manual deployment to GitHub Pages](#manual-deployment-to-github-pages)
    - [Deploy on <a href="https://www.netlify.com/" rel="nofollow">Netlify</a>](https://www.netlify.com/)
    - [Deployment to another hosting server (non GitHub Pages)](#deployment-to-another-hosting-server-non-github-pages)
    - [Deployment to a separate repository (advanced users only)](#deployment-to-a-separate-repository-advanced-users-only)
  - [Upgrade and Production Checks](#upgrade-and-production-checks)
  - [Maintaining Dependencies](#maintaining-dependencies)
  - [Upgrading from a previous version](#upgrading-from-a-previous-version)

<!--te-->

## This Personal Site

This repository uses the al-folio v1 plugin architecture with explicitly pinned plugin versions. The theme comes from `al_folio_core`; site content, settings, and intentional custom templates remain in this repository. See [MIGRATION.md](MIGRATION.md) for the migration decisions and override inventory.

Keep these settings for this personal GitHub Pages site:

```yaml
url: https://sheilaschoepp.github.io
baseurl:
```

The upstream demo's `/al-folio` baseurl does not apply here. The general deployment alternatives below are retained as reference; the existing site deploys through `.github/workflows/deploy.yml` to `gh-pages`.

## Recommended Approach

The recommended approach for using **al-folio** is to first create your own site using the template with as few changes as possible, and only when it is up and running customize it however you like. This way it is easier to pinpoint what causes a potential issue in case of a bug.

**For the quickest setup**, follow the [Quick Start Guide](QUICKSTART.md), which will have you up and running in 5 minutes.

### Important Notes for GitHub Pages Sites

If you plan to upload your site to `<your-github-username>.github.io`, the repository name :warning: **MUST BE** :warning: `<your-github-username>.github.io` or `<your-github-orgname>.github.io`, as stated in the [GitHub pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

When configuring `_config.yml`, set `url` to `https://<your-github-username>.github.io` and leave `baseurl` **empty** (do NOT delete it), setting it as `baseurl:`.

### Automatic Deployment

Starting version [v0.3.5](https://github.com/alshedivat/al-folio/releases/tag/v0.3.5), **al-folio** will automatically re-deploy your webpage each time you push new changes to your repository! :sparkles:

### Local Development

Once everything is deployed, you can download the repository to your machine and start customizing it locally:

```bash
git clone git@github.com:<your-username>/<your-repo-name>.git
```

See [Local setup using Docker](#local-setup-using-docker-recommended) or other sections below for local development options.

## Local setup on Windows

If you are using Windows, it is **highly recommended** to use [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install), which is a compatibility layer for running Linux on top of Windows. You can follow [these instructions](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support) to install WSL and Ubuntu on your machine. You only need to go up to the step 4 of the tutorial (you don't have to enable the optional `systemd` nor the graphical applications), and then you can follow the instructions below to install docker. You can install docker natively on Windows as well, but it has been having some issues as can be seen in [#1540](https://github.com/alshedivat/al-folio/issues/1540), [#2007](https://github.com/alshedivat/al-folio/issues/2007).

## Local setup using Docker (Recommended)

Using Docker to install Jekyll and Ruby dependencies is the easiest way.

You need to take the following steps to get `al-folio` up and running on your local machine:

- First, install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).
- Finally, pull the image selected in `docker-compose.yml` and start the local preview.

```bash
docker compose pull
docker compose up
```

The first run downloads the container image and installs any missing Ruby dependencies. Open `http://localhost:8080/` to preview this site. The entry point uses the mounted `Gemfile` and preserves an existing local `Gemfile.lock`. Preview output is written to `/tmp/_site` inside the container, so it does not create a host `_site/` directory.

Now, feel free to customize the theme however you like (don't forget to change the name!). Also, your changes should be automatically rendered in real-time (or maybe after a few seconds).

The alternative slim image is configured in `docker-compose-slim.yml`: run `docker compose -f docker-compose-slim.yml up`.

### Build your own docker image

> Note: this approach is only necessary if you would like to build an older or very custom version of al-folio.

Build and run a new docker image using:

```bash
docker compose up --build
```

When changing Ruby dependencies, edit `Gemfile` and rebuild the image. The al-folio plugins are pinned, so rebuilding alone does not select a newer theme release. Follow [Maintaining Dependencies](#maintaining-dependencies) when changing those versions.

If you want to use a specific docker version, you can do so by changing the version tag to `your_version` in `docker-compose.yaml` (the `v0.16.3` in `image: amirpourmand/al-folio:v0.16.3`). For example, you might have created your website on `v0.10.0` and you want to stick with that.

### Have Bugs on Docker Image?

Sometimes, there might be some bugs in the current docker image. It might be version mismatch or anything. If you want to debug and easily solve the problem for yourself you can do the following steps:

```
docker compose up -d
docker compose logs
```

Then you can see the bug! You can enter the container via this command:

```
docker compose exec -it jekyll /bin/bash
```

Then you can run the script:

```
./bin/entry_point.sh
```

You might see problems for package dependecy or something which is not available. You can fix it now by using

```
bundle install
./bin/entry_point.sh
```

Most likely, this will solve the problem but it shouldn't really happen. So, please open a bug report for us.

## Local Setup with Development Containers

`al-folio` supports [Development Containers](https://containers.dev/supporting).
For example, when you open the repository with Visual Studio Code (VSCode), it prompts you to install the necessary extension and automatically install everything necessary.

## Local Setup (Legacy, no longer supported)

For a hands-on walkthrough of running al-folio locally without using Docker, check out [this cool blog post](https://george-gca.github.io/blog/2022/running-local-al-folio/) by one of the community members!

Assuming you have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Bundler](https://bundler.io/) installed on your system (_hint: for ease of managing ruby gems, consider using [rbenv](https://github.com/rbenv/rbenv)_), and also [Python](https://www.python.org/) and [pip](https://pypi.org/project/pip/) (_hint: for ease of managing python packages, consider using a virtual environment, like [venv](https://docs.python.org/pt-br/3/library/venv.html) or [conda](https://docs.conda.io/en/latest/)_).

```bash
bundle install
# assuming pip is your Python package manager
pip install jupyter
bundle exec jekyll serve
```

To see the template running, open your browser and go to `http://localhost:4000`. You should see a copy of the theme's [demo website](https://alshedivat.github.io/al-folio/). Now, feel free to customize the theme however you like. After you are done, remember to **commit** your final changes.

## Deployment

Deploying your website to [GitHub Pages](https://pages.github.com/) is the most popular option.
Starting version [v0.3.5](https://github.com/alshedivat/al-folio/releases/tag/v0.3.5), **al-folio** will automatically re-deploy your webpage each time you push new changes to your repository **main branch**! :sparkles:

### For personal and organization webpages

1. The name of your repository **MUST BE** `<your-github-username>.github.io` or `<your-github-orgname>.github.io`.
2. In `_config.yml`, set `url` to `https://<your-github-username>.github.io` and leave `baseurl` empty.
3. Set up automatic deployment of your webpage (see instructions below).
4. Make changes to your main branch, commit, and push!
5. After deployment, the webpage will become available at `<your-github-username>.github.io`.

### For project pages

1. In `_config.yml`, set `url` to `https://<your-github-username>.github.io` and `baseurl` to `/<your-repository-name>/`.
2. Set up automatic deployment of your webpage (see instructions below).
3. Make changes to your main branch, commit, and push!
4. After deployment, the webpage will become available at `<your-github-username>.github.io/<your-repository-name>/`.

### Enabling automatic deployment

1. Click on **Actions** tab and **Enable GitHub Actions**; do not worry about creating any workflows as everything has already been set for you.
2. Go to `Settings -> Actions -> General -> Workflow permissions`, and give `Read and write permissions` to GitHub Actions
3. Make any other changes to your webpage, commit, and push to your main branch. This will automatically trigger the **Deploy** action.
4. Wait for a few minutes and let the action complete. You can see the progress in the **Actions** tab. If completed successfully, in addition to the `main` branch, your repository should now have a newly built `gh-pages` branch. **Do NOT touch this branch!**
5. Finally, in the **Settings** of your repository, in the Pages section, set the branch to `gh-pages` (**NOT** to `main`). For more details, see [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source).

If you keep your site on another branch, open `.github/workflows/deploy.yml` **on the branch you keep your website on** and change `on->push->branches` and `on->pull\_request->branches` to the branch you keep your website on. This will trigger the action on pulls/pushes on that branch. The action will then deploy the website on the branch it was triggered from.

### Manual deployment to GitHub Pages

If you need to manually re-deploy your website to GitHub pages, go to Actions, click "Deploy" in the left sidebar, then "Run workflow."

### Deploy on [Netlify](https://www.netlify.com/)

1. [Use this template -> Create a new repository](https://github.com/new?template_name=al-folio&template_owner=alshedivat).
2. Netlify: **Add new site** -> **Import an existing project** -> **GitHub** and give Netlify access to the repository you just created.
3. Netlify: In the deploy settings
   - Set **Branch to deploy** to `main`
   - **Base directory** is empty
   - Set **Build command** to `sed -i "s/^\(baseurl: \).*$/baseurl:/" _config.yml && bundle exec jekyll build`
   - Set **Publish directory** to `_site`

4. Netlify: Add the following two **environment variables**
   - | Key            | Value                                                                                  |
     | -------------- | -------------------------------------------------------------------------------------- |
     | `JEKYLL_ENV`   | `production`                                                                           |
     | `RUBY_VERSION` | set to the Ruby version found in `.github/workflows/deploy.yml` (for example, `3.3.5`) |

5. Netlify: Click **Deploy** and wait for the site to be published. If you want to use your own domain name, follow the steps in [this documentation](https://docs.netlify.com/domains-https/custom-domains/).

### Deployment to another hosting server (non GitHub Pages)

If you decide to not use GitHub Pages and host your page elsewhere, simply run:

```bash
bundle exec jekyll build
```

which will (re-)generate the static webpage in the `_site/` folder.
Then simply copy the contents of the `_site/` directory to your hosting server.

If you also want to remove unused css classes from your file, run:

```bash
purgecss -c purgecss.config.js
```

which will replace the css files in the `_site/assets/css/` folder with the purged css files.

**Note:** Make sure to correctly set the `url` and `baseurl` fields in `_config.yml` before building the webpage. If you are deploying your webpage to `your-domain.com/your-project/`, you must set `url: your-domain.com` and `baseurl: /your-project/`. If you are deploying directly to `your-domain.com`, leave `baseurl` blank, **do not delete it**.

### Deployment to a separate repository (advanced users only)

**Note:** Do not try using this method unless you know what you are doing (make sure you are familiar with [publishing sources](https://help.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)). This approach allows to have the website's source code in one repository and the deployment version in a different repository.

Let's assume that your website's publishing source is a `publishing-source` subdirectory of a git-versioned repository cloned under `$HOME/repo/`.
For a user site this could well be something like `$HOME/<user>.github.io`.

Firstly, from the deployment repo dir, checkout the git branch hosting your publishing source.

Then from the website sources dir (commonly your al-folio fork's clone):

```bash
bundle exec jekyll build --destination $HOME/repo/publishing-source
```

This will instruct jekyll to deploy the website under `$HOME/repo/publishing-source`.

**Note:** Jekyll will clean `$HOME/repo/publishing-source` before building!

The quote below is taken directly from the [jekyll configuration docs](https://jekyllrb.com/docs/configuration/options/):

> Destination folders are cleaned on site builds
>
> The contents of `<destination>` are automatically cleaned, by default, when the site is built. Files or folders that are not created by your site will be removed. Some files could be retained by specifying them within the `<keep_files>` configuration directive.
>
> Do not use an important location for `<destination>`; instead, use it as a staging area and copy files from there to your web server.

If `$HOME/repo/publishing-source` contains files that you want jekyll to leave untouched, specify them under `keep_files` in `_config.yml`.
In its default configuration, al-folio will copy the top-level `README.md` to the publishing source. If you want to change this behavior, add `README.md` under `exclude` in `_config.yml`.

**Note:** Do _not_ run `jekyll clean` on your publishing source repo as this will result in the entire directory getting deleted, irrespective of the content of `keep_files` in `_config.yml`.

## Upgrade and Production Checks

Run these checks after changing the theme, plugin versions, or runtime configuration. They install the dependencies selected by `Gemfile`, audit the v1 configuration and local overrides, and build production output:

```bash
docker compose run --rm --no-deps --entrypoint bash jekyll -lc 'bundle install && bundle exec al-folio upgrade audit && bundle exec al-folio upgrade overrides audit --fail-on-stale && JEKYLL_ENV=production bundle exec jekyll build --destination /tmp/_site'
```

If the audit reports findings, inspect them before applying changes. Generate its detailed report when needed:

```bash
docker compose run --rm --no-deps --entrypoint bash jekyll -lc 'bundle install && bundle exec al-folio upgrade report'
```

`al-folio-upgrade-report.md` distinguishes blocking findings from follow-up work. Do not treat `--no-fail` as a passing audit; that flag is useful only for gathering findings during a migration. A successful production build does not replace browser checks of navigation, key pages, responsive layout, and light/dark mode.

The deployment workflow also optimizes CSS using `purgecss.config.js`. Its v1 Tailwind asset is intentionally excluded from PurgeCSS because interactive classes can be absent from generated HTML. Run the full workflow checks when changing styles or deployment settings.

## Maintaining Dependencies

Bundler manages the Ruby packages (gems) that build the site. Each al-folio plugin is pinned to an explicit version in `Gemfile`; its version number is independent of the overall al-folio release number.

For a theme update:

1. Review the upstream release notes and choose compatible plugin versions in `Gemfile`.
2. Keep each plugin in both `Gemfile` and the `plugins:` list in `_config.yml`.
3. Run `bundle update` in the build environment and rebuild the Docker image if using a locally built image.
4. Run the upgrade and production checks above, then review any changed local overrides.
5. Preview at `http://localhost:8080/` before deploying.

`Gemfile` records the exact al-folio plugin pins. The migration removes the historically tracked `Gemfile.lock`, making the existing `.gitignore` rule effective. Bundler can still keep a local lock file for previews; do not force-add it. If using an older branch, check whether it still tracks the lock file before staging dependency changes, because ignore rules do not untrack existing files.

## Upgrading from a previous version

This site has moved from vendored pre-v1 theme files to v1's versioned gems. Future upgrades should update the pinned gems and review local overrides, rather than rebase the entire personal site onto the upstream starter. [MIGRATION.md](MIGRATION.md) records the preserved customizations.

Local `_includes`, `_layouts`, Sass, and assets are valid site customizations. An override at the same path as a gem file wins over that gem's copy, so review it whenever the upstream file changes:

```bash
bundle exec al-folio upgrade overrides audit --fail-on-stale
bundle exec al-folio upgrade overrides diff <path>
bundle exec al-folio upgrade overrides accept <path>
```

Run these in the same environment as Jekyll. Commit `.al-folio-overrides.yml` after reviewing and accepting an intentional override; it records the gem version and upstream/local checksums for the next upgrade. Do not accept changes without reading their diff.

Bootstrap compatibility is enabled for retained legacy content. It is supported through v1.2, deprecated in v1.3, and removed in v2.0; migrate that content before moving beyond its supported window. The core theme uses the v1 Tailwind runtime.

See the official [upgrade guide](https://github.com/alshedivat/al-folio/blob/main/docs/INSTALL.md#upgrading-from-a-previous-version) and [architecture guide](https://github.com/alshedivat/al-folio/blob/main/docs/ARCHITECTURE.md) for the current runtime contract. Starter-only restrictions on local runtime directories do not apply to customized personal sites such as this one.
