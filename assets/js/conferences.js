// Card interactions adapted from Pulkit Verma's MIT-licensed al-folio site:
// https://github.com/pulkitverma25/pulkitverma25.github.io/blob/master/assets/js/conferences.js
// Copyright (c) 2022 Maruan Al-Shedivat. Permission notice in LICENSE.

const DAY = 86400000;
const URGENT = 7 * DAY;

export function formatCountdown(ms) {
  if (ms <= 0) return "Closed";
  const minutes = Math.floor(ms / 60000);
  const days = Math.floor(minutes / 1440);
  const hours = Math.floor((minutes % 1440) / 60);
  if (days) return `${days}d ${hours}h left`;
  if (hours) return `${hours}h ${minutes % 60}m left`;
  return `${minutes % 60}m left`;
}

function allPassed(rows, now) {
  return rows.length > 0 && rows.every((row) => row.dataset.deadline && Date.parse(row.dataset.deadline) <= now);
}

function updateCard(card, now) {
  const submissions = [...card.querySelectorAll('.conf-deadline-row[data-kind="submission"]')];
  let next = Infinity;
  for (const row of card.querySelectorAll(".conf-deadline-row")) {
    const time = Date.parse(row.dataset.deadline);
    const diff = time - now;
    row.classList.toggle("is-passed", diff <= 0);
    const countdown = row.querySelector('[data-role="countdown"]');
    if (countdown) {
      countdown.textContent = Number.isFinite(time) ? formatCountdown(diff) : "";
      countdown.classList.toggle("is-urgent", diff > 0 && diff <= URGENT);
      countdown.classList.toggle("is-open", diff > URGENT);
    }
    if (row.dataset.kind === "submission" && diff > 0) next = Math.min(next, time);
  }
  for (const track of card.querySelectorAll(".conf-track")) {
    const submissionRows = [...track.querySelectorAll('[data-kind="submission"]')];
    const decisionRows = [...track.querySelectorAll('[data-kind="decision"]')];
    const closed = allPassed(submissionRows, now);
    const decided = closed && allPassed(decisionRows, now);
    submissionRows.forEach((row) => {
      row.hidden = closed;
    });
    decisionRows.forEach((row) => {
      row.hidden = decided;
    });
    track.querySelector('[data-role="submission-closed"]').hidden = !closed || decided;
    track.querySelector('[data-role="notifications-sent"]').hidden = !decided;
  }
  card.dataset.sortKey = String(next);
  const badge = card.querySelector('[data-role="status"]');
  badge.classList.remove("status-open", "status-urgent", "status-closed");
  const urgent = next - now <= URGENT;
  badge.textContent = next !== Infinity ? (urgent ? "Closing soon" : "Upcoming") : allPassed(submissions, now) ? "Closed" : "Details pending";
  badge.classList.add(next !== Infinity ? (urgent ? "status-urgent" : "status-open") : "status-closed");
}

function init() {
  const grid = document.getElementById("conf-grid");
  if (!grid) return;
  const search = document.getElementById("conf-search");
  const sort = document.getElementById("conf-sort");
  const empty = document.getElementById("conf-empty-state");
  const activeTags = new Set();

  function refresh() {
    const cards = [...grid.querySelectorAll(".conf-card")];
    const now = Date.now();
    cards.forEach((card) => updateCard(card, now));
    const query = search.value.trim().toLowerCase();
    let count = 0;
    cards.forEach((card) => {
      const show = card.dataset.search.includes(query) && (!activeTags.size || card.dataset.tags.split(",").some((tag) => activeTags.has(tag)));
      card.classList.toggle("is-filtered-out", !show);
      if (show) count++;
    });
    cards.sort((a, b) => {
      if (sort.value === "name") return a.dataset.name.localeCompare(b.dataset.name);
      const key = (card) => (sort.value === "confdate" ? Date.parse(card.dataset.start) || Infinity : Number(card.dataset.sortKey));
      return key(a) - key(b) || a.dataset.name.localeCompare(b.dataset.name);
    });
    cards.forEach((card) => grid.append(card));
    empty.hidden = count !== 0;
  }

  search.addEventListener("input", refresh);
  sort.addEventListener("change", refresh);
  document.querySelectorAll(".conf-tag-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.dataset.tag;
      if (activeTags.has(tag)) activeTags.delete(tag);
      else activeTags.add(tag);
      button.classList.toggle("is-active", activeTags.has(tag));
      button.setAttribute("aria-pressed", String(activeTags.has(tag)));
      refresh();
    });
  });

  refresh();
  setInterval(refresh, 60000);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}
