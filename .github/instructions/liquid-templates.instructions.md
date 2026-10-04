---
applyTo: "**/*.liquid"
---

# Liquid Templates Instructions

## Liquid Template Basics

This personal site uses the al-folio v1 gem runtime. Most standard Liquid templates live in `al_folio_core` or a feature gem; the local `_includes/` and `_layouts/` contain intentional site customizations. Do not restore old template directories. Read `docs/MIGRATION.md` and the override inventory before adding a local copy of a gem file. When modifying `.liquid` files:

### Key Directories

- `_includes/` – Reusable template components (imported with `{% include %}`)
- `_layouts/` – Page layout templates (specified in frontmatter with `layout: name`)

### Common Liquid Tags in al-folio

- `{% include filename.liquid %}` – Includes template component
- `{% for item in collection %}...{% endfor %}` – Loops
- `{% if condition %}...{% endif %}` – Conditionals
- `{{ variable }}` – Output variable
- `{% assign var = value %}` – Assign variable
- `{% capture %}...{% endcapture %}` – Capture output to variable
- `| date: format` – Date filtering
- `| where: "key", "value"` – Collection filtering

### Standard Gem-Owned Liquid Components

These paths refer to templates inside the installed runtime, not files that must exist locally. Distill rendering is owned by `al_folio_distill`; do not recreate the old `distill_scripts.liquid` include.

- `_includes/citation.liquid` – Bibliography entry rendering
- `_includes/footer.liquid` – Site footer
- `_includes/head.liquid` – Page <head> section
- `_includes/header.liquid` – Site header/navigation
- `_includes/projects.liquid` – Project display
- `_includes/scripts.liquid` – Global scripts
- `_includes/selected_papers.liquid` – Featured publications display

### Prettier Formatting for Liquid

Prettier with `@shopify/prettier-plugin-liquid` enforces formatting:

- Single quotes around strings in Liquid tags
- Consistent spacing
- Indentation with 2 spaces
- Format only changed files with `npx prettier --write <files>` before committing

## Common Modification Patterns

### Modifying Site Header/Navigation

- Edit navigation front matter in `_pages/` (including `nav`, `nav_order`, and dropdown `children`). The current dropdown is `_pages/dropdown.md`, titled “beyond research”.
- The standard header is gem-owned. Create a local header override only when a requested behavior cannot be configured through page front matter; review and track it in `.al-folio-overrides.yml`.
- Test by viewing site in browser: `docker compose up` → http://localhost:8080

### Adding a New Component Include

1. Create new file in `_includes/mycomponent.liquid`
2. Use Liquid syntax for conditionals, loops, and variable output
3. Call it from templates: `{% include mycomponent.liquid %}`
4. Test: `docker compose up`

### Adjusting Styling with Liquid

- Some SCSS variables can be controlled via Liquid logic
- Avoid mixing complex Liquid with CSS; keep templates focused

## Validation Before Committing

**Always run these checks:**

1. **Prettier format check:**

   ```bash
   npx prettier _includes/ _layouts/ --check
   npx prettier --write <changed-files>  # Fix only affected files
   ```

2. **Build test:**

   ```bash
   docker compose down
   docker compose up
   # Wait 30 seconds, check for errors in output
   # No "Unknown tag" messages should appear
   ```

3. **Visual verification:**
   - Open http://localhost:8080
   - Check that your changes rendered correctly
   - Verify no broken layout or missing content

## Trust These Instructions

When working with Liquid templates:

- Use the local custom templates or the installed gem templates as syntax references; an absent local standard template is expected in v1
- Follow existing formatting in files (Prettier will enforce consistency)
- Always test locally before pushing (build must succeed)
- For configuration changes, see yaml-configuration.instructions.md
- Only search for additional details if error messages reference unfamiliar Liquid tags or Jekyll concepts
