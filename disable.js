// Because I am troublesome I overwrite for the time being.
// Then use getEventListeners and push first
window.onkeydown = (e) => {
  const FOCUS_CLASS = 'is-fakeFocus';
  'use strict';

  if (window.location.href.indexOf('/status/') !== -1 && // status画面であり
    document.getElementsByClassName(FOCUS_CLASS).length === 0) { // フォーカスがあたっていないとき
    e.stopImmediatePropagation();
    return false;
  }
};
