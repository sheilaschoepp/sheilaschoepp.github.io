# Agent Guidelines for al-folio

This is Sheila Schoepp’s personal site, using the al-folio v1 plugin architecture. It is not the upstream starter repository. Read the site-specific guidance below before editing theme files.

## Quick Links by Role

- **Are you a coding agent?** → Read [`.github/copilot-instructions.md`](.github/copilot-instructions.md) first (tech stack, build, CI/CD, common pitfalls & solutions)
- **Customizing the site?** → See [`.github/agents/customize.agent.md`](.github/agents/customize.agent.md)
- **Writing documentation?** → See [`.github/agents/docs.agent.md`](.github/agents/docs.agent.md)
- **Need setup/deployment help?** → [INSTALL.md](INSTALL.md)
- **Upgrading the theme?** → [MIGRATION.md](MIGRATION.md) (runtime ownership, preserved customizations, and audits)
- **Troubleshooting & FAQ?** → [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Customization & theming?** → [CUSTOMIZE.md](CUSTOMIZE.md)
- **Quick 5-min start?** → [QUICKSTART.md](QUICKSTART.md)

## Theme Ownership

- `Gemfile` pins the `al_folio_core` theme and the feature plugins; `_config.yml` activates them. Update both when adding or removing a plugin.
- Keep `theme: al_folio_core` and the `al_folio` configuration contract. Standard templates, scripts, and styles now come from gems.
- Local templates and styles are supported in this personal site. Preserve intentional overrides; do not reintroduce entire copies of the old theme runtime.
- Track reviewed overrides in `.al-folio-overrides.yml`. Review upstream differences after a gem update before accepting a new baseline.
- Bootstrap compatibility is intentionally enabled for legacy content. It is supported through v1.2; migrate that content before a future upgrade that removes compatibility.
- The upstream starter's prohibition on local `_includes`, `_layouts`, or `_sass` does **not** apply to this personal site.

## Essential Commands

### Local Development (Docker)

```bash
# Initial setup & start dev server
docker compose pull && docker compose up
# Site runs at http://localhost:8080

# Rebuild with updated dependencies
docker compose up --build

# Stop containers
docker compose down
```

### Before Committing

1. Check `git status` and review the diff, including any pre-existing changes.
2. Install the existing formatting dependencies with `npm ci`, then format only changed files with `npx prettier --write <files>`.
3. Run the production build and upgrade checks from [INSTALL.md](INSTALL.md#upgrade-and-production-checks).
4. Inspect the homepage, publications, conferences, “beyond research” dropdown, and light/dark mode at `http://localhost:8080`. Travels stays hidden from navigation unless requested otherwise.
5. Stage only the files or hunks belonging to the task and commit with a clear message.

## Critical Configuration

When modifying `_config.yml`, these **must be updated together**:

- **This personal site:** `url: https://sheilaschoepp.github.io` + `baseurl:` (empty). Do not copy the upstream demo’s `/al-folio` baseurl.
- **Project site:** `url: https://username.github.io` + `baseurl: /repo-name/`
- **YAML errors:** Quote strings with special characters: `title: "My: Cool Site"`

## Common Issues

For troubleshooting common build, deployment, and configuration issues, see:

- [Common Pitfalls & Workarounds](.github/copilot-instructions.md#common-pitfalls--workarounds) in copilot-instructions.md
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions
- [GitHub Issues](https://github.com/alshedivat/al-folio/issues) to search for your specific problem

## Commit Format

```
<type>: <subject>

<body (optional)>
```

**Types:** `feat` (feature), `fix` (bug), `docs` (docs), `style` (formatting), `config` (configuration), `chore` (maintenance)

**Examples:**

```
feat: Add dark mode toggle button to header
fix: Correct baseurl in project site configuration
docs: Update INSTALL.md with Docker troubleshooting
style: Format all Liquid templates with Prettier
config: Enable blog section in _config.yml
chore: Update Jekyll dependencies with bundle update --all
```

**Always git add explicitly** – Do not stage everything with `git add .` unless you're certain of what's being committed. Check `git status` first.

## Code-Specific Instructions

Always consult the relevant instruction file for your code type:

| File Type                                     | Instruction File                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Markdown content (`_posts/`, `_pages/`, etc.) | [markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)       |
| YAML config (`_config.yml`, `_data/`)         | [yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md)   |
| BibTeX (`_bibliography/`)                     | [bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) |
| Liquid templates (`_includes/`, `_layouts/`)  | [liquid-templates.instructions.md](.github/instructions/liquid-templates.instructions.md)       |
| JavaScript (`assets/`, Liquid scripts)        | [javascript-scripts.instructions.md](.github/instructions/javascript-scripts.instructions.md)   |

## Instruction Sources

Read these instruction files when they apply; do not assume their contents have been loaded:

- [`.github/copilot-instructions.md`](.github/copilot-instructions.md) – Primary technical reference
- [`.github/instructions/*.md`](.github/instructions/) – Code-specific instruction files (read when editing relevant file types)

Other files need to be accessed explicitly.

## What NOT to Commit

**Always obey [`.gitignore`](.gitignore).** It prevents accidental commits of:

- Build outputs (`_site/`, `.jekyll-cache/`, etc.)
- Dependencies (`node_modules/`, `vendor/`). `Gemfile.lock` is excluded by `.gitignore`; the migration removes its historical tracked copy while preserving local dependency resolution. Exact al-folio plugin pins belong in `Gemfile`. Do not force-add an ignored lock file.
- OS files (`.DS_store`)
- Editor temp files (`.idea/`, `.swp`, `.swo`)
- Secrets and API keys (never commit credentials)

If you create new files, ensure they follow the patterns in `.gitignore`.
