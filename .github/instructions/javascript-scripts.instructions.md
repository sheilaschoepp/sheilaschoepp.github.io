---
applyTo: "assets/**/*.js,**/*.liquid.js"
---

# JavaScript Scripts Instructions

## Overview

This site uses the al-folio v1 gem runtime. The old local `_scripts/` directory has been removed intentionally. Standard search, analytics, and image scripts are supplied by feature gems; do not recreate their pre-v1 files in this repository.

| Functionality                                  | Owning gem      |
| ---------------------------------------------- | --------------- |
| Search index, Ninja-keys component, and assets | `al_search`     |
| Analytics providers                            | `al_analytics`  |
| PhotoSwipe, zoom, and image tools              | `al_img_tools`  |
| Standard theme behavior                        | `al_folio_core` |

Plugins must be in both `Gemfile` and `_config.yml`'s `plugins:` list. Configuration and page front matter control whether their assets are emitted. Missing generated assets may indicate a disabled feature rather than a missing local script.

The intentional local search wrapper is `_includes/plugins/al_search_assets.liquid`. It keeps the gem runtime and filters entries from collections with `output: false`. Search stays disabled unless requested otherwise. See `docs/MIGRATION.md` for the complete override inventory.

## File Structure & Frontmatter

A new site-specific script that requires Liquid processing can include Jekyll front matter. Keep plain site JavaScript under `assets/js/`; use an intentional template override only when the behavior cannot be configured through the plugin.

```javascript
---
permalink: /assets/js/filename.js
---
// JavaScript code here
```

**Key frontmatter fields:**

- `permalink:` – Specifies output path in compiled site (e.g., `/assets/js/search-data.js`)
- Comments/empty – Files with only JavaScript and no frontmatter are processed as-is

**Processing:**

- `.liquid.js` files – Processed by Jekyll's Liquid engine before JavaScript compilation
- Plain `.js` assets without front matter are copied to their existing relative paths; Jekyll does not automatically move arbitrary script files into `assets/js/`
- Mixed Liquid/JavaScript needs both template and generated JavaScript validation. Respect `.prettierignore`; do not force a JavaScript-only parser onto Liquid syntax.

## JavaScript Patterns in al-folio

### Liquid + JavaScript Mixing (in `.liquid.js` files)

Illustrative Liquid/JavaScript pattern (do not use it to replace the gem-owned search index):

```javascript
---
permalink: /assets/js/search-data.js
---
// Regular JavaScript
const ninja = document.querySelector('ninja-keys');

// Liquid processing - Jekyll loops and variables
ninja.data = [
  {%- for page in site.pages -%}
    {
      id: "nav-{{ page.title | slugify }}",
      title: "{{ page.title }}",
      handler: () => {
        window.location.href = "{{ page.url | relative_url }}";
      },
    },
  {%- endfor -%}
];
```

**Important:**

- Use Liquid filters (`| slugify`, `| relative_url`, `| escape`) to process Jekyll variables
- Curly braces `{{ }}` output variables
- Use `{%- -%}` (with hyphens) to control whitespace in generated output
- Keep JSON structures valid after Liquid processing

### ES6 Modules & Imports

Scripts use modern JavaScript with ES6 imports:

```javascript
import PhotoSwipeLightbox from "{{ site.third_party_libraries.photoswipe-lightbox.url.js }}";
import PhotoSwipe from "{{ site.third_party_libraries.photoswipe.url.js }}";
```

- Import third-party libraries via `site.third_party_libraries` configuration
- Libraries resolved from `_config.yml` CDN or local paths

### DOM Manipulation & Event Handlers

Scripts attach to specific DOM elements:

```javascript
const element = document.querySelector(".selector");
element.addEventListener("click", (event) => {
  // Handle event
});
```

## Common Modification Patterns

### Analytics, Search, and Galleries

1. Check the owning gem, `_config.yml` settings, and page front matter first.
2. Inspect the installed plugin's current implementation before changing behavior. A plugin update or existing option may provide the requested behavior.
3. Keep truly site-specific behavior in a small local asset or intentional wrapper override. Do not copy the full old `_includes/scripts.liquid`, search index, analytics setup, or PhotoSwipe runtime back into this repository.
4. Track any gem-owned path override in `.al-folio-overrides.yml`, and inspect upstream differences after a version update.
5. Rebuild and test the generated script in the browser, including feature-disabled behavior.

## Code Style Notes

- Format changed plain JavaScript with the project's Prettier configuration.
- Follow existing formatting for mixed Liquid/JavaScript and respect the configured ignore rules.
- Format changed Liquid wrappers with the Liquid formatter; verify that their generated JavaScript remains valid.
- Do not format the whole repository for a narrow script change.

## Validation & Testing

### Local Build Test

```bash
docker compose up
# Wait 30 seconds for Jekyll to build
# Check for errors in terminal output
# Visit http://localhost:8080 and verify functionality
```

### Checking Generated Output

After `docker compose up`, inspect generated scripts inside the preview container (the output directory is `/tmp/_site`, not the host `_site`):

```bash
docker compose exec jekyll ls /tmp/_site/assets/js/
# Inspect the relevant enabled feature asset and check for unprocessed Liquid.
```

### Debugging Script Issues

**Script not loading:**

- Check browser DevTools Console for HTTP 404 errors
- Verify `permalink:` frontmatter matches script inclusion paths
- Check that the owning feature is enabled and its generated script exists under the configured build destination

**Liquid syntax errors:**

- Jekyll build will fail with "Liquid Exception" messages
- Check file for unclosed `{% %}` or `{{ }}` tags
- Ensure Liquid filters exist (`| relative_url`, `| slugify`, etc.)

**JavaScript errors:**

- Check browser console for runtime errors
- Verify all imported libraries are defined in `site.third_party_libraries` in `_config.yml`
- Test in both Chrome and Firefox for compatibility

## Trust These Instructions

When modifying JavaScript scripts:

- `.liquid.js` files must have valid Liquid syntax AND valid JavaScript that remains valid after Jekyll processes the Liquid
- Respect `.prettierignore` for mixed Liquid/JavaScript, and validate the generated output
- Test locally with `docker compose up` to verify build succeeds and scripts work
- Standard site-wide script loading is gem-owned; prefer configuration or a focused intentional wrapper override
- For configuration (feature flags, third-party URLs), see yaml-configuration.instructions.md
- Reference the installed owning gem and retained site scripts; the absence of `_scripts/` is expected
- Consult the owning plugin documentation when behavior or ownership is unclear
