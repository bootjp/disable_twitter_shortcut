(function (window) {
  "use strict";
  window.addEventListener(
    "keypress",
    (e) => {
      if (!e.target.classList.contains("public-DraftEditor-content")) {
          e.stopImmediatePropagation();
          return false;
      }
    },
    { capture: true, passive: false }
  );
})(window);
