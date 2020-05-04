/**
 * Created by Jehu
 */
(function(doc, win) {
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function() {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      var size = 0;
      if (window.orientation === 180 || window.orientation === 0) {   
          size = 750;
        }   
        if (window.orientation === 90 || window.orientation === -90 ){   
          size = 1334;
        };
      docEl.style.fontSize = 100.00 * (clientWidth / size) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)