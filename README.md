# Sheila Schoepp's website

Source for [sheilaschoepp.github.io](https://sheilaschoepp.github.io), built with Jekyll and the [al-folio v1.2 release](https://github.com/alshedivat/al-folio/releases/tag/v1.2).

The repository follows al-folio's separation between site content, configuration, and gem-owned theme features. The exact theme and plugin versions are pinned in `Gemfile`; intentional personal-site overrides are reviewed in `.al-folio-overrides.yml`.

## Repository organization

| Location                                                            | Contents                                                              |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `_config.yml`, `Gemfile`                                            | Site configuration, theme selection, and plugin versions              |
| `_pages/`, `_news/`, `_projects/`, `_teachings/`                    | Site pages and content                                                |
| `_books/`, `_conferences/`, `_journals/`, `_services/`, `_travels/` | Personal collections                                                  |
| `_bibliography/`, `_data/`                                          | Publication records and structured site data                          |
| `assets/`                                                           | Images, documents, embeds, and site-specific scripts and styles       |
| `_includes/`, `_layouts/`, `_sass/`, `_plugins/`                    | Intentional local customizations; standard theme files come from gems |
| `docs/`                                                             | Setup, customization, troubleshooting, and migration documentation    |
| `bin/`, `.github/workflows/`                                        | Local utilities, validation, and deployment                           |
| `_archive/`                                                         | Retained reference content excluded from the published site           |

## Preview and maintain

```bash
docker compose up
```

Open [the local preview](http://localhost:8080/). See [installation and production checks](docs/INSTALL.md#upgrade-and-production-checks) for full validation commands.

Pushes to the site's deployment branch build and publish through GitHub Actions. Preserve `url: https://sheilaschoepp.github.io` and an empty `baseurl:`.

Start with the [documentation index](docs/README.md) and [migration record](docs/MIGRATION.md). Coding agents should read [AGENTS.md](AGENTS.md) before changing files.
