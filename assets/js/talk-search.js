const form = document.querySelector("#talk-search");
const input = document.querySelector("#talk-search-input");
const status = document.querySelector("#talk-search-status");
const emptyState = document.querySelector("#talk-search-empty");
const list = document.querySelector("#talk-groups");

if (form && input && status && emptyState && list) {
  const normalize = (text) =>
    text
      .normalize("NFKD")
      .replace(/\p{M}/gu, "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();

  const groups = Array.from(list.querySelectorAll(".talk-group"), (element) => {
    const count = element.querySelector(".talk-group-count");
    return {
      element,
      count,
      originalCount: count.textContent,
      talks: Array.from(element.querySelectorAll(".talk-appearance"), (talk) => ({
        element: talk,
        search: normalize(talk.dataset.talkSearch || talk.textContent),
      })),
    };
  });

  function filterTalks() {
    const query = input.value.trim();
    const tokens = normalize(query).split(/\s+/).filter(Boolean);
    let matchingTalks = 0;
    let matchingTopics = 0;

    for (const group of groups) {
      let matches = 0;
      for (const talk of group.talks) {
        const visible = tokens.every((token) => talk.search.includes(token));
        talk.element.hidden = !visible;
        if (visible) matches++;
      }

      group.element.hidden = matches === 0;
      group.count.textContent = matches === group.talks.length ? group.originalCount : `${matches} of ${group.talks.length} talks shown`;
      matchingTalks += matches;
      if (matches) matchingTopics++;
    }

    emptyState.hidden = matchingTalks > 0;
    status.textContent = query
      ? `${matchingTalks} ${matchingTalks === 1 ? "talk" : "talks"} in ${matchingTopics} ${matchingTopics === 1 ? "topic" : "topics"}.`
      : "";
  }

  function clearSearch() {
    input.value = "";
    filterTalks();
    input.focus();
  }

  input.addEventListener("input", filterTalks);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && input.value) {
      event.preventDefault();
      clearSearch();
    }
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    filterTalks();
  });

  filterTalks();
  form.hidden = false;
}
