function normalizeSearch(value) {
  return (value || "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().trim();
}

function parseMetric(value) {
  if (!value?.trim()) return null;
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : null;
}

function init() {
  const root = document.getElementById("journal-browser");
  if (!root) return;
  const toolbar = root.querySelector(".conf-toolbar");
  const grid = root.querySelector("#journal-grid");
  const search = root.querySelector("#conf-search");
  const sort = root.querySelector("#conf-sort");
  const empty = root.querySelector("#journal-empty-state");
  if (!toolbar || !grid || !search || !sort || !empty) return;

  sort.value = "name";

  const cards = [...grid.querySelectorAll(".conf-card")].map((element) => ({
    element,
    name: element.dataset.name || "",
    publisher: element.dataset.publisher || "",
    access: element.dataset.access || "unknown",
    search: normalizeSearch(element.dataset.search),
    impact: parseMetric(element.dataset.impactFactor),
    citescore: parseMetric(element.dataset.citescore),
  }));
  const activeAccess = new Set();
  const collator = new Intl.Collator("en", { sensitivity: "base" });
  const byName = (a, b) => collator.compare(a.name, b.name);

  function compare(a, b) {
    if (sort.value === "publisher") return collator.compare(a.publisher, b.publisher) || byName(a, b);
    if (sort.value === "impact" || sort.value === "citescore") {
      const aValue = a[sort.value];
      const bValue = b[sort.value];
      if (aValue === null && bValue === null) return byName(a, b);
      if (aValue === null) return 1;
      if (bValue === null) return -1;
      return bValue - aValue || byName(a, b);
    }
    return byName(a, b);
  }

  function refresh() {
    const tokens = normalizeSearch(search.value).split(/\s+/).filter(Boolean);
    let count = 0;
    cards.sort(compare).forEach((card) => {
      const matches = tokens.every((token) => card.search.includes(token)) && (!activeAccess.size || activeAccess.has(card.access));
      card.element.hidden = !matches;
      if (matches) count++;
      grid.append(card.element);
    });
    empty.hidden = count > 0;
  }

  search.addEventListener("input", refresh);
  sort.addEventListener("change", refresh);
  root.querySelectorAll(".conf-tag-btn[data-access]").forEach((button) => {
    button.classList.remove("is-active");
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      const access = button.dataset.access;
      if (activeAccess.has(access)) activeAccess.delete(access);
      else activeAccess.add(access);
      button.classList.toggle("is-active", activeAccess.has(access));
      button.setAttribute("aria-pressed", String(activeAccess.has(access)));
      refresh();
    });
  });

  refresh();
  toolbar.hidden = false;
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
