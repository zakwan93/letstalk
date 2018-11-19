!function(e) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = e(); else {
    if ("function" == typeof define && define.amd) return define([], e);
    (this || window).CodeMirror = e();
  }
}(function() {
  "use strict";
  function e(r, n) {
    if (!(this instanceof e)) return new e(r, n);
    this.options = n = n ? Ei(n) :{}, Ei(ea, n, !1), p(n);
    var i = n.value;
    "string" == typeof i && (i = new Ca(i, n.mode, null, n.lineSeparator)), this.doc = i;
    var o = new e.inputStyles[n.inputStyle](this), a = this.display = new t(r, i, o);
    a.wrapper.CodeMirror = this, c(this), l(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), 
    n.autofocus && !zo && a.input.focus(), v(this), this.state = {
      keyMaps:[],
      overlays:[],
      modeGen:0,
      overwrite:!1,
      delayingBlurEvent:!1,
      focused:!1,
      suppressEdits:!1,
      pasteIncoming:!1,
      cutIncoming:!1,
      selectingText:!1,
      draggingText:!1,
      highlight:new Ai(),
      keySeq:null,
      specialChars:null
    };
    var s = this;
    bo && xo < 11 && setTimeout(function() {
      s.display.input.reset(!0);
    }, 20), Bt(this), Xi(), xt(this), this.curOp.forceUpdate = !0, Zn(this, i), n.autofocus && !zo || s.hasFocus() ? setTimeout(Pi(gr, this), 20) :vr(this);
    for (var u in ta) ta.hasOwnProperty(u) && ta[u](this, n[u], ra);
    _(this), n.finishInit && n.finishInit(this);
    for (var d = 0; d < aa.length; ++d) aa[d](this);
    _t(this), wo && n.lineWrapping && "optimizelegibility" == getComputedStyle(a.lineDiv).textRendering && (a.lineDiv.style.textRendering = "auto");
  }
  function t(e, t, r) {
    var n = this;
    this.input = r, n.scrollbarFiller = Bi("div", null, "CodeMirror-scrollbar-filler"), 
    n.scrollbarFiller.setAttribute("cm-not-content", "true"), n.gutterFiller = Bi("div", null, "CodeMirror-gutter-filler"), 
    n.gutterFiller.setAttribute("cm-not-content", "true"), n.lineDiv = Bi("div", null, "CodeMirror-code"), 
    n.selectionDiv = Bi("div", null, null, "position: relative; z-index: 1"), n.cursorDiv = Bi("div", null, "CodeMirror-cursors"), 
    n.measure = Bi("div", null, "CodeMirror-measure"), n.lineMeasure = Bi("div", null, "CodeMirror-measure"), 
    n.lineSpace = Bi("div", [ n.measure, n.lineMeasure, n.selectionDiv, n.cursorDiv, n.lineDiv ], null, "position: relative; outline: none"), 
    n.mover = Bi("div", [ Bi("div", [ n.lineSpace ], "CodeMirror-lines") ], null, "position: relative"), 
    n.sizer = Bi("div", [ n.mover ], "CodeMirror-sizer"), n.sizerWidth = null, n.heightForcer = Bi("div", null, null, "position: absolute; height: " + qa + "px; width: 1px;"), 
    n.gutters = Bi("div", null, "CodeMirror-gutters"), n.lineGutter = null, n.scroller = Bi("div", [ n.sizer, n.heightForcer, n.gutters ], "CodeMirror-scroll"), 
    n.scroller.setAttribute("tabIndex", "-1"), n.wrapper = Bi("div", [ n.scrollbarFiller, n.gutterFiller, n.scroller ], "CodeMirror"), 
    bo && xo < 8 && (n.gutters.style.zIndex = -1, n.scroller.style.paddingRight = 0), 
    wo || go && zo || (n.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(n.wrapper) :e(n.wrapper)), 
    n.viewFrom = n.viewTo = t.first, n.reportedViewFrom = n.reportedViewTo = t.first, 
    n.view = [], n.renderedView = null, n.externalMeasured = null, n.viewOffset = 0, 
    n.lastWrapHeight = n.lastWrapWidth = 0, n.updateLineNumbers = null, n.nativeBarWidth = n.barHeight = n.barWidth = 0, 
    n.scrollbarsClipped = !1, n.lineNumWidth = n.lineNumInnerWidth = n.lineNumChars = null, 
    n.alignWidgets = !1, n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, 
    n.maxLine = null, n.maxLineLength = 0, n.maxLineChanged = !1, n.wheelDX = n.wheelDY = n.wheelStartX = n.wheelStartY = null, 
    n.shift = !1, n.selForContextMenu = null, n.activeTouch = null, r.init(n);
  }
  function r(t) {
    t.doc.mode = e.getMode(t.options, t.doc.modeOption), n(t);
  }
  function n(e) {
    e.doc.iter(function(e) {
      e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
    }), e.doc.frontier = e.doc.first, He(e, 100), e.state.modeGen++, e.curOp && qt(e);
  }
  function i(e) {
    e.options.lineWrapping ? (Qa(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", 
    e.display.sizerWidth = null) :(Ya(e.display.wrapper, "CodeMirror-wrap"), f(e)), 
    a(e), qt(e), lt(e), setTimeout(function() {
      y(e);
    }, 100);
  }
  function o(e) {
    var t = yt(e.display), r = e.options.lineWrapping, n = r && Math.max(5, e.display.scroller.clientWidth / bt(e.display) - 3);
    return function(i) {
      if (_n(e.doc, i)) return 0;
      var o = 0;
      if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
      return r ? o + (Math.ceil(i.text.length / n) || 1) * t :o + t;
    };
  }
  function a(e) {
    var t = e.doc, r = o(e);
    t.iter(function(e) {
      var t = r(e);
      t != e.height && ei(e, t);
    });
  }
  function l(e) {
    e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), 
    lt(e);
  }
  function s(e) {
    c(e), qt(e), setTimeout(function() {
      w(e);
    }, 20);
  }
  function c(e) {
    var t = e.display.gutters, r = e.options.gutters;
    Ri(t);
    for (var n = 0; n < r.length; ++n) {
      var i = r[n], o = t.appendChild(Bi("div", null, "CodeMirror-gutter " + i));
      "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px");
    }
    t.style.display = n ? "" :"none", u(e);
  }
  function u(e) {
    var t = e.display.gutters.offsetWidth;
    e.display.sizer.style.marginLeft = t + "px";
  }
  function d(e) {
    if (0 == e.height) return 0;
    for (var t, r = e.text.length, n = e; t = mn(n); ) {
      var i = t.find(0, !0);
      n = i.from.line, r += i.from.ch - i.to.ch;
    }
    for (n = e; t = gn(n); ) {
      var i = t.find(0, !0);
      r -= n.text.length - i.from.ch, n = i.to.line, r += n.text.length - i.to.ch;
    }
    return r;
  }
  function f(e) {
    var t = e.display, r = e.doc;
    t.maxLine = Yn(r, r.first), t.maxLineLength = d(t.maxLine), t.maxLineChanged = !0, 
    r.iter(function(e) {
      var r = d(e);
      r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e);
    });
  }
  function p(e) {
    var t = Wi(e.gutters, "CodeMirror-linenumbers");
    -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat([ "CodeMirror-linenumbers" ]) :t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), 
    e.gutters.splice(t, 1));
  }
  function h(e) {
    var t = e.display, r = t.gutters.offsetWidth, n = Math.round(e.doc.height + Ue(e.display));
    return {
      clientHeight:t.scroller.clientHeight,
      viewHeight:t.wrapper.clientHeight,
      scrollWidth:t.scroller.scrollWidth,
      clientWidth:t.scroller.clientWidth,
      viewWidth:t.wrapper.clientWidth,
      barLeft:e.options.fixedGutter ? r :0,
      docHeight:n,
      scrollHeight:n + Ve(e) + t.barHeight,
      nativeBarWidth:t.nativeBarWidth,
      gutterWidth:r
    };
  }
  function m(e, t, r) {
    this.cm = r;
    var n = this.vert = Bi("div", [ Bi("div", null, null, "min-width: 1px") ], "CodeMirror-vscrollbar"), i = this.horiz = Bi("div", [ Bi("div", null, null, "height: 100%; min-height: 1px") ], "CodeMirror-hscrollbar");
    e(n), e(i), Aa(n, "scroll", function() {
      n.clientHeight && t(n.scrollTop, "vertical");
    }), Aa(i, "scroll", function() {
      i.clientWidth && t(i.scrollLeft, "horizontal");
    }), this.checkedZeroWidth = !1, bo && xo < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
  }
  function g() {}
  function v(t) {
    t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && Ya(t.display.wrapper, t.display.scrollbars.addClass)), 
    t.display.scrollbars = new e.scrollbarModel[t.options.scrollbarStyle](function(e) {
      t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), Aa(e, "mousedown", function() {
        t.state.focused && setTimeout(function() {
          t.display.input.focus();
        }, 0);
      }), e.setAttribute("cm-not-content", "true");
    }, function(e, r) {
      "horizontal" == r ? ir(t, e) :nr(t, e);
    }, t), t.display.scrollbars.addClass && Qa(t.display.wrapper, t.display.scrollbars.addClass);
  }
  function y(e, t) {
    t || (t = h(e));
    var r = e.display.barWidth, n = e.display.barHeight;
    b(e, t);
    for (var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && O(e), 
    b(e, h(e)), r = e.display.barWidth, n = e.display.barHeight;
  }
  function b(e, t) {
    var r = e.display, n = r.scrollbars.update(t);
    r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", 
    r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", 
    r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") :r.scrollbarFiller.style.display = "", 
    n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", 
    r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") :r.gutterFiller.style.display = "";
  }
  function x(e, t, r) {
    var n = r && null != r.top ? Math.max(0, r.top) :e.scroller.scrollTop;
    n = Math.floor(n - Re(e));
    var i = r && null != r.bottom ? r.bottom :n + e.wrapper.clientHeight, o = ri(t, n), a = ri(t, i);
    if (r && r.ensure) {
      var l = r.ensure.from.line, s = r.ensure.to.line;
      l < o ? (o = l, a = ri(t, ni(Yn(t, l)) + e.wrapper.clientHeight)) :Math.min(s, t.lastLine()) >= a && (o = ri(t, ni(Yn(t, s)) - e.wrapper.clientHeight), 
      a = s);
    }
    return {
      from:o,
      to:Math.max(a, o + 1)
    };
  }
  function w(e) {
    var t = e.display, r = t.view;
    if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
      for (var n = C(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", a = 0; a < r.length; a++) if (!r[a].hidden) {
        e.options.fixedGutter && r[a].gutter && (r[a].gutter.style.left = o);
        var l = r[a].alignable;
        if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
      }
      e.options.fixedGutter && (t.gutters.style.left = n + i + "px");
    }
  }
  function _(e) {
    if (!e.options.lineNumbers) return !1;
    var t = e.doc, r = k(e.options, t.first + t.size - 1), n = e.display;
    if (r.length != n.lineNumChars) {
      var i = n.measure.appendChild(Bi("div", [ Bi("div", r) ], "CodeMirror-linenumber CodeMirror-gutter-elt")), o = i.firstChild.offsetWidth, a = i.offsetWidth - o;
      return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - a) + 1, 
      n.lineNumWidth = n.lineNumInnerWidth + a, n.lineNumChars = n.lineNumInnerWidth ? r.length :-1, 
      n.lineGutter.style.width = n.lineNumWidth + "px", u(e), !0;
    }
    return !1;
  }
  function k(e, t) {
    return String(e.lineNumberFormatter(t + e.firstLineNumber));
  }
  function C(e) {
    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
  }
  function S(e, t, r) {
    var n = e.display;
    this.viewport = t, this.visible = x(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, 
    this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, 
    this.oldDisplayWidth = $e(e), this.force = r, this.dims = W(e), this.events = [];
  }
  function M(e) {
    var t = e.display;
    !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, 
    t.heightForcer.style.height = Ve(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", 
    t.sizer.style.borderRightWidth = Ve(e) + "px", t.scrollbarsClipped = !0);
  }
  function L(e, t) {
    var r = e.display, n = e.doc;
    if (t.editorIsHidden) return Et(e), !1;
    if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == jt(e)) return !1;
    _(e) && (Et(e), t.dims = W(e));
    var i = n.first + n.size, o = Math.max(t.visible.from - e.options.viewportMargin, n.first), a = Math.min(i, t.visible.to + e.options.viewportMargin);
    r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(i, r.viewTo)), 
    Eo && (o = xn(e.doc, o), a = wn(e.doc, a));
    var l = o != r.viewFrom || a != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
    Ft(e, o, a), r.viewOffset = ni(Yn(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
    var s = jt(e);
    if (!l && 0 == s && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
    var c = Ki();
    return s > 4 && (r.lineDiv.style.display = "none"), D(e, r.updateLineNumbers, t.dims), 
    s > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, c && Ki() != c && c.offsetHeight && c.focus(), 
    Ri(r.cursorDiv), Ri(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, 
    l && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, He(e, 400)), 
    r.updateLineNumbers = null, !0;
  }
  function T(e, t) {
    for (var r = t.viewport, n = !0; (n && e.options.lineWrapping && t.oldDisplayWidth != $e(e) || (r && null != r.top && (r = {
      top:Math.min(e.doc.height + Ue(e.display) - Ge(e), r.top)
    }), t.visible = x(e.display, e.doc, r), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && L(e, t); n = !1) {
      O(e);
      var i = h(e);
      De(e), y(e, i), A(e, i);
    }
    t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), 
    e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
  }
  function z(e, t) {
    var r = new S(e, t);
    if (L(e, r)) {
      O(e), T(e, r);
      var n = h(e);
      De(e), y(e, n), A(e, n), r.finish();
    }
  }
  function A(e, t) {
    e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", 
    e.display.gutters.style.height = t.docHeight + e.display.barHeight + Ve(e) + "px";
  }
  function O(e) {
    for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
      var i, o = t.view[n];
      if (!o.hidden) {
        if (bo && xo < 8) {
          var a = o.node.offsetTop + o.node.offsetHeight;
          i = a - r, r = a;
        } else {
          var l = o.node.getBoundingClientRect();
          i = l.bottom - l.top;
        }
        var s = o.line.height - i;
        if (i < 2 && (i = yt(t)), (s > .001 || s < -.001) && (ei(o.line, i), N(o.line), 
        o.rest)) for (var c = 0; c < o.rest.length; c++) N(o.rest[c]);
      }
    }
  }
  function N(e) {
    if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight;
  }
  function W(e) {
    for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, 
    ++a) r[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, n[e.options.gutters[a]] = o.clientWidth;
    return {
      fixedPos:C(t),
      gutterTotalWidth:t.gutters.offsetWidth,
      gutterLeft:r,
      gutterWidth:n,
      wrapperWidth:t.wrapper.clientWidth
    };
  }
  function D(e, t, r) {
    function n(t) {
      var r = t.nextSibling;
      return wo && Ao && e.display.currentWheelTarget == t ? t.style.display = "none" :t.parentNode.removeChild(t), 
      r;
    }
    for (var i = e.display, o = e.options.lineNumbers, a = i.lineDiv, l = a.firstChild, s = i.view, c = i.viewFrom, u = 0; u < s.length; u++) {
      var d = s[u];
      if (d.hidden) ; else if (d.node && d.node.parentNode == a) {
        for (;l != d.node; ) l = n(l);
        var f = o && null != t && t <= c && d.lineNumber;
        d.changes && (Wi(d.changes, "gutter") > -1 && (f = !1), q(e, d, c, r)), f && (Ri(d.lineNumber), 
        d.lineNumber.appendChild(document.createTextNode(k(e.options, c)))), l = d.node.nextSibling;
      } else {
        var p = R(e, d, c, r);
        a.insertBefore(p, l);
      }
      c += d.size;
    }
    for (;l; ) l = n(l);
  }
  function q(e, t, r, n) {
    for (var i = 0; i < t.changes.length; i++) {
      var o = t.changes[i];
      "text" == o ? H(e, t) :"gutter" == o ? j(e, t, r, n) :"class" == o ? F(t) :"widget" == o && B(e, t, n);
    }
    t.changes = null;
  }
  function I(e) {
    return e.node == e.text && (e.node = Bi("div", null, null, "position: relative"), 
    e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), 
    bo && xo < 8 && (e.node.style.zIndex = 2)), e.node;
  }
  function E(e) {
    var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") :e.line.bgClass;
    if (t && (t += " CodeMirror-linebackground"), e.background) t ? e.background.className = t :(e.background.parentNode.removeChild(e.background), 
    e.background = null); else if (t) {
      var r = I(e);
      e.background = r.insertBefore(Bi("div", null, t), r.firstChild);
    }
  }
  function P(e, t) {
    var r = e.display.externalMeasured;
    return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, 
    r.built) :Pn(e, t);
  }
  function H(e, t) {
    var r = t.text.className, n = P(e, t);
    t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), 
    t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, 
    t.textClass = n.textClass, F(t)) :r && (t.text.className = r);
  }
  function F(e) {
    E(e), e.line.wrapClass ? I(e).className = e.line.wrapClass :e.node != e.text && (e.node.className = "");
    var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") :e.line.textClass;
    e.text.className = t || "";
  }
  function j(e, t, r, n) {
    if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), 
    t.gutterBackground = null), t.line.gutterClass) {
      var i = I(t);
      t.gutterBackground = Bi("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos :-n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), 
      i.insertBefore(t.gutterBackground, t.text);
    }
    var o = t.line.gutterMarkers;
    if (e.options.lineNumbers || o) {
      var i = I(t), a = t.gutter = Bi("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos :-n.gutterTotalWidth) + "px");
      if (e.display.input.setUneditable(a), i.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), 
      !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = a.appendChild(Bi("div", k(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), 
      o) for (var l = 0; l < e.options.gutters.length; ++l) {
        var s = e.options.gutters[l], c = o.hasOwnProperty(s) && o[s];
        c && a.appendChild(Bi("div", [ c ], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[s] + "px; width: " + n.gutterWidth[s] + "px"));
      }
    }
  }
  function B(e, t, r) {
    t.alignable && (t.alignable = null);
    for (var n, i = t.node.firstChild; i; i = n) {
      var n = i.nextSibling;
      "CodeMirror-linewidget" == i.className && t.node.removeChild(i);
    }
    U(e, t, r);
  }
  function R(e, t, r, n) {
    var i = P(e, t);
    return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), 
    F(t), j(e, t, r, n), U(e, t, n), t.node;
  }
  function U(e, t, r) {
    if (K(e, t.line, t, r, !0), t.rest) for (var n = 0; n < t.rest.length; n++) K(e, t.rest[n], t, r, !1);
  }
  function K(e, t, r, n, i) {
    if (t.widgets) for (var o = I(r), a = 0, l = t.widgets; a < l.length; ++a) {
      var s = l[a], c = Bi("div", [ s.node ], "CodeMirror-linewidget");
      s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), V(s, c, r, n), 
      e.display.input.setUneditable(c), i && s.above ? o.insertBefore(c, r.gutter || r.text) :o.appendChild(c), 
      Ci(s, "redraw");
    }
  }
  function V(e, t, r, n) {
    if (e.noHScroll) {
      (r.alignable || (r.alignable = [])).push(t);
      var i = n.wrapperWidth;
      t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), 
      t.style.width = i + "px";
    }
    e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"));
  }
  function $(e) {
    return Po(e.line, e.ch);
  }
  function G(e, t) {
    return Ho(e, t) < 0 ? t :e;
  }
  function X(e, t) {
    return Ho(e, t) < 0 ? e :t;
  }
  function Z(e) {
    e.state.focused || (e.display.input.focus(), gr(e));
  }
  function Y(e, t, r, n, i) {
    var o = e.doc;
    e.display.shift = !1, n || (n = o.sel);
    var a = e.state.pasteIncoming || "paste" == i, l = o.splitLines(t), s = null;
    if (a && n.ranges.length > 1) if (Fo && Fo.text.join("\n") == t) {
      if (n.ranges.length % Fo.text.length == 0) {
        s = [];
        for (var c = 0; c < Fo.text.length; c++) s.push(o.splitLines(Fo.text[c]));
      }
    } else l.length == n.ranges.length && (s = Di(l, function(e) {
      return [ e ];
    }));
    for (var c = n.ranges.length - 1; c >= 0; c--) {
      var u = n.ranges[c], d = u.from(), f = u.to();
      u.empty() && (r && r > 0 ? d = Po(d.line, d.ch - r) :e.state.overwrite && !a ? f = Po(f.line, Math.min(Yn(o, f.line).text.length, f.ch + Ni(l).length)) :Fo && Fo.lineWise && Fo.text.join("\n") == t && (d = f = Po(d.line, 0)));
      var p = e.curOp.updateInput, h = {
        from:d,
        to:f,
        text:s ? s[c % s.length] :l,
        origin:i || (a ? "paste" :e.state.cutIncoming ? "cut" :"+input")
      };
      Sr(e.doc, h), Ci(e, "inputRead", e, h);
    }
    t && !a && J(e, t), Er(e), e.curOp.updateInput = p, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1;
  }
  function Q(e, t) {
    var r = e.clipboardData && e.clipboardData.getData("text/plain");
    if (r) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || zt(t, function() {
      Y(t, r, 0, null, "paste");
    }), !0;
  }
  function J(e, t) {
    if (e.options.electricChars && e.options.smartIndent) for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
      var i = r.ranges[n];
      if (!(i.head.ch > 100 || n && r.ranges[n - 1].head.line == i.head.line)) {
        var o = e.getModeAt(i.head), a = !1;
        if (o.electricChars) {
          for (var l = 0; l < o.electricChars.length; l++) if (t.indexOf(o.electricChars.charAt(l)) > -1) {
            a = Hr(e, i.head.line, "smart");
            break;
          }
        } else o.electricInput && o.electricInput.test(Yn(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Hr(e, i.head.line, "smart"));
        a && Ci(e, "electricInput", e, i.head.line);
      }
    }
  }
  function ee(e) {
    for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
      var i = e.doc.sel.ranges[n].head.line, o = {
        anchor:Po(i, 0),
        head:Po(i + 1, 0)
      };
      r.push(o), t.push(e.getRange(o.anchor, o.head));
    }
    return {
      text:t,
      ranges:r
    };
  }
  function te(e) {
    e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", "false");
  }
  function re(e) {
    this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Ai(), 
    this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null;
  }
  function ne() {
    var e = Bi("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none"), t = Bi("div", [ e ], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    return wo ? e.style.width = "1000px" :e.setAttribute("wrap", "off"), To && (e.style.border = "1px solid black"), 
    te(e), t;
  }
  function ie(e) {
    this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, 
    this.polling = new Ai(), this.gracePeriod = !1;
  }
  function oe(e, t) {
    var r = Je(e, t.line);
    if (!r || r.hidden) return null;
    var n = Yn(e.doc, t.line), i = Ze(r, n, t.line), o = ii(n), a = "left";
    if (o) {
      a = co(o, t.ch) % 2 ? "right" :"left";
    }
    var l = rt(i.map, t.ch, a);
    return l.offset = "right" == l.collapse ? l.end :l.start, l;
  }
  function ae(e, t) {
    return t && (e.bad = !0), e;
  }
  function le(e, t, r) {
    var n;
    if (t == e.display.lineDiv) {
      if (!(n = e.display.lineDiv.childNodes[r])) return ae(e.clipPos(Po(e.display.viewTo - 1)), !0);
      t = null, r = 0;
    } else for (n = t; ;n = n.parentNode) {
      if (!n || n == e.display.lineDiv) return null;
      if (n.parentNode && n.parentNode == e.display.lineDiv) break;
    }
    for (var i = 0; i < e.display.view.length; i++) {
      var o = e.display.view[i];
      if (o.node == n) return se(o, t, r);
    }
  }
  function se(e, t, r) {
    function n(t, r, n) {
      for (var i = -1; i < (u ? u.length :0); i++) for (var o = i < 0 ? c.map :u[i], a = 0; a < o.length; a += 3) {
        var l = o[a + 2];
        if (l == t || l == r) {
          var s = ti(i < 0 ? e.line :e.rest[i]), d = o[a] + n;
          return (n < 0 || l != t) && (d = o[a + (n ? 1 :0)]), Po(s, d);
        }
      }
    }
    var i = e.text.firstChild, o = !1;
    if (!t || !Ga(i, t)) return ae(Po(ti(e.line), 0), !0);
    if (t == i && (o = !0, t = i.childNodes[r], r = 0, !t)) {
      var a = e.rest ? Ni(e.rest) :e.line;
      return ae(Po(ti(a), a.text.length), o);
    }
    var l = 3 == t.nodeType ? t :null, s = t;
    for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, 
    r && (r = l.nodeValue.length)); s.parentNode != i; ) s = s.parentNode;
    var c = e.measure, u = c.maps, d = n(l, s, r);
    if (d) return ae(d, o);
    for (var f = s.nextSibling, p = l ? l.nodeValue.length - r :0; f; f = f.nextSibling) {
      if (d = n(f, f.firstChild, 0)) return ae(Po(d.line, d.ch - p), o);
      p += f.textContent.length;
    }
    for (var h = s.previousSibling, p = r; h; h = h.previousSibling) {
      if (d = n(h, h.firstChild, -1)) return ae(Po(d.line, d.ch + p), o);
      p += f.textContent.length;
    }
  }
  function ce(e, t, r, n, i) {
    function o(e) {
      return function(t) {
        return t.id == e;
      };
    }
    function a(t) {
      if (1 == t.nodeType) {
        var r = t.getAttribute("cm-text");
        if (null != r) return "" == r && (r = t.textContent.replace(/\u200b/g, "")), void (l += r);
        var u, d = t.getAttribute("cm-marker");
        if (d) {
          var f = e.findMarks(Po(n, 0), Po(i + 1, 0), o(+d));
          return void (f.length && (u = f[0].find()) && (l += Qn(e.doc, u.from, u.to).join(c)));
        }
        if ("false" == t.getAttribute("contenteditable")) return;
        for (var p = 0; p < t.childNodes.length; p++) a(t.childNodes[p]);
        /^(pre|div|p)$/i.test(t.nodeName) && (s = !0);
      } else if (3 == t.nodeType) {
        var h = t.nodeValue;
        if (!h) return;
        s && (l += c, s = !1), l += h;
      }
    }
    for (var l = "", s = !1, c = e.doc.lineSeparator(); a(t), t != r; ) t = t.nextSibling;
    return l;
  }
  function ue(e, t) {
    this.ranges = e, this.primIndex = t;
  }
  function de(e, t) {
    this.anchor = e, this.head = t;
  }
  function fe(e, t) {
    var r = e[t];
    e.sort(function(e, t) {
      return Ho(e.from(), t.from());
    }), t = Wi(e, r);
    for (var n = 1; n < e.length; n++) {
      var i = e[n], o = e[n - 1];
      if (Ho(o.to(), i.from()) >= 0) {
        var a = X(o.from(), i.from()), l = G(o.to(), i.to()), s = o.empty() ? i.from() == i.head :o.from() == o.head;
        n <= t && --t, e.splice(--n, 2, new de(s ? l :a, s ? a :l));
      }
    }
    return new ue(e, t);
  }
  function pe(e, t) {
    return new ue([ new de(e, t || e) ], 0);
  }
  function he(e, t) {
    return Math.max(e.first, Math.min(t, e.first + e.size - 1));
  }
  function me(e, t) {
    if (t.line < e.first) return Po(e.first, 0);
    var r = e.first + e.size - 1;
    return t.line > r ? Po(r, Yn(e, r).text.length) :ge(t, Yn(e, t.line).text.length);
  }
  function ge(e, t) {
    var r = e.ch;
    return null == r || r > t ? Po(e.line, t) :r < 0 ? Po(e.line, 0) :e;
  }
  function ve(e, t) {
    return t >= e.first && t < e.first + e.size;
  }
  function ye(e, t) {
    for (var r = [], n = 0; n < t.length; n++) r[n] = me(e, t[n]);
    return r;
  }
  function be(e, t, r, n) {
    if (e.cm && e.cm.display.shift || e.extend) {
      var i = t.anchor;
      if (n) {
        var o = Ho(r, i) < 0;
        o != Ho(n, i) < 0 ? (i = r, r = n) :o != Ho(r, n) < 0 && (r = n);
      }
      return new de(i, r);
    }
    return new de(n || r, r);
  }
  function xe(e, t, r, n) {
    Me(e, new ue([ be(e, e.sel.primary(), t, r) ], 0), n);
  }
  function we(e, t, r) {
    for (var n = [], i = 0; i < e.sel.ranges.length; i++) n[i] = be(e, e.sel.ranges[i], t[i], null);
    Me(e, fe(n, e.sel.primIndex), r);
  }
  function _e(e, t, r, n) {
    var i = e.sel.ranges.slice(0);
    i[t] = r, Me(e, fe(i, e.sel.primIndex), n);
  }
  function ke(e, t, r, n) {
    Me(e, pe(t, r), n);
  }
  function Ce(e, t, r) {
    var n = {
      ranges:t.ranges,
      update:function(t) {
        this.ranges = [];
        for (var r = 0; r < t.length; r++) this.ranges[r] = new de(me(e, t[r].anchor), me(e, t[r].head));
      },
      origin:r && r.origin
    };
    return Wa(e, "beforeSelectionChange", e, n), e.cm && Wa(e.cm, "beforeSelectionChange", e.cm, n), 
    n.ranges != t.ranges ? fe(n.ranges, n.ranges.length - 1) :t;
  }
  function Se(e, t, r) {
    var n = e.history.done, i = Ni(n);
    i && i.ranges ? (n[n.length - 1] = t, Le(e, t, r)) :Me(e, t, r);
  }
  function Me(e, t, r) {
    Le(e, t, r), di(e, e.sel, e.cm ? e.cm.curOp.id :NaN, r);
  }
  function Le(e, t, r) {
    (Ti(e, "beforeSelectionChange") || e.cm && Ti(e.cm, "beforeSelectionChange")) && (t = Ce(e, t, r)), 
    Te(e, Ae(e, t, r && r.bias || (Ho(t.primary().head, e.sel.primary().head) < 0 ? -1 :1), !0)), 
    r && !1 === r.scroll || !e.cm || Er(e.cm);
  }
  function Te(e, t) {
    t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, 
    Li(e.cm)), Ci(e, "cursorActivity", e));
  }
  function ze(e) {
    Te(e, Ae(e, e.sel, null, !1), Ea);
  }
  function Ae(e, t, r, n) {
    for (var i, o = 0; o < t.ranges.length; o++) {
      var a = t.ranges[o], l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o], s = Ne(e, a.anchor, l && l.anchor, r, n), c = Ne(e, a.head, l && l.head, r, n);
      (i || s != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new de(s, c));
    }
    return i ? fe(i, t.primIndex) :t;
  }
  function Oe(e, t, r, n, i) {
    var o = Yn(e, t.line);
    if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
      var l = o.markedSpans[a], s = l.marker;
      if ((null == l.from || (s.inclusiveLeft ? l.from <= t.ch :l.from < t.ch)) && (null == l.to || (s.inclusiveRight ? l.to >= t.ch :l.to > t.ch))) {
        if (i && (Wa(s, "beforeCursorEnter"), s.explicitlyCleared)) {
          if (o.markedSpans) {
            --a;
            continue;
          }
          break;
        }
        if (!s.atomic) continue;
        if (r) {
          var c, u = s.find(n < 0 ? 1 :-1);
          if ((n < 0 ? s.inclusiveRight :s.inclusiveLeft) && (u = We(e, u, -n, u && u.line == t.line ? o :null)), 
          u && u.line == t.line && (c = Ho(u, r)) && (n < 0 ? c < 0 :c > 0)) return Oe(e, u, t, n, i);
        }
        var d = s.find(n < 0 ? -1 :1);
        return (n < 0 ? s.inclusiveLeft :s.inclusiveRight) && (d = We(e, d, n, d.line == t.line ? o :null)), 
        d ? Oe(e, d, t, n, i) :null;
      }
    }
    return t;
  }
  function Ne(e, t, r, n, i) {
    var o = n || 1, a = Oe(e, t, r, o, i) || !i && Oe(e, t, r, o, !0) || Oe(e, t, r, -o, i) || !i && Oe(e, t, r, -o, !0);
    return a || (e.cantEdit = !0, Po(e.first, 0));
  }
  function We(e, t, r, n) {
    return r < 0 && 0 == t.ch ? t.line > e.first ? me(e, Po(t.line - 1)) :null :r > 0 && t.ch == (n || Yn(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? Po(t.line + 1, 0) :null :new Po(t.line, t.ch + r);
  }
  function De(e) {
    e.display.input.showSelection(e.display.input.prepareSelection());
  }
  function qe(e, t) {
    for (var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), a = 0; a < r.sel.ranges.length; a++) if (!1 !== t || a != r.sel.primIndex) {
      var l = r.sel.ranges[a];
      if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
        var s = l.empty();
        (s || e.options.showCursorWhenSelecting) && Ie(e, l.head, i), s || Ee(e, l, o);
      }
    }
    return n;
  }
  function Ie(e, t, r) {
    var n = pt(e, t, "div", null, null, !e.options.singleCursorHeightPerLine), i = r.appendChild(Bi("div", "\xa0", "CodeMirror-cursor"));
    if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", 
    n.other) {
      var o = r.appendChild(Bi("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
      o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", 
      o.style.height = .85 * (n.other.bottom - n.other.top) + "px";
    }
  }
  function Ee(e, t, r) {
    function n(e, t, r, n) {
      t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), l.appendChild(Bi("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == r ? u - e :r) + "px; height: " + (n - t) + "px"));
    }
    function i(t, r, i) {
      function o(r, n) {
        return ft(e, Po(t, r), "div", d, n);
      }
      var l, s, d = Yn(a, t), f = d.text.length;
      return eo(ii(d), r || 0, null == i ? f :i, function(e, t, a) {
        var d, p, h, m = o(e, "left");
        if (e == t) d = m, p = h = m.left; else {
          if (d = o(t - 1, "right"), "rtl" == a) {
            var g = m;
            m = d, d = g;
          }
          p = m.left, h = d.right;
        }
        null == r && 0 == e && (p = c), d.top - m.top > 3 && (n(p, m.top, null, m.bottom), 
        p = c, m.bottom < d.top && n(p, m.bottom, null, d.top)), null == i && t == f && (h = u), 
        (!l || m.top < l.top || m.top == l.top && m.left < l.left) && (l = m), (!s || d.bottom > s.bottom || d.bottom == s.bottom && d.right > s.right) && (s = d), 
        p < c + 1 && (p = c), n(p, d.top, h - p, d.bottom);
      }), {
        start:l,
        end:s
      };
    }
    var o = e.display, a = e.doc, l = document.createDocumentFragment(), s = Ke(e.display), c = s.left, u = Math.max(o.sizerWidth, $e(e) - o.sizer.offsetLeft) - s.right, d = t.from(), f = t.to();
    if (d.line == f.line) i(d.line, d.ch, f.ch); else {
      var p = Yn(a, d.line), h = Yn(a, f.line), m = yn(p) == yn(h), g = i(d.line, d.ch, m ? p.text.length + 1 :null).end, v = i(f.line, m ? 0 :null, f.ch).start;
      m && (g.top < v.top - 2 ? (n(g.right, g.top, null, g.bottom), n(c, v.top, v.left, v.bottom)) :n(g.right, g.top, v.left - g.right, g.bottom)), 
      g.bottom < v.top && n(c, g.bottom, null, v.top);
    }
    r.appendChild(l);
  }
  function Pe(e) {
    if (e.state.focused) {
      var t = e.display;
      clearInterval(t.blinker);
      var r = !0;
      t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
        t.cursorDiv.style.visibility = (r = !r) ? "" :"hidden";
      }, e.options.cursorBlinkRate) :e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
    }
  }
  function He(e, t) {
    e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, Pi(Fe, e));
  }
  function Fe(e) {
    var t = e.doc;
    if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
      var r = +new Date() + e.options.workTime, n = sa(t.mode, Be(e, t.frontier)), i = [];
      t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
        if (t.frontier >= e.display.viewFrom) {
          var a = o.styles, l = o.text.length > e.options.maxHighlightLength, s = Dn(e, o, l ? sa(t.mode, n) :n, !0);
          o.styles = s.styles;
          var c = o.styleClasses, u = s.classes;
          u ? o.styleClasses = u :c && (o.styleClasses = null);
          for (var d = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), f = 0; !d && f < a.length; ++f) d = a[f] != o.styles[f];
          d && i.push(t.frontier), o.stateAfter = l ? n :sa(t.mode, n);
        } else o.text.length <= e.options.maxHighlightLength && In(e, o.text, n), o.stateAfter = t.frontier % 5 == 0 ? sa(t.mode, n) :null;
        if (++t.frontier, +new Date() > r) return He(e, e.options.workDelay), !0;
      }), i.length && zt(e, function() {
        for (var t = 0; t < i.length; t++) It(e, i[t], "text");
      });
    }
  }
  function je(e, t, r) {
    for (var n, i, o = e.doc, a = r ? -1 :t - (e.doc.mode.innerMode ? 1e3 :100), l = t; l > a; --l) {
      if (l <= o.first) return o.first;
      var s = Yn(o, l - 1);
      if (s.stateAfter && (!r || l <= o.frontier)) return l;
      var c = Fa(s.text, null, e.options.tabSize);
      (null == i || n > c) && (i = l - 1, n = c);
    }
    return i;
  }
  function Be(e, t, r) {
    var n = e.doc, i = e.display;
    if (!n.mode.startState) return !0;
    var o = je(e, t, r), a = o > n.first && Yn(n, o - 1).stateAfter;
    return a = a ? sa(n.mode, a) :ca(n.mode), n.iter(o, t, function(r) {
      In(e, r.text, a);
      var l = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;
      r.stateAfter = l ? sa(n.mode, a) :null, ++o;
    }), r && (n.frontier = o), a;
  }
  function Re(e) {
    return e.lineSpace.offsetTop;
  }
  function Ue(e) {
    return e.mover.offsetHeight - e.lineSpace.offsetHeight;
  }
  function Ke(e) {
    if (e.cachedPaddingH) return e.cachedPaddingH;
    var t = Ui(e.measure, Bi("pre", "x")), r = window.getComputedStyle ? window.getComputedStyle(t) :t.currentStyle, n = {
      left:parseInt(r.paddingLeft),
      right:parseInt(r.paddingRight)
    };
    return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n;
  }
  function Ve(e) {
    return qa - e.display.nativeBarWidth;
  }
  function $e(e) {
    return e.display.scroller.clientWidth - Ve(e) - e.display.barWidth;
  }
  function Ge(e) {
    return e.display.scroller.clientHeight - Ve(e) - e.display.barHeight;
  }
  function Xe(e, t, r) {
    var n = e.options.lineWrapping, i = n && $e(e);
    if (!t.measure.heights || n && t.measure.width != i) {
      var o = t.measure.heights = [];
      if (n) {
        t.measure.width = i;
        for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
          var s = a[l], c = a[l + 1];
          Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - r.top);
        }
      }
      o.push(r.bottom - r.top);
    }
  }
  function Ze(e, t, r) {
    if (e.line == t) return {
      map:e.measure.map,
      cache:e.measure.cache
    };
    for (var n = 0; n < e.rest.length; n++) if (e.rest[n] == t) return {
      map:e.measure.maps[n],
      cache:e.measure.caches[n]
    };
    for (var n = 0; n < e.rest.length; n++) if (ti(e.rest[n]) > r) return {
      map:e.measure.maps[n],
      cache:e.measure.caches[n],
      before:!0
    };
  }
  function Ye(e, t) {
    t = yn(t);
    var r = ti(t), n = e.display.externalMeasured = new Wt(e.doc, t, r);
    n.lineN = r;
    var i = n.built = Pn(e, n);
    return n.text = i.pre, Ui(e.display.lineMeasure, i.pre), n;
  }
  function Qe(e, t, r, n) {
    return tt(e, et(e, t), r, n);
  }
  function Je(e, t) {
    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Pt(e, t)];
    var r = e.display.externalMeasured;
    return r && t >= r.lineN && t < r.lineN + r.size ? r :void 0;
  }
  function et(e, t) {
    var r = ti(t), n = Je(e, r);
    n && !n.text ? n = null :n && n.changes && (q(e, n, r, W(e)), e.curOp.forceUpdate = !0), 
    n || (n = Ye(e, t));
    var i = Ze(n, t, r);
    return {
      line:t,
      view:n,
      rect:null,
      map:i.map,
      cache:i.cache,
      before:i.before,
      hasHeights:!1
    };
  }
  function tt(e, t, r, n, i) {
    t.before && (r = -1);
    var o, a = r + (n || "");
    return t.cache.hasOwnProperty(a) ? o = t.cache[a] :(t.rect || (t.rect = t.view.text.getBoundingClientRect()), 
    t.hasHeights || (Xe(e, t.view, t.rect), t.hasHeights = !0), o = nt(e, t, r, n), 
    o.bogus || (t.cache[a] = o)), {
      left:o.left,
      right:o.right,
      top:i ? o.rtop :o.top,
      bottom:i ? o.rbottom :o.bottom
    };
  }
  function rt(e, t, r) {
    for (var n, i, o, a, l = 0; l < e.length; l += 3) {
      var s = e[l], c = e[l + 1];
      if (t < s ? (i = 0, o = 1, a = "left") :t < c ? (i = t - s, o = i + 1) :(l == e.length - 3 || t == c && e[l + 3] > t) && (o = c - s, 
      i = o - 1, t >= c && (a = "right")), null != i) {
        if (n = e[l + 2], s == c && r == (n.insertLeft ? "left" :"right") && (a = r), "left" == r && 0 == i) for (;l && e[l - 2] == e[l - 3] && e[l - 1].insertLeft; ) n = e[2 + (l -= 3)], 
        a = "left";
        if ("right" == r && i == c - s) for (;l < e.length - 3 && e[l + 3] == e[l + 4] && !e[l + 5].insertLeft; ) n = e[(l += 3) + 2], 
        a = "right";
        break;
      }
    }
    return {
      node:n,
      start:i,
      end:o,
      collapse:a,
      coverStart:s,
      coverEnd:c
    };
  }
  function nt(e, t, r, n) {
    var i, o = rt(t.map, r, n), a = o.node, l = o.start, s = o.end, c = o.collapse;
    if (3 == a.nodeType) {
      for (var u = 0; u < 4; u++) {
        for (;l && ji(t.line.text.charAt(o.coverStart + l)); ) --l;
        for (;o.coverStart + s < o.coverEnd && ji(t.line.text.charAt(o.coverStart + s)); ) ++s;
        if (bo && xo < 9 && 0 == l && s == o.coverEnd - o.coverStart) i = a.parentNode.getBoundingClientRect(); else if (bo && e.options.lineWrapping) {
          var d = Ua(a, l, s).getClientRects();
          i = d.length ? d["right" == n ? d.length - 1 :0] :Uo;
        } else i = Ua(a, l, s).getBoundingClientRect() || Uo;
        if (i.left || i.right || 0 == l) break;
        s = l, l -= 1, c = "right";
      }
      bo && xo < 11 && (i = it(e.display.measure, i));
    } else {
      l > 0 && (c = n = "right");
      var d;
      i = e.options.lineWrapping && (d = a.getClientRects()).length > 1 ? d["right" == n ? d.length - 1 :0] :a.getBoundingClientRect();
    }
    if (bo && xo < 9 && !l && (!i || !i.left && !i.right)) {
      var f = a.parentNode.getClientRects()[0];
      i = f ? {
        left:f.left,
        right:f.left + bt(e.display),
        top:f.top,
        bottom:f.bottom
      } :Uo;
    }
    for (var p = i.top - t.rect.top, h = i.bottom - t.rect.top, m = (p + h) / 2, g = t.view.measure.heights, u = 0; u < g.length - 1 && !(m < g[u]); u++) ;
    var v = u ? g[u - 1] :0, y = g[u], b = {
      left:("right" == c ? i.right :i.left) - t.rect.left,
      right:("left" == c ? i.left :i.right) - t.rect.left,
      top:v,
      bottom:y
    };
    return i.left || i.right || (b.bogus = !0), e.options.singleCursorHeightPerLine || (b.rtop = p, 
    b.rbottom = h), b;
  }
  function it(e, t) {
    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Ji(e)) return t;
    var r = screen.logicalXDPI / screen.deviceXDPI, n = screen.logicalYDPI / screen.deviceYDPI;
    return {
      left:t.left * r,
      right:t.right * r,
      top:t.top * n,
      bottom:t.bottom * n
    };
  }
  function ot(e) {
    if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
  }
  function at(e) {
    e.display.externalMeasure = null, Ri(e.display.lineMeasure);
    for (var t = 0; t < e.display.view.length; t++) ot(e.display.view[t]);
  }
  function lt(e) {
    at(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, 
    e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
  }
  function st() {
    return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
  }
  function ct() {
    return window.pageYOffset || (document.documentElement || document.body).scrollTop;
  }
  function ut(e, t, r, n) {
    if (t.widgets) for (var i = 0; i < t.widgets.length; ++i) if (t.widgets[i].above) {
      var o = Sn(t.widgets[i]);
      r.top += o, r.bottom += o;
    }
    if ("line" == n) return r;
    n || (n = "local");
    var a = ni(t);
    if ("local" == n ? a += Re(e.display) :a -= e.display.viewOffset, "page" == n || "window" == n) {
      var l = e.display.lineSpace.getBoundingClientRect();
      a += l.top + ("window" == n ? 0 :ct());
      var s = l.left + ("window" == n ? 0 :st());
      r.left += s, r.right += s;
    }
    return r.top += a, r.bottom += a, r;
  }
  function dt(e, t, r) {
    if ("div" == r) return t;
    var n = t.left, i = t.top;
    if ("page" == r) n -= st(), i -= ct(); else if ("local" == r || !r) {
      var o = e.display.sizer.getBoundingClientRect();
      n += o.left, i += o.top;
    }
    var a = e.display.lineSpace.getBoundingClientRect();
    return {
      left:n - a.left,
      top:i - a.top
    };
  }
  function ft(e, t, r, n, i) {
    return n || (n = Yn(e.doc, t.line)), ut(e, n, Qe(e, n, t.ch, i), r);
  }
  function pt(e, t, r, n, i, o) {
    function a(t, a) {
      var l = tt(e, i, t, a ? "right" :"left", o);
      return a ? l.left = l.right :l.right = l.left, ut(e, n, l, r);
    }
    function l(e, t) {
      var r = s[t], n = r.level % 2;
      return e == to(r) && t && r.level < s[t - 1].level ? (r = s[--t], e = ro(r) - (r.level % 2 ? 0 :1), 
      n = !0) :e == ro(r) && t < s.length - 1 && r.level < s[t + 1].level && (r = s[++t], 
      e = to(r) - r.level % 2, n = !1), n && e == r.to && e > r.from ? a(e - 1) :a(e, n);
    }
    n = n || Yn(e.doc, t.line), i || (i = et(e, n));
    var s = ii(n), c = t.ch;
    if (!s) return a(c);
    var u = co(s, c), d = l(c, u);
    return null != al && (d.other = l(c, al)), d;
  }
  function ht(e, t) {
    var r = 0, t = me(e.doc, t);
    e.options.lineWrapping || (r = bt(e.display) * t.ch);
    var n = Yn(e.doc, t.line), i = ni(n) + Re(e.display);
    return {
      left:r,
      right:r,
      top:i,
      bottom:i + n.height
    };
  }
  function mt(e, t, r, n) {
    var i = Po(e, t);
    return i.xRel = n, r && (i.outside = !0), i;
  }
  function gt(e, t, r) {
    var n = e.doc;
    if ((r += e.display.viewOffset) < 0) return mt(n.first, 0, !0, -1);
    var i = ri(n, r), o = n.first + n.size - 1;
    if (i > o) return mt(n.first + n.size - 1, Yn(n, o).text.length, !0, 1);
    t < 0 && (t = 0);
    for (var a = Yn(n, i); ;) {
      var l = vt(e, a, i, t, r), s = gn(a), c = s && s.find(0, !0);
      if (!s || !(l.ch > c.from.ch || l.ch == c.from.ch && l.xRel > 0)) return l;
      i = ti(a = c.to.line);
    }
  }
  function vt(e, t, r, n, i) {
    function o(n) {
      var i = pt(e, Po(r, n), "line", t, c);
      return l = !0, a > i.bottom ? i.left - s :a < i.top ? i.left + s :(l = !1, i.left);
    }
    var a = i - ni(t), l = !1, s = 2 * e.display.wrapper.clientWidth, c = et(e, t), u = ii(t), d = t.text.length, f = no(t), p = io(t), h = o(f), m = l, g = o(p), v = l;
    if (n > g) return mt(r, p, v, 1);
    for (;;) {
      if (u ? p == f || p == fo(t, f, 1) :p - f <= 1) {
        var y = n < h || n - h <= g - n ? f :p, b = y == f ? m :v, x = n - (y == f ? h :g);
        if (v && !u && !/\s/.test(t.text.charAt(y)) && x > 0 && y < t.text.length && c.view.measure.heights.length > 1) {
          var w = tt(e, c, y, "right");
          a <= w.bottom && a >= w.top && Math.abs(n - w.right) < x && (b = !1, y++, x = n - w.right);
        }
        for (;ji(t.text.charAt(y)); ) ++y;
        return mt(r, y, b, x < -1 ? -1 :x > 1 ? 1 :0);
      }
      var _ = Math.ceil(d / 2), k = f + _;
      if (u) {
        k = f;
        for (var C = 0; C < _; ++C) k = fo(t, k, 1);
      }
      var S = o(k);
      S > n ? (p = k, g = S, (v = l) && (g += 1e3), d = _) :(f = k, h = S, m = l, d -= _);
    }
  }
  function yt(e) {
    if (null != e.cachedTextHeight) return e.cachedTextHeight;
    if (null == jo) {
      jo = Bi("pre");
      for (var t = 0; t < 49; ++t) jo.appendChild(document.createTextNode("x")), jo.appendChild(Bi("br"));
      jo.appendChild(document.createTextNode("x"));
    }
    Ui(e.measure, jo);
    var r = jo.offsetHeight / 50;
    return r > 3 && (e.cachedTextHeight = r), Ri(e.measure), r || 1;
  }
  function bt(e) {
    if (null != e.cachedCharWidth) return e.cachedCharWidth;
    var t = Bi("span", "xxxxxxxxxx"), r = Bi("pre", [ t ]);
    Ui(e.measure, r);
    var n = t.getBoundingClientRect(), i = (n.right - n.left) / 10;
    return i > 2 && (e.cachedCharWidth = i), i || 10;
  }
  function xt(e) {
    e.curOp = {
      cm:e,
      viewChanged:!1,
      startHeight:e.doc.height,
      forceUpdate:!1,
      updateInput:null,
      typing:!1,
      changeObjs:null,
      cursorActivityHandlers:null,
      cursorActivityCalled:0,
      selectionChanged:!1,
      updateMaxLine:!1,
      scrollLeft:null,
      scrollTop:null,
      scrollToPos:null,
      focus:!1,
      id:++Vo
    }, Ko ? Ko.ops.push(e.curOp) :e.curOp.ownsGroup = Ko = {
      ops:[ e.curOp ],
      delayedCallbacks:[]
    };
  }
  function wt(e) {
    var t = e.delayedCallbacks, r = 0;
    do {
      for (;r < t.length; r++) t[r].call(null);
      for (var n = 0; n < e.ops.length; n++) {
        var i = e.ops[n];
        if (i.cursorActivityHandlers) for (;i.cursorActivityCalled < i.cursorActivityHandlers.length; ) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
      }
    } while (r < t.length);
  }
  function _t(e) {
    var t = e.curOp, r = t.ownsGroup;
    if (r) try {
      wt(r);
    } finally {
      Ko = null;
      for (var n = 0; n < r.ops.length; n++) r.ops[n].cm.curOp = null;
      kt(r);
    }
  }
  function kt(e) {
    for (var t = e.ops, r = 0; r < t.length; r++) Ct(t[r]);
    for (var r = 0; r < t.length; r++) St(t[r]);
    for (var r = 0; r < t.length; r++) Mt(t[r]);
    for (var r = 0; r < t.length; r++) Lt(t[r]);
    for (var r = 0; r < t.length; r++) Tt(t[r]);
  }
  function Ct(e) {
    var t = e.cm, r = t.display;
    M(t), e.updateMaxLine && f(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, 
    e.update = e.mustUpdate && new S(t, e.mustUpdate && {
      top:e.scrollTop,
      ensure:e.scrollToPos
    }, e.forceUpdate);
  }
  function St(e) {
    e.updatedDisplay = e.mustUpdate && L(e.cm, e.update);
  }
  function Mt(e) {
    var t = e.cm, r = t.display;
    e.updatedDisplay && O(t), e.barMeasure = h(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Qe(t, r.maxLine, r.maxLine.text.length).left + 3, 
    t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Ve(t) + t.display.barWidth), 
    e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - $e(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection(e.focus));
  }
  function Lt(e) {
    var t = e.cm;
    null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", 
    e.maxScrollLeft < t.doc.scrollLeft && ir(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), 
    t.display.maxLineChanged = !1);
    var r = e.focus && e.focus == Ki() && (!document.hasFocus || document.hasFocus());
    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r), (e.updatedDisplay || e.startHeight != t.doc.height) && y(t, e.barMeasure), 
    e.updatedDisplay && A(t, e.barMeasure), e.selectionChanged && Pe(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), 
    r && Z(e.cm);
  }
  function Tt(e) {
    var t = e.cm, r = t.display, n = t.doc;
    if (e.updatedDisplay && T(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), 
    null == e.scrollTop || r.scroller.scrollTop == e.scrollTop && !e.forceScroll || (n.scrollTop = Math.max(0, Math.min(r.scroller.scrollHeight - r.scroller.clientHeight, e.scrollTop)), 
    r.scrollbars.setScrollTop(n.scrollTop), r.scroller.scrollTop = n.scrollTop), null == e.scrollLeft || r.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (n.scrollLeft = Math.max(0, Math.min(r.scroller.scrollWidth - r.scroller.clientWidth, e.scrollLeft)), 
    r.scrollbars.setScrollLeft(n.scrollLeft), r.scroller.scrollLeft = n.scrollLeft, 
    w(t)), e.scrollToPos) {
      var i = Wr(t, me(n, e.scrollToPos.from), me(n, e.scrollToPos.to), e.scrollToPos.margin);
      e.scrollToPos.isCursor && t.state.focused && Nr(t, i);
    }
    var o = e.maybeHiddenMarkers, a = e.maybeUnhiddenMarkers;
    if (o) for (var l = 0; l < o.length; ++l) o[l].lines.length || Wa(o[l], "hide");
    if (a) for (var l = 0; l < a.length; ++l) a[l].lines.length && Wa(a[l], "unhide");
    r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Wa(t, "changes", t, e.changeObjs), 
    e.update && e.update.finish();
  }
  function zt(e, t) {
    if (e.curOp) return t();
    xt(e);
    try {
      return t();
    } finally {
      _t(e);
    }
  }
  function At(e, t) {
    return function() {
      if (e.curOp) return t.apply(e, arguments);
      xt(e);
      try {
        return t.apply(e, arguments);
      } finally {
        _t(e);
      }
    };
  }
  function Ot(e) {
    return function() {
      if (this.curOp) return e.apply(this, arguments);
      xt(this);
      try {
        return e.apply(this, arguments);
      } finally {
        _t(this);
      }
    };
  }
  function Nt(e) {
    return function() {
      var t = this.cm;
      if (!t || t.curOp) return e.apply(this, arguments);
      xt(t);
      try {
        return e.apply(this, arguments);
      } finally {
        _t(t);
      }
    };
  }
  function Wt(e, t, r) {
    this.line = t, this.rest = bn(t), this.size = this.rest ? ti(Ni(this.rest)) - r + 1 :1, 
    this.node = this.text = null, this.hidden = _n(e, t);
  }
  function Dt(e, t, r) {
    for (var n, i = [], o = t; o < r; o = n) {
      var a = new Wt(e.doc, Yn(e.doc, o), o);
      n = o + a.size, i.push(a);
    }
    return i;
  }
  function qt(e, t, r, n) {
    null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
    var i = e.display;
    if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), 
    e.curOp.viewChanged = !0, t >= i.viewTo) Eo && xn(e.doc, t) < i.viewTo && Et(e); else if (r <= i.viewFrom) Eo && wn(e.doc, r + n) > i.viewFrom ? Et(e) :(i.viewFrom += n, 
    i.viewTo += n); else if (t <= i.viewFrom && r >= i.viewTo) Et(e); else if (t <= i.viewFrom) {
      var o = Ht(e, r, r + n, 1);
      o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) :Et(e);
    } else if (r >= i.viewTo) {
      var o = Ht(e, t, t, -1);
      o ? (i.view = i.view.slice(0, o.index), i.viewTo = o.lineN) :Et(e);
    } else {
      var a = Ht(e, t, t, -1), l = Ht(e, r, r + n, 1);
      a && l ? (i.view = i.view.slice(0, a.index).concat(Dt(e, a.lineN, l.lineN)).concat(i.view.slice(l.index)), 
      i.viewTo += n) :Et(e);
    }
    var s = i.externalMeasured;
    s && (r < s.lineN ? s.lineN += n :t < s.lineN + s.size && (i.externalMeasured = null));
  }
  function It(e, t, r) {
    e.curOp.viewChanged = !0;
    var n = e.display, i = e.display.externalMeasured;
    if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
      var o = n.view[Pt(e, t)];
      if (null != o.node) {
        var a = o.changes || (o.changes = []);
        -1 == Wi(a, r) && a.push(r);
      }
    }
  }
  function Et(e) {
    e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
  }
  function Pt(e, t) {
    if (t >= e.display.viewTo) return null;
    if ((t -= e.display.viewFrom) < 0) return null;
    for (var r = e.display.view, n = 0; n < r.length; n++) if ((t -= r[n].size) < 0) return n;
  }
  function Ht(e, t, r, n) {
    var i, o = Pt(e, t), a = e.display.view;
    if (!Eo || r == e.doc.first + e.doc.size) return {
      index:o,
      lineN:r
    };
    for (var l = 0, s = e.display.viewFrom; l < o; l++) s += a[l].size;
    if (s != t) {
      if (n > 0) {
        if (o == a.length - 1) return null;
        i = s + a[o].size - t, o++;
      } else i = s - t;
      t += i, r += i;
    }
    for (;xn(e.doc, r) != r; ) {
      if (o == (n < 0 ? 0 :a.length - 1)) return null;
      r += n * a[o - (n < 0 ? 1 :0)].size, o += n;
    }
    return {
      index:o,
      lineN:r
    };
  }
  function Ft(e, t, r) {
    var n = e.display;
    0 == n.view.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = Dt(e, t, r), 
    n.viewFrom = t) :(n.viewFrom > t ? n.view = Dt(e, t, n.viewFrom).concat(n.view) :n.viewFrom < t && (n.view = n.view.slice(Pt(e, t))), 
    n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(Dt(e, n.viewTo, r)) :n.viewTo > r && (n.view = n.view.slice(0, Pt(e, r)))), 
    n.viewTo = r;
  }
  function jt(e) {
    for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
      var i = t[n];
      i.hidden || i.node && !i.changes || ++r;
    }
    return r;
  }
  function Bt(e) {
    function t() {
      i.activeTouch && (o = setTimeout(function() {
        i.activeTouch = null;
      }, 1e3), a = i.activeTouch, a.end = +new Date());
    }
    function r(e) {
      if (1 != e.touches.length) return !1;
      var t = e.touches[0];
      return t.radiusX <= 1 && t.radiusY <= 1;
    }
    function n(e, t) {
      if (null == t.left) return !0;
      var r = t.left - e.left, n = t.top - e.top;
      return r * r + n * n > 400;
    }
    var i = e.display;
    Aa(i.scroller, "mousedown", At(e, $t)), bo && xo < 11 ? Aa(i.scroller, "dblclick", At(e, function(t) {
      if (!Mi(e, t)) {
        var r = Vt(e, t);
        if (r && !Qt(e, t) && !Kt(e.display, t)) {
          La(t);
          var n = e.findWordAt(r);
          xe(e.doc, n.anchor, n.head);
        }
      }
    })) :Aa(i.scroller, "dblclick", function(t) {
      Mi(e, t) || La(t);
    }), qo || Aa(i.scroller, "contextmenu", function(t) {
      yr(e, t);
    });
    var o, a = {
      end:0
    };
    Aa(i.scroller, "touchstart", function(t) {
      if (!Mi(e, t) && !r(t)) {
        clearTimeout(o);
        var n = +new Date();
        i.activeTouch = {
          start:n,
          moved:!1,
          prev:n - a.end <= 300 ? a :null
        }, 1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX, i.activeTouch.top = t.touches[0].pageY);
      }
    }), Aa(i.scroller, "touchmove", function() {
      i.activeTouch && (i.activeTouch.moved = !0);
    }), Aa(i.scroller, "touchend", function(r) {
      var o = i.activeTouch;
      if (o && !Kt(i, r) && null != o.left && !o.moved && new Date() - o.start < 300) {
        var a, l = e.coordsChar(i.activeTouch, "page");
        a = !o.prev || n(o, o.prev) ? new de(l, l) :!o.prev.prev || n(o, o.prev.prev) ? e.findWordAt(l) :new de(Po(l.line, 0), me(e.doc, Po(l.line + 1, 0))), 
        e.setSelection(a.anchor, a.head), e.focus(), La(r);
      }
      t();
    }), Aa(i.scroller, "touchcancel", t), Aa(i.scroller, "scroll", function() {
      i.scroller.clientHeight && (nr(e, i.scroller.scrollTop), ir(e, i.scroller.scrollLeft, !0), 
      Wa(e, "scroll", e));
    }), Aa(i.scroller, "mousewheel", function(t) {
      or(e, t);
    }), Aa(i.scroller, "DOMMouseScroll", function(t) {
      or(e, t);
    }), Aa(i.wrapper, "scroll", function() {
      i.wrapper.scrollTop = i.wrapper.scrollLeft = 0;
    }), i.dragFunctions = {
      enter:function(t) {
        Mi(e, t) || za(t);
      },
      over:function(t) {
        Mi(e, t) || (tr(e, t), za(t));
      },
      start:function(t) {
        er(e, t);
      },
      drop:At(e, Jt),
      leave:function(t) {
        Mi(e, t) || rr(e);
      }
    };
    var l = i.input.getField();
    Aa(l, "keyup", function(t) {
      pr.call(e, t);
    }), Aa(l, "keydown", At(e, dr)), Aa(l, "keypress", At(e, hr)), Aa(l, "focus", Pi(gr, e)), 
    Aa(l, "blur", Pi(vr, e));
  }
  function Rt(t, r, n) {
    if (!r != !(n && n != e.Init)) {
      var i = t.display.dragFunctions, o = r ? Aa :Na;
      o(t.display.scroller, "dragstart", i.start), o(t.display.scroller, "dragenter", i.enter), 
      o(t.display.scroller, "dragover", i.over), o(t.display.scroller, "dragleave", i.leave), 
      o(t.display.scroller, "drop", i.drop);
    }
  }
  function Ut(e) {
    var t = e.display;
    t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, 
    t.scrollbarsClipped = !1, e.setSize());
  }
  function Kt(e, t) {
    for (var r = wi(t); r != e.wrapper; r = r.parentNode) if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0;
  }
  function Vt(e, t, r, n) {
    var i = e.display;
    if (!r && "true" == wi(t).getAttribute("cm-not-content")) return null;
    var o, a, l = i.lineSpace.getBoundingClientRect();
    try {
      o = t.clientX - l.left, a = t.clientY - l.top;
    } catch (t) {
      return null;
    }
    var s, c = gt(e, o, a);
    if (n && 1 == c.xRel && (s = Yn(e.doc, c.line).text).length == c.ch) {
      var u = Fa(s, s.length, e.options.tabSize) - s.length;
      c = Po(c.line, Math.max(0, Math.round((o - Ke(e.display).left) / bt(e.display)) - u));
    }
    return c;
  }
  function $t(e) {
    var t = this, r = t.display;
    if (!(Mi(t, e) || r.activeTouch && r.input.supportsTouch())) {
      if (r.shift = e.shiftKey, Kt(r, e)) return void (wo || (r.scroller.draggable = !1, 
      setTimeout(function() {
        r.scroller.draggable = !0;
      }, 100)));
      if (!Qt(t, e)) {
        var n = Vt(t, e);
        switch (window.focus(), _i(e)) {
         case 1:
          t.state.selectingText ? t.state.selectingText(e) :n ? Gt(t, e, n) :wi(e) == r.scroller && La(e);
          break;

         case 2:
          wo && (t.state.lastMiddleDown = +new Date()), n && xe(t.doc, n), setTimeout(function() {
            r.input.focus();
          }, 20), La(e);
          break;

         case 3:
          qo ? yr(t, e) :mr(t);
        }
      }
    }
  }
  function Gt(e, t, r) {
    bo ? setTimeout(Pi(Z, e), 0) :e.curOp.focus = Ki();
    var n, i = +new Date();
    Ro && Ro.time > i - 400 && 0 == Ho(Ro.pos, r) ? n = "triple" :Bo && Bo.time > i - 400 && 0 == Ho(Bo.pos, r) ? (n = "double", 
    Ro = {
      time:i,
      pos:r
    }) :(n = "single", Bo = {
      time:i,
      pos:r
    });
    var o, a = e.doc.sel, l = Ao ? t.metaKey :t.ctrlKey;
    e.options.dragDrop && el && !e.isReadOnly() && "single" == n && (o = a.contains(r)) > -1 && (Ho((o = a.ranges[o]).from(), r) < 0 || r.xRel > 0) && (Ho(o.to(), r) > 0 || r.xRel < 0) ? Xt(e, t, r, l) :Zt(e, t, r, n, l);
  }
  function Xt(e, t, r, n) {
    var i = e.display, o = +new Date(), a = At(e, function(l) {
      wo && (i.scroller.draggable = !1), e.state.draggingText = !1, Na(document, "mouseup", a), 
      Na(i.scroller, "drop", a), Math.abs(t.clientX - l.clientX) + Math.abs(t.clientY - l.clientY) < 10 && (La(l), 
      !n && +new Date() - 200 < o && xe(e.doc, r), wo || bo && 9 == xo ? setTimeout(function() {
        document.body.focus(), i.input.focus();
      }, 20) :i.input.focus());
    });
    wo && (i.scroller.draggable = !0), e.state.draggingText = a, a.copy = Ao ? t.altKey :t.ctrlKey, 
    i.scroller.dragDrop && i.scroller.dragDrop(), Aa(document, "mouseup", a), Aa(i.scroller, "drop", a);
  }
  function Zt(e, t, r, n, i) {
    function o(t) {
      if (0 != Ho(g, t)) if (g = t, "rect" == n) {
        for (var i = [], o = e.options.tabSize, a = Fa(Yn(c, r.line).text, r.ch, o), l = Fa(Yn(c, t.line).text, t.ch, o), s = Math.min(a, l), p = Math.max(a, l), h = Math.min(r.line, t.line), m = Math.min(e.lastLine(), Math.max(r.line, t.line)); h <= m; h++) {
          var v = Yn(c, h).text, y = ja(v, s, o);
          s == p ? i.push(new de(Po(h, y), Po(h, y))) :v.length > y && i.push(new de(Po(h, y), Po(h, ja(v, p, o))));
        }
        i.length || i.push(new de(r, r)), Me(c, fe(f.ranges.slice(0, d).concat(i), d), {
          origin:"*mouse",
          scroll:!1
        }), e.scrollIntoView(t);
      } else {
        var b = u, x = b.anchor, w = t;
        if ("single" != n) {
          if ("double" == n) var _ = e.findWordAt(t); else var _ = new de(Po(t.line, 0), me(c, Po(t.line + 1, 0)));
          Ho(_.anchor, x) > 0 ? (w = _.head, x = X(b.from(), _.anchor)) :(w = _.anchor, x = G(b.to(), _.head));
        }
        var i = f.ranges.slice(0);
        i[d] = new de(me(c, x), w), Me(c, fe(i, d), Pa);
      }
    }
    function a(t) {
      var r = ++y, i = Vt(e, t, !0, "rect" == n);
      if (i) if (0 != Ho(i, g)) {
        e.curOp.focus = Ki(), o(i);
        var l = x(s, c);
        (i.line >= l.to || i.line < l.from) && setTimeout(At(e, function() {
          y == r && a(t);
        }), 150);
      } else {
        var u = t.clientY < v.top ? -20 :t.clientY > v.bottom ? 20 :0;
        u && setTimeout(At(e, function() {
          y == r && (s.scroller.scrollTop += u, a(t));
        }), 50);
      }
    }
    function l(t) {
      e.state.selectingText = !1, y = Infinity, La(t), s.input.focus(), Na(document, "mousemove", b), 
      Na(document, "mouseup", w), c.history.lastSelOrigin = null;
    }
    var s = e.display, c = e.doc;
    La(t);
    var u, d, f = c.sel, p = f.ranges;
    if (i && !t.shiftKey ? (d = c.sel.contains(r), u = d > -1 ? p[d] :new de(r, r)) :(u = c.sel.primary(), 
    d = c.sel.primIndex), Oo ? t.shiftKey && t.metaKey :t.altKey) n = "rect", i || (u = new de(r, r)), 
    r = Vt(e, t, !0, !0), d = -1; else if ("double" == n) {
      var h = e.findWordAt(r);
      u = e.display.shift || c.extend ? be(c, u, h.anchor, h.head) :h;
    } else if ("triple" == n) {
      var m = new de(Po(r.line, 0), me(c, Po(r.line + 1, 0)));
      u = e.display.shift || c.extend ? be(c, u, m.anchor, m.head) :m;
    } else u = be(c, u, r);
    i ? -1 == d ? (d = p.length, Me(c, fe(p.concat([ u ]), d), {
      scroll:!1,
      origin:"*mouse"
    })) :p.length > 1 && p[d].empty() && "single" == n && !t.shiftKey ? (Me(c, fe(p.slice(0, d).concat(p.slice(d + 1)), 0), {
      scroll:!1,
      origin:"*mouse"
    }), f = c.sel) :_e(c, d, u, Pa) :(d = 0, Me(c, new ue([ u ], 0), Pa), f = c.sel);
    var g = r, v = s.wrapper.getBoundingClientRect(), y = 0, b = At(e, function(e) {
      _i(e) ? a(e) :l(e);
    }), w = At(e, l);
    e.state.selectingText = w, Aa(document, "mousemove", b), Aa(document, "mouseup", w);
  }
  function Yt(e, t, r, n) {
    try {
      var i = t.clientX, o = t.clientY;
    } catch (t) {
      return !1;
    }
    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
    n && La(t);
    var a = e.display, l = a.lineDiv.getBoundingClientRect();
    if (o > l.bottom || !Ti(e, r)) return xi(t);
    o -= l.top - a.viewOffset;
    for (var s = 0; s < e.options.gutters.length; ++s) {
      var c = a.gutters.childNodes[s];
      if (c && c.getBoundingClientRect().right >= i) {
        var u = ri(e.doc, o), d = e.options.gutters[s];
        return Wa(e, r, e, u, d, t), xi(t);
      }
    }
  }
  function Qt(e, t) {
    return Yt(e, t, "gutterClick", !0);
  }
  function Jt(e) {
    var t = this;
    if (rr(t), !Mi(t, e) && !Kt(t.display, e)) {
      La(e), bo && ($o = +new Date());
      var r = Vt(t, e, !0), n = e.dataTransfer.files;
      if (r && !t.isReadOnly()) if (n && n.length && window.FileReader && window.File) for (var i = n.length, o = Array(i), a = 0, l = function(e, n) {
        if (!t.options.allowDropFileTypes || -1 != Wi(t.options.allowDropFileTypes, e.type)) {
          var l = new FileReader();
          l.onload = At(t, function() {
            var e = l.result;
            if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[n] = e, ++a == i) {
              r = me(t.doc, r);
              var s = {
                from:r,
                to:r,
                text:t.doc.splitLines(o.join(t.doc.lineSeparator())),
                origin:"paste"
              };
              Sr(t.doc, s), Se(t.doc, pe(r, Jo(s)));
            }
          }), l.readAsText(e);
        }
      }, s = 0; s < i; ++s) l(n[s], s); else {
        if (t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), 
        void setTimeout(function() {
          t.display.input.focus();
        }, 20);
        try {
          var o = e.dataTransfer.getData("Text");
          if (o) {
            if (t.state.draggingText && !t.state.draggingText.copy) var c = t.listSelections();
            if (Le(t.doc, pe(r, r)), c) for (var s = 0; s < c.length; ++s) Or(t.doc, "", c[s].anchor, c[s].head, "drag");
            t.replaceSelection(o, "around", "paste"), t.display.input.focus();
          }
        } catch (e) {}
      }
    }
  }
  function er(e, t) {
    if (bo && (!e.state.draggingText || +new Date() - $o < 100)) return void za(t);
    if (!Mi(e, t) && !Kt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), 
    t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !So)) {
      var r = Bi("img", null, null, "position: fixed; left: 0; top: 0;");
      r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 
      Co && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), 
      t.dataTransfer.setDragImage(r, 0, 0), Co && r.parentNode.removeChild(r);
    }
  }
  function tr(e, t) {
    var r = Vt(e, t);
    if (r) {
      var n = document.createDocumentFragment();
      Ie(e, r, n), e.display.dragCursor || (e.display.dragCursor = Bi("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), 
      e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), Ui(e.display.dragCursor, n);
    }
  }
  function rr(e) {
    e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), 
    e.display.dragCursor = null);
  }
  function nr(e, t) {
    Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, go || z(e, {
      top:t
    }), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), 
    go && z(e), He(e, 100));
  }
  function ir(e, t, r) {
    (r ? t == e.doc.scrollLeft :Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), 
    e.doc.scrollLeft = t, w(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), 
    e.display.scrollbars.setScrollLeft(t));
  }
  function or(e, t) {
    var r = Zo(t), n = r.x, i = r.y, o = e.display, a = o.scroller, l = a.scrollWidth > a.clientWidth, s = a.scrollHeight > a.clientHeight;
    if (n && l || i && s) {
      if (i && Ao && wo) e:for (var c = t.target, u = o.view; c != a; c = c.parentNode) for (var d = 0; d < u.length; d++) if (u[d].node == c) {
        e.display.currentWheelTarget = c;
        break e;
      }
      if (n && !go && !Co && null != Xo) return i && s && nr(e, Math.max(0, Math.min(a.scrollTop + i * Xo, a.scrollHeight - a.clientHeight))), 
      ir(e, Math.max(0, Math.min(a.scrollLeft + n * Xo, a.scrollWidth - a.clientWidth))), 
      (!i || i && s) && La(t), void (o.wheelStartX = null);
      if (i && null != Xo) {
        var f = i * Xo, p = e.doc.scrollTop, h = p + o.wrapper.clientHeight;
        f < 0 ? p = Math.max(0, p + f - 50) :h = Math.min(e.doc.height, h + f + 50), z(e, {
          top:p,
          bottom:h
        });
      }
      Go < 20 && (null == o.wheelStartX ? (o.wheelStartX = a.scrollLeft, o.wheelStartY = a.scrollTop, 
      o.wheelDX = n, o.wheelDY = i, setTimeout(function() {
        if (null != o.wheelStartX) {
          var e = a.scrollLeft - o.wheelStartX, t = a.scrollTop - o.wheelStartY, r = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
          o.wheelStartX = o.wheelStartY = null, r && (Xo = (Xo * Go + r) / (Go + 1), ++Go);
        }
      }, 200)) :(o.wheelDX += n, o.wheelDY += i));
    }
  }
  function ar(e, t, r) {
    if ("string" == typeof t && !(t = ua[t])) return !1;
    e.display.input.ensurePolled();
    var n = e.display.shift, i = !1;
    try {
      e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != Ia;
    } finally {
      e.display.shift = n, e.state.suppressEdits = !1;
    }
    return i;
  }
  function lr(e, t, r) {
    for (var n = 0; n < e.state.keyMaps.length; n++) {
      var i = fa(t, e.state.keyMaps[n], r, e);
      if (i) return i;
    }
    return e.options.extraKeys && fa(t, e.options.extraKeys, r, e) || fa(t, e.options.keyMap, r, e);
  }
  function sr(e, t, r, n) {
    var i = e.state.keySeq;
    if (i) {
      if (pa(t)) return "handled";
      Yo.set(50, function() {
        e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
      }), t = i + " " + t;
    }
    var o = lr(e, t, n);
    return "multi" == o && (e.state.keySeq = t), "handled" == o && Ci(e, "keyHandled", e, t, r), 
    "handled" != o && "multi" != o || (La(r), Pe(e)), i && !o && /\'$/.test(t) ? (La(r), 
    !0) :!!o;
  }
  function cr(e, t) {
    var r = ha(t, !0);
    return !!r && (t.shiftKey && !e.state.keySeq ? sr(e, "Shift-" + r, t, function(t) {
      return ar(e, t, !0);
    }) || sr(e, r, t, function(t) {
      if ("string" == typeof t ? /^go[A-Z]/.test(t) :t.motion) return ar(e, t);
    }) :sr(e, r, t, function(t) {
      return ar(e, t);
    }));
  }
  function ur(e, t, r) {
    return sr(e, "'" + r + "'", t, function(t) {
      return ar(e, t, !0);
    });
  }
  function dr(e) {
    var t = this;
    if (t.curOp.focus = Ki(), !Mi(t, e)) {
      bo && xo < 11 && 27 == e.keyCode && (e.returnValue = !1);
      var r = e.keyCode;
      t.display.shift = 16 == r || e.shiftKey;
      var n = cr(t, e);
      Co && (Qo = n ? r :null, !n && 88 == r && !nl && (Ao ? e.metaKey :e.ctrlKey) && t.replaceSelection("", null, "cut")), 
      18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || fr(t);
    }
  }
  function fr(e) {
    function t(e) {
      18 != e.keyCode && e.altKey || (Ya(r, "CodeMirror-crosshair"), Na(document, "keyup", t), 
      Na(document, "mouseover", t));
    }
    var r = e.display.lineDiv;
    Qa(r, "CodeMirror-crosshair"), Aa(document, "keyup", t), Aa(document, "mouseover", t);
  }
  function pr(e) {
    16 == e.keyCode && (this.doc.sel.shift = !1), Mi(this, e);
  }
  function hr(e) {
    var t = this;
    if (!(Kt(t.display, e) || Mi(t, e) || e.ctrlKey && !e.altKey || Ao && e.metaKey)) {
      var r = e.keyCode, n = e.charCode;
      if (Co && r == Qo) return Qo = null, void La(e);
      if (!Co || e.which && !(e.which < 10) || !cr(t, e)) {
        ur(t, e, String.fromCharCode(null == n ? r :n)) || t.display.input.onKeyPress(e);
      }
    }
  }
  function mr(e) {
    e.state.delayingBlurEvent = !0, setTimeout(function() {
      e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, vr(e));
    }, 100);
  }
  function gr(e) {
    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Wa(e, "focus", e), 
    e.state.focused = !0, Qa(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), 
    wo && setTimeout(function() {
      e.display.input.reset(!0);
    }, 20)), e.display.input.receivedFocus()), Pe(e));
  }
  function vr(e) {
    e.state.delayingBlurEvent || (e.state.focused && (Wa(e, "blur", e), e.state.focused = !1, 
    Ya(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), 
    setTimeout(function() {
      e.state.focused || (e.display.shift = !1);
    }, 150));
  }
  function yr(e, t) {
    Kt(e.display, t) || br(e, t) || Mi(e, t, "contextmenu") || e.display.input.onContextMenu(t);
  }
  function br(e, t) {
    return !!Ti(e, "gutterContextMenu") && Yt(e, t, "gutterContextMenu", !1);
  }
  function xr(e, t) {
    if (Ho(e, t.from) < 0) return e;
    if (Ho(e, t.to) <= 0) return Jo(t);
    var r = e.line + t.text.length - (t.to.line - t.from.line) - 1, n = e.ch;
    return e.line == t.to.line && (n += Jo(t).ch - t.to.ch), Po(r, n);
  }
  function wr(e, t) {
    for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
      var i = e.sel.ranges[n];
      r.push(new de(xr(i.anchor, t), xr(i.head, t)));
    }
    return fe(r, e.sel.primIndex);
  }
  function _r(e, t, r) {
    return e.line == t.line ? Po(r.line, e.ch - t.ch + r.ch) :Po(r.line + (e.line - t.line), e.ch);
  }
  function kr(e, t, r) {
    for (var n = [], i = Po(e.first, 0), o = i, a = 0; a < t.length; a++) {
      var l = t[a], s = _r(l.from, i, o), c = _r(Jo(l), i, o);
      if (i = l.to, o = c, "around" == r) {
        var u = e.sel.ranges[a], d = Ho(u.head, u.anchor) < 0;
        n[a] = new de(d ? c :s, d ? s :c);
      } else n[a] = new de(s, s);
    }
    return new ue(n, e.sel.primIndex);
  }
  function Cr(e, t, r) {
    var n = {
      canceled:!1,
      from:t.from,
      to:t.to,
      text:t.text,
      origin:t.origin,
      cancel:function() {
        this.canceled = !0;
      }
    };
    return r && (n.update = function(t, r, n, i) {
      t && (this.from = me(e, t)), r && (this.to = me(e, r)), n && (this.text = n), i !== undefined && (this.origin = i);
    }), Wa(e, "beforeChange", e, n), e.cm && Wa(e.cm, "beforeChange", e.cm, n), n.canceled ? null :{
      from:n.from,
      to:n.to,
      text:n.text,
      origin:n.origin
    };
  }
  function Sr(e, t, r) {
    if (e.cm) {
      if (!e.cm.curOp) return At(e.cm, Sr)(e, t, r);
      if (e.cm.state.suppressEdits) return;
    }
    if (!(Ti(e, "beforeChange") || e.cm && Ti(e.cm, "beforeChange")) || (t = Cr(e, t, !0))) {
      var n = Io && !r && sn(e, t.from, t.to);
      if (n) for (var i = n.length - 1; i >= 0; --i) Mr(e, {
        from:n[i].from,
        to:n[i].to,
        text:i ? [ "" ] :t.text
      }); else Mr(e, t);
    }
  }
  function Mr(e, t) {
    if (1 != t.text.length || "" != t.text[0] || 0 != Ho(t.from, t.to)) {
      var r = wr(e, t);
      ci(e, t, r, e.cm ? e.cm.curOp.id :NaN), zr(e, t, r, on(e, t));
      var n = [];
      Xn(e, function(e, r) {
        r || -1 != Wi(n, e.history) || (bi(e.history, t), n.push(e.history)), zr(e, t, null, on(e, t));
      });
    }
  }
  function Lr(e, t, r) {
    if (!e.cm || !e.cm.state.suppressEdits) {
      for (var n, i = e.history, o = e.sel, a = "undo" == t ? i.done :i.undone, l = "undo" == t ? i.undone :i.done, s = 0; s < a.length && (n = a[s], 
      r ? !n.ranges || n.equals(e.sel) :n.ranges); s++) ;
      if (s != a.length) {
        for (i.lastOrigin = i.lastSelOrigin = null; n = a.pop(), n.ranges; ) {
          if (fi(n, l), r && !n.equals(e.sel)) return void Me(e, n, {
            clearRedo:!1
          });
          o = n;
        }
        var c = [];
        fi(o, l), l.push({
          changes:c,
          generation:i.generation
        }), i.generation = n.generation || ++i.maxGeneration;
        for (var u = Ti(e, "beforeChange") || e.cm && Ti(e.cm, "beforeChange"), s = n.changes.length - 1; s >= 0; --s) {
          var d = n.changes[s];
          if (d.origin = t, u && !Cr(e, d, !1)) return void (a.length = 0);
          c.push(ai(e, d));
          var f = s ? wr(e, d) :Ni(a);
          zr(e, d, f, ln(e, d)), !s && e.cm && e.cm.scrollIntoView({
            from:d.from,
            to:Jo(d)
          });
          var p = [];
          Xn(e, function(e, t) {
            t || -1 != Wi(p, e.history) || (bi(e.history, d), p.push(e.history)), zr(e, d, null, ln(e, d));
          });
        }
      }
    }
  }
  function Tr(e, t) {
    if (0 != t && (e.first += t, e.sel = new ue(Di(e.sel.ranges, function(e) {
      return new de(Po(e.anchor.line + t, e.anchor.ch), Po(e.head.line + t, e.head.ch));
    }), e.sel.primIndex), e.cm)) {
      qt(e.cm, e.first, e.first - t, t);
      for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) It(e.cm, n, "gutter");
    }
  }
  function zr(e, t, r, n) {
    if (e.cm && !e.cm.curOp) return At(e.cm, zr)(e, t, r, n);
    if (t.to.line < e.first) return void Tr(e, t.text.length - 1 - (t.to.line - t.from.line));
    if (!(t.from.line > e.lastLine())) {
      if (t.from.line < e.first) {
        var i = t.text.length - 1 - (e.first - t.from.line);
        Tr(e, i), t = {
          from:Po(e.first, 0),
          to:Po(t.to.line + i, t.to.ch),
          text:[ Ni(t.text) ],
          origin:t.origin
        };
      }
      var o = e.lastLine();
      t.to.line > o && (t = {
        from:t.from,
        to:Po(o, Yn(e, o).text.length),
        text:[ t.text[0] ],
        origin:t.origin
      }), t.removed = Qn(e, t.from, t.to), r || (r = wr(e, t)), e.cm ? Ar(e.cm, t, n) :Vn(e, t, n), 
      Le(e, r, Ea);
    }
  }
  function Ar(e, t, r) {
    var n = e.doc, i = e.display, a = t.from, l = t.to, s = !1, c = a.line;
    e.options.lineWrapping || (c = ti(yn(Yn(n, a.line))), n.iter(c, l.line + 1, function(e) {
      if (e == i.maxLine) return s = !0, !0;
    })), n.sel.contains(t.from, t.to) > -1 && Li(e), Vn(n, t, r, o(e)), e.options.lineWrapping || (n.iter(c, a.line + t.text.length, function(e) {
      var t = d(e);
      t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, 
      s = !1);
    }), s && (e.curOp.updateMaxLine = !0)), n.frontier = Math.min(n.frontier, a.line), 
    He(e, 400);
    var u = t.text.length - (l.line - a.line) - 1;
    t.full ? qt(e) :a.line != l.line || 1 != t.text.length || Kn(e.doc, t) ? qt(e, a.line, l.line + 1, u) :It(e, a.line, "text");
    var f = Ti(e, "changes"), p = Ti(e, "change");
    if (p || f) {
      var h = {
        from:a,
        to:l,
        text:t.text,
        removed:t.removed,
        origin:t.origin
      };
      p && Ci(e, "change", e, h), f && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h);
    }
    e.display.selForContextMenu = null;
  }
  function Or(e, t, r, n, i) {
    if (n || (n = r), Ho(n, r) < 0) {
      var o = n;
      n = r, r = o;
    }
    "string" == typeof t && (t = e.splitLines(t)), Sr(e, {
      from:r,
      to:n,
      text:t,
      origin:i
    });
  }
  function Nr(e, t) {
    if (!Mi(e, "scrollCursorIntoView")) {
      var r = e.display, n = r.sizer.getBoundingClientRect(), i = null;
      if (t.top + n.top < 0 ? i = !0 :t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), 
      null != i && !Lo) {
        var o = Bi("div", "\u200b", null, "position: absolute; top: " + (t.top - r.viewOffset - Re(e.display)) + "px; height: " + (t.bottom - t.top + Ve(e) + r.barHeight) + "px; left: " + t.left + "px; width: 2px;");
        e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
      }
    }
  }
  function Wr(e, t, r, n) {
    null == n && (n = 0);
    for (var i = 0; i < 5; i++) {
      var o = !1, a = pt(e, t), l = r && r != t ? pt(e, r) :a, s = qr(e, Math.min(a.left, l.left), Math.min(a.top, l.top) - n, Math.max(a.left, l.left), Math.max(a.bottom, l.bottom) + n), c = e.doc.scrollTop, u = e.doc.scrollLeft;
      if (null != s.scrollTop && (nr(e, s.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (o = !0)), 
      null != s.scrollLeft && (ir(e, s.scrollLeft), Math.abs(e.doc.scrollLeft - u) > 1 && (o = !0)), 
      !o) break;
    }
    return a;
  }
  function Dr(e, t, r, n, i) {
    var o = qr(e, t, r, n, i);
    null != o.scrollTop && nr(e, o.scrollTop), null != o.scrollLeft && ir(e, o.scrollLeft);
  }
  function qr(e, t, r, n, i) {
    var o = e.display, a = yt(e.display);
    r < 0 && (r = 0);
    var l = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop :o.scroller.scrollTop, s = Ge(e), c = {};
    i - r > s && (i = r + s);
    var u = e.doc.height + Ue(o), d = r < a, f = i > u - a;
    if (r < l) c.scrollTop = d ? 0 :r; else if (i > l + s) {
      var p = Math.min(r, (f ? u :i) - s);
      p != l && (c.scrollTop = p);
    }
    var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft :o.scroller.scrollLeft, m = $e(e) - (e.options.fixedGutter ? o.gutters.offsetWidth :0), g = n - t > m;
    return g && (n = t + m), t < 10 ? c.scrollLeft = 0 :t < h ? c.scrollLeft = Math.max(0, t - (g ? 0 :10)) :n > m + h - 3 && (c.scrollLeft = n + (g ? 0 :10) - m), 
    c;
  }
  function Ir(e, t, r) {
    null == t && null == r || Pr(e), null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft :e.curOp.scrollLeft) + t), 
    null != r && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop :e.curOp.scrollTop) + r);
  }
  function Er(e) {
    Pr(e);
    var t = e.getCursor(), r = t, n = t;
    e.options.lineWrapping || (r = t.ch ? Po(t.line, t.ch - 1) :t, n = Po(t.line, t.ch + 1)), 
    e.curOp.scrollToPos = {
      from:r,
      to:n,
      margin:e.options.cursorScrollMargin,
      isCursor:!0
    };
  }
  function Pr(e) {
    var t = e.curOp.scrollToPos;
    if (t) {
      e.curOp.scrollToPos = null;
      var r = ht(e, t.from), n = ht(e, t.to), i = qr(e, Math.min(r.left, n.left), Math.min(r.top, n.top) - t.margin, Math.max(r.right, n.right), Math.max(r.bottom, n.bottom) + t.margin);
      e.scrollTo(i.scrollLeft, i.scrollTop);
    }
  }
  function Hr(e, t, r, n) {
    var i, o = e.doc;
    null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = Be(e, t) :r = "prev");
    var a = e.options.tabSize, l = Yn(o, t), s = Fa(l.text, null, a);
    l.stateAfter && (l.stateAfter = null);
    var c, u = l.text.match(/^\s*/)[0];
    if (n || /\S/.test(l.text)) {
      if ("smart" == r && ((c = o.mode.indent(i, l.text.slice(u.length), l.text)) == Ia || c > 150)) {
        if (!n) return;
        r = "prev";
      }
    } else c = 0, r = "not";
    "prev" == r ? c = t > o.first ? Fa(Yn(o, t - 1).text, null, a) :0 :"add" == r ? c = s + e.options.indentUnit :"subtract" == r ? c = s - e.options.indentUnit :"number" == typeof r && (c = s + r), 
    c = Math.max(0, c);
    var d = "", f = 0;
    if (e.options.indentWithTabs) for (var p = Math.floor(c / a); p; --p) f += a, d += "\t";
    if (f < c && (d += Oi(c - f)), d != u) return Or(o, d, Po(t, 0), Po(t, u.length), "+input"), 
    l.stateAfter = null, !0;
    for (var p = 0; p < o.sel.ranges.length; p++) {
      var h = o.sel.ranges[p];
      if (h.head.line == t && h.head.ch < u.length) {
        var f = Po(t, u.length);
        _e(o, p, new de(f, f));
        break;
      }
    }
  }
  function Fr(e, t, r, n) {
    var i = t, o = t;
    return "number" == typeof t ? o = Yn(e, he(e, t)) :i = ti(t), null == i ? null :(n(o, i) && e.cm && It(e.cm, i, r), 
    o);
  }
  function jr(e, t) {
    for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
      for (var o = t(r[i]); n.length && Ho(o.from, Ni(n).to) <= 0; ) {
        var a = n.pop();
        if (Ho(a.from, o.from) < 0) {
          o.from = a.from;
          break;
        }
      }
      n.push(o);
    }
    zt(e, function() {
      for (var t = n.length - 1; t >= 0; t--) Or(e.doc, "", n[t].from, n[t].to, "+delete");
      Er(e);
    });
  }
  function Br(e, t, r, n, i) {
    function o() {
      var t = l + r;
      return !(t < e.first || t >= e.first + e.size) && (l = t, u = Yn(e, t));
    }
    function a(e) {
      var t = (i ? fo :po)(u, s, r, !0);
      if (null == t) {
        if (e || !o()) return !1;
        s = i ? (r < 0 ? io :no)(u) :r < 0 ? u.text.length :0;
      } else s = t;
      return !0;
    }
    var l = t.line, s = t.ch, c = r, u = Yn(e, l);
    if ("char" == n) a(); else if ("column" == n) a(!0); else if ("word" == n || "group" == n) for (var d = null, f = "group" == n, p = e.cm && e.cm.getHelper(t, "wordChars"), h = !0; !(r < 0) || a(!h); h = !1) {
      var m = u.text.charAt(s) || "\n", g = Hi(m, p) ? "w" :f && "\n" == m ? "n" :!f || /\s/.test(m) ? null :"p";
      if (!f || h || g || (g = "s"), d && d != g) {
        r < 0 && (r = 1, a());
        break;
      }
      if (g && (d = g), r > 0 && !a(!h)) break;
    }
    var v = Ne(e, Po(l, s), t, c, !0);
    return Ho(t, v) || (v.hitSide = !0), v;
  }
  function Rr(e, t, r, n) {
    var i, o = e.doc, a = t.left;
    if ("page" == n) {
      var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      i = t.top + r * (l - (r < 0 ? 1.5 :.5) * yt(e.display));
    } else "line" == n && (i = r > 0 ? t.bottom + 3 :t.top - 3);
    for (;;) {
      var s = gt(e, a, i);
      if (!s.outside) break;
      if (r < 0 ? i <= 0 :i >= o.height) {
        s.hitSide = !0;
        break;
      }
      i += 5 * r;
    }
    return s;
  }
  function Ur(t, r, n, i) {
    e.defaults[t] = r, n && (ta[t] = i ? function(e, t, r) {
      r != ra && n(e, t, r);
    } :n);
  }
  function Kr(e) {
    for (var t, r, n, i, o = e.split(/-(?!$)/), e = o[o.length - 1], a = 0; a < o.length - 1; a++) {
      var l = o[a];
      if (/^(cmd|meta|m)$/i.test(l)) i = !0; else if (/^a(lt)?$/i.test(l)) t = !0; else if (/^(c|ctrl|control)$/i.test(l)) r = !0; else {
        if (!/^s(hift)$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
        n = !0;
      }
    }
    return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), 
    e;
  }
  function Vr(e) {
    return "string" == typeof e ? da[e] :e;
  }
  function $r(e, t, r, n, i) {
    if (n && n.shared) return Gr(e, t, r, n, i);
    if (e.cm && !e.cm.curOp) return At(e.cm, $r)(e, t, r, n, i);
    var o = new va(e, i), a = Ho(t, r);
    if (n && Ei(n, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o;
    if (o.replacedWith && (o.collapsed = !0, o.widgetNode = Bi("span", [ o.replacedWith ], "CodeMirror-widget"), 
    n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (o.widgetNode.insertLeft = !0)), 
    o.collapsed) {
      if (vn(e, t.line, t, r, o) || t.line != r.line && vn(e, r.line, t, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
      Eo = !0;
    }
    o.addToHistory && ci(e, {
      from:t,
      to:r,
      origin:"markText"
    }, e.sel, NaN);
    var l, s = t.line, c = e.cm;
    if (e.iter(s, r.line + 1, function(e) {
      c && o.collapsed && !c.options.lineWrapping && yn(e) == c.display.maxLine && (l = !0), 
      o.collapsed && s != t.line && ei(e, 0), tn(e, new Qr(o, s == t.line ? t.ch :null, s == r.line ? r.ch :null)), 
      ++s;
    }), o.collapsed && e.iter(t.line, r.line + 1, function(t) {
      _n(e, t) && ei(t, 0);
    }), o.clearOnEnter && Aa(o, "beforeCursorEnter", function() {
      o.clear();
    }), o.readOnly && (Io = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), 
    o.collapsed && (o.id = ++ga, o.atomic = !0), c) {
      if (l && (c.curOp.updateMaxLine = !0), o.collapsed) qt(c, t.line, r.line + 1); else if (o.className || o.title || o.startStyle || o.endStyle || o.css) for (var u = t.line; u <= r.line; u++) It(c, u, "text");
      o.atomic && ze(c.doc), Ci(c, "markerAdded", c, o);
    }
    return o;
  }
  function Gr(e, t, r, n, i) {
    n = Ei(n), n.shared = !1;
    var o = [ $r(e, t, r, n, i) ], a = o[0], l = n.widgetNode;
    return Xn(e, function(e) {
      l && (n.widgetNode = l.cloneNode(!0)), o.push($r(e, me(e, t), me(e, r), n, i));
      for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
      a = Ni(o);
    }), new ya(o, a);
  }
  function Xr(e) {
    return e.findMarks(Po(e.first, 0), e.clipPos(Po(e.lastLine())), function(e) {
      return e.parent;
    });
  }
  function Zr(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r], i = n.find(), o = e.clipPos(i.from), a = e.clipPos(i.to);
      if (Ho(o, a)) {
        var l = $r(e, o, a, n.primary, n.primary.type);
        n.markers.push(l), l.parent = n;
      }
    }
  }
  function Yr(e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t], n = [ r.primary.doc ];
      Xn(r.primary.doc, function(e) {
        n.push(e);
      });
      for (var i = 0; i < r.markers.length; i++) {
        var o = r.markers[i];
        -1 == Wi(n, o.doc) && (o.parent = null, r.markers.splice(i--, 1));
      }
    }
  }
  function Qr(e, t, r) {
    this.marker = e, this.from = t, this.to = r;
  }
  function Jr(e, t) {
    if (e) for (var r = 0; r < e.length; ++r) {
      var n = e[r];
      if (n.marker == t) return n;
    }
  }
  function en(e, t) {
    for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
    return r;
  }
  function tn(e, t) {
    e.markedSpans = e.markedSpans ? e.markedSpans.concat([ t ]) :[ t ], t.marker.attachLine(e);
  }
  function rn(e, t, r) {
    if (e) for (var n, i = 0; i < e.length; ++i) {
      var o = e[i], a = o.marker, l = null == o.from || (a.inclusiveLeft ? o.from <= t :o.from < t);
      if (l || o.from == t && "bookmark" == a.type && (!r || !o.marker.insertLeft)) {
        var s = null == o.to || (a.inclusiveRight ? o.to >= t :o.to > t);
        (n || (n = [])).push(new Qr(a, o.from, s ? null :o.to));
      }
    }
    return n;
  }
  function nn(e, t, r) {
    if (e) for (var n, i = 0; i < e.length; ++i) {
      var o = e[i], a = o.marker, l = null == o.to || (a.inclusiveRight ? o.to >= t :o.to > t);
      if (l || o.from == t && "bookmark" == a.type && (!r || o.marker.insertLeft)) {
        var s = null == o.from || (a.inclusiveLeft ? o.from <= t :o.from < t);
        (n || (n = [])).push(new Qr(a, s ? null :o.from - t, null == o.to ? null :o.to - t));
      }
    }
    return n;
  }
  function on(e, t) {
    if (t.full) return null;
    var r = ve(e, t.from.line) && Yn(e, t.from.line).markedSpans, n = ve(e, t.to.line) && Yn(e, t.to.line).markedSpans;
    if (!r && !n) return null;
    var i = t.from.ch, o = t.to.ch, a = 0 == Ho(t.from, t.to), l = rn(r, i, a), s = nn(n, o, a), c = 1 == t.text.length, u = Ni(t.text).length + (c ? i :0);
    if (l) for (var d = 0; d < l.length; ++d) {
      var f = l[d];
      if (null == f.to) {
        var p = Jr(s, f.marker);
        p ? c && (f.to = null == p.to ? null :p.to + u) :f.to = i;
      }
    }
    if (s) for (var d = 0; d < s.length; ++d) {
      var f = s[d];
      if (null != f.to && (f.to += u), null == f.from) {
        var p = Jr(l, f.marker);
        p || (f.from = u, c && (l || (l = [])).push(f));
      } else f.from += u, c && (l || (l = [])).push(f);
    }
    l && (l = an(l)), s && s != l && (s = an(s));
    var h = [ l ];
    if (!c) {
      var m, g = t.text.length - 2;
      if (g > 0 && l) for (var d = 0; d < l.length; ++d) null == l[d].to && (m || (m = [])).push(new Qr(l[d].marker, null, null));
      for (var d = 0; d < g; ++d) h.push(m);
      h.push(s);
    }
    return h;
  }
  function an(e) {
    for (var t = 0; t < e.length; ++t) {
      var r = e[t];
      null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1);
    }
    return e.length ? e :null;
  }
  function ln(e, t) {
    var r = mi(e, t), n = on(e, t);
    if (!r) return n;
    if (!n) return r;
    for (var i = 0; i < r.length; ++i) {
      var o = r[i], a = n[i];
      if (o && a) e:for (var l = 0; l < a.length; ++l) {
        for (var s = a[l], c = 0; c < o.length; ++c) if (o[c].marker == s.marker) continue e;
        o.push(s);
      } else a && (r[i] = a);
    }
    return r;
  }
  function sn(e, t, r) {
    var n = null;
    if (e.iter(t.line, r.line + 1, function(e) {
      if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
        var r = e.markedSpans[t].marker;
        !r.readOnly || n && -1 != Wi(n, r) || (n || (n = [])).push(r);
      }
    }), !n) return null;
    for (var i = [ {
      from:t,
      to:r
    } ], o = 0; o < n.length; ++o) for (var a = n[o], l = a.find(0), s = 0; s < i.length; ++s) {
      var c = i[s];
      if (!(Ho(c.to, l.from) < 0 || Ho(c.from, l.to) > 0)) {
        var u = [ s, 1 ], d = Ho(c.from, l.from), f = Ho(c.to, l.to);
        (d < 0 || !a.inclusiveLeft && !d) && u.push({
          from:c.from,
          to:l.from
        }), (f > 0 || !a.inclusiveRight && !f) && u.push({
          from:l.to,
          to:c.to
        }), i.splice.apply(i, u), s += u.length - 1;
      }
    }
    return i;
  }
  function cn(e) {
    var t = e.markedSpans;
    if (t) {
      for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
      e.markedSpans = null;
    }
  }
  function un(e, t) {
    if (t) {
      for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
      e.markedSpans = t;
    }
  }
  function dn(e) {
    return e.inclusiveLeft ? -1 :0;
  }
  function fn(e) {
    return e.inclusiveRight ? 1 :0;
  }
  function pn(e, t) {
    var r = e.lines.length - t.lines.length;
    if (0 != r) return r;
    var n = e.find(), i = t.find(), o = Ho(n.from, i.from) || dn(e) - dn(t);
    if (o) return -o;
    var a = Ho(n.to, i.to) || fn(e) - fn(t);
    return a || t.id - e.id;
  }
  function hn(e, t) {
    var r, n = Eo && e.markedSpans;
    if (n) for (var i, o = 0; o < n.length; ++o) i = n[o], i.marker.collapsed && null == (t ? i.from :i.to) && (!r || pn(r, i.marker) < 0) && (r = i.marker);
    return r;
  }
  function mn(e) {
    return hn(e, !0);
  }
  function gn(e) {
    return hn(e, !1);
  }
  function vn(e, t, r, n, i) {
    var o = Yn(e, t), a = Eo && o.markedSpans;
    if (a) for (var l = 0; l < a.length; ++l) {
      var s = a[l];
      if (s.marker.collapsed) {
        var c = s.marker.find(0), u = Ho(c.from, r) || dn(s.marker) - dn(i), d = Ho(c.to, n) || fn(s.marker) - fn(i);
        if (!(u >= 0 && d <= 0 || u <= 0 && d >= 0) && (u <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? Ho(c.to, r) >= 0 :Ho(c.to, r) > 0) || u >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? Ho(c.from, n) <= 0 :Ho(c.from, n) < 0))) return !0;
      }
    }
  }
  function yn(e) {
    for (var t; t = mn(e); ) e = t.find(-1, !0).line;
    return e;
  }
  function bn(e) {
    for (var t, r; t = gn(e); ) e = t.find(1, !0).line, (r || (r = [])).push(e);
    return r;
  }
  function xn(e, t) {
    var r = Yn(e, t), n = yn(r);
    return r == n ? t :ti(n);
  }
  function wn(e, t) {
    if (t > e.lastLine()) return t;
    var r, n = Yn(e, t);
    if (!_n(e, n)) return t;
    for (;r = gn(n); ) n = r.find(1, !0).line;
    return ti(n) + 1;
  }
  function _n(e, t) {
    var r = Eo && t.markedSpans;
    if (r) for (var n, i = 0; i < r.length; ++i) if (n = r[i], n.marker.collapsed) {
      if (null == n.from) return !0;
      if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && kn(e, t, n)) return !0;
    }
  }
  function kn(e, t, r) {
    if (null == r.to) {
      var n = r.marker.find(1, !0);
      return kn(e, n.line, Jr(n.line.markedSpans, r.marker));
    }
    if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
    for (var i, o = 0; o < t.markedSpans.length; ++o) if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && kn(e, t, i)) return !0;
  }
  function Cn(e, t, r) {
    ni(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Ir(e, null, r);
  }
  function Sn(e) {
    if (null != e.height) return e.height;
    var t = e.doc.cm;
    if (!t) return 0;
    if (!Ga(document.body, e.node)) {
      var r = "position: relative;";
      e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), 
      e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), Ui(t.display.measure, Bi("div", [ e.node ], null, r));
    }
    return e.height = e.node.parentNode.offsetHeight;
  }
  function Mn(e, t, r, n) {
    var i = new ba(e, r, n), o = e.cm;
    return o && i.noHScroll && (o.display.alignWidgets = !0), Fr(e, t, "widget", function(t) {
      var r = t.widgets || (t.widgets = []);
      if (null == i.insertAt ? r.push(i) :r.splice(Math.min(r.length - 1, Math.max(0, i.insertAt)), 0, i), 
      i.line = t, o && !_n(e, t)) {
        var n = ni(t) < e.scrollTop;
        ei(t, t.height + Sn(i)), n && Ir(o, null, i.height), o.curOp.forceUpdate = !0;
      }
      return !0;
    }), i;
  }
  function Ln(e, t, r, n) {
    e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), 
    null != e.order && (e.order = null), cn(e), un(e, r);
    var i = n ? n(e) :1;
    i != e.height && ei(e, i);
  }
  function Tn(e) {
    e.parent = null, cn(e);
  }
  function zn(e, t) {
    if (e) for (;;) {
      var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
      if (!r) break;
      e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
      var n = r[1] ? "bgClass" :"textClass";
      null == t[n] ? t[n] = r[2] :new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + r[2]);
    }
    return e;
  }
  function An(t, r) {
    if (t.blankLine) return t.blankLine(r);
    if (t.innerMode) {
      var n = e.innerMode(t, r);
      return n.mode.blankLine ? n.mode.blankLine(n.state) :void 0;
    }
  }
  function On(t, r, n, i) {
    for (var o = 0; o < 10; o++) {
      i && (i[0] = e.innerMode(t, n).mode);
      var a = t.token(r, n);
      if (r.pos > r.start) return a;
    }
    throw new Error("Mode " + t.name + " failed to advance stream.");
  }
  function Nn(e, t, r, n) {
    function i(e) {
      return {
        start:d.start,
        end:d.pos,
        string:d.current(),
        type:o || null,
        state:e ? sa(a.mode, u) :u
      };
    }
    var o, a = e.doc, l = a.mode;
    t = me(a, t);
    var s, c = Yn(a, t.line), u = Be(e, t.line, r), d = new ma(c.text, e.options.tabSize);
    for (n && (s = []); (n || d.pos < t.ch) && !d.eol(); ) d.start = d.pos, o = On(l, d, u), 
    n && s.push(i(!0));
    return n ? s :i();
  }
  function Wn(e, t, r, n, i, o, a) {
    var l = r.flattenSpans;
    null == l && (l = e.options.flattenSpans);
    var s, c = 0, u = null, d = new ma(t, e.options.tabSize), f = e.options.addModeClass && [ null ];
    for ("" == t && zn(An(r, n), o); !d.eol(); ) {
      if (d.pos > e.options.maxHighlightLength ? (l = !1, a && In(e, t, n, d.pos), d.pos = t.length, 
      s = null) :s = zn(On(r, d, n, f), o), f) {
        var p = f[0].name;
        p && (s = "m-" + (s ? p + " " + s :p));
      }
      if (!l || u != s) {
        for (;c < d.start; ) c = Math.min(d.start, c + 5e4), i(c, u);
        u = s;
      }
      d.start = d.pos;
    }
    for (;c < d.pos; ) {
      var h = Math.min(d.pos, c + 5e4);
      i(h, u), c = h;
    }
  }
  function Dn(e, t, r, n) {
    var i = [ e.state.modeGen ], o = {};
    Wn(e, t.text, e.doc.mode, r, function(e, t) {
      i.push(e, t);
    }, o, n);
    for (var a = 0; a < e.state.overlays.length; ++a) {
      var l = e.state.overlays[a], s = 1, c = 0;
      Wn(e, t.text, l.mode, !0, function(e, t) {
        for (var r = s; c < e; ) {
          var n = i[s];
          n > e && i.splice(s, 1, e, i[s + 1], n), s += 2, c = Math.min(e, n);
        }
        if (t) if (l.opaque) i.splice(r, s - r, e, "cm-overlay " + t), s = r + 2; else for (;r < s; r += 2) {
          var o = i[r + 1];
          i[r + 1] = (o ? o + " " :"") + "cm-overlay " + t;
        }
      }, o);
    }
    return {
      styles:i,
      classes:o.bgClass || o.textClass ? o :null
    };
  }
  function qn(e, t, r) {
    if (!t.styles || t.styles[0] != e.state.modeGen) {
      var n = Be(e, ti(t)), i = Dn(e, t, t.text.length > e.options.maxHighlightLength ? sa(e.doc.mode, n) :n);
      t.stateAfter = n, t.styles = i.styles, i.classes ? t.styleClasses = i.classes :t.styleClasses && (t.styleClasses = null), 
      r === e.doc.frontier && e.doc.frontier++;
    }
    return t.styles;
  }
  function In(e, t, r, n) {
    var i = e.doc.mode, o = new ma(t, e.options.tabSize);
    for (o.start = o.pos = n || 0, "" == t && An(i, r); !o.eol(); ) On(i, o, r), o.start = o.pos;
  }
  function En(e, t) {
    if (!e || /^\s*$/.test(e)) return null;
    var r = t.addModeClass ? _a :wa;
    return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"));
  }
  function Pn(e, t) {
    var r = Bi("span", null, null, wo ? "padding-right: .1px" :null), n = {
      pre:Bi("pre", [ r ], "CodeMirror-line"),
      content:r,
      col:0,
      pos:0,
      cm:e,
      splitSpaces:(bo || wo) && e.getOption("lineWrapping")
    };
    t.measure = {};
    for (var i = 0; i <= (t.rest ? t.rest.length :0); i++) {
      var o, a = i ? t.rest[i - 1] :t.line;
      n.pos = 0, n.addToken = Fn, Qi(e.display.measure) && (o = ii(a)) && (n.addToken = Bn(n.addToken, o)), 
      n.map = [];
      Un(a, n, qn(e, a, t != e.display.externalMeasured && ti(a))), a.styleClasses && (a.styleClasses.bgClass && (n.bgClass = $i(a.styleClasses.bgClass, n.bgClass || "")), 
      a.styleClasses.textClass && (n.textClass = $i(a.styleClasses.textClass, n.textClass || ""))), 
      0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Yi(e.display.measure))), 
      0 == i ? (t.measure.map = n.map, t.measure.cache = {}) :((t.measure.maps || (t.measure.maps = [])).push(n.map), 
      (t.measure.caches || (t.measure.caches = [])).push({}));
    }
    if (wo) {
      var l = n.content.lastChild;
      (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack");
    }
    return Wa(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = $i(n.pre.className, n.textClass || "")), 
    n;
  }
  function Hn(e) {
    var t = Bi("span", "\u2022", "cm-invalidchar");
    return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), 
    t;
  }
  function Fn(e, t, r, n, i, o, a) {
    if (t) {
      var l = e.splitSpaces ? t.replace(/ {3,}/g, jn) :t, s = e.cm.state.specialChars, c = !1;
      if (s.test(t)) for (var u = document.createDocumentFragment(), d = 0; ;) {
        s.lastIndex = d;
        var f = s.exec(t), p = f ? f.index - d :t.length - d;
        if (p) {
          var h = document.createTextNode(l.slice(d, d + p));
          bo && xo < 9 ? u.appendChild(Bi("span", [ h ])) :u.appendChild(h), e.map.push(e.pos, e.pos + p, h), 
          e.col += p, e.pos += p;
        }
        if (!f) break;
        if (d += p + 1, "\t" == f[0]) {
          var m = e.cm.options.tabSize, g = m - e.col % m, h = u.appendChild(Bi("span", Oi(g), "cm-tab"));
          h.setAttribute("role", "presentation"), h.setAttribute("cm-text", "\t"), e.col += g;
        } else if ("\r" == f[0] || "\n" == f[0]) {
          var h = u.appendChild(Bi("span", "\r" == f[0] ? "\u240d" :"\u2424", "cm-invalidchar"));
          h.setAttribute("cm-text", f[0]), e.col += 1;
        } else {
          var h = e.cm.options.specialCharPlaceholder(f[0]);
          h.setAttribute("cm-text", f[0]), bo && xo < 9 ? u.appendChild(Bi("span", [ h ])) :u.appendChild(h), 
          e.col += 1;
        }
        e.map.push(e.pos, e.pos + 1, h), e.pos++;
      } else {
        e.col += t.length;
        var u = document.createTextNode(l);
        e.map.push(e.pos, e.pos + t.length, u), bo && xo < 9 && (c = !0), e.pos += t.length;
      }
      if (r || n || i || c || a) {
        var v = r || "";
        n && (v += n), i && (v += i);
        var y = Bi("span", [ u ], v, a);
        return o && (y.title = o), e.content.appendChild(y);
      }
      e.content.appendChild(u);
    }
  }
  function jn(e) {
    for (var t = " ", r = 0; r < e.length - 2; ++r) t += r % 2 ? " " :"\xa0";
    return t += " ";
  }
  function Bn(e, t) {
    return function(r, n, i, o, a, l, s) {
      i = i ? i + " cm-force-border" :"cm-force-border";
      for (var c = r.pos, u = c + n.length; ;) {
        for (var d = 0; d < t.length; d++) {
          var f = t[d];
          if (f.to > c && f.from <= c) break;
        }
        if (f.to >= u) return e(r, n, i, o, a, l, s);
        e(r, n.slice(0, f.to - c), i, o, null, l, s), o = null, n = n.slice(f.to - c), c = f.to;
      }
    };
  }
  function Rn(e, t, r, n) {
    var i = !n && r.widgetNode;
    i && e.map.push(e.pos, e.pos + t, i), !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), 
    i.setAttribute("cm-marker", r.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), 
    e.pos += t;
  }
  function Un(e, t, r) {
    var n = e.markedSpans, i = e.text, o = 0;
    if (n) for (var a, l, s, c, u, d, f, p = i.length, h = 0, m = 1, g = "", v = 0; ;) {
      if (v == h) {
        s = c = u = d = l = "", f = null, v = Infinity;
        for (var y, b = [], x = 0; x < n.length; ++x) {
          var w = n[x], _ = w.marker;
          "bookmark" == _.type && w.from == h && _.widgetNode ? b.push(_) :w.from <= h && (null == w.to || w.to > h || _.collapsed && w.to == h && w.from == h) ? (null != w.to && w.to != h && v > w.to && (v = w.to, 
          c = ""), _.className && (s += " " + _.className), _.css && (l = (l ? l + ";" :"") + _.css), 
          _.startStyle && w.from == h && (u += " " + _.startStyle), _.endStyle && w.to == v && (y || (y = [])).push(_.endStyle, w.to), 
          _.title && !d && (d = _.title), _.collapsed && (!f || pn(f.marker, _) < 0) && (f = w)) :w.from > h && v > w.from && (v = w.from);
        }
        if (y) for (var x = 0; x < y.length; x += 2) y[x + 1] == v && (c += " " + y[x]);
        if (!f || f.from == h) for (var x = 0; x < b.length; ++x) Rn(t, 0, b[x]);
        if (f && (f.from || 0) == h) {
          if (Rn(t, (null == f.to ? p + 1 :f.to) - h, f.marker, null == f.from), null == f.to) return;
          f.to == h && (f = !1);
        }
      }
      if (h >= p) break;
      for (var k = Math.min(p, v); ;) {
        if (g) {
          var C = h + g.length;
          if (!f) {
            var S = C > k ? g.slice(0, k - h) :g;
            t.addToken(t, S, a ? a + s :s, u, h + S.length == v ? c :"", d, l);
          }
          if (C >= k) {
            g = g.slice(k - h), h = k;
            break;
          }
          h = C, u = "";
        }
        g = i.slice(o, o = r[m++]), a = En(r[m++], t.cm.options);
      }
    } else for (var m = 1; m < r.length; m += 2) t.addToken(t, i.slice(o, o = r[m]), En(r[m + 1], t.cm.options));
  }
  function Kn(e, t) {
    return 0 == t.from.ch && 0 == t.to.ch && "" == Ni(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
  }
  function Vn(e, t, r, n) {
    function i(e) {
      return r ? r[e] :null;
    }
    function o(e, r, i) {
      Ln(e, r, i, n), Ci(e, "change", e, t);
    }
    function a(e, t) {
      for (var r = e, o = []; r < t; ++r) o.push(new xa(c[r], i(r), n));
      return o;
    }
    var l = t.from, s = t.to, c = t.text, u = Yn(e, l.line), d = Yn(e, s.line), f = Ni(c), p = i(c.length - 1), h = s.line - l.line;
    if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length); else if (Kn(e, t)) {
      var m = a(0, c.length - 1);
      o(d, d.text, p), h && e.remove(l.line, h), m.length && e.insert(l.line, m);
    } else if (u == d) if (1 == c.length) o(u, u.text.slice(0, l.ch) + f + u.text.slice(s.ch), p); else {
      var m = a(1, c.length - 1);
      m.push(new xa(f + u.text.slice(s.ch), p, n)), o(u, u.text.slice(0, l.ch) + c[0], i(0)), 
      e.insert(l.line + 1, m);
    } else if (1 == c.length) o(u, u.text.slice(0, l.ch) + c[0] + d.text.slice(s.ch), i(0)), 
    e.remove(l.line + 1, h); else {
      o(u, u.text.slice(0, l.ch) + c[0], i(0)), o(d, f + d.text.slice(s.ch), p);
      var m = a(1, c.length - 1);
      h > 1 && e.remove(l.line + 1, h - 1), e.insert(l.line + 1, m);
    }
    Ci(e, "change", e, t);
  }
  function $n(e) {
    this.lines = e, this.parent = null;
    for (var t = 0, r = 0; t < e.length; ++t) e[t].parent = this, r += e[t].height;
    this.height = r;
  }
  function Gn(e) {
    this.children = e;
    for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
      var i = e[n];
      t += i.chunkSize(), r += i.height, i.parent = this;
    }
    this.size = t, this.height = r, this.parent = null;
  }
  function Xn(e, t, r) {
    function n(e, i, o) {
      if (e.linked) for (var a = 0; a < e.linked.length; ++a) {
        var l = e.linked[a];
        if (l.doc != i) {
          var s = o && l.sharedHist;
          r && !s || (t(l.doc, s), n(l.doc, e, s));
        }
      }
    }
    n(e, null, !0);
  }
  function Zn(e, t) {
    if (t.cm) throw new Error("This document is already in use.");
    e.doc = t, t.cm = e, a(e), r(e), e.options.lineWrapping || f(e), e.options.mode = t.modeOption, 
    qt(e);
  }
  function Yn(e, t) {
    if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
    for (var r = e; !r.lines; ) for (var n = 0; ;++n) {
      var i = r.children[n], o = i.chunkSize();
      if (t < o) {
        r = i;
        break;
      }
      t -= o;
    }
    return r.lines[t];
  }
  function Qn(e, t, r) {
    var n = [], i = t.line;
    return e.iter(t.line, r.line + 1, function(e) {
      var o = e.text;
      i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), 
      ++i;
    }), n;
  }
  function Jn(e, t, r) {
    var n = [];
    return e.iter(t, r, function(e) {
      n.push(e.text);
    }), n;
  }
  function ei(e, t) {
    var r = t - e.height;
    if (r) for (var n = e; n; n = n.parent) n.height += r;
  }
  function ti(e) {
    if (null == e.parent) return null;
    for (var t = e.parent, r = Wi(t.lines, e), n = t.parent; n; t = n, n = n.parent) for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize();
    return r + t.first;
  }
  function ri(e, t) {
    var r = e.first;
    e:do {
      for (var n = 0; n < e.children.length; ++n) {
        var i = e.children[n], o = i.height;
        if (t < o) {
          e = i;
          continue e;
        }
        t -= o, r += i.chunkSize();
      }
      return r;
    } while (!e.lines);
    for (var n = 0; n < e.lines.length; ++n) {
      var a = e.lines[n], l = a.height;
      if (t < l) break;
      t -= l;
    }
    return r + n;
  }
  function ni(e) {
    e = yn(e);
    for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
      var i = r.lines[n];
      if (i == e) break;
      t += i.height;
    }
    for (var o = r.parent; o; r = o, o = r.parent) for (var n = 0; n < o.children.length; ++n) {
      var a = o.children[n];
      if (a == r) break;
      t += a.height;
    }
    return t;
  }
  function ii(e) {
    var t = e.order;
    return null == t && (t = e.order = ll(e.text)), t;
  }
  function oi(e) {
    this.done = [], this.undone = [], this.undoDepth = Infinity, this.lastModTime = this.lastSelTime = 0, 
    this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, 
    this.generation = this.maxGeneration = e || 1;
  }
  function ai(e, t) {
    var r = {
      from:$(t.from),
      to:Jo(t),
      text:Qn(e, t.from, t.to)
    };
    return pi(e, r, t.from.line, t.to.line + 1), Xn(e, function(e) {
      pi(e, r, t.from.line, t.to.line + 1);
    }, !0), r;
  }
  function li(e) {
    for (;e.length; ) {
      if (!Ni(e).ranges) break;
      e.pop();
    }
  }
  function si(e, t) {
    return t ? (li(e.done), Ni(e.done)) :e.done.length && !Ni(e.done).ranges ? Ni(e.done) :e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), 
    Ni(e.done)) :void 0;
  }
  function ci(e, t, r, n) {
    var i = e.history;
    i.undone.length = 0;
    var o, a = +new Date();
    if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > a - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = si(i, i.lastOp == n))) {
      var l = Ni(o.changes);
      0 == Ho(t.from, t.to) && 0 == Ho(t.from, l.to) ? l.to = Jo(t) :o.changes.push(ai(e, t));
    } else {
      var s = Ni(i.done);
      for (s && s.ranges || fi(e.sel, i.done), o = {
        changes:[ ai(e, t) ],
        generation:i.generation
      }, i.done.push(o); i.done.length > i.undoDepth; ) i.done.shift(), i.done[0].ranges || i.done.shift();
    }
    i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = a, 
    i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, l || Wa(e, "historyAdded");
  }
  function ui(e, t, r, n) {
    var i = t.charAt(0);
    return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay :500);
  }
  function di(e, t, r, n) {
    var i = e.history, o = n && n.origin;
    r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ui(e, o, Ni(i.done), t)) ? i.done[i.done.length - 1] = t :fi(t, i.done), 
    i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = r, n && !1 !== n.clearRedo && li(i.undone);
  }
  function fi(e, t) {
    var r = Ni(t);
    r && r.ranges && r.equals(e) || t.push(e);
  }
  function pi(e, t, r, n) {
    var i = t["spans_" + e.id], o = 0;
    e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function(r) {
      r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o;
    });
  }
  function hi(e) {
    if (!e) return null;
    for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) :t && t.push(e[r]);
    return t ? t.length ? t :null :e;
  }
  function mi(e, t) {
    var r = t["spans_" + e.id];
    if (!r) return null;
    for (var n = 0, i = []; n < t.text.length; ++n) i.push(hi(r[n]));
    return i;
  }
  function gi(e, t, r) {
    for (var n = 0, i = []; n < e.length; ++n) {
      var o = e[n];
      if (o.ranges) i.push(r ? ue.prototype.deepCopy.call(o) :o); else {
        var a = o.changes, l = [];
        i.push({
          changes:l
        });
        for (var s = 0; s < a.length; ++s) {
          var c, u = a[s];
          if (l.push({
            from:u.from,
            to:u.to,
            text:u.text
          }), t) for (var d in u) (c = d.match(/^spans_(\d+)$/)) && Wi(t, Number(c[1])) > -1 && (Ni(l)[d] = u[d], 
          delete u[d]);
        }
      }
    }
    return i;
  }
  function vi(e, t, r, n) {
    r < e.line ? e.line += n :t < e.line && (e.line = t, e.ch = 0);
  }
  function yi(e, t, r, n) {
    for (var i = 0; i < e.length; ++i) {
      var o = e[i], a = !0;
      if (o.ranges) {
        o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
        for (var l = 0; l < o.ranges.length; l++) vi(o.ranges[l].anchor, t, r, n), vi(o.ranges[l].head, t, r, n);
      } else {
        for (var l = 0; l < o.changes.length; ++l) {
          var s = o.changes[l];
          if (r < s.from.line) s.from = Po(s.from.line + n, s.from.ch), s.to = Po(s.to.line + n, s.to.ch); else if (t <= s.to.line) {
            a = !1;
            break;
          }
        }
        a || (e.splice(0, i + 1), i = 0);
      }
    }
  }
  function bi(e, t) {
    var r = t.from.line, n = t.to.line, i = t.text.length - (n - r) - 1;
    yi(e.done, r, n, i), yi(e.undone, r, n, i);
  }
  function xi(e) {
    return null != e.defaultPrevented ? e.defaultPrevented :0 == e.returnValue;
  }
  function wi(e) {
    return e.target || e.srcElement;
  }
  function _i(e) {
    var t = e.which;
    return null == t && (1 & e.button ? t = 1 :2 & e.button ? t = 3 :4 & e.button && (t = 2)), 
    Ao && e.ctrlKey && 1 == t && (t = 3), t;
  }
  function ki(e, t, r) {
    var n = e._handlers && e._handlers[t];
    return r ? n && n.length > 0 ? n.slice() :Oa :n || Oa;
  }
  function Ci(e, t) {
    function r(e) {
      return function() {
        e.apply(null, o);
      };
    }
    var n = ki(e, t, !1);
    if (n.length) {
      var i, o = Array.prototype.slice.call(arguments, 2);
      Ko ? i = Ko.delayedCallbacks :Da ? i = Da :(i = Da = [], setTimeout(Si, 0));
      for (var a = 0; a < n.length; ++a) i.push(r(n[a]));
    }
  }
  function Si() {
    var e = Da;
    Da = null;
    for (var t = 0; t < e.length; ++t) e[t]();
  }
  function Mi(e, t, r) {
    return "string" == typeof t && (t = {
      type:t,
      preventDefault:function() {
        this.defaultPrevented = !0;
      }
    }), Wa(e, r || t.type, e, t), xi(t) || t.codemirrorIgnore;
  }
  function Li(e) {
    var t = e._handlers && e._handlers.cursorActivity;
    if (t) for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) -1 == Wi(r, t[n]) && r.push(t[n]);
  }
  function Ti(e, t) {
    return ki(e, t).length > 0;
  }
  function zi(e) {
    e.prototype.on = function(e, t) {
      Aa(this, e, t);
    }, e.prototype.off = function(e, t) {
      Na(this, e, t);
    };
  }
  function Ai() {
    this.id = null;
  }
  function Oi(e) {
    for (;Ba.length <= e; ) Ba.push(Ni(Ba) + " ");
    return Ba[e];
  }
  function Ni(e) {
    return e[e.length - 1];
  }
  function Wi(e, t) {
    for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
    return -1;
  }
  function Di(e, t) {
    for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
    return r;
  }
  function qi() {}
  function Ii(e, t) {
    var r;
    return Object.create ? r = Object.create(e) :(qi.prototype = e, r = new qi()), t && Ei(t, r), 
    r;
  }
  function Ei(e, t, r) {
    t || (t = {});
    for (var n in e) !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]);
    return t;
  }
  function Pi(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return function() {
      return e.apply(null, t);
    };
  }
  function Hi(e, t) {
    return t ? !!(t.source.indexOf("\\w") > -1 && Va(e)) || t.test(e) :Va(e);
  }
  function Fi(e) {
    for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
    return !0;
  }
  function ji(e) {
    return e.charCodeAt(0) >= 768 && $a.test(e);
  }
  function Bi(e, t, r, n) {
    var i = document.createElement(e);
    if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t)); else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
    return i;
  }
  function Ri(e) {
    for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
    return e;
  }
  function Ui(e, t) {
    return Ri(e).appendChild(t);
  }
  function Ki() {
    for (var e = document.activeElement; e && e.root && e.root.activeElement; ) e = e.root.activeElement;
    return e;
  }
  function Vi(e) {
    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
  }
  function $i(e, t) {
    for (var r = e.split(" "), n = 0; n < r.length; n++) r[n] && !Vi(r[n]).test(t) && (t += " " + r[n]);
    return t;
  }
  function Gi(e) {
    if (document.body.getElementsByClassName) for (var t = document.body.getElementsByClassName("CodeMirror"), r = 0; r < t.length; r++) {
      var n = t[r].CodeMirror;
      n && e(n);
    }
  }
  function Xi() {
    Ja || (Zi(), Ja = !0);
  }
  function Zi() {
    var e;
    Aa(window, "resize", function() {
      null == e && (e = setTimeout(function() {
        e = null, Gi(Ut);
      }, 100));
    }), Aa(window, "blur", function() {
      Gi(vr);
    });
  }
  function Yi(e) {
    if (null == Xa) {
      var t = Bi("span", "\u200b");
      Ui(e, Bi("span", [ t, document.createTextNode("x") ])), 0 != e.firstChild.offsetHeight && (Xa = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(bo && xo < 8));
    }
    var r = Xa ? Bi("span", "\u200b") :Bi("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px");
    return r.setAttribute("cm-text", ""), r;
  }
  function Qi(e) {
    if (null != Za) return Za;
    var t = Ui(e, document.createTextNode("A\u062eA")), r = Ua(t, 0, 1).getBoundingClientRect();
    if (!r || r.left == r.right) return !1;
    var n = Ua(t, 1, 2).getBoundingClientRect();
    return Za = n.right - r.right < 3;
  }
  function Ji(e) {
    if (null != il) return il;
    var t = Ui(e, Bi("span", "x")), r = t.getBoundingClientRect(), n = Ua(t, 0, 1).getBoundingClientRect();
    return il = Math.abs(r.left - n.left) > 1;
  }
  function eo(e, t, r, n) {
    if (!e) return n(t, r, "ltr");
    for (var i = !1, o = 0; o < e.length; ++o) {
      var a = e[o];
      (a.from < r && a.to > t || t == r && a.to == t) && (n(Math.max(a.from, t), Math.min(a.to, r), 1 == a.level ? "rtl" :"ltr"), 
      i = !0);
    }
    i || n(t, r, "ltr");
  }
  function to(e) {
    return e.level % 2 ? e.to :e.from;
  }
  function ro(e) {
    return e.level % 2 ? e.from :e.to;
  }
  function no(e) {
    var t = ii(e);
    return t ? to(t[0]) :0;
  }
  function io(e) {
    var t = ii(e);
    return t ? ro(Ni(t)) :e.text.length;
  }
  function oo(e, t) {
    var r = Yn(e.doc, t), n = yn(r);
    n != r && (t = ti(n));
    var i = ii(n), o = i ? i[0].level % 2 ? io(n) :no(n) :0;
    return Po(t, o);
  }
  function ao(e, t) {
    for (var r, n = Yn(e.doc, t); r = gn(n); ) n = r.find(1, !0).line, t = null;
    var i = ii(n), o = i ? i[0].level % 2 ? no(n) :io(n) :n.text.length;
    return Po(null == t ? ti(n) :t, o);
  }
  function lo(e, t) {
    var r = oo(e, t.line), n = Yn(e.doc, r.line), i = ii(n);
    if (!i || 0 == i[0].level) {
      var o = Math.max(0, n.text.search(/\S/)), a = t.line == r.line && t.ch <= o && t.ch;
      return Po(r.line, a ? 0 :o);
    }
    return r;
  }
  function so(e, t, r) {
    var n = e[0].level;
    return t == n || r != n && t < r;
  }
  function co(e, t) {
    al = null;
    for (var r, n = 0; n < e.length; ++n) {
      var i = e[n];
      if (i.from < t && i.to > t) return n;
      if (i.from == t || i.to == t) {
        if (null != r) return so(e, i.level, e[r].level) ? (i.from != i.to && (al = r), 
        n) :(i.from != i.to && (al = n), r);
        r = n;
      }
    }
    return r;
  }
  function uo(e, t, r, n) {
    if (!n) return t + r;
    do {
      t += r;
    } while (t > 0 && ji(e.text.charAt(t)));
    return t;
  }
  function fo(e, t, r, n) {
    var i = ii(e);
    if (!i) return po(e, t, r, n);
    for (var o = co(i, t), a = i[o], l = uo(e, t, a.level % 2 ? -r :r, n); ;) {
      if (l > a.from && l < a.to) return l;
      if (l == a.from || l == a.to) return co(i, l) == o ? l :(a = i[o += r], r > 0 == a.level % 2 ? a.to :a.from);
      if (!(a = i[o += r])) return null;
      l = r > 0 == a.level % 2 ? uo(e, a.to, -1, n) :uo(e, a.from, 1, n);
    }
  }
  function po(e, t, r, n) {
    var i = t + r;
    if (n) for (;i > 0 && ji(e.text.charAt(i)); ) i += r;
    return i < 0 || i > e.text.length ? null :i;
  }
  var ho = navigator.userAgent, mo = navigator.platform, go = /gecko\/\d/i.test(ho), vo = /MSIE \d/.test(ho), yo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ho), bo = vo || yo, xo = bo && (vo ? document.documentMode || 6 :yo[1]), wo = /WebKit\//.test(ho), _o = wo && /Qt\/\d+\.\d+/.test(ho), ko = /Chrome\//.test(ho), Co = /Opera\//.test(ho), So = /Apple Computer/.test(navigator.vendor), Mo = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ho), Lo = /PhantomJS/.test(ho), To = /AppleWebKit/.test(ho) && /Mobile\/\w+/.test(ho), zo = To || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ho), Ao = To || /Mac/.test(mo), Oo = /\bCrOS\b/.test(ho), No = /win/i.test(mo), Wo = Co && ho.match(/Version\/(\d*\.\d*)/);
  Wo && (Wo = Number(Wo[1])), Wo && Wo >= 15 && (Co = !1, wo = !0);
  var Do = Ao && (_o || Co && (null == Wo || Wo < 12.11)), qo = go || bo && xo >= 9, Io = !1, Eo = !1;
  m.prototype = Ei({
    update:function(e) {
      var t = e.scrollWidth > e.clientWidth + 1, r = e.scrollHeight > e.clientHeight + 1, n = e.nativeBarWidth;
      if (r) {
        this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" :"0";
        var i = e.viewHeight - (t ? n :0);
        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
      } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
      if (t) {
        this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" :"0", 
        this.horiz.style.left = e.barLeft + "px";
        var o = e.viewWidth - e.barLeft - (r ? n :0);
        this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + o + "px";
      } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
      return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), 
      this.checkedZeroWidth = !0), {
        right:r ? n :0,
        bottom:t ? n :0
      };
    },
    setScrollLeft:function(e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz);
    },
    setScrollTop:function(e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert);
    },
    zeroWidthHack:function() {
      var e = Ao && !Mo ? "12px" :"18px";
      this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", 
      this.disableHoriz = new Ai(), this.disableVert = new Ai();
    },
    enableZeroWidthBar:function(e, t) {
      function r() {
        var n = e.getBoundingClientRect();
        document.elementFromPoint(n.left + 1, n.bottom - 1) != e ? e.style.pointerEvents = "none" :t.set(1e3, r);
      }
      e.style.pointerEvents = "auto", t.set(1e3, r);
    },
    clear:function() {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert);
    }
  }, m.prototype), g.prototype = Ei({
    update:function() {
      return {
        bottom:0,
        right:0
      };
    },
    setScrollLeft:function() {},
    setScrollTop:function() {},
    clear:function() {}
  }, g.prototype), e.scrollbarModel = {
    "native":m,
    "null":g
  }, S.prototype.signal = function(e, t) {
    Ti(e, t) && this.events.push(arguments);
  }, S.prototype.finish = function() {
    for (var e = 0; e < this.events.length; e++) Wa.apply(null, this.events[e]);
  };
  var Po = e.Pos = function(e, t) {
    if (!(this instanceof Po)) return new Po(e, t);
    this.line = e, this.ch = t;
  }, Ho = e.cmpPos = function(e, t) {
    return e.line - t.line || e.ch - t.ch;
  }, Fo = null;
  re.prototype = Ei({
    init:function(e) {
      function t(e) {
        if (!Mi(n, e)) {
          if (n.somethingSelected()) Fo = {
            lineWise:!1,
            text:n.getSelections()
          }, r.inaccurateSelection && (r.prevInput = "", r.inaccurateSelection = !1, o.value = Fo.text.join("\n"), 
          Ra(o)); else {
            if (!n.options.lineWiseCopyCut) return;
            var t = ee(n);
            Fo = {
              lineWise:!0,
              text:t.text
            }, "cut" == e.type ? n.setSelections(t.ranges, null, Ea) :(r.prevInput = "", o.value = t.text.join("\n"), 
            Ra(o));
          }
          "cut" == e.type && (n.state.cutIncoming = !0);
        }
      }
      var r = this, n = this.cm, i = this.wrapper = ne(), o = this.textarea = i.firstChild;
      e.wrapper.insertBefore(i, e.wrapper.firstChild), To && (o.style.width = "0px"), 
      Aa(o, "input", function() {
        bo && xo >= 9 && r.hasSelection && (r.hasSelection = null), r.poll();
      }), Aa(o, "paste", function(e) {
        Mi(n, e) || Q(e, n) || (n.state.pasteIncoming = !0, r.fastPoll());
      }), Aa(o, "cut", t), Aa(o, "copy", t), Aa(e.scroller, "paste", function(t) {
        Kt(e, t) || Mi(n, t) || (n.state.pasteIncoming = !0, r.focus());
      }), Aa(e.lineSpace, "selectstart", function(t) {
        Kt(e, t) || La(t);
      }), Aa(o, "compositionstart", function() {
        var e = n.getCursor("from");
        r.composing && r.composing.range.clear(), r.composing = {
          start:e,
          range:n.markText(e, n.getCursor("to"), {
            className:"CodeMirror-composing"
          })
        };
      }), Aa(o, "compositionend", function() {
        r.composing && (r.poll(), r.composing.range.clear(), r.composing = null);
      });
    },
    prepareSelection:function() {
      var e = this.cm, t = e.display, r = e.doc, n = qe(e);
      if (e.options.moveInputWithCursor) {
        var i = pt(e, r.sel.primary().head, "div"), o = t.wrapper.getBoundingClientRect(), a = t.lineDiv.getBoundingClientRect();
        n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), 
        n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left));
      }
      return n;
    },
    showSelection:function(e) {
      var t = this.cm, r = t.display;
      Ui(r.cursorDiv, e.cursors), Ui(r.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", 
      this.wrapper.style.left = e.teLeft + "px");
    },
    reset:function(e) {
      if (!this.contextMenuPending) {
        var t, r, n = this.cm, i = n.doc;
        if (n.somethingSelected()) {
          this.prevInput = "";
          var o = i.sel.primary();
          t = nl && (o.to().line - o.from().line > 100 || (r = n.getSelection()).length > 1e3);
          var a = t ? "-" :r || n.getSelection();
          this.textarea.value = a, n.state.focused && Ra(this.textarea), bo && xo >= 9 && (this.hasSelection = a);
        } else e || (this.prevInput = this.textarea.value = "", bo && xo >= 9 && (this.hasSelection = null));
        this.inaccurateSelection = t;
      }
    },
    getField:function() {
      return this.textarea;
    },
    supportsTouch:function() {
      return !1;
    },
    focus:function() {
      if ("nocursor" != this.cm.options.readOnly && (!zo || Ki() != this.textarea)) try {
        this.textarea.focus();
      } catch (e) {}
    },
    blur:function() {
      this.textarea.blur();
    },
    resetPosition:function() {
      this.wrapper.style.top = this.wrapper.style.left = 0;
    },
    receivedFocus:function() {
      this.slowPoll();
    },
    slowPoll:function() {
      var e = this;
      e.pollingFast || e.polling.set(this.cm.options.pollInterval, function() {
        e.poll(), e.cm.state.focused && e.slowPoll();
      });
    },
    fastPoll:function() {
      function e() {
        r.poll() || t ? (r.pollingFast = !1, r.slowPoll()) :(t = !0, r.polling.set(60, e));
      }
      var t = !1, r = this;
      r.pollingFast = !0, r.polling.set(20, e);
    },
    poll:function() {
      var e = this.cm, t = this.textarea, r = this.prevInput;
      if (this.contextMenuPending || !e.state.focused || rl(t) && !r && !this.composing || e.isReadOnly() || e.options.disableInput || e.state.keySeq) return !1;
      var n = t.value;
      if (n == r && !e.somethingSelected()) return !1;
      if (bo && xo >= 9 && this.hasSelection === n || Ao && /[\uf700-\uf7ff]/.test(n)) return e.display.input.reset(), 
      !1;
      if (e.doc.sel == e.display.selForContextMenu) {
        var i = n.charCodeAt(0);
        if (8203 != i || r || (r = "\u200b"), 8666 == i) return this.reset(), this.cm.execCommand("undo");
      }
      for (var o = 0, a = Math.min(r.length, n.length); o < a && r.charCodeAt(o) == n.charCodeAt(o); ) ++o;
      var l = this;
      return zt(e, function() {
        Y(e, n.slice(o), r.length - o, null, l.composing ? "*compose" :null), n.length > 1e3 || n.indexOf("\n") > -1 ? t.value = l.prevInput = "" :l.prevInput = n, 
        l.composing && (l.composing.range.clear(), l.composing.range = e.markText(l.composing.start, e.getCursor("to"), {
          className:"CodeMirror-composing"
        }));
      }), !0;
    },
    ensurePolled:function() {
      this.pollingFast && this.poll() && (this.pollingFast = !1);
    },
    onKeyPress:function() {
      bo && xo >= 9 && (this.hasSelection = null), this.fastPoll();
    },
    onContextMenu:function(e) {
      function t() {
        if (null != a.selectionStart) {
          var e = i.somethingSelected(), t = "\u200b" + (e ? a.value :"");
          a.value = "\u21da", a.value = t, n.prevInput = e ? "" :"\u200b", a.selectionStart = 1, 
          a.selectionEnd = t.length, o.selForContextMenu = i.doc.sel;
        }
      }
      function r() {
        if (n.contextMenuPending = !1, n.wrapper.style.cssText = u, a.style.cssText = c, 
        bo && xo < 9 && o.scrollbars.setScrollTop(o.scroller.scrollTop = s), null != a.selectionStart) {
          (!bo || bo && xo < 9) && t();
          var e = 0, r = function() {
            o.selForContextMenu == i.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "\u200b" == n.prevInput ? At(i, ua.selectAll)(i) :e++ < 10 ? o.detectingSelectAll = setTimeout(r, 500) :o.input.reset();
          };
          o.detectingSelectAll = setTimeout(r, 200);
        }
      }
      var n = this, i = n.cm, o = i.display, a = n.textarea, l = Vt(i, e), s = o.scroller.scrollTop;
      if (l && !Co) {
        i.options.resetSelectionOnContextMenu && -1 == i.doc.sel.contains(l) && At(i, Me)(i.doc, pe(l), Ea);
        var c = a.style.cssText, u = n.wrapper.style.cssText;
        n.wrapper.style.cssText = "position: absolute";
        var d = n.wrapper.getBoundingClientRect();
        if (a.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (e.clientY - d.top - 5) + "px; left: " + (e.clientX - d.left - 5) + "px; z-index: 1000; background: " + (bo ? "rgba(255, 255, 255, .05)" :"transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", 
        wo) var f = window.scrollY;
        if (o.input.focus(), wo && window.scrollTo(null, f), o.input.reset(), i.somethingSelected() || (a.value = n.prevInput = " "), 
        n.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), 
        bo && xo >= 9 && t(), qo) {
          za(e);
          var p = function() {
            Na(window, "mouseup", p), setTimeout(r, 20);
          };
          Aa(window, "mouseup", p);
        } else setTimeout(r, 50);
      }
    },
    readOnlyChanged:function(e) {
      e || this.reset();
    },
    setUneditable:qi,
    needsContentAttribute:!1
  }, re.prototype), ie.prototype = Ei({
    init:function(e) {
      function t(e) {
        if (!Mi(n, e)) {
          if (n.somethingSelected()) Fo = {
            lineWise:!1,
            text:n.getSelections()
          }, "cut" == e.type && n.replaceSelection("", null, "cut"); else {
            if (!n.options.lineWiseCopyCut) return;
            var t = ee(n);
            Fo = {
              lineWise:!0,
              text:t.text
            }, "cut" == e.type && n.operation(function() {
              n.setSelections(t.ranges, 0, Ea), n.replaceSelection("", null, "cut");
            });
          }
          if (e.clipboardData && !To) e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/plain", Fo.text.join("\n")); else {
            var r = ne(), i = r.firstChild;
            n.display.lineSpace.insertBefore(r, n.display.lineSpace.firstChild), i.value = Fo.text.join("\n");
            var o = document.activeElement;
            Ra(i), setTimeout(function() {
              n.display.lineSpace.removeChild(r), o.focus();
            }, 50);
          }
        }
      }
      var r = this, n = r.cm, i = r.div = e.lineDiv;
      te(i), Aa(i, "paste", function(e) {
        Mi(n, e) || Q(e, n);
      }), Aa(i, "compositionstart", function(e) {
        var t = e.data;
        if (r.composing = {
          sel:n.doc.sel,
          data:t,
          startData:t
        }, t) {
          var i = n.doc.sel.primary(), o = n.getLine(i.head.line), a = o.indexOf(t, Math.max(0, i.head.ch - t.length));
          a > -1 && a <= i.head.ch && (r.composing.sel = pe(Po(i.head.line, a), Po(i.head.line, a + t.length)));
        }
      }), Aa(i, "compositionupdate", function(e) {
        r.composing.data = e.data;
      }), Aa(i, "compositionend", function(e) {
        var t = r.composing;
        t && (e.data == t.startData || /\u200b/.test(e.data) || (t.data = e.data), setTimeout(function() {
          t.handled || r.applyComposition(t), r.composing == t && (r.composing = null);
        }, 50));
      }), Aa(i, "touchstart", function() {
        r.forceCompositionEnd();
      }), Aa(i, "input", function() {
        r.composing || !n.isReadOnly() && r.pollContent() || zt(r.cm, function() {
          qt(n);
        });
      }), Aa(i, "copy", t), Aa(i, "cut", t);
    },
    prepareSelection:function() {
      var e = qe(this.cm, !1);
      return e.focus = this.cm.state.focused, e;
    },
    showSelection:function(e, t) {
      e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), 
      this.showMultipleSelections(e));
    },
    showPrimarySelection:function() {
      var e = window.getSelection(), t = this.cm.doc.sel.primary(), r = le(this.cm, e.anchorNode, e.anchorOffset), n = le(this.cm, e.focusNode, e.focusOffset);
      if (!r || r.bad || !n || n.bad || 0 != Ho(X(r, n), t.from()) || 0 != Ho(G(r, n), t.to())) {
        var i = oe(this.cm, t.from()), o = oe(this.cm, t.to());
        if (i || o) {
          var a = this.cm.display.view, l = e.rangeCount && e.getRangeAt(0);
          if (i) {
            if (!o) {
              var s = a[a.length - 1].measure, c = s.maps ? s.maps[s.maps.length - 1] :s.map;
              o = {
                node:c[c.length - 1],
                offset:c[c.length - 2] - c[c.length - 3]
              };
            }
          } else i = {
            node:a[0].measure.map[2],
            offset:0
          };
          try {
            var u = Ua(i.node, i.offset, o.offset, o.node);
          } catch (e) {}
          u && (!go && this.cm.state.focused ? (e.collapse(i.node, i.offset), u.collapsed || e.addRange(u)) :(e.removeAllRanges(), 
          e.addRange(u)), l && null == e.anchorNode ? e.addRange(l) :go && this.startGracePeriod()), 
          this.rememberSelection();
        }
      }
    },
    startGracePeriod:function() {
      var e = this;
      clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
        e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
          e.cm.curOp.selectionChanged = !0;
        });
      }, 20);
    },
    showMultipleSelections:function(e) {
      Ui(this.cm.display.cursorDiv, e.cursors), Ui(this.cm.display.selectionDiv, e.selection);
    },
    rememberSelection:function() {
      var e = window.getSelection();
      this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, 
      this.lastFocusOffset = e.focusOffset;
    },
    selectionInEditor:function() {
      var e = window.getSelection();
      if (!e.rangeCount) return !1;
      var t = e.getRangeAt(0).commonAncestorContainer;
      return Ga(this.div, t);
    },
    focus:function() {
      "nocursor" != this.cm.options.readOnly && this.div.focus();
    },
    blur:function() {
      this.div.blur();
    },
    getField:function() {
      return this.div;
    },
    supportsTouch:function() {
      return !0;
    },
    receivedFocus:function() {
      function e() {
        t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
      }
      var t = this;
      this.selectionInEditor() ? this.pollSelection() :zt(this.cm, function() {
        t.cm.curOp.selectionChanged = !0;
      }), this.polling.set(this.cm.options.pollInterval, e);
    },
    selectionChanged:function() {
      var e = window.getSelection();
      return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
    },
    pollSelection:function() {
      if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
        var e = window.getSelection(), t = this.cm;
        this.rememberSelection();
        var r = le(t, e.anchorNode, e.anchorOffset), n = le(t, e.focusNode, e.focusOffset);
        r && n && zt(t, function() {
          Me(t.doc, pe(r, n), Ea), (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
        });
      }
    },
    pollContent:function() {
      var e = this.cm, t = e.display, r = e.doc.sel.primary(), n = r.from(), i = r.to();
      if (n.line < t.viewFrom || i.line > t.viewTo - 1) return !1;
      var o;
      if (n.line == t.viewFrom || 0 == (o = Pt(e, n.line))) var a = ti(t.view[0].line), l = t.view[0].node; else var a = ti(t.view[o].line), l = t.view[o - 1].node.nextSibling;
      var s = Pt(e, i.line);
      if (s == t.view.length - 1) var c = t.viewTo - 1, u = t.lineDiv.lastChild; else var c = ti(t.view[s + 1].line) - 1, u = t.view[s + 1].node.previousSibling;
      for (var d = e.doc.splitLines(ce(e, l, u, a, c)), f = Qn(e.doc, Po(a, 0), Po(c, Yn(e.doc, c).text.length)); d.length > 1 && f.length > 1; ) if (Ni(d) == Ni(f)) d.pop(), 
      f.pop(), c--; else {
        if (d[0] != f[0]) break;
        d.shift(), f.shift(), a++;
      }
      for (var p = 0, h = 0, m = d[0], g = f[0], v = Math.min(m.length, g.length); p < v && m.charCodeAt(p) == g.charCodeAt(p); ) ++p;
      for (var y = Ni(d), b = Ni(f), x = Math.min(y.length - (1 == d.length ? p :0), b.length - (1 == f.length ? p :0)); h < x && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1); ) ++h;
      d[d.length - 1] = y.slice(0, y.length - h), d[0] = d[0].slice(p);
      var w = Po(a, p), _ = Po(c, f.length ? Ni(f).length - h :0);
      return d.length > 1 || d[0] || Ho(w, _) ? (Or(e.doc, d, w, _, "+input"), !0) :void 0;
    },
    ensurePolled:function() {
      this.forceCompositionEnd();
    },
    reset:function() {
      this.forceCompositionEnd();
    },
    forceCompositionEnd:function() {
      this.composing && !this.composing.handled && (this.applyComposition(this.composing), 
      this.composing.handled = !0, this.div.blur(), this.div.focus());
    },
    applyComposition:function(e) {
      this.cm.isReadOnly() ? At(this.cm, qt)(this.cm) :e.data && e.data != e.startData && At(this.cm, Y)(this.cm, e.data, 0, e.sel);
    },
    setUneditable:function(e) {
      e.contentEditable = "false";
    },
    onKeyPress:function(e) {
      e.preventDefault(), this.cm.isReadOnly() || At(this.cm, Y)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode :e.charCode), 0);
    },
    readOnlyChanged:function(e) {
      this.div.contentEditable = String("nocursor" != e);
    },
    onContextMenu:qi,
    resetPosition:qi,
    needsContentAttribute:!0
  }, ie.prototype), e.inputStyles = {
    textarea:re,
    contenteditable:ie
  }, ue.prototype = {
    primary:function() {
      return this.ranges[this.primIndex];
    },
    equals:function(e) {
      if (e == this) return !0;
      if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
      for (var t = 0; t < this.ranges.length; t++) {
        var r = this.ranges[t], n = e.ranges[t];
        if (0 != Ho(r.anchor, n.anchor) || 0 != Ho(r.head, n.head)) return !1;
      }
      return !0;
    },
    deepCopy:function() {
      for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new de($(this.ranges[t].anchor), $(this.ranges[t].head));
      return new ue(e, this.primIndex);
    },
    somethingSelected:function() {
      for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
      return !1;
    },
    contains:function(e, t) {
      t || (t = e);
      for (var r = 0; r < this.ranges.length; r++) {
        var n = this.ranges[r];
        if (Ho(t, n.from()) >= 0 && Ho(e, n.to()) <= 0) return r;
      }
      return -1;
    }
  }, de.prototype = {
    from:function() {
      return X(this.anchor, this.head);
    },
    to:function() {
      return G(this.anchor, this.head);
    },
    empty:function() {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
    }
  };
  var jo, Bo, Ro, Uo = {
    left:0,
    right:0,
    top:0,
    bottom:0
  }, Ko = null, Vo = 0, $o = 0, Go = 0, Xo = null;
  bo ? Xo = -.53 :go ? Xo = 15 :ko ? Xo = -.7 :So && (Xo = -1 / 3);
  var Zo = function(e) {
    var t = e.wheelDeltaX, r = e.wheelDeltaY;
    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail :null == r && (r = e.wheelDelta), 
    {
      x:t,
      y:r
    };
  };
  e.wheelEventPixels = function(e) {
    var t = Zo(e);
    return t.x *= Xo, t.y *= Xo, t;
  };
  var Yo = new Ai(), Qo = null, Jo = e.changeEnd = function(e) {
    return e.text ? Po(e.from.line + e.text.length - 1, Ni(e.text).length + (1 == e.text.length ? e.from.ch :0)) :e.to;
  };
  e.prototype = {
    constructor:e,
    focus:function() {
      window.focus(), this.display.input.focus();
    },
    setOption:function(e, t) {
      var r = this.options, n = r[e];
      r[e] == t && "mode" != e || (r[e] = t, ta.hasOwnProperty(e) && At(this, ta[e])(this, t, n));
    },
    getOption:function(e) {
      return this.options[e];
    },
    getDoc:function() {
      return this.doc;
    },
    addKeyMap:function(e, t) {
      this.state.keyMaps[t ? "push" :"unshift"](Vr(e));
    },
    removeKeyMap:function(e) {
      for (var t = this.state.keyMaps, r = 0; r < t.length; ++r) if (t[r] == e || t[r].name == e) return t.splice(r, 1), 
      !0;
    },
    addOverlay:Ot(function(t, r) {
      var n = t.token ? t :e.getMode(this.options, t);
      if (n.startState) throw new Error("Overlays may not be stateful.");
      this.state.overlays.push({
        mode:n,
        modeSpec:t,
        opaque:r && r.opaque
      }), this.state.modeGen++, qt(this);
    }),
    removeOverlay:Ot(function(e) {
      for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
        var n = t[r].modeSpec;
        if (n == e || "string" == typeof e && n.name == e) return t.splice(r, 1), this.state.modeGen++, 
        void qt(this);
      }
    }),
    indentLine:Ot(function(e, t, r) {
      "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" :"prev" :t ? "add" :"subtract"), 
      ve(this.doc, e) && Hr(this, e, t, r);
    }),
    indentSelection:Ot(function(e) {
      for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
        var i = t[n];
        if (i.empty()) i.head.line > r && (Hr(this, i.head.line, e, !0), r = i.head.line, 
        n == this.doc.sel.primIndex && Er(this)); else {
          var o = i.from(), a = i.to(), l = Math.max(r, o.line);
          r = Math.min(this.lastLine(), a.line - (a.ch ? 0 :1)) + 1;
          for (var s = l; s < r; ++s) Hr(this, s, e);
          var c = this.doc.sel.ranges;
          0 == o.ch && t.length == c.length && c[n].from().ch > 0 && _e(this.doc, n, new de(o, c[n].to()), Ea);
        }
      }
    }),
    getTokenAt:function(e, t) {
      return Nn(this, e, t);
    },
    getLineTokens:function(e, t) {
      return Nn(this, Po(e), t, !0);
    },
    getTokenTypeAt:function(e) {
      e = me(this.doc, e);
      var t, r = qn(this, Yn(this.doc, e.line)), n = 0, i = (r.length - 1) / 2, o = e.ch;
      if (0 == o) t = r[2]; else for (;;) {
        var a = n + i >> 1;
        if ((a ? r[2 * a - 1] :0) >= o) i = a; else {
          if (!(r[2 * a + 1] < o)) {
            t = r[2 * a + 2];
            break;
          }
          n = a + 1;
        }
      }
      var l = t ? t.indexOf("cm-overlay ") :-1;
      return l < 0 ? t :0 == l ? null :t.slice(0, l - 1);
    },
    getModeAt:function(t) {
      var r = this.doc.mode;
      return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode :r;
    },
    getHelper:function(e, t) {
      return this.getHelpers(e, t)[0];
    },
    getHelpers:function(e, t) {
      var r = [];
      if (!la.hasOwnProperty(t)) return r;
      var n = la[t], i = this.getModeAt(e);
      if ("string" == typeof i[t]) n[i[t]] && r.push(n[i[t]]); else if (i[t]) for (var o = 0; o < i[t].length; o++) {
        var a = n[i[t][o]];
        a && r.push(a);
      } else i.helperType && n[i.helperType] ? r.push(n[i.helperType]) :n[i.name] && r.push(n[i.name]);
      for (var o = 0; o < n._global.length; o++) {
        var l = n._global[o];
        l.pred(i, this) && -1 == Wi(r, l.val) && r.push(l.val);
      }
      return r;
    },
    getStateAfter:function(e, t) {
      var r = this.doc;
      return e = he(r, null == e ? r.first + r.size - 1 :e), Be(this, e + 1, t);
    },
    cursorCoords:function(e, t) {
      var r, n = this.doc.sel.primary();
      return r = null == e ? n.head :"object" == typeof e ? me(this.doc, e) :e ? n.from() :n.to(), 
      pt(this, r, t || "page");
    },
    charCoords:function(e, t) {
      return ft(this, me(this.doc, e), t || "page");
    },
    coordsChar:function(e, t) {
      return e = dt(this, e, t || "page"), gt(this, e.left, e.top);
    },
    lineAtHeight:function(e, t) {
      return e = dt(this, {
        top:e,
        left:0
      }, t || "page").top, ri(this.doc, e + this.display.viewOffset);
    },
    heightAtLine:function(e, t) {
      var r, n = !1;
      if ("number" == typeof e) {
        var i = this.doc.first + this.doc.size - 1;
        e < this.doc.first ? e = this.doc.first :e > i && (e = i, n = !0), r = Yn(this.doc, e);
      } else r = e;
      return ut(this, r, {
        top:0,
        left:0
      }, t || "page").top + (n ? this.doc.height - ni(r) :0);
    },
    defaultTextHeight:function() {
      return yt(this.display);
    },
    defaultCharWidth:function() {
      return bt(this.display);
    },
    setGutterMarker:Ot(function(e, t, r) {
      return Fr(this.doc, e, "gutter", function(e) {
        var n = e.gutterMarkers || (e.gutterMarkers = {});
        return n[t] = r, !r && Fi(n) && (e.gutterMarkers = null), !0;
      });
    }),
    clearGutter:Ot(function(e) {
      var t = this, r = t.doc, n = r.first;
      r.iter(function(r) {
        r.gutterMarkers && r.gutterMarkers[e] && (r.gutterMarkers[e] = null, It(t, n, "gutter"), 
        Fi(r.gutterMarkers) && (r.gutterMarkers = null)), ++n;
      });
    }),
    lineInfo:function(e) {
      if ("number" == typeof e) {
        if (!ve(this.doc, e)) return null;
        var t = e;
        if (!(e = Yn(this.doc, e))) return null;
      } else {
        var t = ti(e);
        if (null == t) return null;
      }
      return {
        line:t,
        handle:e,
        text:e.text,
        gutterMarkers:e.gutterMarkers,
        textClass:e.textClass,
        bgClass:e.bgClass,
        wrapClass:e.wrapClass,
        widgets:e.widgets
      };
    },
    getViewport:function() {
      return {
        from:this.display.viewFrom,
        to:this.display.viewTo
      };
    },
    addWidget:function(e, t, r, n, i) {
      var o = this.display;
      e = pt(this, me(this.doc, e));
      var a = e.bottom, l = e.left;
      if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), 
      o.sizer.appendChild(t), "over" == n) a = e.top; else if ("above" == n || "near" == n) {
        var s = Math.max(o.wrapper.clientHeight, this.doc.height), c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
        ("above" == n || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight :e.bottom + t.offsetHeight <= s && (a = e.bottom), 
        l + t.offsetWidth > c && (l = c - t.offsetWidth);
      }
      t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (l = o.sizer.clientWidth - t.offsetWidth, 
      t.style.right = "0px") :("left" == i ? l = 0 :"middle" == i && (l = (o.sizer.clientWidth - t.offsetWidth) / 2), 
      t.style.left = l + "px"), r && Dr(this, l, a, l + t.offsetWidth, a + t.offsetHeight);
    },
    triggerOnKeyDown:Ot(dr),
    triggerOnKeyPress:Ot(hr),
    triggerOnKeyUp:pr,
    execCommand:function(e) {
      if (ua.hasOwnProperty(e)) return ua[e].call(null, this);
    },
    triggerElectric:Ot(function(e) {
      J(this, e);
    }),
    findPosH:function(e, t, r, n) {
      var i = 1;
      t < 0 && (i = -1, t = -t);
      for (var o = 0, a = me(this.doc, e); o < t && (a = Br(this.doc, a, i, r, n), !a.hitSide); ++o) ;
      return a;
    },
    moveH:Ot(function(e, t) {
      var r = this;
      r.extendSelectionsBy(function(n) {
        return r.display.shift || r.doc.extend || n.empty() ? Br(r.doc, n.head, e, t, r.options.rtlMoveVisually) :e < 0 ? n.from() :n.to();
      }, Ha);
    }),
    deleteH:Ot(function(e, t) {
      var r = this.doc.sel, n = this.doc;
      r.somethingSelected() ? n.replaceSelection("", null, "+delete") :jr(this, function(r) {
        var i = Br(n, r.head, e, t, !1);
        return e < 0 ? {
          from:i,
          to:r.head
        } :{
          from:r.head,
          to:i
        };
      });
    }),
    findPosV:function(e, t, r, n) {
      var i = 1, o = n;
      t < 0 && (i = -1, t = -t);
      for (var a = 0, l = me(this.doc, e); a < t; ++a) {
        var s = pt(this, l, "div");
        if (null == o ? o = s.left :s.left = o, l = Rr(this, s, i, r), l.hitSide) break;
      }
      return l;
    },
    moveV:Ot(function(e, t) {
      var r = this, n = this.doc, i = [], o = !r.display.shift && !n.extend && n.sel.somethingSelected();
      if (n.extendSelectionsBy(function(a) {
        if (o) return e < 0 ? a.from() :a.to();
        var l = pt(r, a.head, "div");
        null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);
        var s = Rr(r, l, e, t);
        return "page" == t && a == n.sel.primary() && Ir(r, null, ft(r, s, "div").top - l.top), 
        s;
      }, Ha), i.length) for (var a = 0; a < n.sel.ranges.length; a++) n.sel.ranges[a].goalColumn = i[a];
    }),
    findWordAt:function(e) {
      var t = this.doc, r = Yn(t, e.line).text, n = e.ch, i = e.ch;
      if (r) {
        var o = this.getHelper(e, "wordChars");
        (e.xRel < 0 || i == r.length) && n ? --n :++i;
        for (var a = r.charAt(n), l = Hi(a, o) ? function(e) {
          return Hi(e, o);
        } :/\s/.test(a) ? function(e) {
          return /\s/.test(e);
        } :function(e) {
          return !/\s/.test(e) && !Hi(e);
        }; n > 0 && l(r.charAt(n - 1)); ) --n;
        for (;i < r.length && l(r.charAt(i)); ) ++i;
      }
      return new de(Po(e.line, n), Po(e.line, i));
    },
    toggleOverwrite:function(e) {
      null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? Qa(this.display.cursorDiv, "CodeMirror-overwrite") :Ya(this.display.cursorDiv, "CodeMirror-overwrite"), 
      Wa(this, "overwriteToggle", this, this.state.overwrite));
    },
    hasFocus:function() {
      return this.display.input.getField() == Ki();
    },
    isReadOnly:function() {
      return !(!this.options.readOnly && !this.doc.cantEdit);
    },
    scrollTo:Ot(function(e, t) {
      null == e && null == t || Pr(this), null != e && (this.curOp.scrollLeft = e), null != t && (this.curOp.scrollTop = t);
    }),
    getScrollInfo:function() {
      var e = this.display.scroller;
      return {
        left:e.scrollLeft,
        top:e.scrollTop,
        height:e.scrollHeight - Ve(this) - this.display.barHeight,
        width:e.scrollWidth - Ve(this) - this.display.barWidth,
        clientHeight:Ge(this),
        clientWidth:$e(this)
      };
    },
    scrollIntoView:Ot(function(e, t) {
      if (null == e ? (e = {
        from:this.doc.sel.primary().head,
        to:null
      }, null == t && (t = this.options.cursorScrollMargin)) :"number" == typeof e ? e = {
        from:Po(e, 0),
        to:null
      } :null == e.from && (e = {
        from:e,
        to:null
      }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line) Pr(this), this.curOp.scrollToPos = e; else {
        var r = qr(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);
        this.scrollTo(r.scrollLeft, r.scrollTop);
      }
    }),
    setSize:Ot(function(e, t) {
      function r(e) {
        return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" :e;
      }
      var n = this;
      null != e && (n.display.wrapper.style.width = r(e)), null != t && (n.display.wrapper.style.height = r(t)), 
      n.options.lineWrapping && at(this);
      var i = n.display.viewFrom;
      n.doc.iter(i, n.display.viewTo, function(e) {
        if (e.widgets) for (var t = 0; t < e.widgets.length; t++) if (e.widgets[t].noHScroll) {
          It(n, i, "widget");
          break;
        }
        ++i;
      }), n.curOp.forceUpdate = !0, Wa(n, "refresh", this);
    }),
    operation:function(e) {
      return zt(this, e);
    },
    refresh:Ot(function() {
      var e = this.display.cachedTextHeight;
      qt(this), this.curOp.forceUpdate = !0, lt(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), 
      u(this), (null == e || Math.abs(e - yt(this.display)) > .5) && a(this), Wa(this, "refresh", this);
    }),
    swapDoc:Ot(function(e) {
      var t = this.doc;
      return t.cm = null, Zn(this, e), lt(this), this.display.input.reset(), this.scrollTo(e.scrollLeft, e.scrollTop), 
      this.curOp.forceScroll = !0, Ci(this, "swapDoc", this, t), t;
    }),
    getInputField:function() {
      return this.display.input.getField();
    },
    getWrapperElement:function() {
      return this.display.wrapper;
    },
    getScrollerElement:function() {
      return this.display.scroller;
    },
    getGutterElement:function() {
      return this.display.gutters;
    }
  }, zi(e);
  var ea = e.defaults = {}, ta = e.optionHandlers = {}, ra = e.Init = {
    toString:function() {
      return "CodeMirror.Init";
    }
  };
  Ur("value", "", function(e, t) {
    e.setValue(t);
  }, !0), Ur("mode", null, function(e, t) {
    e.doc.modeOption = t, r(e);
  }, !0), Ur("indentUnit", 2, r, !0), Ur("indentWithTabs", !1), Ur("smartIndent", !0), 
  Ur("tabSize", 4, function(e) {
    n(e), lt(e), qt(e);
  }, !0), Ur("lineSeparator", null, function(e, t) {
    if (e.doc.lineSep = t, t) {
      var r = [], n = e.doc.first;
      e.doc.iter(function(e) {
        for (var i = 0; ;) {
          var o = e.text.indexOf(t, i);
          if (-1 == o) break;
          i = o + t.length, r.push(Po(n, o));
        }
        n++;
      });
      for (var i = r.length - 1; i >= 0; i--) Or(e.doc, t, r[i], Po(r[i].line, r[i].ch + t.length));
    }
  }), Ur("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(t, r, n) {
    t.state.specialChars = new RegExp(r.source + (r.test("\t") ? "" :"|\t"), "g"), n != e.Init && t.refresh();
  }), Ur("specialCharPlaceholder", Hn, function(e) {
    e.refresh();
  }, !0), Ur("electricChars", !0), Ur("inputStyle", zo ? "contenteditable" :"textarea", function() {
    throw new Error("inputStyle can not (yet) be changed in a running editor");
  }, !0), Ur("rtlMoveVisually", !No), Ur("wholeLineUpdateBefore", !0), Ur("theme", "default", function(e) {
    l(e), s(e);
  }, !0), Ur("keyMap", "default", function(t, r, n) {
    var i = Vr(r), o = n != e.Init && Vr(n);
    o && o.detach && o.detach(t, i), i.attach && i.attach(t, o || null);
  }), Ur("extraKeys", null), Ur("lineWrapping", !1, i, !0), Ur("gutters", [], function(e) {
    p(e.options), s(e);
  }, !0), Ur("fixedGutter", !0, function(e, t) {
    e.display.gutters.style.left = t ? C(e.display) + "px" :"0", e.refresh();
  }, !0), Ur("coverGutterNextToScrollbar", !1, function(e) {
    y(e);
  }, !0), Ur("scrollbarStyle", "native", function(e) {
    v(e), y(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
  }, !0), Ur("lineNumbers", !1, function(e) {
    p(e.options), s(e);
  }, !0), Ur("firstLineNumber", 1, s, !0), Ur("lineNumberFormatter", function(e) {
    return e;
  }, s, !0), Ur("showCursorWhenSelecting", !1, De, !0), Ur("resetSelectionOnContextMenu", !0), 
  Ur("lineWiseCopyCut", !0), Ur("readOnly", !1, function(e, t) {
    "nocursor" == t ? (vr(e), e.display.input.blur(), e.display.disabled = !0) :e.display.disabled = !1, 
    e.display.input.readOnlyChanged(t);
  }), Ur("disableInput", !1, function(e, t) {
    t || e.display.input.reset();
  }, !0), Ur("dragDrop", !0, Rt), Ur("allowDropFileTypes", null), Ur("cursorBlinkRate", 530), 
  Ur("cursorScrollMargin", 0), Ur("cursorHeight", 1, De, !0), Ur("singleCursorHeightPerLine", !0, De, !0), 
  Ur("workTime", 100), Ur("workDelay", 100), Ur("flattenSpans", !0, n, !0), Ur("addModeClass", !1, n, !0), 
  Ur("pollInterval", 100), Ur("undoDepth", 200, function(e, t) {
    e.doc.history.undoDepth = t;
  }), Ur("historyEventDelay", 1250), Ur("viewportMargin", 10, function(e) {
    e.refresh();
  }, !0), Ur("maxHighlightLength", 1e4, n, !0), Ur("moveInputWithCursor", !0, function(e, t) {
    t || e.display.input.resetPosition();
  }), Ur("tabindex", null, function(e, t) {
    e.display.input.getField().tabIndex = t || "";
  }), Ur("autofocus", null);
  var na = e.modes = {}, ia = e.mimeModes = {};
  e.defineMode = function(t, r) {
    e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2 && (r.dependencies = Array.prototype.slice.call(arguments, 2)), 
    na[t] = r;
  }, e.defineMIME = function(e, t) {
    ia[e] = t;
  }, e.resolveMode = function(t) {
    if ("string" == typeof t && ia.hasOwnProperty(t)) t = ia[t]; else if (t && "string" == typeof t.name && ia.hasOwnProperty(t.name)) {
      var r = ia[t.name];
      "string" == typeof r && (r = {
        name:r
      }), t = Ii(r, t), t.name = r.name;
    } else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");
    return "string" == typeof t ? {
      name:t
    } :t || {
      name:"null"
    };
  }, e.getMode = function(t, r) {
    var r = e.resolveMode(r), n = na[r.name];
    if (!n) return e.getMode(t, "text/plain");
    var i = n(t, r);
    if (oa.hasOwnProperty(r.name)) {
      var o = oa[r.name];
      for (var a in o) o.hasOwnProperty(a) && (i.hasOwnProperty(a) && (i["_" + a] = i[a]), 
      i[a] = o[a]);
    }
    if (i.name = r.name, r.helperType && (i.helperType = r.helperType), r.modeProps) for (var a in r.modeProps) i[a] = r.modeProps[a];
    return i;
  }, e.defineMode("null", function() {
    return {
      token:function(e) {
        e.skipToEnd();
      }
    };
  }), e.defineMIME("text/plain", "null");
  var oa = e.modeExtensions = {};
  e.extendMode = function(e, t) {
    Ei(t, oa.hasOwnProperty(e) ? oa[e] :oa[e] = {});
  }, e.defineExtension = function(t, r) {
    e.prototype[t] = r;
  }, e.defineDocExtension = function(e, t) {
    Ca.prototype[e] = t;
  }, e.defineOption = Ur;
  var aa = [];
  e.defineInitHook = function(e) {
    aa.push(e);
  };
  var la = e.helpers = {};
  e.registerHelper = function(t, r, n) {
    la.hasOwnProperty(t) || (la[t] = e[t] = {
      _global:[]
    }), la[t][r] = n;
  }, e.registerGlobalHelper = function(t, r, n, i) {
    e.registerHelper(t, r, i), la[t]._global.push({
      pred:n,
      val:i
    });
  };
  var sa = e.copyState = function(e, t) {
    if (!0 === t) return t;
    if (e.copyState) return e.copyState(t);
    var r = {};
    for (var n in t) {
      var i = t[n];
      i instanceof Array && (i = i.concat([])), r[n] = i;
    }
    return r;
  }, ca = e.startState = function(e, t, r) {
    return !e.startState || e.startState(t, r);
  };
  e.innerMode = function(e, t) {
    for (;e.innerMode; ) {
      var r = e.innerMode(t);
      if (!r || r.mode == e) break;
      t = r.state, e = r.mode;
    }
    return r || {
      mode:e,
      state:t
    };
  };
  var ua = e.commands = {
    selectAll:function(e) {
      e.setSelection(Po(e.firstLine(), 0), Po(e.lastLine()), Ea);
    },
    singleSelection:function(e) {
      e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Ea);
    },
    killLine:function(e) {
      jr(e, function(t) {
        if (t.empty()) {
          var r = Yn(e.doc, t.head.line).text.length;
          return t.head.ch == r && t.head.line < e.lastLine() ? {
            from:t.head,
            to:Po(t.head.line + 1, 0)
          } :{
            from:t.head,
            to:Po(t.head.line, r)
          };
        }
        return {
          from:t.from(),
          to:t.to()
        };
      });
    },
    deleteLine:function(e) {
      jr(e, function(t) {
        return {
          from:Po(t.from().line, 0),
          to:me(e.doc, Po(t.to().line + 1, 0))
        };
      });
    },
    delLineLeft:function(e) {
      jr(e, function(e) {
        return {
          from:Po(e.from().line, 0),
          to:e.from()
        };
      });
    },
    delWrappedLineLeft:function(e) {
      jr(e, function(t) {
        var r = e.charCoords(t.head, "div").top + 5;
        return {
          from:e.coordsChar({
            left:0,
            top:r
          }, "div"),
          to:t.from()
        };
      });
    },
    delWrappedLineRight:function(e) {
      jr(e, function(t) {
        var r = e.charCoords(t.head, "div").top + 5, n = e.coordsChar({
          left:e.display.lineDiv.offsetWidth + 100,
          top:r
        }, "div");
        return {
          from:t.from(),
          to:n
        };
      });
    },
    undo:function(e) {
      e.undo();
    },
    redo:function(e) {
      e.redo();
    },
    undoSelection:function(e) {
      e.undoSelection();
    },
    redoSelection:function(e) {
      e.redoSelection();
    },
    goDocStart:function(e) {
      e.extendSelection(Po(e.firstLine(), 0));
    },
    goDocEnd:function(e) {
      e.extendSelection(Po(e.lastLine()));
    },
    goLineStart:function(e) {
      e.extendSelectionsBy(function(t) {
        return oo(e, t.head.line);
      }, {
        origin:"+move",
        bias:1
      });
    },
    goLineStartSmart:function(e) {
      e.extendSelectionsBy(function(t) {
        return lo(e, t.head);
      }, {
        origin:"+move",
        bias:1
      });
    },
    goLineEnd:function(e) {
      e.extendSelectionsBy(function(t) {
        return ao(e, t.head.line);
      }, {
        origin:"+move",
        bias:-1
      });
    },
    goLineRight:function(e) {
      e.extendSelectionsBy(function(t) {
        var r = e.charCoords(t.head, "div").top + 5;
        return e.coordsChar({
          left:e.display.lineDiv.offsetWidth + 100,
          top:r
        }, "div");
      }, Ha);
    },
    goLineLeft:function(e) {
      e.extendSelectionsBy(function(t) {
        var r = e.charCoords(t.head, "div").top + 5;
        return e.coordsChar({
          left:0,
          top:r
        }, "div");
      }, Ha);
    },
    goLineLeftSmart:function(e) {
      e.extendSelectionsBy(function(t) {
        var r = e.charCoords(t.head, "div").top + 5, n = e.coordsChar({
          left:0,
          top:r
        }, "div");
        return n.ch < e.getLine(n.line).search(/\S/) ? lo(e, t.head) :n;
      }, Ha);
    },
    goLineUp:function(e) {
      e.moveV(-1, "line");
    },
    goLineDown:function(e) {
      e.moveV(1, "line");
    },
    goPageUp:function(e) {
      e.moveV(-1, "page");
    },
    goPageDown:function(e) {
      e.moveV(1, "page");
    },
    goCharLeft:function(e) {
      e.moveH(-1, "char");
    },
    goCharRight:function(e) {
      e.moveH(1, "char");
    },
    goColumnLeft:function(e) {
      e.moveH(-1, "column");
    },
    goColumnRight:function(e) {
      e.moveH(1, "column");
    },
    goWordLeft:function(e) {
      e.moveH(-1, "word");
    },
    goGroupRight:function(e) {
      e.moveH(1, "group");
    },
    goGroupLeft:function(e) {
      e.moveH(-1, "group");
    },
    goWordRight:function(e) {
      e.moveH(1, "word");
    },
    delCharBefore:function(e) {
      e.deleteH(-1, "char");
    },
    delCharAfter:function(e) {
      e.deleteH(1, "char");
    },
    delWordBefore:function(e) {
      e.deleteH(-1, "word");
    },
    delWordAfter:function(e) {
      e.deleteH(1, "word");
    },
    delGroupBefore:function(e) {
      e.deleteH(-1, "group");
    },
    delGroupAfter:function(e) {
      e.deleteH(1, "group");
    },
    indentAuto:function(e) {
      e.indentSelection("smart");
    },
    indentMore:function(e) {
      e.indentSelection("add");
    },
    indentLess:function(e) {
      e.indentSelection("subtract");
    },
    insertTab:function(e) {
      e.replaceSelection("\t");
    },
    insertSoftTab:function(e) {
      for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
        var o = r[i].from(), a = Fa(e.getLine(o.line), o.ch, n);
        t.push(Oi(n - a % n));
      }
      e.replaceSelections(t);
    },
    defaultTab:function(e) {
      e.somethingSelected() ? e.indentSelection("add") :e.execCommand("insertTab");
    },
    transposeChars:function(e) {
      zt(e, function() {
        for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++) {
          var i = t[n].head, o = Yn(e.doc, i.line).text;
          if (o) if (i.ch == o.length && (i = new Po(i.line, i.ch - 1)), i.ch > 0) i = new Po(i.line, i.ch + 1), 
          e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), Po(i.line, i.ch - 2), i, "+transpose"); else if (i.line > e.doc.first) {
            var a = Yn(e.doc, i.line - 1).text;
            a && e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), Po(i.line - 1, a.length - 1), Po(i.line, 1), "+transpose");
          }
          r.push(new de(i, i));
        }
        e.setSelections(r);
      });
    },
    newlineAndIndent:function(e) {
      zt(e, function() {
        for (var t = e.listSelections().length, r = 0; r < t; r++) {
          var n = e.listSelections()[r];
          e.replaceRange(e.doc.lineSeparator(), n.anchor, n.head, "+input"), e.indentLine(n.from().line + 1, null, !0);
        }
        Er(e);
      });
    },
    openLine:function(e) {
      e.replaceSelection("\n", "start");
    },
    toggleOverwrite:function(e) {
      e.toggleOverwrite();
    }
  }, da = e.keyMap = {};
  da.basic = {
    Left:"goCharLeft",
    Right:"goCharRight",
    Up:"goLineUp",
    Down:"goLineDown",
    End:"goLineEnd",
    Home:"goLineStartSmart",
    PageUp:"goPageUp",
    PageDown:"goPageDown",
    Delete:"delCharAfter",
    Backspace:"delCharBefore",
    "Shift-Backspace":"delCharBefore",
    Tab:"defaultTab",
    "Shift-Tab":"indentAuto",
    Enter:"newlineAndIndent",
    Insert:"toggleOverwrite",
    Esc:"singleSelection"
  }, da.pcDefault = {
    "Ctrl-A":"selectAll",
    "Ctrl-D":"deleteLine",
    "Ctrl-Z":"undo",
    "Shift-Ctrl-Z":"redo",
    "Ctrl-Y":"redo",
    "Ctrl-Home":"goDocStart",
    "Ctrl-End":"goDocEnd",
    "Ctrl-Up":"goLineUp",
    "Ctrl-Down":"goLineDown",
    "Ctrl-Left":"goGroupLeft",
    "Ctrl-Right":"goGroupRight",
    "Alt-Left":"goLineStart",
    "Alt-Right":"goLineEnd",
    "Ctrl-Backspace":"delGroupBefore",
    "Ctrl-Delete":"delGroupAfter",
    "Ctrl-S":"save",
    "Ctrl-F":"find",
    "Ctrl-G":"findNext",
    "Shift-Ctrl-G":"findPrev",
    "Shift-Ctrl-F":"replace",
    "Shift-Ctrl-R":"replaceAll",
    "Ctrl-[":"indentLess",
    "Ctrl-]":"indentMore",
    "Ctrl-U":"undoSelection",
    "Shift-Ctrl-U":"redoSelection",
    "Alt-U":"redoSelection",
    fallthrough:"basic"
  }, da.emacsy = {
    "Ctrl-F":"goCharRight",
    "Ctrl-B":"goCharLeft",
    "Ctrl-P":"goLineUp",
    "Ctrl-N":"goLineDown",
    "Alt-F":"goWordRight",
    "Alt-B":"goWordLeft",
    "Ctrl-A":"goLineStart",
    "Ctrl-E":"goLineEnd",
    "Ctrl-V":"goPageDown",
    "Shift-Ctrl-V":"goPageUp",
    "Ctrl-D":"delCharAfter",
    "Ctrl-H":"delCharBefore",
    "Alt-D":"delWordAfter",
    "Alt-Backspace":"delWordBefore",
    "Ctrl-K":"killLine",
    "Ctrl-T":"transposeChars",
    "Ctrl-O":"openLine"
  }, da.macDefault = {
    "Cmd-A":"selectAll",
    "Cmd-D":"deleteLine",
    "Cmd-Z":"undo",
    "Shift-Cmd-Z":"redo",
    "Cmd-Y":"redo",
    "Cmd-Home":"goDocStart",
    "Cmd-Up":"goDocStart",
    "Cmd-End":"goDocEnd",
    "Cmd-Down":"goDocEnd",
    "Alt-Left":"goGroupLeft",
    "Alt-Right":"goGroupRight",
    "Cmd-Left":"goLineLeft",
    "Cmd-Right":"goLineRight",
    "Alt-Backspace":"delGroupBefore",
    "Ctrl-Alt-Backspace":"delGroupAfter",
    "Alt-Delete":"delGroupAfter",
    "Cmd-S":"save",
    "Cmd-F":"find",
    "Cmd-G":"findNext",
    "Shift-Cmd-G":"findPrev",
    "Cmd-Alt-F":"replace",
    "Shift-Cmd-Alt-F":"replaceAll",
    "Cmd-[":"indentLess",
    "Cmd-]":"indentMore",
    "Cmd-Backspace":"delWrappedLineLeft",
    "Cmd-Delete":"delWrappedLineRight",
    "Cmd-U":"undoSelection",
    "Shift-Cmd-U":"redoSelection",
    "Ctrl-Up":"goDocStart",
    "Ctrl-Down":"goDocEnd",
    fallthrough:[ "basic", "emacsy" ]
  }, da["default"] = Ao ? da.macDefault :da.pcDefault, e.normalizeKeyMap = function(e) {
    var t = {};
    for (var r in e) if (e.hasOwnProperty(r)) {
      var n = e[r];
      if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
      if ("..." == n) {
        delete e[r];
        continue;
      }
      for (var i = Di(r.split(" "), Kr), o = 0; o < i.length; o++) {
        var a, l;
        o == i.length - 1 ? (l = i.join(" "), a = n) :(l = i.slice(0, o + 1).join(" "), 
        a = "...");
        var s = t[l];
        if (s) {
          if (s != a) throw new Error("Inconsistent bindings for " + l);
        } else t[l] = a;
      }
      delete e[r];
    }
    for (var c in t) e[c] = t[c];
    return e;
  };
  var fa = e.lookupKey = function(e, t, r, n) {
    t = Vr(t);
    var i = t.call ? t.call(e, n) :t[e];
    if (!1 === i) return "nothing";
    if ("..." === i) return "multi";
    if (null != i && r(i)) return "handled";
    if (t.fallthrough) {
      if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return fa(e, t.fallthrough, r, n);
      for (var o = 0; o < t.fallthrough.length; o++) {
        var a = fa(e, t.fallthrough[o], r, n);
        if (a) return a;
      }
    }
  }, pa = e.isModifierKey = function(e) {
    var t = "string" == typeof e ? e :ol[e.keyCode];
    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
  }, ha = e.keyName = function(e, t) {
    if (Co && 34 == e.keyCode && e["char"]) return !1;
    var r = ol[e.keyCode], n = r;
    return null != n && !e.altGraphKey && (e.altKey && "Alt" != r && (n = "Alt-" + n), 
    (Do ? e.metaKey :e.ctrlKey) && "Ctrl" != r && (n = "Ctrl-" + n), (Do ? e.ctrlKey :e.metaKey) && "Cmd" != r && (n = "Cmd-" + n), 
    !t && e.shiftKey && "Shift" != r && (n = "Shift-" + n), n);
  };
  e.fromTextArea = function(t, r) {
    function n() {
      t.value = s.getValue();
    }
    if (r = r ? Ei(r) :{}, r.value = t.value, !r.tabindex && t.tabIndex && (r.tabindex = t.tabIndex), 
    !r.placeholder && t.placeholder && (r.placeholder = t.placeholder), null == r.autofocus) {
      var i = Ki();
      r.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body;
    }
    if (t.form && (Aa(t.form, "submit", n), !r.leaveSubmitMethodAlone)) {
      var o = t.form, a = o.submit;
      try {
        var l = o.submit = function() {
          n(), o.submit = a, o.submit(), o.submit = l;
        };
      } catch (e) {}
    }
    r.finishInit = function(e) {
      e.save = n, e.getTextArea = function() {
        return t;
      }, e.toTextArea = function() {
        e.toTextArea = isNaN, n(), t.parentNode.removeChild(e.getWrapperElement()), t.style.display = "", 
        t.form && (Na(t.form, "submit", n), "function" == typeof t.form.submit && (t.form.submit = a));
      };
    }, t.style.display = "none";
    var s = e(function(e) {
      t.parentNode.insertBefore(e, t.nextSibling);
    }, r);
    return s;
  };
  var ma = e.StringStream = function(e, t) {
    this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, 
    this.lineStart = 0;
  };
  ma.prototype = {
    eol:function() {
      return this.pos >= this.string.length;
    },
    sol:function() {
      return this.pos == this.lineStart;
    },
    peek:function() {
      return this.string.charAt(this.pos) || undefined;
    },
    next:function() {
      if (this.pos < this.string.length) return this.string.charAt(this.pos++);
    },
    eat:function(e) {
      var t = this.string.charAt(this.pos);
      if ("string" == typeof e) var r = t == e; else var r = t && (e.test ? e.test(t) :e(t));
      if (r) return ++this.pos, t;
    },
    eatWhile:function(e) {
      for (var t = this.pos; this.eat(e); ) ;
      return this.pos > t;
    },
    eatSpace:function() {
      for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
      return this.pos > e;
    },
    skipToEnd:function() {
      this.pos = this.string.length;
    },
    skipTo:function(e) {
      var t = this.string.indexOf(e, this.pos);
      if (t > -1) return this.pos = t, !0;
    },
    backUp:function(e) {
      this.pos -= e;
    },
    column:function() {
      return this.lastColumnPos < this.start && (this.lastColumnValue = Fa(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), 
      this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Fa(this.string, this.lineStart, this.tabSize) :0);
    },
    indentation:function() {
      return Fa(this.string, null, this.tabSize) - (this.lineStart ? Fa(this.string, this.lineStart, this.tabSize) :0);
    },
    match:function(e, t, r) {
      if ("string" != typeof e) {
        var n = this.string.slice(this.pos).match(e);
        return n && n.index > 0 ? null :(n && !1 !== t && (this.pos += n[0].length), n);
      }
      var i = function(e) {
        return r ? e.toLowerCase() :e;
      };
      if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), 
      !0;
    },
    current:function() {
      return this.string.slice(this.start, this.pos);
    },
    hideFirstChars:function(e, t) {
      this.lineStart += e;
      try {
        return t();
      } finally {
        this.lineStart -= e;
      }
    }
  };
  var ga = 0, va = e.TextMarker = function(e, t) {
    this.lines = [], this.type = t, this.doc = e, this.id = ++ga;
  };
  zi(va), va.prototype.clear = function() {
    if (!this.explicitlyCleared) {
      var e = this.doc.cm, t = e && !e.curOp;
      if (t && xt(e), Ti(this, "clear")) {
        var r = this.find();
        r && Ci(this, "clear", r.from, r.to);
      }
      for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
        var a = this.lines[o], l = Jr(a.markedSpans, this);
        e && !this.collapsed ? It(e, ti(a), "text") :e && (null != l.to && (i = ti(a)), 
        null != l.from && (n = ti(a))), a.markedSpans = en(a.markedSpans, l), null == l.from && this.collapsed && !_n(this.doc, a) && e && ei(a, yt(e.display));
      }
      if (e && this.collapsed && !e.options.lineWrapping) for (var o = 0; o < this.lines.length; ++o) {
        var s = yn(this.lines[o]), c = d(s);
        c > e.display.maxLineLength && (e.display.maxLine = s, e.display.maxLineLength = c, 
        e.display.maxLineChanged = !0);
      }
      null != n && e && this.collapsed && qt(e, n, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, 
      this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && ze(e.doc)), e && Ci(e, "markerCleared", e, this), 
      t && _t(e), this.parent && this.parent.clear();
    }
  }, va.prototype.find = function(e, t) {
    null == e && "bookmark" == this.type && (e = 1);
    for (var r, n, i = 0; i < this.lines.length; ++i) {
      var o = this.lines[i], a = Jr(o.markedSpans, this);
      if (null != a.from && (r = Po(t ? o :ti(o), a.from), -1 == e)) return r;
      if (null != a.to && (n = Po(t ? o :ti(o), a.to), 1 == e)) return n;
    }
    return r && {
      from:r,
      to:n
    };
  }, va.prototype.changed = function() {
    var e = this.find(-1, !0), t = this, r = this.doc.cm;
    e && r && zt(r, function() {
      var n = e.line, i = ti(e.line), o = Je(r, i);
      if (o && (ot(o), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, 
      !_n(t.doc, n) && null != t.height) {
        var a = t.height;
        t.height = null;
        var l = Sn(t) - a;
        l && ei(n, n.height + l);
      }
    });
  }, va.prototype.attachLine = function(e) {
    if (!this.lines.length && this.doc.cm) {
      var t = this.doc.cm.curOp;
      t.maybeHiddenMarkers && -1 != Wi(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
    }
    this.lines.push(e);
  }, va.prototype.detachLine = function(e) {
    if (this.lines.splice(Wi(this.lines, e), 1), !this.lines.length && this.doc.cm) {
      var t = this.doc.cm.curOp;
      (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
    }
  };
  var ga = 0, ya = e.SharedTextMarker = function(e, t) {
    this.markers = e, this.primary = t;
    for (var r = 0; r < e.length; ++r) e[r].parent = this;
  };
  zi(ya), ya.prototype.clear = function() {
    if (!this.explicitlyCleared) {
      this.explicitlyCleared = !0;
      for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
      Ci(this, "clear");
    }
  }, ya.prototype.find = function(e, t) {
    return this.primary.find(e, t);
  };
  var ba = e.LineWidget = function(e, t, r) {
    if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
    this.doc = e, this.node = t;
  };
  zi(ba), ba.prototype.clear = function() {
    var e = this.doc.cm, t = this.line.widgets, r = this.line, n = ti(r);
    if (null != n && t) {
      for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
      t.length || (r.widgets = null);
      var o = Sn(this);
      ei(r, Math.max(0, r.height - o)), e && zt(e, function() {
        Cn(e, r, -o), It(e, n, "widget");
      });
    }
  }, ba.prototype.changed = function() {
    var e = this.height, t = this.doc.cm, r = this.line;
    this.height = null;
    var n = Sn(this) - e;
    n && (ei(r, r.height + n), t && zt(t, function() {
      t.curOp.forceUpdate = !0, Cn(t, r, n);
    }));
  };
  var xa = e.Line = function(e, t, r) {
    this.text = e, un(this, t), this.height = r ? r(this) :1;
  };
  zi(xa), xa.prototype.lineNo = function() {
    return ti(this);
  };
  var wa = {}, _a = {};
  $n.prototype = {
    chunkSize:function() {
      return this.lines.length;
    },
    removeInner:function(e, t) {
      for (var r = e, n = e + t; r < n; ++r) {
        var i = this.lines[r];
        this.height -= i.height, Tn(i), Ci(i, "delete");
      }
      this.lines.splice(e, t);
    },
    collapse:function(e) {
      e.push.apply(e, this.lines);
    },
    insertInner:function(e, t, r) {
      this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
      for (var n = 0; n < t.length; ++n) t[n].parent = this;
    },
    iterN:function(e, t, r) {
      for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0;
    }
  }, Gn.prototype = {
    chunkSize:function() {
      return this.size;
    },
    removeInner:function(e, t) {
      this.size -= t;
      for (var r = 0; r < this.children.length; ++r) {
        var n = this.children[r], i = n.chunkSize();
        if (e < i) {
          var o = Math.min(t, i - e), a = n.height;
          if (n.removeInner(e, o), this.height -= a - n.height, i == o && (this.children.splice(r--, 1), 
          n.parent = null), 0 == (t -= o)) break;
          e = 0;
        } else e -= i;
      }
      if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof $n))) {
        var l = [];
        this.collapse(l), this.children = [ new $n(l) ], this.children[0].parent = this;
      }
    },
    collapse:function(e) {
      for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
    },
    insertInner:function(e, t, r) {
      this.size += t.length, this.height += r;
      for (var n = 0; n < this.children.length; ++n) {
        var i = this.children[n], o = i.chunkSize();
        if (e <= o) {
          if (i.insertInner(e, t, r), i.lines && i.lines.length > 50) {
            for (var a = i.lines.length % 25 + 25, l = a; l < i.lines.length; ) {
              var s = new $n(i.lines.slice(l, l += 25));
              i.height -= s.height, this.children.splice(++n, 0, s), s.parent = this;
            }
            i.lines = i.lines.slice(0, a), this.maybeSpill();
          }
          break;
        }
        e -= o;
      }
    },
    maybeSpill:function() {
      if (!(this.children.length <= 10)) {
        var e = this;
        do {
          var t = e.children.splice(e.children.length - 5, 5), r = new Gn(t);
          if (e.parent) {
            e.size -= r.size, e.height -= r.height;
            var n = Wi(e.parent.children, e);
            e.parent.children.splice(n + 1, 0, r);
          } else {
            var i = new Gn(e.children);
            i.parent = e, e.children = [ i, r ], e = i;
          }
          r.parent = e.parent;
        } while (e.children.length > 10);
        e.parent.maybeSpill();
      }
    },
    iterN:function(e, t, r) {
      for (var n = 0; n < this.children.length; ++n) {
        var i = this.children[n], o = i.chunkSize();
        if (e < o) {
          var a = Math.min(t, o - e);
          if (i.iterN(e, a, r)) return !0;
          if (0 == (t -= a)) break;
          e = 0;
        } else e -= o;
      }
    }
  };
  var ka = 0, Ca = e.Doc = function(e, t, r, n) {
    if (!(this instanceof Ca)) return new Ca(e, t, r, n);
    null == r && (r = 0), Gn.call(this, [ new $n([ new xa("", null) ]) ]), this.first = r, 
    this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, 
    this.frontier = r;
    var i = Po(r, 0);
    this.sel = pe(i), this.history = new oi(null), this.id = ++ka, this.modeOption = t, 
    this.lineSep = n, this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), 
    Vn(this, {
      from:i,
      to:i,
      text:e
    }), Me(this, pe(i), Ea);
  };
  Ca.prototype = Ii(Gn.prototype, {
    constructor:Ca,
    iter:function(e, t, r) {
      r ? this.iterN(e - this.first, t - e, r) :this.iterN(this.first, this.first + this.size, e);
    },
    insert:function(e, t) {
      for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
      this.insertInner(e - this.first, t, r);
    },
    remove:function(e, t) {
      this.removeInner(e - this.first, t);
    },
    getValue:function(e) {
      var t = Jn(this, this.first, this.first + this.size);
      return !1 === e ? t :t.join(e || this.lineSeparator());
    },
    setValue:Nt(function(e) {
      var t = Po(this.first, 0), r = this.first + this.size - 1;
      Sr(this, {
        from:t,
        to:Po(r, Yn(this, r).text.length),
        text:this.splitLines(e),
        origin:"setValue",
        full:!0
      }, !0), Me(this, pe(t));
    }),
    replaceRange:function(e, t, r, n) {
      t = me(this, t), r = r ? me(this, r) :t, Or(this, e, t, r, n);
    },
    getRange:function(e, t, r) {
      var n = Qn(this, me(this, e), me(this, t));
      return !1 === r ? n :n.join(r || this.lineSeparator());
    },
    getLine:function(e) {
      var t = this.getLineHandle(e);
      return t && t.text;
    },
    getLineHandle:function(e) {
      if (ve(this, e)) return Yn(this, e);
    },
    getLineNumber:function(e) {
      return ti(e);
    },
    getLineHandleVisualStart:function(e) {
      return "number" == typeof e && (e = Yn(this, e)), yn(e);
    },
    lineCount:function() {
      return this.size;
    },
    firstLine:function() {
      return this.first;
    },
    lastLine:function() {
      return this.first + this.size - 1;
    },
    clipPos:function(e) {
      return me(this, e);
    },
    getCursor:function(e) {
      var t = this.sel.primary();
      return null == e || "head" == e ? t.head :"anchor" == e ? t.anchor :"end" == e || "to" == e || !1 === e ? t.to() :t.from();
    },
    listSelections:function() {
      return this.sel.ranges;
    },
    somethingSelected:function() {
      return this.sel.somethingSelected();
    },
    setCursor:Nt(function(e, t, r) {
      ke(this, me(this, "number" == typeof e ? Po(e, t || 0) :e), null, r);
    }),
    setSelection:Nt(function(e, t, r) {
      ke(this, me(this, e), me(this, t || e), r);
    }),
    extendSelection:Nt(function(e, t, r) {
      xe(this, me(this, e), t && me(this, t), r);
    }),
    extendSelections:Nt(function(e, t) {
      we(this, ye(this, e), t);
    }),
    extendSelectionsBy:Nt(function(e, t) {
      we(this, ye(this, Di(this.sel.ranges, e)), t);
    }),
    setSelections:Nt(function(e, t, r) {
      if (e.length) {
        for (var n = 0, i = []; n < e.length; n++) i[n] = new de(me(this, e[n].anchor), me(this, e[n].head));
        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Me(this, fe(i, t), r);
      }
    }),
    addSelection:Nt(function(e, t, r) {
      var n = this.sel.ranges.slice(0);
      n.push(new de(me(this, e), me(this, t || e))), Me(this, fe(n, n.length - 1), r);
    }),
    getSelection:function(e) {
      for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
        var i = Qn(this, r[n].from(), r[n].to());
        t = t ? t.concat(i) :i;
      }
      return !1 === e ? t :t.join(e || this.lineSeparator());
    },
    getSelections:function(e) {
      for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
        var i = Qn(this, r[n].from(), r[n].to());
        !1 !== e && (i = i.join(e || this.lineSeparator())), t[n] = i;
      }
      return t;
    },
    replaceSelection:function(e, t, r) {
      for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
      this.replaceSelections(n, t, r || "+input");
    },
    replaceSelections:Nt(function(e, t, r) {
      for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
        var a = i.ranges[o];
        n[o] = {
          from:a.from(),
          to:a.to(),
          text:this.splitLines(e[o]),
          origin:r
        };
      }
      for (var l = t && "end" != t && kr(this, n, t), o = n.length - 1; o >= 0; o--) Sr(this, n[o]);
      l ? Se(this, l) :this.cm && Er(this.cm);
    }),
    undo:Nt(function() {
      Lr(this, "undo");
    }),
    redo:Nt(function() {
      Lr(this, "redo");
    }),
    undoSelection:Nt(function() {
      Lr(this, "undo", !0);
    }),
    redoSelection:Nt(function() {
      Lr(this, "redo", !0);
    }),
    setExtending:function(e) {
      this.extend = e;
    },
    getExtending:function() {
      return this.extend;
    },
    historySize:function() {
      for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
      for (var n = 0; n < e.undone.length; n++) e.undone[n].ranges || ++r;
      return {
        undo:t,
        redo:r
      };
    },
    clearHistory:function() {
      this.history = new oi(this.history.maxGeneration);
    },
    markClean:function() {
      this.cleanGeneration = this.changeGeneration(!0);
    },
    changeGeneration:function(e) {
      return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), 
      this.history.generation;
    },
    isClean:function(e) {
      return this.history.generation == (e || this.cleanGeneration);
    },
    getHistory:function() {
      return {
        done:gi(this.history.done),
        undone:gi(this.history.undone)
      };
    },
    setHistory:function(e) {
      var t = this.history = new oi(this.history.maxGeneration);
      t.done = gi(e.done.slice(0), null, !0), t.undone = gi(e.undone.slice(0), null, !0);
    },
    addLineClass:Nt(function(e, t, r) {
      return Fr(this, e, "gutter" == t ? "gutter" :"class", function(e) {
        var n = "text" == t ? "textClass" :"background" == t ? "bgClass" :"gutter" == t ? "gutterClass" :"wrapClass";
        if (e[n]) {
          if (Vi(r).test(e[n])) return !1;
          e[n] += " " + r;
        } else e[n] = r;
        return !0;
      });
    }),
    removeLineClass:Nt(function(e, t, r) {
      return Fr(this, e, "gutter" == t ? "gutter" :"class", function(e) {
        var n = "text" == t ? "textClass" :"background" == t ? "bgClass" :"gutter" == t ? "gutterClass" :"wrapClass", i = e[n];
        if (!i) return !1;
        if (null == r) e[n] = null; else {
          var o = i.match(Vi(r));
          if (!o) return !1;
          var a = o.index + o[0].length;
          e[n] = i.slice(0, o.index) + (o.index && a != i.length ? " " :"") + i.slice(a) || null;
        }
        return !0;
      });
    }),
    addLineWidget:Nt(function(e, t, r) {
      return Mn(this, e, t, r);
    }),
    removeLineWidget:function(e) {
      e.clear();
    },
    markText:function(e, t, r) {
      return $r(this, me(this, e), me(this, t), r, r && r.type || "range");
    },
    setBookmark:function(e, t) {
      var r = {
        replacedWith:t && (null == t.nodeType ? t.widget :t),
        insertLeft:t && t.insertLeft,
        clearWhenEmpty:!1,
        shared:t && t.shared,
        handleMouseEvents:t && t.handleMouseEvents
      };
      return e = me(this, e), $r(this, e, e, r, "bookmark");
    },
    findMarksAt:function(e) {
      e = me(this, e);
      var t = [], r = Yn(this, e.line).markedSpans;
      if (r) for (var n = 0; n < r.length; ++n) {
        var i = r[n];
        (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
      }
      return t;
    },
    findMarks:function(e, t, r) {
      e = me(this, e), t = me(this, t);
      var n = [], i = e.line;
      return this.iter(e.line, t.line + 1, function(o) {
        var a = o.markedSpans;
        if (a) for (var l = 0; l < a.length; l++) {
          var s = a[l];
          null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || r && !r(s.marker) || n.push(s.marker.parent || s.marker);
        }
        ++i;
      }), n;
    },
    getAllMarks:function() {
      var e = [];
      return this.iter(function(t) {
        var r = t.markedSpans;
        if (r) for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker);
      }), e;
    },
    posFromIndex:function(e) {
      var t, r = this.first, n = this.lineSeparator().length;
      return this.iter(function(i) {
        var o = i.text.length + n;
        if (o > e) return t = e, !0;
        e -= o, ++r;
      }), me(this, Po(r, t));
    },
    indexFromPos:function(e) {
      e = me(this, e);
      var t = e.ch;
      if (e.line < this.first || e.ch < 0) return 0;
      var r = this.lineSeparator().length;
      return this.iter(this.first, e.line, function(e) {
        t += e.text.length + r;
      }), t;
    },
    copy:function(e) {
      var t = new Ca(Jn(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
      return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, 
      t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), 
      t;
    },
    linkedDoc:function(e) {
      e || (e = {});
      var t = this.first, r = this.first + this.size;
      null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
      var n = new Ca(Jn(this, t, r), e.mode || this.modeOption, t, this.lineSep);
      return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
        doc:n,
        sharedHist:e.sharedHist
      }), n.linked = [ {
        doc:this,
        isParent:!0,
        sharedHist:e.sharedHist
      } ], Zr(n, Xr(this)), n;
    },
    unlinkDoc:function(t) {
      if (t instanceof e && (t = t.doc), this.linked) for (var r = 0; r < this.linked.length; ++r) {
        var n = this.linked[r];
        if (n.doc == t) {
          this.linked.splice(r, 1), t.unlinkDoc(this), Yr(Xr(this));
          break;
        }
      }
      if (t.history == this.history) {
        var i = [ t.id ];
        Xn(t, function(e) {
          i.push(e.id);
        }, !0), t.history = new oi(null), t.history.done = gi(this.history.done, i), t.history.undone = gi(this.history.undone, i);
      }
    },
    iterLinkedDocs:function(e) {
      Xn(this, e);
    },
    getMode:function() {
      return this.mode;
    },
    getEditor:function() {
      return this.cm;
    },
    splitLines:function(e) {
      return this.lineSep ? e.split(this.lineSep) :tl(e);
    },
    lineSeparator:function() {
      return this.lineSep || "\n";
    }
  }), Ca.prototype.eachLine = Ca.prototype.iter;
  var Sa = "iter insert remove copy getEditor constructor".split(" ");
  for (var Ma in Ca.prototype) Ca.prototype.hasOwnProperty(Ma) && Wi(Sa, Ma) < 0 && (e.prototype[Ma] = function(e) {
    return function() {
      return e.apply(this.doc, arguments);
    };
  }(Ca.prototype[Ma]));
  zi(Ca);
  var La = e.e_preventDefault = function(e) {
    e.preventDefault ? e.preventDefault() :e.returnValue = !1;
  }, Ta = e.e_stopPropagation = function(e) {
    e.stopPropagation ? e.stopPropagation() :e.cancelBubble = !0;
  }, za = e.e_stop = function(e) {
    La(e), Ta(e);
  }, Aa = e.on = function(e, t, r) {
    if (e.addEventListener) e.addEventListener(t, r, !1); else if (e.attachEvent) e.attachEvent("on" + t, r); else {
      var n = e._handlers || (e._handlers = {}), i = n[t] || (n[t] = []);
      i.push(r);
    }
  }, Oa = [], Na = e.off = function(e, t, r) {
    if (e.removeEventListener) e.removeEventListener(t, r, !1); else if (e.detachEvent) e.detachEvent("on" + t, r); else for (var n = ki(e, t, !1), i = 0; i < n.length; ++i) if (n[i] == r) {
      n.splice(i, 1);
      break;
    }
  }, Wa = e.signal = function(e, t) {
    var r = ki(e, t, !0);
    if (r.length) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n);
  }, Da = null, qa = 30, Ia = e.Pass = {
    toString:function() {
      return "CodeMirror.Pass";
    }
  }, Ea = {
    scroll:!1
  }, Pa = {
    origin:"*mouse"
  }, Ha = {
    origin:"+move"
  };
  Ai.prototype.set = function(e, t) {
    clearTimeout(this.id), this.id = setTimeout(t, e);
  };
  var Fa = e.countColumn = function(e, t, r, n, i) {
    null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
    for (var o = n || 0, a = i || 0; ;) {
      var l = e.indexOf("\t", o);
      if (l < 0 || l >= t) return a + (t - o);
      a += l - o, a += r - a % r, o = l + 1;
    }
  }, ja = e.findColumn = function(e, t, r) {
    for (var n = 0, i = 0; ;) {
      var o = e.indexOf("\t", n);
      -1 == o && (o = e.length);
      var a = o - n;
      if (o == e.length || i + a >= t) return n + Math.min(a, t - i);
      if (i += o - n, i += r - i % r, n = o + 1, i >= t) return n;
    }
  }, Ba = [ "" ], Ra = function(e) {
    e.select();
  };
  To ? Ra = function(e) {
    e.selectionStart = 0, e.selectionEnd = e.value.length;
  } :bo && (Ra = function(e) {
    try {
      e.select();
    } catch (e) {}
  });
  var Ua, Ka = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, Va = e.isWordChar = function(e) {
    return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || Ka.test(e));
  }, $a = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  Ua = document.createRange ? function(e, t, r, n) {
    var i = document.createRange();
    return i.setEnd(n || e, r), i.setStart(e, t), i;
  } :function(e, t, r) {
    var n = document.body.createTextRange();
    try {
      n.moveToElementText(e.parentNode);
    } catch (e) {
      return n;
    }
    return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n;
  };
  var Ga = e.contains = function(e, t) {
    if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
    do {
      if (11 == t.nodeType && (t = t.host), t == e) return !0;
    } while (t = t.parentNode);
  };
  bo && xo < 11 && (Ki = function() {
    try {
      return document.activeElement;
    } catch (e) {
      return document.body;
    }
  });
  var Xa, Za, Ya = e.rmClass = function(e, t) {
    var r = e.className, n = Vi(t).exec(r);
    if (n) {
      var i = r.slice(n.index + n[0].length);
      e.className = r.slice(0, n.index) + (i ? n[1] + i :"");
    }
  }, Qa = e.addClass = function(e, t) {
    var r = e.className;
    Vi(t).test(r) || (e.className += (r ? " " :"") + t);
  }, Ja = !1, el = function() {
    if (bo && xo < 9) return !1;
    var e = Bi("div");
    return "draggable" in e || "dragDrop" in e;
  }(), tl = e.splitLines = 3 != "\n\nb".split(/\n/).length ? function(e) {
    for (var t = 0, r = [], n = e.length; t <= n; ) {
      var i = e.indexOf("\n", t);
      -1 == i && (i = e.length);
      var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 :i), a = o.indexOf("\r");
      -1 != a ? (r.push(o.slice(0, a)), t += a + 1) :(r.push(o), t = i + 1);
    }
    return r;
  } :function(e) {
    return e.split(/\r\n?|\n/);
  }, rl = window.getSelection ? function(e) {
    try {
      return e.selectionStart != e.selectionEnd;
    } catch (e) {
      return !1;
    }
  } :function(e) {
    try {
      var t = e.ownerDocument.selection.createRange();
    } catch (e) {}
    return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
  }, nl = function() {
    var e = Bi("div");
    return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
  }(), il = null, ol = e.keyNames = {
    3:"Enter",
    8:"Backspace",
    9:"Tab",
    13:"Enter",
    16:"Shift",
    17:"Ctrl",
    18:"Alt",
    19:"Pause",
    20:"CapsLock",
    27:"Esc",
    32:"Space",
    33:"PageUp",
    34:"PageDown",
    35:"End",
    36:"Home",
    37:"Left",
    38:"Up",
    39:"Right",
    40:"Down",
    44:"PrintScrn",
    45:"Insert",
    46:"Delete",
    59:";",
    61:"=",
    91:"Mod",
    92:"Mod",
    93:"Mod",
    106:"*",
    107:"=",
    109:"-",
    110:".",
    111:"/",
    127:"Delete",
    173:"-",
    186:";",
    187:"=",
    188:",",
    189:"-",
    190:".",
    191:"/",
    192:"`",
    219:"[",
    220:"\\",
    221:"]",
    222:"'",
    63232:"Up",
    63233:"Down",
    63234:"Left",
    63235:"Right",
    63272:"Delete",
    63273:"Home",
    63275:"End",
    63276:"PageUp",
    63277:"PageDown",
    63302:"Insert"
  };
  !function() {
    for (var e = 0; e < 10; e++) ol[e + 48] = ol[e + 96] = String(e);
    for (var e = 65; e <= 90; e++) ol[e] = String.fromCharCode(e);
    for (var e = 1; e <= 12; e++) ol[e + 111] = ol[e + 63235] = "F" + e;
  }();
  var al, ll = function() {
    function e(e) {
      return e <= 247 ? r.charAt(e) :1424 <= e && e <= 1524 ? "R" :1536 <= e && e <= 1773 ? n.charAt(e - 1536) :1774 <= e && e <= 2220 ? "r" :8192 <= e && e <= 8203 ? "w" :8204 == e ? "b" :"L";
    }
    function t(e, t, r) {
      this.level = e, this.from = t, this.to = r;
    }
    var r = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", n = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm", i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, o = /[stwN]/, a = /[LRr]/, l = /[Lb1n]/, s = /[1n]/, c = "L";
    return function(r) {
      if (!i.test(r)) return !1;
      for (var n, u = r.length, d = [], f = 0; f < u; ++f) d.push(n = e(r.charCodeAt(f)));
      for (var f = 0, p = c; f < u; ++f) {
        var n = d[f];
        "m" == n ? d[f] = p :p = n;
      }
      for (var f = 0, h = c; f < u; ++f) {
        var n = d[f];
        "1" == n && "r" == h ? d[f] = "n" :a.test(n) && (h = n, "r" == n && (d[f] = "R"));
      }
      for (var f = 1, p = d[0]; f < u - 1; ++f) {
        var n = d[f];
        "+" == n && "1" == p && "1" == d[f + 1] ? d[f] = "1" :"," != n || p != d[f + 1] || "1" != p && "n" != p || (d[f] = p), 
        p = n;
      }
      for (var f = 0; f < u; ++f) {
        var n = d[f];
        if ("," == n) d[f] = "N"; else if ("%" == n) {
          for (var m = f + 1; m < u && "%" == d[m]; ++m) ;
          for (var g = f && "!" == d[f - 1] || m < u && "1" == d[m] ? "1" :"N", v = f; v < m; ++v) d[v] = g;
          f = m - 1;
        }
      }
      for (var f = 0, h = c; f < u; ++f) {
        var n = d[f];
        "L" == h && "1" == n ? d[f] = "L" :a.test(n) && (h = n);
      }
      for (var f = 0; f < u; ++f) if (o.test(d[f])) {
        for (var m = f + 1; m < u && o.test(d[m]); ++m) ;
        for (var y = "L" == (f ? d[f - 1] :c), b = "L" == (m < u ? d[m] :c), g = y || b ? "L" :"R", v = f; v < m; ++v) d[v] = g;
        f = m - 1;
      }
      for (var x, w = [], f = 0; f < u; ) if (l.test(d[f])) {
        var _ = f;
        for (++f; f < u && l.test(d[f]); ++f) ;
        w.push(new t(0, _, f));
      } else {
        var k = f, C = w.length;
        for (++f; f < u && "L" != d[f]; ++f) ;
        for (var v = k; v < f; ) if (s.test(d[v])) {
          k < v && w.splice(C, 0, new t(1, k, v));
          var S = v;
          for (++v; v < f && s.test(d[v]); ++v) ;
          w.splice(C, 0, new t(2, S, v)), k = v;
        } else ++v;
        k < f && w.splice(C, 0, new t(1, k, f));
      }
      return 1 == w[0].level && (x = r.match(/^\s+/)) && (w[0].from = x[0].length, w.unshift(new t(0, 0, x[0].length))), 
      1 == Ni(w).level && (x = r.match(/\s+$/)) && (Ni(w).to -= x[0].length, w.push(new t(0, u - x[0].length, u))), 
      2 == w[0].level && w.unshift(new t(1, w[0].to, w[0].to)), w[0].level != Ni(w).level && w.push(new t(w[0].level, u, u)), 
      w;
    };
  }();
  return e.version = "5.16.0", e;
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  e.multiplexingMode = function(t) {
    function r(e, t, r, n) {
      if ("string" == typeof t) {
        var i = e.indexOf(t, r);
        return n && i > -1 ? i + t.length :i;
      }
      var o = t.exec(r ? e.slice(r) :e);
      return o ? o.index + r + (n ? o[0].length :0) :-1;
    }
    var n = Array.prototype.slice.call(arguments, 1);
    return {
      startState:function() {
        return {
          outer:e.startState(t),
          innerActive:null,
          inner:null
        };
      },
      copyState:function(r) {
        return {
          outer:e.copyState(t, r.outer),
          innerActive:r.innerActive,
          inner:r.innerActive && e.copyState(r.innerActive.mode, r.inner)
        };
      },
      token:function(i, o) {
        if (o.innerActive) {
          var a = o.innerActive, l = i.string;
          if (!a.close && i.sol()) return o.innerActive = o.inner = null, this.token(i, o);
          var s = a.close ? r(l, a.close, i.pos, a.parseDelimiters) :-1;
          if (s == i.pos && !a.parseDelimiters) return i.match(a.close), o.innerActive = o.inner = null, 
          a.delimStyle && a.delimStyle + " " + a.delimStyle + "-close";
          s > -1 && (i.string = l.slice(0, s));
          var c = a.mode.token(i, o.inner);
          return s > -1 && (i.string = l), s == i.pos && a.parseDelimiters && (o.innerActive = o.inner = null), 
          a.innerStyle && (c = c ? c + " " + a.innerStyle :a.innerStyle), c;
        }
        for (var u = Infinity, l = i.string, d = 0; d < n.length; ++d) {
          var f = n[d], s = r(l, f.open, i.pos);
          if (s == i.pos) return f.parseDelimiters || i.match(f.open), o.innerActive = f, 
          o.inner = e.startState(f.mode, t.indent ? t.indent(o.outer, "") :0), f.delimStyle && f.delimStyle + " " + f.delimStyle + "-open";
          -1 != s && s < u && (u = s);
        }
        u != Infinity && (i.string = l.slice(0, u));
        var p = t.token(i, o.outer);
        return u != Infinity && (i.string = l), p;
      },
      indent:function(r, n) {
        var i = r.innerActive ? r.innerActive.mode :t;
        return i.indent ? i.indent(r.innerActive ? r.inner :r.outer, n) :e.Pass;
      },
      blankLine:function(r) {
        var i = r.innerActive ? r.innerActive.mode :t;
        if (i.blankLine && i.blankLine(r.innerActive ? r.inner :r.outer), r.innerActive) "\n" === r.innerActive.close && (r.innerActive = r.inner = null); else for (var o = 0; o < n.length; ++o) {
          var a = n[o];
          "\n" === a.open && (r.innerActive = a, r.inner = e.startState(a.mode, i.indent ? i.indent(r.outer, "") :0));
        }
      },
      electricChars:t.electricChars,
      innerMode:function(e) {
        return e.inner ? {
          state:e.inner,
          mode:e.innerActive.mode
        } :{
          state:e.outer,
          mode:t
        };
      }
    };
  };
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  function t(e, t, r, n, i, o) {
    this.indented = e, this.column = t, this.type = r, this.info = n, this.align = i, 
    this.prev = o;
  }
  function r(e, r, n, i) {
    var o = e.indented;
    return e.context && "statement" != e.context.type && "statement" != n && (o = e.context.indented), 
    e.context = new t(o, r, n, i, null, e.context);
  }
  function n(e) {
    var t = e.context.type;
    return ")" != t && "]" != t && "}" != t || (e.indented = e.context.indented), e.context = e.context.prev;
  }
  function i(e, t, r) {
    return "variable" == t.prevToken || "variable-3" == t.prevToken || (!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, r)) || (!(!t.typeAtEndOfLine || e.column() != e.indentation()) || void 0));
  }
  function o(e) {
    for (;;) {
      if (!e || "top" == e.type) return !0;
      if ("}" == e.type && "namespace" != e.prev.info) return !1;
      e = e.prev;
    }
  }
  function a(e) {
    for (var t = {}, r = e.split(" "), n = 0; n < r.length; ++n) t[r[n]] = !0;
    return t;
  }
  function l(e, t) {
    return "function" == typeof e ? e(t) :e.propertyIsEnumerable(t);
  }
  function s(e, t) {
    if (!t.startOfLine) return !1;
    for (var r, n = null; r = e.peek(); ) {
      if ("\\" == r && e.match(/^.$/)) {
        n = s;
        break;
      }
      if ("/" == r && e.match(/^\/[\/\*]/, !1)) break;
      e.next();
    }
    return t.tokenize = n, "meta";
  }
  function c(e, t) {
    return "variable-3" == t.prevToken && "variable-3";
  }
  function u(e) {
    return e.eatWhile(/[\w\.']/), "number";
  }
  function d(e, t) {
    if (e.backUp(1), e.match(/(R|u8R|uR|UR|LR)/)) {
      var r = e.match(/"([^\s\\()]{0,16})\(/);
      return !!r && (t.cpp11RawStringDelim = r[1], t.tokenize = h, h(e, t));
    }
    return e.match(/(u8|u|U|L)/) ? !!e.match(/["']/, !1) && "string" :(e.next(), !1);
  }
  function f(e) {
    var t = /(\w+)::(\w+)$/.exec(e);
    return t && t[1] == t[2];
  }
  function p(e, t) {
    for (var r; null != (r = e.next()); ) if ('"' == r && !e.eat('"')) {
      t.tokenize = null;
      break;
    }
    return "string";
  }
  function h(e, t) {
    var r = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&");
    return e.match(new RegExp(".*?\\)" + r + '"')) ? t.tokenize = null :e.skipToEnd(), 
    "string";
  }
  function m(t, r) {
    function n(e) {
      if (e) for (var t in e) e.hasOwnProperty(t) && i.push(t);
    }
    "string" == typeof t && (t = [ t ]);
    var i = [];
    n(r.keywords), n(r.types), n(r.builtin), n(r.atoms), i.length && (r.helperType = t[0], 
    e.registerHelper("hintWords", t[0], i));
    for (var o = 0; o < t.length; ++o) e.defineMIME(t[o], r);
  }
  function g(e, t) {
    for (var r = !1; !e.eol(); ) {
      if (!r && e.match('"""')) {
        t.tokenize = null;
        break;
      }
      r = "\\" == e.next() && !r;
    }
    return "string";
  }
  function v(e) {
    return function(t, r) {
      for (var n, i = !1, o = !1; !t.eol(); ) {
        if (!e && !i && t.match('"')) {
          o = !0;
          break;
        }
        if (e && t.match('"""')) {
          o = !0;
          break;
        }
        n = t.next(), !i && "$" == n && t.match("{") && t.skipTo("}"), i = !i && "\\" == n && !e;
      }
      return !o && e || (r.tokenize = null), "string";
    };
  }
  function y(e) {
    return function(t, r) {
      for (var n, i = !1, o = !1; !t.eol(); ) {
        if (!i && t.match('"') && ("single" == e || t.match('""'))) {
          o = !0;
          break;
        }
        if (!i && t.match("``")) {
          w = y(e), o = !0;
          break;
        }
        n = t.next(), i = "single" == e && !i && "\\" == n;
      }
      return o && (r.tokenize = null), "string";
    };
  }
  e.defineMode("clike", function(a, s) {
    function c(e, t) {
      var r = e.next();
      if (C[r]) {
        var n = C[r](e, t);
        if (!1 !== n) return n;
      }
      if ('"' == r || "'" == r) return t.tokenize = u(r), t.tokenize(e, t);
      if (z.test(r)) return p = r, null;
      if (A.test(r)) {
        if (e.backUp(1), e.match(O)) return "number";
        e.next();
      }
      if ("/" == r) {
        if (e.eat("*")) return t.tokenize = d, d(e, t);
        if (e.eat("/")) return e.skipToEnd(), "comment";
      }
      if (N.test(r)) {
        for (;!e.match(/^\/[\/*]/, !1) && e.eat(N); ) ;
        return "operator";
      }
      if (e.eatWhile(/[\w\$_\xa1-\uffff]/), T) for (;e.match(T); ) e.eatWhile(/[\w\$_\xa1-\uffff]/);
      var i = e.current();
      return l(y, i) ? (l(w, i) && (p = "newstatement"), l(_, i) && (h = !0), "keyword") :l(b, i) ? "variable-3" :l(x, i) ? (l(w, i) && (p = "newstatement"), 
      "builtin") :l(k, i) ? "atom" :"variable";
    }
    function u(e) {
      return function(t, r) {
        for (var n, i = !1, o = !1; null != (n = t.next()); ) {
          if (n == e && !i) {
            o = !0;
            break;
          }
          i = !i && "\\" == n;
        }
        return (o || !i && !S) && (r.tokenize = null), "string";
      };
    }
    function d(e, t) {
      for (var r, n = !1; r = e.next(); ) {
        if ("/" == r && n) {
          t.tokenize = null;
          break;
        }
        n = "*" == r;
      }
      return "comment";
    }
    function f(e, t) {
      s.typeFirstDefinitions && e.eol() && o(t.context) && (t.typeAtEndOfLine = i(e, t, e.pos));
    }
    var p, h, m = a.indentUnit, g = s.statementIndentUnit || m, v = s.dontAlignCalls, y = s.keywords || {}, b = s.types || {}, x = s.builtin || {}, w = s.blockKeywords || {}, _ = s.defKeywords || {}, k = s.atoms || {}, C = s.hooks || {}, S = s.multiLineStrings, M = !1 !== s.indentStatements, L = !1 !== s.indentSwitch, T = s.namespaceSeparator, z = s.isPunctuationChar || /[\[\]{}\(\),;\:\.]/, A = s.numberStart || /[\d\.]/, O = s.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i, N = s.isOperatorChar || /[+\-*&%=<>!?|\/]/, W = s.endStatement || /^[;:,]$/;
    return {
      startState:function(e) {
        return {
          tokenize:null,
          context:new t((e || 0) - m, 0, "top", null, !1),
          indented:0,
          startOfLine:!0,
          prevToken:null
        };
      },
      token:function(e, t) {
        var a = t.context;
        if (e.sol() && (null == a.align && (a.align = !1), t.indented = e.indentation(), 
        t.startOfLine = !0), e.eatSpace()) return f(e, t), null;
        p = h = null;
        var l = (t.tokenize || c)(e, t);
        if ("comment" == l || "meta" == l) return l;
        if (null == a.align && (a.align = !0), W.test(p)) for (;"statement" == t.context.type; ) n(t); else if ("{" == p) r(t, e.column(), "}"); else if ("[" == p) r(t, e.column(), "]"); else if ("(" == p) r(t, e.column(), ")"); else if ("}" == p) {
          for (;"statement" == a.type; ) a = n(t);
          for ("}" == a.type && (a = n(t)); "statement" == a.type; ) a = n(t);
        } else p == a.type ? n(t) :M && (("}" == a.type || "top" == a.type) && ";" != p || "statement" == a.type && "newstatement" == p) && r(t, e.column(), "statement", e.current());
        if ("variable" == l && ("def" == t.prevToken || s.typeFirstDefinitions && i(e, t, e.start) && o(t.context) && e.match(/^\s*\(/, !1)) && (l = "def"), 
        C.token) {
          var u = C.token(e, t, l);
          u !== undefined && (l = u);
        }
        return "def" == l && !1 === s.styleDefs && (l = "variable"), t.startOfLine = !1, 
        t.prevToken = h ? "def" :l || p, f(e, t), l;
      },
      indent:function(t, r) {
        if (t.tokenize != c && null != t.tokenize || t.typeAtEndOfLine) return e.Pass;
        var n = t.context, i = r && r.charAt(0);
        if ("statement" == n.type && "}" == i && (n = n.prev), s.dontIndentStatements) for (;"statement" == n.type && s.dontIndentStatements.test(n.info); ) n = n.prev;
        if (C.indent) {
          var o = C.indent(t, n, r);
          if ("number" == typeof o) return o;
        }
        var a = i == n.type, l = n.prev && "switch" == n.prev.info;
        if (s.allmanIndentation && /[{(]/.test(i)) {
          for (;"top" != n.type && "}" != n.type; ) n = n.prev;
          return n.indented;
        }
        return "statement" == n.type ? n.indented + ("{" == i ? 0 :g) :!n.align || v && ")" == n.type ? ")" != n.type || a ? n.indented + (a ? 0 :m) + (a || !l || /^(?:case|default)\b/.test(r) ? 0 :m) :n.indented + g :n.column + (a ? 0 :1);
      },
      electricInput:L ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ :/^\s*[{}]$/,
      blockCommentStart:"/*",
      blockCommentEnd:"*/",
      lineComment:"//",
      fold:"brace"
    };
  });
  var b = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile", x = "int long char short double float unsigned signed void size_t ptrdiff_t";
  m([ "text/x-csrc", "text/x-c", "text/x-chdr" ], {
    name:"clike",
    keywords:a(b),
    types:a(x + " bool _Complex _Bool float_t double_t intptr_t intmax_t int8_t int16_t int32_t int64_t uintptr_t uintmax_t uint8_t uint16_t uint32_t uint64_t"),
    blockKeywords:a("case do else for if switch while struct"),
    defKeywords:a("struct"),
    typeFirstDefinitions:!0,
    atoms:a("null true false"),
    hooks:{
      "#":s,
      "*":c
    },
    modeProps:{
      fold:[ "brace", "include" ]
    }
  }), m([ "text/x-c++src", "text/x-c++hdr" ], {
    name:"clike",
    keywords:a(b + " asm dynamic_cast namespace reinterpret_cast try explicit new static_cast typeid catch operator template typename class friend private this using const_cast inline public throw virtual delete mutable protected alignas alignof constexpr decltype nullptr noexcept thread_local final static_assert override"),
    types:a(x + " bool wchar_t"),
    blockKeywords:a("catch class do else finally for if struct switch try while"),
    defKeywords:a("class namespace struct enum union"),
    typeFirstDefinitions:!0,
    atoms:a("true false null"),
    dontIndentStatements:/^template$/,
    hooks:{
      "#":s,
      "*":c,
      u:d,
      U:d,
      L:d,
      R:d,
      "0":u,
      "1":u,
      "2":u,
      "3":u,
      "4":u,
      "5":u,
      "6":u,
      "7":u,
      "8":u,
      "9":u,
      token:function(e, t, r) {
        if ("variable" == r && "(" == e.peek() && (";" == t.prevToken || null == t.prevToken || "}" == t.prevToken) && f(e.current())) return "def";
      }
    },
    namespaceSeparator:"::",
    modeProps:{
      fold:[ "brace", "include" ]
    }
  }), m("text/x-java", {
    name:"clike",
    keywords:a("abstract assert break case catch class const continue default do else enum extends final finally float for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while"),
    types:a("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),
    blockKeywords:a("catch class do else finally for if switch try while"),
    defKeywords:a("class interface package enum"),
    typeFirstDefinitions:!0,
    atoms:a("true false null"),
    endStatement:/^[;:]$/,
    number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    hooks:{
      "@":function(e) {
        return e.eatWhile(/[\w\$_]/), "meta";
      }
    },
    modeProps:{
      fold:[ "brace", "import" ]
    }
  }), m("text/x-csharp", {
    name:"clike",
    keywords:a("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
    types:a("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
    blockKeywords:a("catch class do else finally for foreach if struct switch try while"),
    defKeywords:a("class interface namespace struct var"),
    typeFirstDefinitions:!0,
    atoms:a("true false null"),
    hooks:{
      "@":function(e, t) {
        return e.eat('"') ? (t.tokenize = p, p(e, t)) :(e.eatWhile(/[\w\$_]/), "meta");
      }
    }
  }), m("text/x-scala", {
    name:"clike",
    keywords:a("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble :: #:: "),
    types:a("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
    multiLineStrings:!0,
    blockKeywords:a("catch class do else finally for forSome if match switch try while"),
    defKeywords:a("class def object package trait type val var"),
    atoms:a("true false null"),
    indentStatements:!1,
    indentSwitch:!1,
    hooks:{
      "@":function(e) {
        return e.eatWhile(/[\w\$_]/), "meta";
      },
      '"':function(e, t) {
        return !!e.match('""') && (t.tokenize = g, t.tokenize(e, t));
      },
      "'":function(e) {
        return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom";
      },
      "=":function(e, r) {
        var n = r.context;
        return !("}" != n.type || !n.align || !e.eat(">")) && (r.context = new t(n.indented, n.column, n.type, n.info, null, n.prev), 
        "operator");
      }
    },
    modeProps:{
      closeBrackets:{
        triples:'"'
      }
    }
  }), m("text/x-kotlin", {
    name:"clike",
    keywords:a("package as typealias class interface this super val var fun for is in This throw return break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix"),
    types:a("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
    intendSwitch:!1,
    indentStatements:!1,
    multiLineStrings:!0,
    blockKeywords:a("catch class do else finally for if where try while enum"),
    defKeywords:a("class val var object package interface fun"),
    atoms:a("true false null this"),
    hooks:{
      '"':function(e, t) {
        return t.tokenize = v(e.match('""')), t.tokenize(e, t);
      }
    },
    modeProps:{
      closeBrackets:{
        triples:'"'
      }
    }
  }), m([ "x-shader/x-vertex", "x-shader/x-fragment" ], {
    name:"clike",
    keywords:a("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
    types:a("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),
    blockKeywords:a("for while do if else struct"),
    builtin:a("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
    atoms:a("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
    indentSwitch:!1,
    hooks:{
      "#":s
    },
    modeProps:{
      fold:[ "brace", "include" ]
    }
  }), m("text/x-nesc", {
    name:"clike",
    keywords:a(b + "as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),
    types:a(x),
    blockKeywords:a("case do else for if switch while struct"),
    atoms:a("null true false"),
    hooks:{
      "#":s
    },
    modeProps:{
      fold:[ "brace", "include" ]
    }
  }), m("text/x-objectivec", {
    name:"clike",
    keywords:a(b + "inline restrict _Bool _Complex _Imaginary BOOL Class bycopy byref id IMP in inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),
    types:a(x),
    atoms:a("YES NO NULL NILL ON OFF true false"),
    hooks:{
      "@":function(e) {
        return e.eatWhile(/[\w\$]/), "keyword";
      },
      "#":s,
      indent:function(e, t, r) {
        if ("statement" == t.type && /^@\w/.test(r)) return t.indented;
      }
    },
    modeProps:{
      fold:"brace"
    }
  }), m("text/x-squirrel", {
    name:"clike",
    keywords:a("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),
    types:a(x),
    blockKeywords:a("case catch class else for foreach if switch try while"),
    defKeywords:a("function local class"),
    typeFirstDefinitions:!0,
    atoms:a("true false null"),
    hooks:{
      "#":s
    },
    modeProps:{
      fold:[ "brace", "include" ]
    }
  });
  var w = null;
  m("text/x-ceylon", {
    name:"clike",
    keywords:a("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),
    types:function(e) {
      var t = e.charAt(0);
      return t === t.toUpperCase() && t !== t.toLowerCase();
    },
    blockKeywords:a("case catch class dynamic else finally for function if interface module new object switch try while"),
    defKeywords:a("class dynamic function interface module object package value"),
    builtin:a("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),
    isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,
    isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,
    numberStart:/[\d#$]/,
    number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
    multiLineStrings:!0,
    typeFirstDefinitions:!0,
    atoms:a("true false null larger smaller equal empty finished"),
    indentSwitch:!1,
    styleDefs:!1,
    hooks:{
      "@":function(e) {
        return e.eatWhile(/[\w\$_]/), "meta";
      },
      '"':function(e, t) {
        return t.tokenize = y(e.match('""') ? "triple" :"single"), t.tokenize(e, t);
      },
      "`":function(e, t) {
        return !(!w || !e.match("`")) && (t.tokenize = w, w = null, t.tokenize(e, t));
      },
      "'":function(e) {
        return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom";
      },
      token:function(e, t, r) {
        if (("variable" == r || "variable-3" == r) && "." == t.prevToken) return "variable-2";
      }
    },
    modeProps:{
      fold:[ "brace", "import" ],
      closeBrackets:{
        triples:'"'
      }
    }
  });
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  function t(e) {
    for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = !0;
    return t;
  }
  function r(e, t) {
    for (var r, n = !1; null != (r = e.next()); ) {
      if (n && "/" == r) {
        t.tokenize = null;
        break;
      }
      n = "*" == r;
    }
    return [ "comment", "comment" ];
  }
  e.defineMode("css", function(t, r) {
    function n(e, t) {
      return h = t, e;
    }
    function i(e, t) {
      var r = e.next();
      if (v[r]) {
        var i = v[r](e, t);
        if (!1 !== i) return i;
      }
      return "@" == r ? (e.eatWhile(/[\w\\\-]/), n("def", e.current())) :"=" == r || ("~" == r || "|" == r) && e.eat("=") ? n(null, "compare") :'"' == r || "'" == r ? (t.tokenize = o(r), 
      t.tokenize(e, t)) :"#" == r ? (e.eatWhile(/[\w\\\-]/), n("atom", "hash")) :"!" == r ? (e.match(/^\s*\w*/), 
      n("keyword", "important")) :/\d/.test(r) || "." == r && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), 
      n("number", "unit")) :"-" !== r ? /[,+>*\/]/.test(r) ? n(null, "select-op") :"." == r && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? n("qualifier", "qualifier") :/[:;{}\[\]\(\)]/.test(r) ? n(null, r) :"u" == r && e.match(/rl(-prefix)?\(/) || "d" == r && e.match("omain(") || "r" == r && e.match("egexp(") ? (e.backUp(1), 
      t.tokenize = a, n("property", "word")) :/[\w\\\-]/.test(r) ? (e.eatWhile(/[\w\\\-]/), 
      n("property", "word")) :n(null, null) :/[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), 
      n("number", "unit")) :e.match(/^-[\w\\\-]+/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? n("variable-2", "variable-definition") :n("variable-2", "variable")) :e.match(/^\w+-/) ? n("meta", "meta") :void 0;
    }
    function o(e) {
      return function(t, r) {
        for (var i, o = !1; null != (i = t.next()); ) {
          if (i == e && !o) {
            ")" == e && t.backUp(1);
            break;
          }
          o = !o && "\\" == i;
        }
        return (i == e || !o && ")" != e) && (r.tokenize = null), n("string", "string");
      };
    }
    function a(e, t) {
      return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null :t.tokenize = o(")"), 
      n(null, "(");
    }
    function l(e, t, r) {
      this.type = e, this.indent = t, this.prev = r;
    }
    function s(e, t, r, n) {
      return e.context = new l(r, t.indentation() + (!1 === n ? 0 :g), e.context), r;
    }
    function c(e) {
      return e.context.prev && (e.context = e.context.prev), e.context.type;
    }
    function u(e, t, r) {
      return A[r.context.type](e, t, r);
    }
    function d(e, t, r, n) {
      for (var i = n || 1; i > 0; i--) r.context = r.context.prev;
      return u(e, t, r);
    }
    function f(e) {
      var t = e.current().toLowerCase();
      m = L.hasOwnProperty(t) ? "atom" :M.hasOwnProperty(t) ? "keyword" :"variable";
    }
    var p = r.inline;
    r.propertyKeywords || (r = e.resolveMode("text/css"));
    var h, m, g = t.indentUnit, v = r.tokenHooks, y = r.documentTypes || {}, b = r.mediaTypes || {}, x = r.mediaFeatures || {}, w = r.mediaValueKeywords || {}, _ = r.propertyKeywords || {}, k = r.nonStandardPropertyKeywords || {}, C = r.fontProperties || {}, S = r.counterDescriptors || {}, M = r.colorKeywords || {}, L = r.valueKeywords || {}, T = r.allowNested, z = !0 === r.supportsAtComponent, A = {};
    return A.top = function(e, t, r) {
      if ("{" == e) return s(r, t, "block");
      if ("}" == e && r.context.prev) return c(r);
      if (z && /@component/.test(e)) return s(r, t, "atComponentBlock");
      if (/^@(-moz-)?document$/.test(e)) return s(r, t, "documentTypes");
      if (/^@(media|supports|(-moz-)?document|import)$/.test(e)) return s(r, t, "atBlock");
      if (/^@(font-face|counter-style)/.test(e)) return r.stateArg = e, "restricted_atBlock_before";
      if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) return "keyframes";
      if (e && "@" == e.charAt(0)) return s(r, t, "at");
      if ("hash" == e) m = "builtin"; else if ("word" == e) m = "tag"; else {
        if ("variable-definition" == e) return "maybeprop";
        if ("interpolation" == e) return s(r, t, "interpolation");
        if (":" == e) return "pseudo";
        if (T && "(" == e) return s(r, t, "parens");
      }
      return r.context.type;
    }, A.block = function(e, t, r) {
      if ("word" == e) {
        var n = t.current().toLowerCase();
        return _.hasOwnProperty(n) ? (m = "property", "maybeprop") :k.hasOwnProperty(n) ? (m = "string-2", 
        "maybeprop") :T ? (m = t.match(/^\s*:(?:\s|$)/, !1) ? "property" :"tag", "block") :(m += " error", 
        "maybeprop");
      }
      return "meta" == e ? "block" :T || "hash" != e && "qualifier" != e ? A.top(e, t, r) :(m = "error", 
      "block");
    }, A.maybeprop = function(e, t, r) {
      return ":" == e ? s(r, t, "prop") :u(e, t, r);
    }, A.prop = function(e, t, r) {
      if (";" == e) return c(r);
      if ("{" == e && T) return s(r, t, "propBlock");
      if ("}" == e || "{" == e) return d(e, t, r);
      if ("(" == e) return s(r, t, "parens");
      if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
        if ("word" == e) f(t); else if ("interpolation" == e) return s(r, t, "interpolation");
      } else m += " error";
      return "prop";
    }, A.propBlock = function(e, t, r) {
      return "}" == e ? c(r) :"word" == e ? (m = "property", "maybeprop") :r.context.type;
    }, A.parens = function(e, t, r) {
      return "{" == e || "}" == e ? d(e, t, r) :")" == e ? c(r) :"(" == e ? s(r, t, "parens") :"interpolation" == e ? s(r, t, "interpolation") :("word" == e && f(t), 
      "parens");
    }, A.pseudo = function(e, t, r) {
      return "word" == e ? (m = "variable-3", r.context.type) :u(e, t, r);
    }, A.documentTypes = function(e, t, r) {
      return "word" == e && y.hasOwnProperty(t.current()) ? (m = "tag", r.context.type) :A.atBlock(e, t, r);
    }, A.atBlock = function(e, t, r) {
      if ("(" == e) return s(r, t, "atBlock_parens");
      if ("}" == e || ";" == e) return d(e, t, r);
      if ("{" == e) return c(r) && s(r, t, T ? "block" :"top");
      if ("interpolation" == e) return s(r, t, "interpolation");
      if ("word" == e) {
        var n = t.current().toLowerCase();
        m = "only" == n || "not" == n || "and" == n || "or" == n ? "keyword" :b.hasOwnProperty(n) ? "attribute" :x.hasOwnProperty(n) ? "property" :w.hasOwnProperty(n) ? "keyword" :_.hasOwnProperty(n) ? "property" :k.hasOwnProperty(n) ? "string-2" :L.hasOwnProperty(n) ? "atom" :M.hasOwnProperty(n) ? "keyword" :"error";
      }
      return r.context.type;
    }, A.atComponentBlock = function(e, t, r) {
      return "}" == e ? d(e, t, r) :"{" == e ? c(r) && s(r, t, T ? "block" :"top", !1) :("word" == e && (m = "error"), 
      r.context.type);
    }, A.atBlock_parens = function(e, t, r) {
      return ")" == e ? c(r) :"{" == e || "}" == e ? d(e, t, r, 2) :A.atBlock(e, t, r);
    }, A.restricted_atBlock_before = function(e, t, r) {
      return "{" == e ? s(r, t, "restricted_atBlock") :"word" == e && "@counter-style" == r.stateArg ? (m = "variable", 
      "restricted_atBlock_before") :u(e, t, r);
    }, A.restricted_atBlock = function(e, t, r) {
      return "}" == e ? (r.stateArg = null, c(r)) :"word" == e ? (m = "@font-face" == r.stateArg && !C.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == r.stateArg && !S.hasOwnProperty(t.current().toLowerCase()) ? "error" :"property", 
      "maybeprop") :"restricted_atBlock";
    }, A.keyframes = function(e, t, r) {
      return "word" == e ? (m = "variable", "keyframes") :"{" == e ? s(r, t, "top") :u(e, t, r);
    }, A.at = function(e, t, r) {
      return ";" == e ? c(r) :"{" == e || "}" == e ? d(e, t, r) :("word" == e ? m = "tag" :"hash" == e && (m = "builtin"), 
      "at");
    }, A.interpolation = function(e, t, r) {
      return "}" == e ? c(r) :"{" == e || ";" == e ? d(e, t, r) :("word" == e ? m = "variable" :"variable" != e && "(" != e && ")" != e && (m = "error"), 
      "interpolation");
    }, {
      startState:function(e) {
        return {
          tokenize:null,
          state:p ? "block" :"top",
          stateArg:null,
          context:new l(p ? "block" :"top", e || 0, null)
        };
      },
      token:function(e, t) {
        if (!t.tokenize && e.eatSpace()) return null;
        var r = (t.tokenize || i)(e, t);
        return r && "object" == typeof r && (h = r[1], r = r[0]), m = r, t.state = A[t.state](h, e, t), 
        m;
      },
      indent:function(e, t) {
        var r = e.context, n = t && t.charAt(0), i = r.indent;
        return "prop" != r.type || "}" != n && ")" != n || (r = r.prev), r.prev && ("}" != n || "block" != r.type && "top" != r.type && "interpolation" != r.type && "restricted_atBlock" != r.type ? (")" != n || "parens" != r.type && "atBlock_parens" != r.type) && ("{" != n || "at" != r.type && "atBlock" != r.type) || (i = Math.max(0, r.indent - g), 
        r = r.prev) :(r = r.prev, i = r.indent)), i;
      },
      electricChars:"}",
      blockCommentStart:"/*",
      blockCommentEnd:"*/",
      fold:"brace"
    };
  });
  var n = [ "domain", "regexp", "url", "url-prefix" ], i = t(n), o = [ "all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed" ], a = t(o), l = [ "width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover" ], s = t(l), c = [ "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive" ], u = t(c), d = [ "align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode" ], f = t(d), p = [ "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom" ], h = t(p), m = [ "font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style" ], g = t(m), v = [ "additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system" ], y = t(v), b = [ "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen" ], x = t(b), w = [ "above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small" ], _ = t(w), k = n.concat(o).concat(l).concat(c).concat(d).concat(p).concat(b).concat(w);
  e.registerHelper("hintWords", "css", k), e.defineMIME("text/css", {
    documentTypes:i,
    mediaTypes:a,
    mediaFeatures:s,
    mediaValueKeywords:u,
    propertyKeywords:f,
    nonStandardPropertyKeywords:h,
    fontProperties:g,
    counterDescriptors:y,
    colorKeywords:x,
    valueKeywords:_,
    tokenHooks:{
      "/":function(e, t) {
        return !!e.eat("*") && (t.tokenize = r, r(e, t));
      }
    },
    name:"css"
  }), e.defineMIME("text/x-scss", {
    mediaTypes:a,
    mediaFeatures:s,
    mediaValueKeywords:u,
    propertyKeywords:f,
    nonStandardPropertyKeywords:h,
    colorKeywords:x,
    valueKeywords:_,
    fontProperties:g,
    allowNested:!0,
    tokenHooks:{
      "/":function(e, t) {
        return e.eat("/") ? (e.skipToEnd(), [ "comment", "comment" ]) :e.eat("*") ? (t.tokenize = r, 
        r(e, t)) :[ "operator", "operator" ];
      },
      ":":function(e) {
        return !!e.match(/\s*\{/) && [ null, "{" ];
      },
      $:function(e) {
        return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? [ "variable-2", "variable-definition" ] :[ "variable-2", "variable" ];
      },
      "#":function(e) {
        return !!e.eat("{") && [ null, "interpolation" ];
      }
    },
    name:"css",
    helperType:"scss"
  }), e.defineMIME("text/x-less", {
    mediaTypes:a,
    mediaFeatures:s,
    mediaValueKeywords:u,
    propertyKeywords:f,
    nonStandardPropertyKeywords:h,
    colorKeywords:x,
    valueKeywords:_,
    fontProperties:g,
    allowNested:!0,
    tokenHooks:{
      "/":function(e, t) {
        return e.eat("/") ? (e.skipToEnd(), [ "comment", "comment" ]) :e.eat("*") ? (t.tokenize = r, 
        r(e, t)) :[ "operator", "operator" ];
      },
      "@":function(e) {
        return e.eat("{") ? [ null, "interpolation" ] :!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) && (e.eatWhile(/[\w\\\-]/), 
        e.match(/^\s*:/, !1) ? [ "variable-2", "variable-definition" ] :[ "variable-2", "variable" ]);
      },
      "&":function() {
        return [ "atom", "atom" ];
      }
    },
    name:"css",
    helperType:"less"
  }), e.defineMIME("text/x-gss", {
    documentTypes:i,
    mediaTypes:a,
    mediaFeatures:s,
    propertyKeywords:f,
    nonStandardPropertyKeywords:h,
    fontProperties:g,
    counterDescriptors:y,
    colorKeywords:x,
    valueKeywords:_,
    supportsAtComponent:!0,
    tokenHooks:{
      "/":function(e, t) {
        return !!e.eat("*") && (t.tokenize = r, r(e, t));
      }
    },
    name:"css",
    helperType:"gss"
  });
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../../addon/mode/multiplex")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror", "../htmlmixed/htmlmixed", "../../addon/mode/multiplex" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  e.defineMode("htmlembedded", function(t, r) {
    return e.multiplexingMode(e.getMode(t, "htmlmixed"), {
      open:r.open || r.scriptStartRegex || "<%",
      close:r.close || r.scriptEndRegex || "%>",
      mode:e.getMode(t, r.scriptingModeSpec)
    });
  }, "htmlmixed"), e.defineMIME("application/x-ejs", {
    name:"htmlembedded",
    scriptingModeSpec:"javascript"
  }), e.defineMIME("application/x-aspx", {
    name:"htmlembedded",
    scriptingModeSpec:"text/x-csharp"
  }), e.defineMIME("application/x-jsp", {
    name:"htmlembedded",
    scriptingModeSpec:"text/x-java"
  }), e.defineMIME("application/x-erb", {
    name:"htmlembedded",
    scriptingModeSpec:"ruby"
  });
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  function t(e, t, r) {
    var n = e.current(), i = n.search(t);
    return i > -1 ? e.backUp(n.length - i) :n.match(/<\/?$/) && (e.backUp(n.length), 
    e.match(t, !1) || e.match(n)), r;
  }
  function r(e) {
    var t = s[e];
    return t || (s[e] = new RegExp("\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"));
  }
  function n(e, t) {
    var n = e.match(r(t));
    return n ? n[2] :"";
  }
  function i(e, t) {
    return new RegExp((t ? "^" :"") + "</s*" + e + "s*>", "i");
  }
  function o(e, t) {
    for (var r in e) for (var n = t[r] || (t[r] = []), i = e[r], o = i.length - 1; o >= 0; o--) n.unshift(i[o]);
  }
  function a(e, t) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      if (!i[0] || i[1].test(n(t, i[0]))) return i[2];
    }
  }
  var l = {
    script:[ [ "lang", /(javascript|babel)/i, "javascript" ], [ "type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i, "javascript" ], [ "type", /./, "text/plain" ], [ null, null, "javascript" ] ],
    style:[ [ "lang", /^css$/i, "css" ], [ "type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css" ], [ "type", /./, "text/plain" ], [ null, null, "css" ] ]
  }, s = {};
  e.defineMode("htmlmixed", function(r, n) {
    function s(n, o) {
      var l, d = c.token(n, o.htmlState), f = /\btag\b/.test(d);
      if (f && !/[<>\s\/]/.test(n.current()) && (l = o.htmlState.tagName && o.htmlState.tagName.toLowerCase()) && u.hasOwnProperty(l)) o.inTag = l + " "; else if (o.inTag && f && />$/.test(n.current())) {
        var p = /^([\S]+) (.*)/.exec(o.inTag);
        o.inTag = null;
        var h = ">" == n.current() && a(u[p[1]], p[2]), m = e.getMode(r, h), g = i(p[1], !0), v = i(p[1], !1);
        o.token = function(e, r) {
          return e.match(g, !1) ? (r.token = s, r.localState = r.localMode = null, null) :t(e, v, r.localMode.token(e, r.localState));
        }, o.localMode = m, o.localState = e.startState(m, c.indent(o.htmlState, ""));
      } else o.inTag && (o.inTag += n.current(), n.eol() && (o.inTag += " "));
      return d;
    }
    var c = e.getMode(r, {
      name:"xml",
      htmlMode:!0,
      multilineTagIndentFactor:n.multilineTagIndentFactor,
      multilineTagIndentPastTag:n.multilineTagIndentPastTag
    }), u = {}, d = n && n.tags, f = n && n.scriptTypes;
    if (o(l, u), d && o(d, u), f) for (var p = f.length - 1; p >= 0; p--) u.script.unshift([ "type", f[p].matches, f[p].mode ]);
    return {
      startState:function() {
        return {
          token:s,
          inTag:null,
          localMode:null,
          localState:null,
          htmlState:e.startState(c)
        };
      },
      copyState:function(t) {
        var r;
        return t.localState && (r = e.copyState(t.localMode, t.localState)), {
          token:t.token,
          inTag:t.inTag,
          localMode:t.localMode,
          localState:r,
          htmlState:e.copyState(c, t.htmlState)
        };
      },
      token:function(e, t) {
        return t.token(e, t);
      },
      indent:function(t, r) {
        return !t.localMode || /^\s*<\//.test(r) ? c.indent(t.htmlState, r) :t.localMode.indent ? t.localMode.indent(t.localState, r) :e.Pass;
      },
      innerMode:function(e) {
        return {
          state:e.localState || e.htmlState,
          mode:e.localMode || c
        };
      }
    };
  }, "xml", "javascript", "css"), e.defineMIME("text/html", "htmlmixed");
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  function t(e, t, r) {
    return /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0)));
  }
  e.defineMode("javascript", function(r, n) {
    function i(e) {
      for (var t, r = !1, n = !1; null != (t = e.next()); ) {
        if (!r) {
          if ("/" == t && !n) return;
          "[" == t ? n = !0 :n && "]" == t && (n = !1);
        }
        r = !r && "\\" == t;
      }
    }
    function o(e, t, r) {
      return we = e, _e = r, t;
    }
    function a(e, r) {
      var n = e.next();
      if ('"' == n || "'" == n) return r.tokenize = l(n), r.tokenize(e, r);
      if ("." == n && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return o("number", "number");
      if ("." == n && e.match("..")) return o("spread", "meta");
      if (/[\[\]{}\(\),;\:\.]/.test(n)) return o(n);
      if ("=" == n && e.eat(">")) return o("=>", "operator");
      if ("0" == n && e.eat(/x/i)) return e.eatWhile(/[\da-f]/i), o("number", "number");
      if ("0" == n && e.eat(/o/i)) return e.eatWhile(/[0-7]/i), o("number", "number");
      if ("0" == n && e.eat(/b/i)) return e.eatWhile(/[01]/i), o("number", "number");
      if (/\d/.test(n)) return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), o("number", "number");
      if ("/" == n) return e.eat("*") ? (r.tokenize = s, s(e, r)) :e.eat("/") ? (e.skipToEnd(), 
      o("comment", "comment")) :t(e, r, 1) ? (i(e), e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/), 
      o("regexp", "string-2")) :(e.eatWhile(Ae), o("operator", "operator", e.current()));
      if ("`" == n) return r.tokenize = c, c(e, r);
      if ("#" == n) return e.skipToEnd(), o("error", "error");
      if (Ae.test(n)) return e.eatWhile(Ae), o("operator", "operator", e.current());
      if (Te.test(n)) {
        e.eatWhile(Te);
        var a = e.current(), u = ze.propertyIsEnumerable(a) && ze[a];
        return u && "." != r.lastType ? o(u.type, u.style, a) :o("variable", "variable", a);
      }
    }
    function l(e) {
      return function(t, r) {
        var n, i = !1;
        if (Se && "@" == t.peek() && t.match(Oe)) return r.tokenize = a, o("jsonld-keyword", "meta");
        for (;null != (n = t.next()) && (n != e || i); ) i = !i && "\\" == n;
        return i || (r.tokenize = a), o("string", "string");
      };
    }
    function s(e, t) {
      for (var r, n = !1; r = e.next(); ) {
        if ("/" == r && n) {
          t.tokenize = a;
          break;
        }
        n = "*" == r;
      }
      return o("comment", "comment");
    }
    function c(e, t) {
      for (var r, n = !1; null != (r = e.next()); ) {
        if (!n && ("`" == r || "$" == r && e.eat("{"))) {
          t.tokenize = a;
          break;
        }
        n = !n && "\\" == r;
      }
      return o("quasi", "string-2", e.current());
    }
    function u(e, t) {
      t.fatArrowAt && (t.fatArrowAt = null);
      var r = e.string.indexOf("=>", e.start);
      if (!(r < 0)) {
        for (var n = 0, i = !1, o = r - 1; o >= 0; --o) {
          var a = e.string.charAt(o), l = Ne.indexOf(a);
          if (l >= 0 && l < 3) {
            if (!n) {
              ++o;
              break;
            }
            if (0 == --n) break;
          } else if (l >= 3 && l < 6) ++n; else if (Te.test(a)) i = !0; else {
            if (/["'\/]/.test(a)) return;
            if (i && !n) {
              ++o;
              break;
            }
          }
        }
        i && !n && (t.fatArrowAt = o);
      }
    }
    function d(e, t, r, n, i, o) {
      this.indented = e, this.column = t, this.type = r, this.prev = i, this.info = o, 
      null != n && (this.align = n);
    }
    function f(e, t) {
      for (var r = e.localVars; r; r = r.next) if (r.name == t) return !0;
      for (var n = e.context; n; n = n.prev) for (var r = n.vars; r; r = r.next) if (r.name == t) return !0;
    }
    function p(e, t, r, n, i) {
      var o = e.cc;
      for (De.state = e, De.stream = i, De.marked = null, De.cc = o, De.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ;) {
        if ((o.length ? o.pop() :Me ? k :_)(r, n)) {
          for (;o.length && o[o.length - 1].lex; ) o.pop()();
          return De.marked ? De.marked :"variable" == r && f(e, n) ? "variable-2" :t;
        }
      }
    }
    function h() {
      for (var e = arguments.length - 1; e >= 0; e--) De.cc.push(arguments[e]);
    }
    function m() {
      return h.apply(null, arguments), !0;
    }
    function g(e) {
      function t(t) {
        for (var r = t; r; r = r.next) if (r.name == e) return !0;
        return !1;
      }
      var r = De.state;
      if (De.marked = "def", r.context) {
        if (t(r.localVars)) return;
        r.localVars = {
          name:e,
          next:r.localVars
        };
      } else {
        if (t(r.globalVars)) return;
        n.globalVars && (r.globalVars = {
          name:e,
          next:r.globalVars
        });
      }
    }
    function v() {
      De.state.context = {
        prev:De.state.context,
        vars:De.state.localVars
      }, De.state.localVars = qe;
    }
    function y() {
      De.state.localVars = De.state.context.vars, De.state.context = De.state.context.prev;
    }
    function b(e, t) {
      var r = function() {
        var r = De.state, n = r.indented;
        if ("stat" == r.lexical.type) n = r.lexical.indented; else for (var i = r.lexical; i && ")" == i.type && i.align; i = i.prev) n = i.indented;
        r.lexical = new d(n, De.stream.column(), e, null, r.lexical, t);
      };
      return r.lex = !0, r;
    }
    function x() {
      var e = De.state;
      e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev);
    }
    function w(e) {
      function t(r) {
        return r == e ? m() :";" == e ? h() :m(t);
      }
      return t;
    }
    function _(e, t) {
      return "var" == e ? m(b("vardef", t.length), X, w(";"), x) :"keyword a" == e ? m(b("form"), k, _, x) :"keyword b" == e ? m(b("form"), _, x) :"{" == e ? m(b("}"), U, x) :";" == e ? m() :"if" == e ? ("else" == De.state.lexical.info && De.state.cc[De.state.cc.length - 1] == x && De.state.cc.pop()(), 
      m(b("form"), k, _, x, ee)) :"function" == e ? m(ae) :"for" == e ? m(b("form"), te, _, x) :"variable" == e ? m(b("stat"), E) :"switch" == e ? m(b("form"), k, b("}", "switch"), w("{"), U, x, x) :"case" == e ? m(k, w(":")) :"default" == e ? m(w(":")) :"catch" == e ? m(b("form"), v, w("("), le, w(")"), _, x, y) :"class" == e ? m(b("form"), se, x) :"export" == e ? m(b("stat"), fe, x) :"import" == e ? m(b("stat"), pe, x) :"module" == e ? m(b("form"), Z, b("}"), w("{"), U, x, x) :"async" == e ? m(_) :h(b("stat"), k, w(";"), x);
    }
    function k(e) {
      return S(e, !1);
    }
    function C(e) {
      return S(e, !0);
    }
    function S(e, t) {
      if (De.state.fatArrowAt == De.stream.start) {
        var r = t ? W :N;
        if ("(" == e) return m(v, b(")"), B(Z, ")"), x, w("=>"), r, y);
        if ("variable" == e) return h(v, Z, w("=>"), r, y);
      }
      var n = t ? z :T;
      return We.hasOwnProperty(e) ? m(n) :"function" == e ? m(ae, n) :"keyword c" == e ? m(t ? L :M) :"(" == e ? m(b(")"), M, be, w(")"), x, n) :"operator" == e || "spread" == e ? m(t ? C :k) :"[" == e ? m(b("]"), ve, x, n) :"{" == e ? R(H, "}", null, n) :"quasi" == e ? h(A, n) :"new" == e ? m(D(t)) :m();
    }
    function M(e) {
      return e.match(/[;\}\)\],]/) ? h() :h(k);
    }
    function L(e) {
      return e.match(/[;\}\)\],]/) ? h() :h(C);
    }
    function T(e, t) {
      return "," == e ? m(k) :z(e, t, !1);
    }
    function z(e, t, r) {
      var n = 0 == r ? T :z, i = 0 == r ? k :C;
      return "=>" == e ? m(v, r ? W :N, y) :"operator" == e ? /\+\+|--/.test(t) ? m(n) :"?" == t ? m(k, w(":"), i) :m(i) :"quasi" == e ? h(A, n) :";" != e ? "(" == e ? R(C, ")", "call", n) :"." == e ? m(P, n) :"[" == e ? m(b("]"), M, w("]"), x, n) :void 0 :void 0;
    }
    function A(e, t) {
      return "quasi" != e ? h() :"${" != t.slice(t.length - 2) ? m(A) :m(k, O);
    }
    function O(e) {
      if ("}" == e) return De.marked = "string-2", De.state.tokenize = c, m(A);
    }
    function N(e) {
      return u(De.stream, De.state), h("{" == e ? _ :k);
    }
    function W(e) {
      return u(De.stream, De.state), h("{" == e ? _ :C);
    }
    function D(e) {
      return function(t) {
        return "." == t ? m(e ? I :q) :h(e ? C :k);
      };
    }
    function q(e, t) {
      if ("target" == t) return De.marked = "keyword", m(T);
    }
    function I(e, t) {
      if ("target" == t) return De.marked = "keyword", m(z);
    }
    function E(e) {
      return ":" == e ? m(x, _) :h(T, w(";"), x);
    }
    function P(e) {
      if ("variable" == e) return De.marked = "property", m();
    }
    function H(e, t) {
      return "variable" == e || "keyword" == De.style ? (De.marked = "property", m("get" == t || "set" == t ? F :j)) :"number" == e || "string" == e ? (De.marked = Se ? "property" :De.style + " property", 
      m(j)) :"jsonld-keyword" == e ? m(j) :"modifier" == e ? m(H) :"[" == e ? m(k, w("]"), j) :"spread" == e ? m(k) :void 0;
    }
    function F(e) {
      return "variable" != e ? h(j) :(De.marked = "property", m(ae));
    }
    function j(e) {
      return ":" == e ? m(C) :"(" == e ? h(ae) :void 0;
    }
    function B(e, t) {
      function r(n, i) {
        if ("," == n) {
          var o = De.state.lexical;
          return "call" == o.info && (o.pos = (o.pos || 0) + 1), m(e, r);
        }
        return n == t || i == t ? m() :m(w(t));
      }
      return function(n, i) {
        return n == t || i == t ? m() :h(e, r);
      };
    }
    function R(e, t, r) {
      for (var n = 3; n < arguments.length; n++) De.cc.push(arguments[n]);
      return m(b(t, r), B(e, t), x);
    }
    function U(e) {
      return "}" == e ? m() :h(_, U);
    }
    function K(e) {
      if (Le && ":" == e) return m($);
    }
    function V(e, t) {
      if ("=" == t) return m(C);
    }
    function $(e) {
      if ("variable" == e) return De.marked = "variable-3", m(G);
    }
    function G(e, t) {
      return "<" == t ? m(B($, ">"), G) :"[" == e ? m(w("]"), G) :void 0;
    }
    function X() {
      return h(Z, K, Q, J);
    }
    function Z(e, t) {
      return "modifier" == e ? m(Z) :"variable" == e ? (g(t), m()) :"spread" == e ? m(Z) :"[" == e ? R(Z, "]") :"{" == e ? R(Y, "}") :void 0;
    }
    function Y(e, t) {
      return "variable" != e || De.stream.match(/^\s*:/, !1) ? ("variable" == e && (De.marked = "property"), 
      "spread" == e ? m(Z) :"}" == e ? h() :m(w(":"), Z, Q)) :(g(t), m(Q));
    }
    function Q(e, t) {
      if ("=" == t) return m(C);
    }
    function J(e) {
      if ("," == e) return m(X);
    }
    function ee(e, t) {
      if ("keyword b" == e && "else" == t) return m(b("form", "else"), _, x);
    }
    function te(e) {
      if ("(" == e) return m(b(")"), re, w(")"), x);
    }
    function re(e) {
      return "var" == e ? m(X, w(";"), ie) :";" == e ? m(ie) :"variable" == e ? m(ne) :h(k, w(";"), ie);
    }
    function ne(e, t) {
      return "in" == t || "of" == t ? (De.marked = "keyword", m(k)) :m(T, ie);
    }
    function ie(e, t) {
      return ";" == e ? m(oe) :"in" == t || "of" == t ? (De.marked = "keyword", m(k)) :h(k, w(";"), oe);
    }
    function oe(e) {
      ")" != e && m(k);
    }
    function ae(e, t) {
      return "*" == t ? (De.marked = "keyword", m(ae)) :"variable" == e ? (g(t), m(ae)) :"(" == e ? m(v, b(")"), B(le, ")"), x, K, _, y) :void 0;
    }
    function le(e) {
      return "spread" == e ? m(le) :h(Z, K, V);
    }
    function se(e, t) {
      if ("variable" == e) return g(t), m(ce);
    }
    function ce(e, t) {
      return "extends" == t ? m(k, ce) :"{" == e ? m(b("}"), ue, x) :void 0;
    }
    function ue(e, t) {
      return "variable" == e || "keyword" == De.style ? "static" == t ? (De.marked = "keyword", 
      m(ue)) :(De.marked = "property", "get" == t || "set" == t ? m(de, ae, ue) :m(ae, ue)) :"*" == t ? (De.marked = "keyword", 
      m(ue)) :";" == e ? m(ue) :"}" == e ? m() :void 0;
    }
    function de(e) {
      return "variable" != e ? h() :(De.marked = "property", m());
    }
    function fe(e, t) {
      return "*" == t ? (De.marked = "keyword", m(ge, w(";"))) :"default" == t ? (De.marked = "keyword", 
      m(k, w(";"))) :h(_);
    }
    function pe(e) {
      return "string" == e ? m() :h(he, ge);
    }
    function he(e, t) {
      return "{" == e ? R(he, "}") :("variable" == e && g(t), "*" == t && (De.marked = "keyword"), 
      m(me));
    }
    function me(e, t) {
      if ("as" == t) return De.marked = "keyword", m(he);
    }
    function ge(e, t) {
      if ("from" == t) return De.marked = "keyword", m(k);
    }
    function ve(e) {
      return "]" == e ? m() :h(C, ye);
    }
    function ye(e) {
      return "for" == e ? h(be, w("]")) :"," == e ? m(B(L, "]")) :h(B(C, "]"));
    }
    function be(e) {
      return "for" == e ? m(te, be) :"if" == e ? m(k, be) :void 0;
    }
    function xe(e, t) {
      return "operator" == e.lastType || "," == e.lastType || Ae.test(t.charAt(0)) || /[,.]/.test(t.charAt(0));
    }
    var we, _e, ke = r.indentUnit, Ce = n.statementIndent, Se = n.jsonld, Me = n.json || Se, Le = n.typescript, Te = n.wordCharacters || /[\w$\xa1-\uffff]/, ze = function() {
      function e(e) {
        return {
          type:e,
          style:"keyword"
        };
      }
      var t = e("keyword a"), r = e("keyword b"), n = e("keyword c"), i = e("operator"), o = {
        type:"atom",
        style:"atom"
      }, a = {
        "if":e("if"),
        "while":t,
        "with":t,
        "else":r,
        "do":r,
        "try":r,
        "finally":r,
        "return":n,
        "break":n,
        "continue":n,
        "new":e("new"),
        "delete":n,
        "throw":n,
        "debugger":n,
        "var":e("var"),
        "const":e("var"),
        "let":e("var"),
        "function":e("function"),
        "catch":e("catch"),
        "for":e("for"),
        "switch":e("switch"),
        "case":e("case"),
        "default":e("default"),
        "in":i,
        "typeof":i,
        "instanceof":i,
        "true":o,
        "false":o,
        "null":o,
        undefined:o,
        NaN:o,
        Infinity:o,
        "this":e("this"),
        "class":e("class"),
        "super":e("atom"),
        "yield":n,
        "export":e("export"),
        "import":e("import"),
        "extends":n,
        await:n,
        async:e("async")
      };
      if (Le) {
        var l = {
          type:"variable",
          style:"variable-3"
        }, s = {
          "interface":e("class"),
          "implements":n,
          namespace:n,
          module:e("module"),
          "enum":e("module"),
          "public":e("modifier"),
          "private":e("modifier"),
          "protected":e("modifier"),
          "abstract":e("modifier"),
          as:i,
          string:l,
          number:l,
          "boolean":l,
          any:l
        };
        for (var c in s) a[c] = s[c];
      }
      return a;
    }(), Ae = /[+\-*&%=<>!?|~^]/, Oe = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/, Ne = "([{}])", We = {
      atom:!0,
      number:!0,
      variable:!0,
      string:!0,
      regexp:!0,
      "this":!0,
      "jsonld-keyword":!0
    }, De = {
      state:null,
      column:null,
      marked:null,
      cc:null
    }, qe = {
      name:"this",
      next:{
        name:"arguments"
      }
    };
    return x.lex = !0, {
      startState:function(e) {
        var t = {
          tokenize:a,
          lastType:"sof",
          cc:[],
          lexical:new d((e || 0) - ke, 0, "block", !1),
          localVars:n.localVars,
          context:n.localVars && {
            vars:n.localVars
          },
          indented:e || 0
        };
        return n.globalVars && "object" == typeof n.globalVars && (t.globalVars = n.globalVars), 
        t;
      },
      token:function(e, t) {
        if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), 
        u(e, t)), t.tokenize != s && e.eatSpace()) return null;
        var r = t.tokenize(e, t);
        return "comment" == we ? r :(t.lastType = "operator" != we || "++" != _e && "--" != _e ? we :"incdec", 
        p(t, r, we, _e, e));
      },
      indent:function(t, r) {
        if (t.tokenize == s) return e.Pass;
        if (t.tokenize != a) return 0;
        var i = r && r.charAt(0), o = t.lexical;
        if (!/^\s*else\b/.test(r)) for (var l = t.cc.length - 1; l >= 0; --l) {
          var c = t.cc[l];
          if (c == x) o = o.prev; else if (c != ee) break;
        }
        "stat" == o.type && "}" == i && (o = o.prev), Ce && ")" == o.type && "stat" == o.prev.type && (o = o.prev);
        var u = o.type, d = i == u;
        return "vardef" == u ? o.indented + ("operator" == t.lastType || "," == t.lastType ? o.info + 1 :0) :"form" == u && "{" == i ? o.indented :"form" == u ? o.indented + ke :"stat" == u ? o.indented + (xe(t, r) ? Ce || ke :0) :"switch" != o.info || d || 0 == n.doubleIndentSwitch ? o.align ? o.column + (d ? 0 :1) :o.indented + (d ? 0 :ke) :o.indented + (/^(?:case|default)\b/.test(r) ? ke :2 * ke);
      },
      electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,
      blockCommentStart:Me ? null :"/*",
      blockCommentEnd:Me ? null :"*/",
      lineComment:Me ? null :"//",
      fold:"brace",
      closeBrackets:"()[]{}''\"\"``",
      helperType:Me ? "json" :"javascript",
      jsonldMode:Se,
      jsonMode:Me,
      expressionAllowed:t,
      skipExpression:function(e) {
        var t = e.cc[e.cc.length - 1];
        t != k && t != C || e.cc.pop();
      }
    };
  }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), 
  e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), 
  e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), 
  e.defineMIME("application/json", {
    name:"javascript",
    json:!0
  }), e.defineMIME("application/x-json", {
    name:"javascript",
    json:!0
  }), e.defineMIME("application/ld+json", {
    name:"javascript",
    jsonld:!0
  }), e.defineMIME("text/typescript", {
    name:"javascript",
    typescript:!0
  }), e.defineMIME("application/typescript", {
    name:"javascript",
    typescript:!0
  });
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../clike/clike")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror", "../htmlmixed/htmlmixed", "../clike/clike" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  function t(e) {
    for (var t = {}, r = e.split(" "), n = 0; n < r.length; ++n) t[r[n]] = !0;
    return t;
  }
  function r(e, t, i) {
    return 0 == e.length ? n(t) :function(o, a) {
      for (var l = e[0], s = 0; s < l.length; s++) if (o.match(l[s][0])) return a.tokenize = r(e.slice(1), t), 
      l[s][1];
      return a.tokenize = n(t, i), "string";
    };
  }
  function n(e, t) {
    return function(r, n) {
      return i(r, n, e, t);
    };
  }
  function i(e, t, n, i) {
    if (!1 !== i && e.match("${", !1) || e.match("{$", !1)) return t.tokenize = null, 
    "string";
    if (!1 !== i && e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/)) return e.match("[", !1) && (t.tokenize = r([ [ [ "[", null ] ], [ [ /\d[\w\.]*/, "number" ], [ /\$[a-zA-Z_][a-zA-Z0-9_]*/, "variable-2" ], [ /[\w\$]+/, "variable" ] ], [ [ "]", null ] ] ], n, i)), 
    e.match(/\-\>\w/, !1) && (t.tokenize = r([ [ [ "->", null ] ], [ [ /[\w]+/, "variable" ] ] ], n, i)), 
    "variable-2";
    for (var o = !1; !e.eol() && (o || !1 === i || !e.match("{$", !1) && !e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1)); ) {
      if (!o && e.match(n)) {
        t.tokenize = null, t.tokStack.pop(), t.tokStack.pop();
        break;
      }
      o = "\\" == e.next() && !o;
    }
    return "string";
  }
  var o = "abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally", a = "true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__", l = "func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";
  e.registerHelper("hintWords", "php", [ o, a, l ].join(" ").split(" ")), e.registerHelper("wordChars", "php", /[\w$]/);
  var s = {
    name:"clike",
    helperType:"php",
    keywords:t(o),
    blockKeywords:t("catch do else elseif for foreach if switch try while finally"),
    defKeywords:t("class function interface namespace trait"),
    atoms:t(a),
    builtin:t(l),
    multiLineStrings:!0,
    hooks:{
      $:function(e) {
        return e.eatWhile(/[\w\$_]/), "variable-2";
      },
      "<":function(e, t) {
        var r;
        if (r = e.match(/<<\s*/)) {
          var i = e.eat(/['"]/);
          e.eatWhile(/[\w\.]/);
          var o = e.current().slice(r[0].length + (i ? 2 :1));
          if (i && e.eat(i), o) return (t.tokStack || (t.tokStack = [])).push(o, 0), t.tokenize = n(o, "'" != i), 
          "string";
        }
        return !1;
      },
      "#":function(e) {
        for (;!e.eol() && !e.match("?>", !1); ) e.next();
        return "comment";
      },
      "/":function(e) {
        if (e.eat("/")) {
          for (;!e.eol() && !e.match("?>", !1); ) e.next();
          return "comment";
        }
        return !1;
      },
      '"':function(e, t) {
        return (t.tokStack || (t.tokStack = [])).push('"', 0), t.tokenize = n('"'), "string";
      },
      "{":function(e, t) {
        return t.tokStack && t.tokStack.length && t.tokStack[t.tokStack.length - 1]++, !1;
      },
      "}":function(e, t) {
        return t.tokStack && t.tokStack.length > 0 && !--t.tokStack[t.tokStack.length - 1] && (t.tokenize = n(t.tokStack[t.tokStack.length - 2])), 
        !1;
      }
    }
  };
  e.defineMode("php", function(t, r) {
    function n(t, r) {
      var n = r.curMode == o;
      if (t.sol() && r.pending && '"' != r.pending && "'" != r.pending && (r.pending = null), 
      n) return n && null == r.php.tokenize && t.match("?>") ? (r.curMode = i, r.curState = r.html, 
      r.php.context.prev || (r.php = null), "meta") :o.token(t, r.curState);
      if (t.match(/^<\?\w*/)) return r.curMode = o, r.php || (r.php = e.startState(o, i.indent(r.html, ""))), 
      r.curState = r.php, "meta";
      if ('"' == r.pending || "'" == r.pending) {
        for (;!t.eol() && t.next() != r.pending; ) ;
        var a = "string";
      } else if (r.pending && t.pos < r.pending.end) {
        t.pos = r.pending.end;
        var a = r.pending.style;
      } else var a = i.token(t, r.curState);
      r.pending && (r.pending = null);
      var l, s = t.current(), c = s.search(/<\?/);
      return -1 != c && ("string" == a && (l = s.match(/[\'\"]$/)) && !/\?>/.test(s) ? r.pending = l[0] :r.pending = {
        end:t.pos,
        style:a
      }, t.backUp(s.length - c)), a;
    }
    var i = e.getMode(t, "text/html"), o = e.getMode(t, s);
    return {
      startState:function() {
        var t = e.startState(i), n = r.startOpen ? e.startState(o) :null;
        return {
          html:t,
          php:n,
          curMode:r.startOpen ? o :i,
          curState:r.startOpen ? n :t,
          pending:null
        };
      },
      copyState:function(t) {
        var r, n = t.html, a = e.copyState(i, n), l = t.php, s = l && e.copyState(o, l);
        return r = t.curMode == i ? a :s, {
          html:a,
          php:s,
          curMode:t.curMode,
          curState:r,
          pending:t.pending
        };
      },
      token:n,
      indent:function(e, t) {
        return e.curMode != o && /^\s*<\//.test(t) || e.curMode == o && /^\?>/.test(t) ? i.indent(e.html, t) :e.curMode.indent(e.curState, t);
      },
      blockCommentStart:"/*",
      blockCommentEnd:"*/",
      lineComment:"//",
      innerMode:function(e) {
        return {
          state:e.curState,
          mode:e.curMode
        };
      }
    };
  }, "htmlmixed", "clike"), e.defineMIME("application/x-httpd-php", "php"), e.defineMIME("application/x-httpd-php-open", {
    name:"php",
    startOpen:!0
  }), e.defineMIME("text/x-php", s);
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  e.defineMode("ruby", function(e) {
    function t(e) {
      for (var t = {}, r = 0, n = e.length; r < n; ++r) t[e[r]] = !0;
      return t;
    }
    function r(e, t, r) {
      return r.tokenize.push(e), e(t, r);
    }
    function n(e, t) {
      if (e.sol() && e.match("=begin") && e.eol()) return t.tokenize.push(s), "comment";
      if (e.eatSpace()) return null;
      var n, i = e.next();
      if ("`" == i || "'" == i || '"' == i) return r(a(i, "string", '"' == i || "`" == i), e, t);
      if ("/" == i) {
        var o = e.current().length;
        if (e.skipTo("/")) {
          var u = e.current().length;
          e.backUp(e.current().length - o);
          for (var d = 0; e.current().length < u; ) {
            var f = e.next();
            if ("(" == f ? d += 1 :")" == f && (d -= 1), d < 0) break;
          }
          if (e.backUp(e.current().length - o), 0 == d) return r(a(i, "string-2", !0), e, t);
        }
        return "operator";
      }
      if ("%" == i) {
        var h = "string", m = !0;
        e.eat("s") ? h = "atom" :e.eat(/[WQ]/) ? h = "string" :e.eat(/[r]/) ? h = "string-2" :e.eat(/[wxq]/) && (h = "string", 
        m = !1);
        var g = e.eat(/[^\w\s=]/);
        return g ? (p.propertyIsEnumerable(g) && (g = p[g]), r(a(g, h, m, !0), e, t)) :"operator";
      }
      if ("#" == i) return e.skipToEnd(), "comment";
      if ("<" == i && (n = e.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) return r(l(n[1]), e, t);
      if ("0" == i) return e.eat("x") ? e.eatWhile(/[\da-fA-F]/) :e.eat("b") ? e.eatWhile(/[01]/) :e.eatWhile(/[0-7]/), 
      "number";
      if (/\d/.test(i)) return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), "number";
      if ("?" == i) {
        for (;e.match(/^\\[CM]-/); ) ;
        return e.eat("\\") ? e.eatWhile(/\w/) :e.next(), "string";
      }
      if (":" == i) return e.eat("'") ? r(a("'", "atom", !1), e, t) :e.eat('"') ? r(a('"', "atom", !0), e, t) :e.eat(/[\<\>]/) ? (e.eat(/[\<\>]/), 
      "atom") :e.eat(/[\+\-\*\/\&\|\:\!]/) ? "atom" :e.eat(/[a-zA-Z$@_\xa1-\uffff]/) ? (e.eatWhile(/[\w$\xa1-\uffff]/), 
      e.eat(/[\?\!\=]/), "atom") :"operator";
      if ("@" == i && e.match(/^@?[a-zA-Z_\xa1-\uffff]/)) return e.eat("@"), e.eatWhile(/[\w\xa1-\uffff]/), 
      "variable-2";
      if ("$" == i) return e.eat(/[a-zA-Z_]/) ? e.eatWhile(/[\w]/) :e.eat(/\d/) ? e.eat(/\d/) :e.next(), 
      "variable-3";
      if (/[a-zA-Z_\xa1-\uffff]/.test(i)) return e.eatWhile(/[\w\xa1-\uffff]/), e.eat(/[\?\!]/), 
      e.eat(":") ? "atom" :"ident";
      if ("|" != i || !t.varList && "{" != t.lastTok && "do" != t.lastTok) {
        if (/[\(\)\[\]{}\\;]/.test(i)) return c = i, null;
        if ("-" == i && e.eat(">")) return "arrow";
        if (/[=+\-\/*:\.^%<>~|]/.test(i)) {
          var v = e.eatWhile(/[=+\-\/*:\.^%<>~|]/);
          return "." != i || v || (c = "."), "operator";
        }
        return null;
      }
      return c = "|", null;
    }
    function i(e) {
      return e || (e = 1), function(t, r) {
        if ("}" == t.peek()) {
          if (1 == e) return r.tokenize.pop(), r.tokenize[r.tokenize.length - 1](t, r);
          r.tokenize[r.tokenize.length - 1] = i(e - 1);
        } else "{" == t.peek() && (r.tokenize[r.tokenize.length - 1] = i(e + 1));
        return n(t, r);
      };
    }
    function o() {
      var e = !1;
      return function(t, r) {
        return e ? (r.tokenize.pop(), r.tokenize[r.tokenize.length - 1](t, r)) :(e = !0, 
        n(t, r));
      };
    }
    function a(e, t, r, n) {
      return function(a, l) {
        var s, c = !1;
        for ("read-quoted-paused" === l.context.type && (l.context = l.context.prev, a.eat("}")); null != (s = a.next()); ) {
          if (s == e && (n || !c)) {
            l.tokenize.pop();
            break;
          }
          if (r && "#" == s && !c) {
            if (a.eat("{")) {
              "}" == e && (l.context = {
                prev:l.context,
                type:"read-quoted-paused"
              }), l.tokenize.push(i());
              break;
            }
            if (/[@\$]/.test(a.peek())) {
              l.tokenize.push(o());
              break;
            }
          }
          c = !c && "\\" == s;
        }
        return t;
      };
    }
    function l(e) {
      return function(t, r) {
        return t.match(e) ? r.tokenize.pop() :t.skipToEnd(), "string";
      };
    }
    function s(e, t) {
      return e.sol() && e.match("=end") && e.eol() && t.tokenize.pop(), e.skipToEnd(), 
      "comment";
    }
    var c, u = t([ "alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else", "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or", "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless", "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc", "caller", "lambda", "proc", "public", "protected", "private", "require", "load", "require_relative", "extend", "autoload", "__END__", "__FILE__", "__LINE__", "__dir__" ]), d = t([ "def", "class", "case", "for", "while", "until", "module", "then", "catch", "loop", "proc", "begin" ]), f = t([ "end", "until" ]), p = {
      "[":"]",
      "{":"}",
      "(":")"
    };
    return {
      startState:function() {
        return {
          tokenize:[ n ],
          indented:0,
          context:{
            type:"top",
            indented:-e.indentUnit
          },
          continuedLine:!1,
          lastTok:null,
          varList:!1
        };
      },
      token:function(e, t) {
        c = null, e.sol() && (t.indented = e.indentation());
        var r, n = t.tokenize[t.tokenize.length - 1](e, t), i = c;
        if ("ident" == n) {
          var o = e.current();
          n = "." == t.lastTok ? "property" :u.propertyIsEnumerable(e.current()) ? "keyword" :/^[A-Z]/.test(o) ? "tag" :"def" == t.lastTok || "class" == t.lastTok || t.varList ? "def" :"variable", 
          "keyword" == n && (i = o, d.propertyIsEnumerable(o) ? r = "indent" :f.propertyIsEnumerable(o) ? r = "dedent" :"if" != o && "unless" != o || e.column() != e.indentation() ? "do" == o && t.context.indented < t.indented && (r = "indent") :r = "indent");
        }
        return (c || n && "comment" != n) && (t.lastTok = i), "|" == c && (t.varList = !t.varList), 
        "indent" == r || /[\(\[\{]/.test(c) ? t.context = {
          prev:t.context,
          type:c || n,
          indented:t.indented
        } :("dedent" == r || /[\)\]\}]/.test(c)) && t.context.prev && (t.context = t.context.prev), 
        e.eol() && (t.continuedLine = "\\" == c || "operator" == n), n;
      },
      indent:function(t, r) {
        if (t.tokenize[t.tokenize.length - 1] != n) return 0;
        var i = r && r.charAt(0), o = t.context, a = o.type == p[i] || "keyword" == o.type && /^(?:end|until|else|elsif|when|rescue)\b/.test(r);
        return o.indented + (a ? 0 :e.indentUnit) + (t.continuedLine ? e.indentUnit :0);
      },
      electricInput:/^\s*(?:end|rescue|\})$/,
      lineComment:"#"
    };
  }), e.defineMIME("text/x-ruby", "ruby");
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  var t = {
    autoSelfClosers:{
      area:!0,
      base:!0,
      br:!0,
      col:!0,
      command:!0,
      embed:!0,
      frame:!0,
      hr:!0,
      img:!0,
      input:!0,
      keygen:!0,
      link:!0,
      meta:!0,
      param:!0,
      source:!0,
      track:!0,
      wbr:!0,
      menuitem:!0
    },
    implicitlyClosed:{
      dd:!0,
      li:!0,
      optgroup:!0,
      option:!0,
      p:!0,
      rp:!0,
      rt:!0,
      tbody:!0,
      td:!0,
      tfoot:!0,
      th:!0,
      tr:!0
    },
    contextGrabbers:{
      dd:{
        dd:!0,
        dt:!0
      },
      dt:{
        dd:!0,
        dt:!0
      },
      li:{
        li:!0
      },
      option:{
        option:!0,
        optgroup:!0
      },
      optgroup:{
        optgroup:!0
      },
      p:{
        address:!0,
        article:!0,
        aside:!0,
        blockquote:!0,
        dir:!0,
        div:!0,
        dl:!0,
        fieldset:!0,
        footer:!0,
        form:!0,
        h1:!0,
        h2:!0,
        h3:!0,
        h4:!0,
        h5:!0,
        h6:!0,
        header:!0,
        hgroup:!0,
        hr:!0,
        menu:!0,
        nav:!0,
        ol:!0,
        p:!0,
        pre:!0,
        section:!0,
        table:!0,
        ul:!0
      },
      rp:{
        rp:!0,
        rt:!0
      },
      rt:{
        rp:!0,
        rt:!0
      },
      tbody:{
        tbody:!0,
        tfoot:!0
      },
      td:{
        td:!0,
        th:!0
      },
      tfoot:{
        tbody:!0
      },
      th:{
        td:!0,
        th:!0
      },
      thead:{
        tbody:!0,
        tfoot:!0
      },
      tr:{
        tr:!0
      }
    },
    doNotIndent:{
      pre:!0
    },
    allowUnquoted:!0,
    allowMissing:!0,
    caseFold:!0
  }, r = {
    autoSelfClosers:{},
    implicitlyClosed:{},
    contextGrabbers:{},
    doNotIndent:{},
    allowUnquoted:!1,
    allowMissing:!1,
    caseFold:!1
  };
  e.defineMode("xml", function(n, i) {
    function o(e, t) {
      function r(r) {
        return t.tokenize = r, r(e, t);
      }
      var n = e.next();
      if ("<" == n) return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? r(s("atom", "]]>")) :null :e.match("--") ? r(s("comment", "-->")) :e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), 
      r(c(1))) :null :e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = s("meta", "?>"), 
      "meta") :(M = e.eat("/") ? "closeTag" :"openTag", t.tokenize = a, "tag bracket");
      if ("&" == n) {
        var i;
        return i = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") :e.eatWhile(/[\d]/) && e.eat(";") :e.eatWhile(/[\w\.\-:]/) && e.eat(";"), 
        i ? "atom" :"error";
      }
      return e.eatWhile(/[^&<]/), null;
    }
    function a(e, t) {
      var r = e.next();
      if (">" == r || "/" == r && e.eat(">")) return t.tokenize = o, M = ">" == r ? "endTag" :"selfcloseTag", 
      "tag bracket";
      if ("=" == r) return M = "equals", null;
      if ("<" == r) {
        t.tokenize = o, t.state = p, t.tagName = t.tagStart = null;
        var n = t.tokenize(e, t);
        return n ? n + " tag error" :"tag error";
      }
      return /[\'\"]/.test(r) ? (t.tokenize = l(r), t.stringStartCol = e.column(), t.tokenize(e, t)) :(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 
      "word");
    }
    function l(e) {
      var t = function(t, r) {
        for (;!t.eol(); ) if (t.next() == e) {
          r.tokenize = a;
          break;
        }
        return "string";
      };
      return t.isInAttribute = !0, t;
    }
    function s(e, t) {
      return function(r, n) {
        for (;!r.eol(); ) {
          if (r.match(t)) {
            n.tokenize = o;
            break;
          }
          r.next();
        }
        return e;
      };
    }
    function c(e) {
      return function(t, r) {
        for (var n; null != (n = t.next()); ) {
          if ("<" == n) return r.tokenize = c(e + 1), r.tokenize(t, r);
          if (">" == n) {
            if (1 == e) {
              r.tokenize = o;
              break;
            }
            return r.tokenize = c(e - 1), r.tokenize(t, r);
          }
        }
        return "meta";
      };
    }
    function u(e, t, r) {
      this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = r, 
      (k.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0);
    }
    function d(e) {
      e.context && (e.context = e.context.prev);
    }
    function f(e, t) {
      for (var r; ;) {
        if (!e.context) return;
        if (r = e.context.tagName, !k.contextGrabbers.hasOwnProperty(r) || !k.contextGrabbers[r].hasOwnProperty(t)) return;
        d(e);
      }
    }
    function p(e, t, r) {
      return "openTag" == e ? (r.tagStart = t.column(), h) :"closeTag" == e ? m :p;
    }
    function h(e, t, r) {
      return "word" == e ? (r.tagName = t.current(), L = "tag", y) :(L = "error", h);
    }
    function m(e, t, r) {
      if ("word" == e) {
        var n = t.current();
        return r.context && r.context.tagName != n && k.implicitlyClosed.hasOwnProperty(r.context.tagName) && d(r), 
        r.context && r.context.tagName == n || !1 === k.matchClosing ? (L = "tag", g) :(L = "tag error", 
        v);
      }
      return L = "error", v;
    }
    function g(e, t, r) {
      return "endTag" != e ? (L = "error", g) :(d(r), p);
    }
    function v(e, t, r) {
      return L = "error", g(e, t, r);
    }
    function y(e, t, r) {
      if ("word" == e) return L = "attribute", b;
      if ("endTag" == e || "selfcloseTag" == e) {
        var n = r.tagName, i = r.tagStart;
        return r.tagName = r.tagStart = null, "selfcloseTag" == e || k.autoSelfClosers.hasOwnProperty(n) ? f(r, n) :(f(r, n), 
        r.context = new u(r, n, i == r.indented)), p;
      }
      return L = "error", y;
    }
    function b(e, t, r) {
      return "equals" == e ? x :(k.allowMissing || (L = "error"), y(e, t, r));
    }
    function x(e, t, r) {
      return "string" == e ? w :"word" == e && k.allowUnquoted ? (L = "string", y) :(L = "error", 
      y(e, t, r));
    }
    function w(e, t, r) {
      return "string" == e ? w :y(e, t, r);
    }
    var _ = n.indentUnit, k = {}, C = i.htmlMode ? t :r;
    for (var S in C) k[S] = C[S];
    for (var S in i) k[S] = i[S];
    var M, L;
    return o.isInText = !0, {
      startState:function(e) {
        var t = {
          tokenize:o,
          state:p,
          indented:e || 0,
          tagName:null,
          tagStart:null,
          context:null
        };
        return null != e && (t.baseIndent = e), t;
      },
      token:function(e, t) {
        if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
        M = null;
        var r = t.tokenize(e, t);
        return (r || M) && "comment" != r && (L = null, t.state = t.state(M || r, e, t), 
        L && (r = "error" == L ? r + " error" :L)), r;
      },
      indent:function(t, r, n) {
        var i = t.context;
        if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 :t.indented + _;
        if (i && i.noIndent) return e.Pass;
        if (t.tokenize != a && t.tokenize != o) return n ? n.match(/^(\s*)/)[0].length :0;
        if (t.tagName) return !1 !== k.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 :t.tagStart + _ * (k.multilineTagIndentFactor || 1);
        if (k.alignCDATA && /<!\[CDATA\[/.test(r)) return 0;
        var l = r && /^<(\/)?([\w_:\.-]*)/.exec(r);
        if (l && l[1]) for (;i; ) {
          if (i.tagName == l[2]) {
            i = i.prev;
            break;
          }
          if (!k.implicitlyClosed.hasOwnProperty(i.tagName)) break;
          i = i.prev;
        } else if (l) for (;i; ) {
          var s = k.contextGrabbers[i.tagName];
          if (!s || !s.hasOwnProperty(l[2])) break;
          i = i.prev;
        }
        for (;i && i.prev && !i.startOfLine; ) i = i.prev;
        return i ? i.indent + _ :t.baseIndent || 0;
      },
      electricInput:/<\/[\s\w:]+>$/,
      blockCommentStart:"<!--",
      blockCommentEnd:"-->",
      configuration:k.htmlMode ? "html" :"xml",
      helperType:k.htmlMode ? "html" :"xml",
      skipAttribute:function(e) {
        e.state == x && (e.state = y);
      }
    };
  }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
    name:"xml",
    htmlMode:!0
  });
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  function t(e) {
    return new RegExp("^((" + e.join(")|(") + "))\\b");
  }
  function r(e) {
    return e.scopes[e.scopes.length - 1];
  }
  var n = t([ "and", "or", "not", "is" ]), i = [ "as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in" ], o = [ "abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__" ];
  e.registerHelper("hintWords", "python", i.concat(o)), e.defineMode("python", function(a, l) {
    function s(e, t) {
      if (e.sol() && (t.indent = e.indentation()), e.sol() && "py" == r(t).type) {
        var n = r(t).offset;
        if (e.eatSpace()) {
          var i = e.indentation();
          return i > n ? d(t) :i < n && p(e, t) && (t.errorToken = !0), null;
        }
        var o = c(e, t);
        return n > 0 && p(e, t) && (o += " " + m), o;
      }
      return c(e, t);
    }
    function c(e, t) {
      if (e.eatSpace()) return null;
      if ("#" == e.peek()) return e.skipToEnd(), "comment";
      if (e.match(/^[0-9\.]/, !1)) {
        var r = !1;
        if (e.match(/^\d*\.\d+(e[\+\-]?\d+)?/i) && (r = !0), e.match(/^\d+\.\d*/) && (r = !0), 
        e.match(/^\.\d+/) && (r = !0), r) return e.eat(/J/i), "number";
        var i = !1;
        if (e.match(/^0x[0-9a-f]+/i) && (i = !0), e.match(/^0b[01]+/i) && (i = !0), e.match(/^0o[0-7]+/i) && (i = !0), 
        e.match(/^[1-9]\d*(e[\+\-]?\d+)?/) && (e.eat(/J/i), i = !0), e.match(/^0(?![\dx])/i) && (i = !0), 
        i) return e.eat(/L/i), "number";
      }
      return e.match(M) ? (t.tokenize = u(e.current()), t.tokenize(e, t)) :e.match(b) || e.match(y) ? "punctuation" :e.match(v) || e.match(C) ? "operator" :e.match(g) ? "punctuation" :"." == t.lastToken && e.match(S) ? "property" :e.match(L) || e.match(n) ? "keyword" :e.match(T) ? "builtin" :e.match(/^(self|cls)\b/) ? "variable-2" :e.match(S) ? "def" == t.lastToken || "class" == t.lastToken ? "def" :"variable" :(e.next(), 
      m);
    }
    function u(e) {
      function t(t, i) {
        for (;!t.eol(); ) if (t.eatWhile(/[^'"\\]/), t.eat("\\")) {
          if (t.next(), r && t.eol()) return n;
        } else {
          if (t.match(e)) return i.tokenize = s, n;
          t.eat(/['"]/);
        }
        if (r) {
          if (l.singleLineStringErrors) return m;
          i.tokenize = s;
        }
        return n;
      }
      for (;"rub".indexOf(e.charAt(0).toLowerCase()) >= 0; ) e = e.substr(1);
      var r = 1 == e.length, n = "string";
      return t.isString = !0, t;
    }
    function d(e) {
      for (;"py" != r(e).type; ) e.scopes.pop();
      e.scopes.push({
        offset:r(e).offset + a.indentUnit,
        type:"py",
        align:null
      });
    }
    function f(e, t, r) {
      var n = e.match(/^([\s\[\{\(]|#.*)*$/, !1) ? null :e.column() + 1;
      t.scopes.push({
        offset:t.indent + x,
        type:r,
        align:n
      });
    }
    function p(e, t) {
      for (var n = e.indentation(); r(t).offset > n; ) {
        if ("py" != r(t).type) return !0;
        t.scopes.pop();
      }
      return r(t).offset != n;
    }
    function h(e, t) {
      e.sol() && (t.beginningOfLine = !0);
      var n = t.tokenize(e, t), i = e.current();
      if (t.beginningOfLine && "@" == i) return e.match(S, !1) ? "meta" :k ? "operator" :m;
      /\S/.test(i) && (t.beginningOfLine = !1), "variable" != n && "builtin" != n || "meta" != t.lastToken || (n = "meta"), 
      "pass" != i && "return" != i || (t.dedent += 1), "lambda" == i && (t.lambda = !0), 
      ":" != i || t.lambda || "py" != r(t).type || d(t);
      var o = 1 == i.length ? "[({".indexOf(i) :-1;
      if (-1 != o && f(e, t, "])}".slice(o, o + 1)), -1 != (o = "])}".indexOf(i))) {
        if (r(t).type != i) return m;
        t.indent = t.scopes.pop().offset - x;
      }
      return t.dedent > 0 && e.eol() && "py" == r(t).type && (t.scopes.length > 1 && t.scopes.pop(), 
      t.dedent -= 1), n;
    }
    var m = "error", g = l.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.]/, v = l.doubleOperators || /^([!<>]==|<>|<<|>>|\/\/|\*\*)/, y = l.doubleDelimiters || /^(\+=|\-=|\*=|%=|\/=|&=|\|=|\^=)/, b = l.tripleDelimiters || /^(\/\/=|>>=|<<=|\*\*=)/, x = l.hangingIndent || a.indentUnit, w = i, _ = o;
    l.extra_keywords != undefined && (w = w.concat(l.extra_keywords)), l.extra_builtins != undefined && (_ = _.concat(l.extra_builtins));
    var k = l.version && 3 == parseInt(l.version, 10);
    if (k) {
      var C = l.singleOperators || /^[\+\-\*\/%&|\^~<>!@]/, S = l.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
      w = w.concat([ "nonlocal", "False", "True", "None", "async", "await" ]), _ = _.concat([ "ascii", "bytes", "exec", "print" ]);
      var M = new RegExp("^(([rbuf]|(br))?('{3}|\"{3}|['\"]))", "i");
    } else {
      var C = l.singleOperators || /^[\+\-\*\/%&|\^~<>!]/, S = l.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
      w = w.concat([ "exec", "print" ]), _ = _.concat([ "apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None" ]);
      var M = new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
    }
    var L = t(w), T = t(_);
    return {
      startState:function(e) {
        return {
          tokenize:s,
          scopes:[ {
            offset:e || 0,
            type:"py",
            align:null
          } ],
          indent:e || 0,
          lastToken:null,
          lambda:!1,
          dedent:0
        };
      },
      token:function(e, t) {
        var r = t.errorToken;
        r && (t.errorToken = !1);
        var n = h(e, t);
        return n && "comment" != n && (t.lastToken = "keyword" == n || "punctuation" == n ? e.current() :n), 
        "punctuation" == n && (n = null), e.eol() && t.lambda && (t.lambda = !1), r ? n + " " + m :n;
      },
      indent:function(t, n) {
        if (t.tokenize != s) return t.tokenize.isString ? e.Pass :0;
        var i = r(t), o = i.type == n.charAt(0);
        return null != i.align ? i.align - (o ? 1 :0) :i.offset - (o ? x :0);
      },
      electricInput:/^\s*[\}\]\)]$/,
      closeBrackets:{
        triples:"'\""
      },
      lineComment:"#",
      fold:"indent"
    };
  }), e.defineMIME("text/x-python", "python");
  var a = function(e) {
    return e.split(" ");
  };
  e.defineMIME("text/x-cython", {
    name:"python",
    extra_keywords:a("by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE")
  });
}), function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) :"function" == typeof define && define.amd ? define([ "../../lib/codemirror" ], e) :e(CodeMirror);
}(function(e) {
  "use strict";
  function t(e, t) {
    for (var r = -1, i = 1, o = e.split(n), a = 0; a < o.length; a++) {
      for (var l = 1; l <= o[a].length; l++) i === t && (r = a), i++;
      i++;
    }
    var s = [ "", "" ];
    return 0 === t ? (s[1] = o[0], s[0] = null) :(s[1] = o[r], s[0] = o[r - 1]), s;
  }
  var r = [ " ", "\\+", "\\-", "\\(", "\\)", "\\*", "/", ":", "\\?", "\\<", "\\>", " " ], n = new RegExp(r.join("|"), "g");
  e.defineMode("swift", function() {
    var e = [ "class", "deinit", "enum", "extension", "func", "import", "init", "let", "protocol", "static", "struct", "subscript", "typealias", "var", "as", "dynamicType", "is", "new", "super", "self", "Self", "Type", "__COLUMN__", "__FILE__", "__FUNCTION__", "__LINE__", "break", "case", "continue", "default", "do", "else", "fallthrough", "if", "in", "for", "return", "switch", "where", "while", "associativity", "didSet", "get", "infix", "inout", "left", "mutating", "none", "nonmutating", "operator", "override", "postfix", "precedence", "prefix", "right", "set", "unowned", "unowned(safe)", "unowned(unsafe)", "weak", "willSet" ], r = [ "Infinity", "NaN", "undefined", "null", "true", "false", "on", "off", "yes", "no", "nil" ], i = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ], o = [ "+", "-", "/", "*", "%", "=", "|", "&", "<", ">", "[", "]" ], a = [ ";", ",", ".", "(", ")" ], l = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/, s = /^[_A-Za-z$][_A-Za-z$0-9]*/, c = /^(@|this\.)[_A-Za-z$][_A-Za-z$0-9]*/, u = /^(\/{3}|\/)/;
    return {
      startState:function() {
        return {
          prev:!1,
          func:!1,
          op:!1,
          string:!1,
          escape:!1,
          inner:!1,
          comment:!1,
          num_left:0,
          num_right:0,
          word:"",
          back:0,
          back_type:!1
        };
      },
      token:function(d, f) {
        var p;
        if (d.eatSpace()) return null;
        if (p = d.next(), f.string) return f.escape ? (f.escape = !1, "string") :'"' !== p && "'" !== p || f.escape ? "\\" === p && "(" === d.peek() ? (f.inner = !0, 
        f.string = !1, "keyword") :"\\" === p && "(" !== d.peek() ? (f.escape = !0, f.string = !0, 
        "string") :"string" :(f.string = !1, "string");
        if (f.comment) return "*" === p && "/" === d.peek() ? (f.prev = "*", "comment") :"/" === p && "*" === f.prev ? (f.prev = !1, 
        f.comment = !1, "comment") :"comment";
        if ("/" === p) {
          if ("/" === d.peek()) return d.skipToEnd(), "comment";
          if ("*" === d.peek()) return f.comment = !0, "comment";
        }
        if ("(" === p && f.inner) return f.num_left++, null;
        if (")" === p && f.inner) return f.num_right++, f.num_left === f.num_right && (f.inner = !1, 
        f.string = !0), null;
        var h = t(d.string, d.pos), m = h[1], g = h[0];
        if (-1 !== o.indexOf(p + "")) return "operator";
        if (-1 !== a.indexOf(p + "")) return "punctuation";
        if (void 0 !== m) {
          if ("#" === m.charAt(0)) return null;
          if (-1 !== r.indexOf(m)) return "atom";
          if (-1 !== i.indexOf(m)) return "number";
          if ((-1 !== i.indexOf(m.charAt(0) + "") || o.indexOf(m.charAt(0) + "")) && -1 !== i.indexOf(p)) return "number";
          if (-1 !== e.indexOf(m) || -1 !== e.indexOf(m.split(n)[0])) return "keyword";
          if ("@" === m.charAt(0)) return "def";
          if ("var" === g || "let" === g) return "def";
        }
        if ("'" === p || '"' === p) return f.string = !0, "string";
        if ("(" === p && f.inner && f.num_left++, ")" === p && f.inner) return f.num_right++, 
        f.num_left === f.num_right && (f.inner = !1, f.string = !0), null;
        if (d.match(/^-?[0-9\.]/, !1)) {
          var v = !1;
          if (d.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (v = !0), d.match(/^-?\d+\.\d*/) && (v = !0), 
          d.match(/^-?\.\d+/) && (v = !0), v) return "." == d.peek() && d.backUp(1), "number";
          var y = !1;
          if (d.match(/^-?0x[0-9a-f]+/i) && (y = !0), d.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (y = !0), 
          d.match(/^-?0(?![\dx])/i) && (y = !0), y) return "number";
        }
        if (d.match(u)) {
          if ("/" != d.current() || d.match(/^.*\//, !1)) return "string";
          d.backUp(1);
        }
        return d.match(l) ? "punctuation" :d.match(s) ? "variable" :d.match(c) ? "property" :void 0;
      }
    };
  }), e.defineMIME("text/swift", "swift");
});
//# sourceMappingURL=/assets/maps/code_editor-51ea748ea098afdca297b6af2330875c367f110ecae147ff80689aae90f4a453.js.map
