(function (window) {
  'use strict';
  window.addEventListener('keypress', (e) => {
    // 個別tweet画面であり，文字入力中でないときにイベントをキャンセルする
    if (window.location.href.includes('/status/') && NotFocusInput()) {
      e.stopImmediatePropagation();
      return false;
    }

  }, {capture: true, passive: false});
  /**
   * @return {boolean}
   */
  function NotFocusInput() {
    const FOCUS_CLASS = 'public-DraftStyleDefault-block';
    return document.getElementsByClassName(FOCUS_CLASS).length === 0;
  }

})(window);
