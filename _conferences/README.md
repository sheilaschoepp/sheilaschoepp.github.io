# Conference files

Each conference has one Markdown file. Its details are stored between the `---`
lines at the top, following [Pulkit Verma's conference files](https://github.com/pulkitverma25/pulkitverma25.github.io/tree/master/_conferences).
The page reads these files through Jekyll's built-in collection system. This
README has no front matter and is not a conference entry.

Edit a file to change a conference, duplicate one to add a conference, or remove
one to remove it. Keep one file per conference series. Update `shortname`,
`name`, `website`, location, dates, tags, and tracks when adding an entry.
`num` sets the initial order; visitors can also use the page's sort control.

## Sources and updates

Use official conference announcements and calls for papers. Each entry records
its official `sources` and the date it was checked in `verified_on`.
The page displays the dates in these Markdown files. It does not fetch an
external conference feed or rewrite the files when someone visits.

When checking for updates, distinguish the conference year from the year of its
submission deadline. Do not advance last year's dates to estimate a new edition.
If a future edition has not been announced, keep the latest confirmed edition.
If an announced edition has unpublished details, show those as `TBD`.

## Dates and deadlines

Keep `start_date` quoted, for example `"2027-06-27"`; use `""` if it is unknown.
The `dates` field can describe a partial announcement, such as a month without
exact days. A deadline's `date` supplies the countdown and must include the
official cutoff time and timezone offset. Use `date: null` if either is unknown.
Its `display` field can still show a confirmed calendar date, with a track
`note` explaining that the exact cutoff is unconfirmed. Use `display: TBD` when
the calendar date itself is unannounced.

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
