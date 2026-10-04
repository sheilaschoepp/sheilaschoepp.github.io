function initTalkThumbnails() {
  if (typeof window.mediumZoom !== "function") return;

  const zoom = window.mediumZoom("[data-talk-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color").trim() + "ee",
  });

  zoom.on("open", () => {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    // The publication survey preview opens at its natural width of 790px.
    // Match that limit while keeping the original talk images at full resolution.
    const sideInset = Math.max(0, (viewportWidth - 790) / 2);

    zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color").trim() + "ee",
      // medium-zoom subtracts these insets from the viewport, then centers there.
      // Recompute on every open so the same limit also fits narrow windows.
      container: {
        width: viewportWidth,
        height: viewportHeight,
        left: sideInset,
        right: sideInset,
        top: 0,
        bottom: 0,
      },
    });
  });
}

// Wait for the theme's deferred medium-zoom library before attaching thumbnails.
if (document.readyState === "complete") {
  initTalkThumbnails();
} else {
  document.addEventListener("DOMContentLoaded", initTalkThumbnails, { once: true });
}
