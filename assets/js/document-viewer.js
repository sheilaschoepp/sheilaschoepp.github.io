const dialog = document.querySelector("#document-viewer-dialog");

if (dialog && typeof dialog.showModal === "function") {
  const title = dialog.querySelector("#document-viewer-title");
  const label = dialog.querySelector(".document-viewer-label");
  const frame = dialog.querySelector(".document-viewer-frame");
  const closeButton = dialog.querySelector(".document-viewer-close");
  const externalLink = dialog.querySelector("[data-document-external]");
  let trigger = null;

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-document-viewer]");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    trigger = link;
    const documentLabel = link.dataset.documentLabel || "Document";
    label.textContent = documentLabel;
    title.textContent = link.dataset.documentTitle || documentLabel;
    frame.title = `${documentLabel}: ${title.textContent}`;
    closeButton.setAttribute("aria-label", `Close ${documentLabel.toLowerCase()}`);
    frame.src = link.href;
    externalLink.href = link.href;
    dialog.showModal();
    document.body.classList.add("document-viewer-open");
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
    document.body.classList.remove("document-viewer-open");
    if (trigger?.isConnected) trigger.focus();
    trigger = null;
  });
}
