# Migration to al-folio v1

This personal site uses the al-folio v1.2 architecture: standard theme files and optional features are supplied by versioned Ruby gems, while site content and intentional customizations stay in this repository. `Gemfile` records the exact selected plugin versions; those versions differ from the overall al-folio release number.

## Runtime and Site Ownership

`_config.yml` selects `theme: al_folio_core`, retains the required `al_folio` contract, and activates the plugins installed by `Gemfile`. Standard layouts, includes, scripts, Sass, search assets, and Distill runtime now come from those gems. Old local runtime copies are removed so future gem updates can take effect.

Personal settings, `_data`, the bibliography, collections, images, and documents remain site-owned. The personal-site URL stays `https://sheilaschoepp.github.io` with an empty `baseurl`. Search stays disabled. Travels remains prepared but hidden from the “beyond research” dropdown; its existing direct URL is not unpublished.

The migration preserves the existing news and conference styling changes, the latest news-table spacing, the publication thumbnail placement before venue badges, and the dark-mode accent color (`#d4a5c9`) with matching hover and search highlighting. It also preserves compact publication buttons, the Abstract/BibTeX labels, arXiv/Publisher DOI labels, and the existing DBLP-sourced BibTeX presentation. Site-specific styling is separated from the gem’s standard Sass so future theme updates do not replace those customizations.

## Intentional Local Templates and Styles

The retained local files serve these purposes:

| Files                                                       | Reason                                                                                                                              |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `_includes/news.liquid`                                     | Preserve the site's news presentation                                                                                               |
| `_includes/plugins/al_search_assets.liquid`                 | Keep non-output collection entries out of search while using the gem runtime                                                        |
| `_includes/services*.liquid`, `_includes/travels*.liquid`   | Render the site's custom services and travel content                                                                                |
| `_layouts/bib.liquid`                                       | Preserve publication thumbnails, buttons, and DBLP BibTeX on the current core layout, including video previews and author expansion |
| `_layouts/book-shelf.liquid`                                | Keep Books covers unlinked when individual pages are disabled; restore links automatically when output is enabled                   |
| `assets/css/main.scss`                                      | Connect the site's Sass customizations to the theme                                                                                 |
| `assets/css/custom.scss`, `_sass/_site-customizations.scss` | Keep site-specific visual styling separate from the gem runtime                                                                     |
| `assets/css/conferences.css`                                | Preserve the custom conference cards and status presentation                                                                        |

The Books listing no longer links covers to nonexistent review pages while `books.output` is `false`. The search wrapper likewise omits individual entries from collections without output pages, while retaining their listing-page navigation entries.

Local overrides are supported for personal sites. The upstream starter's checks forbidding local runtime directories are not appropriate here. `.al-folio-overrides.yml` records reviewed files that shadow gem-owned paths; custom files with no upstream counterpart remain ordinary site code.

Two narrow compatibility rules in `_sass/_site-customizations.scss` keep the standard navigation and expandable publication panels visible when Tailwind and Bootstrap compatibility are both loaded. The existing mobile navigation and publication open/closed behavior still control when each component is displayed.

Bootstrap compatibility is enabled for retained legacy markup. It is supported through v1.2, deprecated in v1.3, and removed in v2.0. Converting all historical content away from Bootstrap is a separate follow-up before adopting a release that removes compatibility.

## Build and Upgrade Workflow

Use Docker for local preview and production checks; [INSTALL.md](INSTALL.md#upgrade-and-production-checks) contains the commands. The preview entry point installs missing dependencies and writes generated output inside the container. `Gemfile` records the exact al-folio plugin pins. The migration removes the historically tracked `Gemfile.lock` so the existing ignore rule takes effect, while preserving the generated local lock for dependency resolution. Do not force-add that ignored file. The build supports a checkout without a lock file.

Before updating theme plugins again:

1. Change the explicit plugin versions in `Gemfile` after reviewing the release notes.
2. Install the selected dependencies and run `al-folio upgrade audit`.
3. Run `al-folio upgrade overrides audit --fail-on-stale`, inspect each upstream difference, and adapt any affected customization.
4. Accept only reviewed override baselines and commit the resulting `.al-folio-overrides.yml`.
5. Build in production mode and review the key pages, navigation, mobile layout, and both color modes.

The `theme-upgrade-audit.yml` workflow checks the v1 contract and fails when an upstream change makes an accepted local override stale. The generated `al-folio-upgrade-report.md` is ignored by Git; this document retains the reviewed migration results.

Do not apply the upstream demo's `/al-folio` baseurl or recreate old local runtime directories as part of routine updates. Do not apply PurgeCSS to the compiled v1 Tailwind asset.

## Validation Record

Validated locally on **2026-10-04**, including a final production rebuild after the latest publication changes. The migration has not been deployed. Docker validation used Ruby 4.0.6 and Node 20.19.2; the deployment workflow uses Ruby 3.3.5 and Node 22. The exact GitHub Actions environment has not been run for this migration.

| Check                                           | Result                                                                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Docker development preview and production build | Passed                                                                                                              |
| Production PurgeCSS                             | Passed; the compiled Tailwind asset's checksum was unchanged                                                        |
| Upgrade audit                                   | 0 blocking findings; 9 intentional non-blocking compatibility notices                                               |
| Override audit                                  | All 5 gem-owned overrides reviewed and acknowledged; `--fail-on-stale` passed                                       |
| Desktop and 390px mobile navigation             | Passed; “beyond research” contains only Books                                                                       |
| Homepage and news                               | Visual review passed, including the latest news spacing                                                             |
| Publications                                    | Filtering, abstract expansion, the `#d4a5c9` dark accent, and opening actual DBLP BibTeX text passed                |
| Books                                           | 138 covers rendered with 0 review links while `books.output: false`                                                 |
| Conferences                                     | AISTATS query, Robotics filter, and name sorting passed; the optimized 390px mobile page has no horizontal overflow |
| Travels                                         | Direct page and cards passed; navigation entry remains hidden                                                       |
| Services                                        | Production visual review passed                                                                                     |
| Optimized production output                     | Navigation and abstract expansion passed after PurgeCSS; all 166 local asset URLs returned HTTP 200                 |

The 9 compatibility notices are eight tooltips in custom service/travel templates and one bibliography popover using `data-toggle`. The installed core and compatibility runtime still bind those attributes; changing them without a corresponding runtime implementation would remove functionality. They are retained intentionally and should be reassessed when the compatibility runtime changes.

Existing build warnings remain for three conflicting `prof_pic_old` image outputs, pagination, and a notebook without an explicit lexer. These warnings did not prevent the development or production builds from completing.

## Upstream References

- [Migration guidance for older pre-v1 sites](https://github.com/alshedivat/al-folio/blob/main/docs/INSTALL.md#older-pre-v1-installs)
- [v1 architecture and local override rules](https://github.com/alshedivat/al-folio/blob/main/docs/ARCHITECTURE.md)
- [Runtime ownership boundaries](https://github.com/alshedivat/al-folio/blob/main/docs/BOUNDARIES.md)
