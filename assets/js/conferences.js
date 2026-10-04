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

function publishedDay(row) {
  const day = row.dataset.sortDate || row.dataset.deadline?.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day || "")) return Infinity;
  const [year, month, date] = day.split("-").map(Number);
  const dayStart = new Date(Date.UTC(year, month - 1, date));
  if (dayStart.getUTCFullYear() !== year || dayStart.getUTCMonth() !== month - 1 || dayStart.getUTCDate() !== date) return Infinity;
  return dayStart.getTime();
}

function aoeDayKey(now) {
  const aoeToday = new Date(now - DAY / 2);
  return Date.UTC(aoeToday.getUTCFullYear(), aoeToday.getUTCMonth(), aoeToday.getUTCDate());
}

function calendarDaysRemaining(row, now) {
  if (!row || row.dataset.previousEdition || row.dataset.deadline) return NaN;
  const day = publishedDay(row);
  return Number.isFinite(day) ? (day - aoeDayKey(now)) / DAY : NaN;
}

function formatCalendarCountdown(days) {
  if (!Number.isFinite(days) || days < 0) return "";
  if (days === 0) return "Due today";
  return `${days} day${days === 1 ? "" : "s"} left`;
}

function deadlineState(row, now) {
  if (!row || row.dataset.previousEdition) return "unknown";
  if (row.dataset.deadline) {
    const cutoff = Date.parse(row.dataset.deadline);
    if (!Number.isFinite(cutoff)) return "unknown";
    return cutoff > now ? "upcoming" : "passed";
  }

  const days = calendarDaysRemaining(row, now);
  if (!Number.isFinite(days)) return "unknown";
  // Without a confirmed cutoff, a date is past only once it has ended everywhere.
  return days >= 0 ? "upcoming" : "passed";
}

function deadlineIsUrgent(row, now) {
  if (deadlineState(row, now) !== "upcoming") return false;
  const cutoff = Date.parse(row.dataset.deadline);
  return Number.isFinite(cutoff) ? cutoff - now <= URGENT : calendarDaysRemaining(row, now) <= URGENT / DAY;
}

function deadlineSortKey(row, now) {
  // Sort by the published calendar day so equal dates tie alphabetically.
  return deadlineState(row, now) === "upcoming" ? publishedDay(row) : Infinity;
}

function updateCard(card, now) {
  const submissions = [...card.querySelectorAll('.conf-deadline-row[data-kind="submission"]')].filter((row) => !row.dataset.previousEdition);
  for (const row of card.querySelectorAll(".conf-deadline-row")) {
    const time = row.dataset.previousEdition ? NaN : Date.parse(row.dataset.deadline);
    const diff = time - now;
    const state = deadlineState(row, now);
    row.classList.toggle("is-passed", state === "passed");
    const countdown = row.querySelector('[data-role="countdown"]');
    if (countdown) {
      const days = calendarDaysRemaining(row, now);
      countdown.textContent = state !== "upcoming" ? "" : Number.isFinite(time) ? formatCountdown(diff) : formatCalendarCountdown(days);
      const urgent = deadlineIsUrgent(row, now);
      countdown.classList.toggle("is-urgent", urgent);
      countdown.classList.toggle("is-open", state === "upcoming" && !urgent);
    }
  }
  card.dataset.sortKey = String(Math.min(...submissions.map((row) => deadlineSortKey(row, now))));
  const states = submissions.map((row) => deadlineState(row, now));
  const upcoming = states.includes("upcoming");
  const closed = states.length > 0 && states.every((state) => state === "passed");
  const badge = card.querySelector('[data-role="status"]');
  badge.classList.remove("status-open", "status-urgent", "status-closed");
  const urgent = submissions.some((row) => deadlineIsUrgent(row, now));
  badge.textContent = upcoming ? (urgent ? "Closing soon" : "Upcoming") : closed ? "Closed" : "Details pending";
  badge.classList.add(upcoming ? (urgent ? "status-urgent" : "status-open") : "status-closed");
}

function alignCardHeaders(grid) {
  const headers = [...grid.querySelectorAll(".conf-card:not(.is-filtered-out) .conf-card-header-content")];
  if (!headers.length) {
    grid.style.removeProperty("--conf-header-height");
    return;
  }
  const height = `${Math.ceil(Math.max(...headers.map((header) => header.getBoundingClientRect().height)))}px`;
  if (grid.style.getPropertyValue("--conf-header-height") !== height) grid.style.setProperty("--conf-header-height", height);
}

function init() {
  const grid = document.getElementById("conf-grid");
  if (!grid) return;
  const search = document.getElementById("conf-search");
  const sort = document.getElementById("conf-sort");
  sort.value = "deadline";
  const empty = document.getElementById("conf-empty-state");
  const activeTags = new Set();
  let headerFrame = null;

  function scheduleHeaderAlignment() {
    if (headerFrame !== null) return;
    headerFrame = requestAnimationFrame(() => {
      headerFrame = null;
      alignCardHeaders(grid);
    });
  }

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
    scheduleHeaderAlignment();
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

  if (typeof ResizeObserver !== "undefined") {
    let gridWidth;
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width === gridWidth) return;
      gridWidth = entry.contentRect.width;
      scheduleHeaderAlignment();
    });
    observer.observe(grid);
  }
  window.addEventListener("resize", scheduleHeaderAlignment);
  if (document.fonts) document.fonts.ready.then(scheduleHeaderAlignment);

  refresh();
  setInterval(refresh, 60000);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}
