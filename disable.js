window.addEventListener('keydown', (e) => {
  const FOCUS_CLASS = 'is-fakeFocus';
  'use strict';

  if (window.location.href.indexOf('/status/') !== -1 && // status画面であり
    document.getElementsByClassName(FOCUS_CLASS).length === 0) { // フォーカスがあたっていないとき
    e.stopImmediatePropagation();
    return false;
  }
}, {capture:true, passive:false});
