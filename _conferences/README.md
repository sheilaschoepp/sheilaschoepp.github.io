# Conference files

Each conference has one Markdown file. Its details are stored between the `---`
lines at the top, following [Pulkit Verma's conference files](https://github.com/pulkitverma25/pulkitverma25.github.io/tree/master/_conferences).
The page reads these files through Jekyll's built-in collection system. This
README has no front matter and is not a conference entry.

Edit a file to change a conference, duplicate one to add a conference, or remove
one to remove it. Keep one file per conference series. Update `shortname`,
`name`, `website`, location, dates, tags, and tracks when adding an entry.
The page defaults to the next submission deadline, with alphabetical ties and
an alphabetical fallback before JavaScript runs. The legacy `num` field is not
used for ordering. Visitors can also choose another sort order.

## Sources and updates

Use official conference announcements and calls for papers. Each entry records
its official `sources` and the date it was checked in `verified_on`.
The page displays the dates in these Markdown files. It does not fetch an
external conference feed or rewrite the files when someone visits.

When checking for updates, distinguish the conference year from the year of its
submission deadline. Do not advance last year's dates to estimate a new edition.
If a future edition has not been announced, keep the latest confirmed edition.
For an announced edition with an unpublished deadline, use the previous
edition's published date as a clearly labeled reference when available. Keep
its actual year and set `previous_edition` to the conference edition it belongs
to. If neither edition has a published date, show `N/A`.

## Dates and deadlines

Keep `start_date` quoted, for example `"2027-06-27"`; use `""` if it is unknown.
The `dates` field can describe a partial announcement, such as a month without
exact days. A deadline's `date` supplies a precise countdown and must include the
official cutoff time and timezone offset. Use `date: null` if either is unknown.
Its `display` field can still show a confirmed calendar date, which is used for
sorting, status, and a whole-day countdown. Without a confirmed cutoff, show
days remaining or `Due today`, using the AoE calendar day; do not invent hours
or minutes. The date stays upcoming until that day has ended everywhere.
Do not add explanatory notes about missing cutoff times. Show a decision date
directly, or `display: N/A` if unavailable.

Keep the main paper track first and name it `Main track` consistently. The
badge considers submission deadlines across all current tracks: any upcoming
deadline keeps the card open, with `Closing soon` for a deadline within seven
days. Show `Closed` only when all current submission deadlines have passed.
Unresolved deadlines with none upcoming show `Details pending`. Decisions and
previous-edition reference dates do not determine the badge.

Keep the cards compact: list the main paper deadlines and decisions, plus a
small selection of important paper tracks, such as AAMAS's AAAI Fast Track.
Omit exhaustive program categories and explanatory commentary. Use a specific
official call for every linked track.

For historical references, set `date: null`, keep the actual old date in
`display`, and add `previous_edition: 2026` (using the relevant edition year).
These dates remain visible with an edition label but do not affect upcoming
deadline sorting, countdowns, or the current edition's status. A track's
optional `source` links its title to the official call or dates page.

Use `decision: true` for author notifications, and name submission tracks or
rounds accurately. Do not treat an ARR commitment deadline as a new submission
deadline. `timezone` records the announced deadline timezone; use
`Unconfirmed` when the official source does not state one.

`tags` controls the research-area filters. The starting labels include `AP`
(automated planning), `HCI` (human-computer interaction), `KR` (knowledge
representation), `ML` (machine learning), `RO` (robotics), `RL` (reinforcement
learning), `NLP` (natural language processing), and `CV` (computer vision).

## Attribution

The card presentation is adapted from Pulkit Verma's MIT-licensed repository,
Copyright (c) 2022 Maruan Al-Shedivat. The permission and warranty notice is in
[LICENSE](../LICENSE). Conference facts are checked against the official sources
listed in each file.
