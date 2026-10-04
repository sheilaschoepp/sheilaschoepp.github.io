const dialog = document.querySelector("#talk-slides-dialog");

if (dialog && typeof dialog.showModal === "function") {
  const title = dialog.querySelector("#talk-slides-title");
  const frame = dialog.querySelector(".talk-slides-frame");
  const closeButton = dialog.querySelector(".talk-slides-close");
  const externalLink = dialog.querySelector("[data-slides-external]");
  let trigger = null;

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-slides-viewer]");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    trigger = link;
    title.textContent = link.dataset.slidesTitle || "Slides";
    frame.title = `Slides: ${title.textContent}`;
    frame.src = link.href;
    externalLink.href = link.href;
    dialog.showModal();
    document.body.classList.add("talk-slides-open");
    closeButton.focus();
  });

  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    frame.src = "about:blank";
    externalLink.removeAttribute("href");
    document.body.classList.remove("talk-slides-open");
    if (trigger?.isConnected) trigger.focus();
    trigger = null;
  });
}
