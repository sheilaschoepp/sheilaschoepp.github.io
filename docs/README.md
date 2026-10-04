# Site documentation

This directory separates maintenance documentation from site content, following the [al-folio v1.2 organization](https://github.com/alshedivat/al-folio/tree/v1.2/docs). Jekyll excludes `docs/` from the published site.

## Maintaining this site

- [Installation and deployment](INSTALL.md): Docker preview, production builds, and upgrade checks for this repository.
- [Migration record](MIGRATION.md): current release, runtime ownership, preserved customizations, and validation results.
- [Agent guidelines](../AGENTS.md): site-specific requirements and links to file-type instructions.
- [Technical reference](../.github/copilot-instructions.md): local configuration, build behavior, and common pitfalls.

## al-folio reference guides

These guides were refreshed from the v1.2 release. They cover optional template features as well as features used here. When an example file is absent from this personal site, its link points to the matching upstream release.

- [Quick start](QUICKSTART.md): creating a new site from the template.
- [Customization](CUSTOMIZE.md): pages, collections, publications, plugins, and local overrides.
- [FAQ](FAQ.md) and [troubleshooting](TROUBLESHOOTING.md): common build, display, and deployment issues.
- [Analytics](ANALYTICS.md) and [SEO](SEO.md): optional tracking and search-engine configuration.
- [Contributing upstream](CONTRIBUTING.md): contributing to the al-folio template and plugin ecosystem.

## Ownership and upgrades

The root `Gemfile` pins independently versioned theme and feature gems, and `_config.yml` activates them. Site content and intentional local extensions remain in this repository. Standard theme assets and runtime behavior come from the installed gems.

Upstream's [architecture guide](https://github.com/alshedivat/al-folio/blob/v1.2/docs/ARCHITECTURE.md) and [ownership boundaries](https://github.com/alshedivat/al-folio/blob/v1.2/docs/BOUNDARIES.md) explain this split. Their starter-only ban on local templates does not apply to personal sites: this repository deliberately retains reviewed overrides. Its personal-site URL and empty `baseurl` also differ from the upstream demo.

Before updating plugin pins, review the [latest official release](https://github.com/alshedivat/al-folio/releases/latest), then follow the [upgrade checks](INSTALL.md#upgrade-and-production-checks). Review changes to gem-owned overrides before accepting new checksums.
