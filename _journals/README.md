# Journals

Each Markdown file supplies one entry on `/journals/`. The list of 18 journals
came from the supplied Notion export; its two CSV views contained the same
journals. The original export remains unchanged outside the repository.

The entries have been checked against official journal or publisher sources.
The page uses short, original scope summaries rather than reproducing publishers'
descriptions. Statistics are limited to Impact Factor and CiteScore. Readers can
follow each journal's website link for submission timelines, fees, acceptance
rates, rankings, and other publication details.

## Editing an entry

Edit the fields between the `---` lines and the short summary below them. Copy
an entry to a unique filename to add a journal, or remove its file to remove it.
This README has no front matter and is not a journal entry.

- `title` and `website` identify the journal and its official website.
- `publisher`, `access`, and `topics` are optional, verified publication details.
  Omit unknown access policies; a freely readable article does not establish the
  access model for the whole journal.
- `verified_on` is the date the retained facts were checked. `source_updated`,
  when present, records the original Notion notes' date, not a verification date.
- `metrics` contains only Impact Factor and CiteScore supported by official sources. Keep
  values quoted and label each figure with the year stated by its source. If
  only a Journal Citation Reports release year is known, label it as a release
  year rather than inferring a measurement year. An empty mapping is valid.
- `sources` lists human-readable labels and official URLs supporting the entry.

Topics appear on the journal cards. Sources and verification dates remain in the
entry files as editorial records for future checks; they are not displayed.

Keep summaries concise and write them independently. Do not copy a publisher's
scope paragraph, promotional language, or long subject list. When a source is
unavailable or a metric's year cannot be confirmed, omit that claim rather than
carrying an older value forward as current.

The page can search titles, topics, publishers, and summaries without regard to
case or accents. Every search term must match. Access filters can be combined;
with none selected, all access types are included. Journals can be sorted by
title, publisher, impact factor, or CiteScore, with missing metric values placed last.
Metric years may differ between journals; check the displayed labels when
comparing figures.

The listing uses Jekyll's built-in collection system with `output: false` and
the standard al-folio page layout. It reuses the conference card styles and uses
the small local `assets/js/journals.js` script for filtering and sorting. All
cards remain readable without JavaScript; there are no separate journal pages
or external data feeds.
