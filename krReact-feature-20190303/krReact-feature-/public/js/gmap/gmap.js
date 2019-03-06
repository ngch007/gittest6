!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e((t.L = {}));
})(this, function(t) {
  'use strict';
  function e(t) {
    var e, i, n, o;
    for (i = 1, n = arguments.length; i < n; i++) {
      o = arguments[i];
      for (e in o) t[e] = o[e];
    }
    return t;
  }
  function i(t, e) {
    var i = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
    var n = i.call(arguments, 2);
    return function() {
      return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
    };
  }
  function n(t) {
    return (t._gmap_id = t._gmap_id || ++re), t._gmap_id;
  }
  function o(t, e, i) {
    var n, o, s, a;
    return (
      (a = function() {
        (n = !1), o && (s.apply(i, o), (o = !1));
      }),
      (s = function() {
        n ? (o = arguments) : (t.apply(i, arguments), setTimeout(a, e), (n = !0));
      })
    );
  }
  function s(t, e, i) {
    var n = e[1],
      o = e[0],
      s = n - o;
    return t === n && i ? t : ((((t - o) % s) + s) % s) + o;
  }
  function a() {
    return !1;
  }
  function r(t, e) {
    var i = Math.pow(10, void 0 === e ? 6 : e);
    return Math.round(t * i) / i;
  }
  function h(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
  }
  function l(t) {
    return h(t).split(/\s+/);
  }
  function u(t, e) {
    t.hasOwnProperty('options') || (t.options = t.options ? ae(t.options) : {});
    for (var i in e) t.options[i] = e[i];
    return t.options;
  }
  function c(t, e, i) {
    var n = [];
    for (var o in t)
      n.push(encodeURIComponent(i ? o.toUpperCase() : o) + '=' + encodeURIComponent(t[o]));
    return (e && -1 !== e.indexOf('?') ? '&' : '?') + n.join('&');
  }
  function d(t, e) {
    return t.replace(he, function(t, i) {
      var n = e[i];
      if (void 0 === n) throw new Error('No value provided for variable ' + t);
      return 'function' == typeof n && (n = n(e)), n;
    });
  }
  function _(t, e) {
    for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
    return -1;
  }
  function p(t) {
    return window['webkit' + t] || window['moz' + t] || window['ms' + t];
  }
  function m(t) {
    var e = +new Date(),
      i = Math.max(0, 16 - (e - ce));
    return (ce = e + i), window.setTimeout(t, i);
  }
  function f(t, e, n) {
    if (!n || de !== m) return de.call(window, i(t, e));
    t.call(e);
  }
  function g(t) {
    t && _e.call(window, t);
  }
  function v() {}
  function y(t) {
    if ('undefined' != typeof L && GMap && GMap.Mixin) {
      t = le(t) ? t : [t];
      for (var e = 0; e < t.length; e++)
        t[e] === GMap.Mixin.Events &&
          console.warn(
            'Deprecated include of GMap.Mixin.Events: this property will be removed in future releases, please inherit from GMap.Evented instead.',
            new Error().stack
          );
    }
  }
  function x(t, e, i) {
    (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
  }
  function w(t, e, i) {
    return t instanceof x
      ? t
      : le(t)
      ? new x(t[0], t[1])
      : void 0 === t || null === t
      ? t
      : 'object' == typeof t && 'x' in t && 'y' in t
      ? new x(t.x, t.y)
      : new x(t, e, i);
  }
  function b(t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
  }
  function P(t, e) {
    return !t || t instanceof b ? t : new b(t, e);
  }
  function T(t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
  }
  function M(t, e) {
    return t instanceof T ? t : new T(t, e);
  }
  function C(t, e, i) {
    if (isNaN(t) || isNaN(e)) throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
    (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
  }
  function A(t, e, i) {
    return t instanceof C
      ? t
      : le(t) && 'object' != typeof t[0]
      ? 3 === t.length
        ? new C(t[0], t[1], t[2])
        : 2 === t.length
        ? new C(t[0], t[1])
        : null
      : void 0 === t || null === t
      ? t
      : 'object' == typeof t && 'lat' in t
      ? new C(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
      : void 0 === e
      ? null
      : new C(t, e, i);
  }
  function z(t, e, i, n) {
    if (le(t)) return (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), void (this._d = t[3]);
    (this._a = t), (this._b = e), (this._c = i), (this._d = n);
  }
  function S(t, e, i, n) {
    return new z(t, e, i, n);
  }
  function k(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
  }
  function E(t, e) {
    var i,
      n,
      o,
      s,
      a,
      r,
      h = '';
    for (i = 0, o = t.length; i < o; i++) {
      for (n = 0, s = (a = t[i]).length; n < s; n++)
        (r = a[n]), (h += (n ? 'L' : 'M') + r.x + ' ' + r.y);
      h += e ? (ni ? 'z' : 'x') : '';
    }
    return h || 'M0 0';
  }
  function B(t) {
    return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
  }
  function Z(t, e, i, n) {
    return (
      'touchstart' === e
        ? O(t, i, n)
        : 'touchmove' === e
        ? H(t, i, n)
        : 'touchend' === e && W(t, i, n),
      this
    );
  }
  function I(t, e, i) {
    var n = t['_gmap_' + e + i];
    return (
      'touchstart' === e
        ? t.removeEventListener(ai, n, !1)
        : 'touchmove' === e
        ? t.removeEventListener(ri, n, !1)
        : 'touchend' === e && (t.removeEventListener(hi, n, !1), t.removeEventListener(li, n, !1)),
      this
    );
  }
  function O(t, e, n) {
    var o = i(function(t) {
      if (
        'mouse' !== t.pointerType &&
        t.MSPOINTER_TYPE_MOUSE &&
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE
      ) {
        if (!(ui.indexOf(t.target.tagName) < 0)) return;
        Q(t);
      }
      N(t, e);
    });
    (t['_gmap_touchstart' + n] = o),
      t.addEventListener(ai, o, !1),
      di ||
        (document.documentElement.addEventListener(ai, R, !0),
        document.documentElement.addEventListener(ri, j, !0),
        document.documentElement.addEventListener(hi, D, !0),
        document.documentElement.addEventListener(li, D, !0),
        (di = !0));
  }
  function R(t) {
    (ci[t.pointerId] = t), _i++;
  }
  function j(t) {
    ci[t.pointerId] && (ci[t.pointerId] = t);
  }
  function D(t) {
    delete ci[t.pointerId], _i--;
  }
  function N(t, e) {
    t.touches = [];
    for (var i in ci) t.touches.push(ci[i]);
    (t.changedTouches = [t]), e(t);
  }
  function H(t, e, i) {
    var n = function(t) {
      ((t.pointerType !== t.MSPOINTER_TYPE_MOUSE && 'mouse' !== t.pointerType) ||
        0 !== t.buttons) &&
        N(t, e);
    };
    (t['_gmap_touchmove' + i] = n), t.addEventListener(ri, n, !1);
  }
  function W(t, e, i) {
    var n = function(t) {
      N(t, e);
    };
    (t['_gmap_touchend' + i] = n), t.addEventListener(hi, n, !1), t.addEventListener(li, n, !1);
  }
  function F(t, e, i) {
    function n(t) {
      var e;
      if (Ke) {
        if (!Se || 'mouse' === t.pointerType) return;
        e = _i;
      } else e = t.touches.length;
      if (!(e > 1)) {
        var i = Date.now(),
          n = i - (s || i);
        (a = t.touches ? t.touches[0] : t), (r = n > 0 && n <= h), (s = i);
      }
    }
    function o(t) {
      if (r && !a.cancelBubble) {
        if (Ke) {
          if (!Se || 'mouse' === t.pointerType) return;
          var i,
            n,
            o = {};
          for (n in a) (i = a[n]), (o[n] = i && i.bind ? i.bind(a) : i);
          a = o;
        }
        (a.type = 'dblclick'), e(a), (s = null);
      }
    }
    var s,
      a,
      r = !1,
      h = 250;
    return (
      (t[fi + pi + i] = n),
      (t[fi + mi + i] = o),
      (t[fi + 'dblclick' + i] = e),
      t.addEventListener(pi, n, !1),
      t.addEventListener(mi, o, !1),
      t.addEventListener('dblclick', e, !1),
      this
    );
  }
  function G(t, e) {
    var i = t[fi + pi + e],
      n = t[fi + mi + e],
      o = t[fi + 'dblclick' + e];
    return (
      t.removeEventListener(pi, i, !1),
      t.removeEventListener(mi, n, !1),
      Se || t.removeEventListener('dblclick', o, !1),
      this
    );
  }
  function U(t, e, i, n) {
    if ('object' == typeof e) for (var o in e) q(t, o, e[o], i);
    else for (var s = 0, a = (e = l(e)).length; s < a; s++) q(t, e[s], i, n);
    return this;
  }
  function V(t, e, i, n) {
    if ('object' == typeof e) for (var o in e) X(t, o, e[o], i);
    else if (e) for (var s = 0, a = (e = l(e)).length; s < a; s++) X(t, e[s], i, n);
    else {
      for (var r in t[gi]) X(t, r, t[gi][r]);
      delete t[gi];
    }
    return this;
  }
  function q(t, e, i, o) {
    var s = e + n(i) + (o ? '_' + n(o) : '');
    if (t[gi] && t[gi][s]) return this;
    var a = function(e) {
        return i.call(o || t, e || window.event);
      },
      r = a;
    Ke && 0 === e.indexOf('touch')
      ? Z(t, e, a, s)
      : !Qe || 'dblclick' !== e || !F || (Ke && Re)
      ? 'addEventListener' in t
        ? 'mousewheel' === e
          ? t.addEventListener('onwheel' in t ? 'wheel' : 'mousewheel', a, !1)
          : 'mouseenter' === e || 'mouseleave' === e
          ? ((a = function(e) {
              (e = e || window.event), ot(t, e) && r(e);
            }),
            t.addEventListener('mouseenter' === e ? 'mouseover' : 'mouseout', a, !1))
          : ('click' === e &&
              Ee &&
              (a = function(t) {
                st(t, r);
              }),
            t.addEventListener(e, a, !1))
        : 'attachEvent' in t && t.attachEvent('on' + e, a)
      : F(t, a, s),
      (t[gi] = t[gi] || {}),
      (t[gi][s] = a);
  }
  function X(t, e, i, o) {
    var s = e + n(i) + (o ? '_' + n(o) : ''),
      a = t[gi] && t[gi][s];
    if (!a) return this;
    Ke && 0 === e.indexOf('touch')
      ? I(t, e, s)
      : !Qe || 'dblclick' !== e || !G || (Ke && Re)
      ? 'removeEventListener' in t
        ? 'mousewheel' === e
          ? t.removeEventListener('onwheel' in t ? 'wheel' : 'mousewheel', a, !1)
          : t.removeEventListener(
              'mouseenter' === e ? 'mouseover' : 'mouseleave' === e ? 'mouseout' : e,
              a,
              !1
            )
        : 'detachEvent' in t && t.detachEvent('on' + e, a)
      : G(t, s),
      (t[gi][s] = null);
  }
  function Y(t) {
    return (
      t.stopPropagation
        ? t.stopPropagation()
        : t.originalEvent
        ? (t.originalEvent._stopped = !0)
        : (t.cancelBubble = !0),
      nt(t),
      this
    );
  }
  function J(t) {
    return q(t, 'mousewheel', Y), this;
  }
  function K(t) {
    return U(t, 'mousedown touchstart dblclick', Y), q(t, 'click', it), this;
  }
  function Q(t) {
    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
  }
  function $(t) {
    return Q(t), Y(t), this;
  }
  function tt(t, e) {
    if (!e) return new x(t.clientX, t.clientY);
    var i = e.getBoundingClientRect(),
      n = i.width / e.offsetWidth || 1,
      o = i.height / e.offsetHeight || 1;
    return new x(t.clientX / n - i.left - e.clientLeft, t.clientY / o - i.top - e.clientTop);
  }
  function et(t) {
    return Se
      ? t.wheelDeltaY / 2
      : t.deltaY && 0 === t.deltaMode
      ? -t.deltaY / vi
      : t.deltaY && 1 === t.deltaMode
      ? 20 * -t.deltaY
      : t.deltaY && 2 === t.deltaMode
      ? 60 * -t.deltaY
      : t.deltaX || t.deltaZ
      ? 0
      : t.wheelDelta
      ? (t.wheelDeltaY || t.wheelDelta) / 2
      : t.detail && Math.abs(t.detail) < 32765
      ? 20 * -t.detail
      : t.detail
      ? (t.detail / -32765) * 60
      : 0;
  }
  function it(t) {
    yi[t.type] = !0;
  }
  function nt(t) {
    var e = yi[t.type];
    return (yi[t.type] = !1), e;
  }
  function ot(t, e) {
    var i = e.relatedTarget;
    if (!i) return !0;
    try {
      for (; i && i !== t; ) i = i.parentNode;
    } catch (t) {
      return !1;
    }
    return i !== t;
  }
  function st(t, e) {
    var i = t.timeStamp || (t.originalEvent && t.originalEvent.timeStamp),
      n = we && i - we;
    (n && n > 100 && n < 500) || (t.target._simulatedClick && !t._simulated)
      ? $(t)
      : ((we = i), e(t));
  }
  function at(t) {
    return 'string' == typeof t ? document.getElementById(t) : t;
  }
  function rt(t, e) {
    var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
    if ((!i || 'auto' === i) && document.defaultView) {
      var n = document.defaultView.getComputedStyle(t, null);
      i = n ? n[e] : null;
    }
    return 'auto' === i ? null : i;
  }
  function ht(t, e, i) {
    var n = document.createElement(t);
    return (n.className = e || ''), i && i.appendChild(n), n;
  }
  function lt(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function ut(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function ct(t) {
    var e = t.parentNode;
    e.lastChild !== t && e.appendChild(t);
  }
  function dt(t) {
    var e = t.parentNode;
    e.firstChild !== t && e.insertBefore(t, e.firstChild);
  }
  function _t(t, e) {
    if (void 0 !== t.classList) return t.classList.contains(e);
    var i = gt(t);
    return i.length > 0 && new RegExp('(^|\\s)' + e + '(\\s|$)').test(i);
  }
  function pt(t, e) {
    if (void 0 !== t.classList)
      for (var i = l(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
    else if (!_t(t, e)) {
      var s = gt(t);
      ft(t, (s ? s + ' ' : '') + e);
    }
  }
  function mt(t, e) {
    void 0 !== t.classList
      ? t.classList.remove(e)
      : ft(t, h((' ' + gt(t) + ' ').replace(' ' + e + ' ', ' ')));
  }
  function ft(t, e) {
    void 0 === t.className.baseVal ? (t.className = e) : (t.className.baseVal = e);
  }
  function gt(t) {
    return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }
  function vt(t, e) {
    'opacity' in t.style ? (t.style.opacity = e) : 'filter' in t.style && yt(t, e);
  }
  function yt(t, e) {
    var i = !1,
      n = 'DXImageTransform.Microsoft.Alpha';
    try {
      i = t.filters.item(n);
    } catch (t) {
      if (1 === e) return;
    }
    (e = Math.round(100 * e)),
      i
        ? ((i.Enabled = 100 !== e), (i.Opacity = e))
        : (t.style.filter += ' progid:' + n + '(opacity=' + e + ')');
  }
  function xt(t) {
    for (var e = document.documentElement.style, i = 0; i < t.length; i++)
      if (t[i] in e) return t[i];
    return !1;
  }
  function wt(t, e, i) {
    var n = e || new x(0, 0);
    t.style[wi] =
      (Fe
        ? 'translate(' + n.x + 'px,' + n.y + 'px)'
        : 'translate3d(' + n.x + 'px,' + n.y + 'px,0)') + (i ? ' scale(' + i + ')' : '');
  }
  function bt(t, e) {
    (t._gmap_pos = e), Ve ? wt(t, e) : ((t.style.left = e.x + 'px'), (t.style.top = e.y + 'px'));
  }
  function Lt(t) {
    return t._gmap_pos || new x(0, 0);
  }
  function Pt() {
    U(window, 'dragstart', Q);
  }
  function Tt() {
    V(window, 'dragstart', Q);
  }
  function Mt(t) {
    for (; -1 === t.tabIndex; ) t = t.parentNode;
    t.style &&
      (Ct(),
      (Ti = t),
      (Mi = t.style.outline),
      (t.style.outline = 'none'),
      U(window, 'keydown', Ct));
  }
  function Ct() {
    Ti && ((Ti.style.outline = Mi), (Ti = void 0), (Mi = void 0), V(window, 'keydown', Ct));
  }
  function At(t, e) {
    if (!e || !t.length) return t.slice();
    var i = e * e;
    return (t = Et(t, i)), (t = St(t, i));
  }
  function zt(t, e, i) {
    return Math.sqrt(Rt(t, e, i, !0));
  }
  function St(t, e) {
    var i = t.length,
      n = new (typeof Uint8Array != void 0 + '' ? Uint8Array : Array)(i);
    (n[0] = n[i - 1] = 1), kt(t, n, e, 0, i - 1);
    var o,
      s = [];
    for (o = 0; o < i; o++) n[o] && s.push(t[o]);
    return s;
  }
  function kt(t, e, i, n, o) {
    var s,
      a,
      r,
      h = 0;
    for (a = n + 1; a <= o - 1; a++) (r = Rt(t[a], t[n], t[o], !0)) > h && ((s = a), (h = r));
    h > i && ((e[s] = 1), kt(t, e, i, n, s), kt(t, e, i, s, o));
  }
  function Et(t, e) {
    for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
      Ot(t[n], t[o]) > e && (i.push(t[n]), (o = n));
    return o < s - 1 && i.push(t[s - 1]), i;
  }
  function Bt(t, e, i, n, o) {
    var s,
      a,
      r,
      h = n ? Ri : It(t, i),
      l = It(e, i);
    for (Ri = l; ; ) {
      if (!(h | l)) return [t, e];
      if (h & l) return !1;
      (r = It((a = Zt(t, e, (s = h || l), i, o)), i)),
        s === h ? ((t = a), (h = r)) : ((e = a), (l = r));
    }
  }
  function Zt(t, e, i, n, o) {
    var s,
      a,
      r = e.x - t.x,
      h = e.y - t.y,
      l = n.min,
      u = n.max;
    return (
      8 & i
        ? ((s = t.x + (r * (u.y - t.y)) / h), (a = u.y))
        : 4 & i
        ? ((s = t.x + (r * (l.y - t.y)) / h), (a = l.y))
        : 2 & i
        ? ((s = u.x), (a = t.y + (h * (u.x - t.x)) / r))
        : 1 & i && ((s = l.x), (a = t.y + (h * (l.x - t.x)) / r)),
      new x(s, a, o)
    );
  }
  function It(t, e) {
    var i = 0;
    return (
      t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
      t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
      i
    );
  }
  function Ot(t, e) {
    var i = e.x - t.x,
      n = e.y - t.y;
    return i * i + n * n;
  }
  function Rt(t, e, i, n) {
    var o,
      s = e.x,
      a = e.y,
      r = i.x - s,
      h = i.y - a,
      l = r * r + h * h;
    return (
      l > 0 &&
        ((o = ((t.x - s) * r + (t.y - a) * h) / l) > 1
          ? ((s = i.x), (a = i.y))
          : o > 0 && ((s += r * o), (a += h * o))),
      (r = t.x - s),
      (h = t.y - a),
      n ? r * r + h * h : new x(s, a)
    );
  }
  function jt(t) {
    return !le(t[0]) || ('object' != typeof t[0][0] && void 0 !== t[0][0]);
  }
  function Dt(t) {
    return console.warn('Deprecated use of _flat, please use GMap.LineUtil.isFlat instead.'), jt(t);
  }
  function Nt(t, e, i) {
    var n,
      o,
      s,
      a,
      r,
      h,
      l,
      u,
      c,
      d = [1, 4, 2, 8];
    for (o = 0, l = t.length; o < l; o++) t[o]._code = It(t[o], e);
    for (a = 0; a < 4; a++) {
      for (u = d[a], n = [], o = 0, s = (l = t.length) - 1; o < l; s = o++)
        (r = t[o]),
          (h = t[s]),
          r._code & u
            ? h._code & u || (((c = Zt(h, r, u, e, i))._code = It(c, e)), n.push(c))
            : (h._code & u && (((c = Zt(h, r, u, e, i))._code = It(c, e)), n.push(c)), n.push(r));
      t = n;
    }
    return t;
  }
  function Ht(t, e) {
    var i,
      n,
      o,
      s,
      a = 'Feature' === t.type ? t.geometry : t,
      r = a ? a.coordinates : null,
      h = [],
      l = e && e.pointToLayer,
      u = (e && e.coordsToLatLng) || Wt;
    if (!r && !a) return null;
    switch (a.type) {
      case 'Point':
        return (i = u(r)), l ? l(t, i) : new on(i);
      case 'MultiPoint':
        for (o = 0, s = r.length; o < s; o++) (i = u(r[o])), h.push(l ? l(t, i) : new on(i));
        return new $i(h);
      case 'LineString':
      case 'MultiLineString':
        return (n = Ft(r, 'LineString' === a.type ? 0 : 1, u)), new hn(n, e);
      case 'Polygon':
      case 'MultiPolygon':
        return (n = Ft(r, 'Polygon' === a.type ? 1 : 2, u)), new ln(n, e);
      case 'GeometryCollection':
        for (o = 0, s = a.geometries.length; o < s; o++) {
          var c = Ht({ geometry: a.geometries[o], type: 'Feature', properties: t.properties }, e);
          c && h.push(c);
        }
        return new $i(h);
      default:
        throw new Error('Invalid GeoJSON object.');
    }
  }
  function Wt(t) {
    return new C(t[1], t[0], t[2]);
  }
  function Ft(t, e, i) {
    for (var n, o = [], s = 0, a = t.length; s < a; s++)
      (n = e ? Ft(t[s], e - 1, i) : (i || Wt)(t[s])), o.push(n);
    return o;
  }
  function Gt(t, e) {
    return (
      (e = 'number' == typeof e ? e : 6),
      void 0 !== t.alt ? [r(t.lng, e), r(t.lat, e), r(t.alt, e)] : [r(t.lng, e), r(t.lat, e)]
    );
  }
  function Ut(t, e, i, n) {
    for (var o = [], s = 0, a = t.length; s < a; s++)
      o.push(e ? Ut(t[s], e - 1, i, n) : Gt(t[s], n));
    return !e && i && o.push(o[0]), o;
  }
  function Vt(t, i) {
    return t.feature ? e({}, t.feature, { geometry: i }) : qt(i);
  }
  function qt(t) {
    return 'Feature' === t.type || 'FeatureCollection' === t.type
      ? t
      : { type: 'Feature', properties: {}, geometry: t };
  }
  function Xt(t, e) {
    return new un(t, e);
  }
  function Yt(t, e) {
    return new xn(t, e);
  }
  function Jt(t) {
    return ii ? new Ln(t) : null;
  }
  function Kt(t) {
    return ni || oi ? new Cn(t) : null;
  }
  function Qt(t) {
    var e = [],
      i = encodeURIComponent;
    for (var n in t) null !== t[n] && e.push(i(n) + '=' + i(t[n]));
    return e.join('&');
  }
  function $t(t) {
    if (Ae) {
      var e = new ActiveXObject('Microsoft.XMLDOM');
      return e.loadXML(t), e;
    }
    return new DOMParser().parseFromString(t, 'text/xml');
  }
  function te() {}
  function ee(t) {
    return JSON.parse(t);
  }
  function ie(t) {
    return t.type && 'jsonp' == t.type ? new Dn(t) : new Nn(t);
  }
  function ne() {}
  function oe(t, e) {
    return null !== t && null !== e && -1 !== t.indexOf(e, t.length - e.length);
  }
  var se = Object.freeze;
  Object.freeze = function(t) {
    return t;
  };
  var ae =
      Object.create ||
      (function() {
        function t() {}
        return function(e) {
          return (t.prototype = e), new t();
        };
      })(),
    re = 0,
    he = /\{ *([\w_-]+) *\}/g,
    le =
      Array.isArray ||
      function(t) {
        return '[object Array]' === Object.prototype.toString.call(t);
      },
    ue = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
    ce = 0,
    de = window.requestAnimationFrame || p('RequestAnimationFrame') || m,
    _e =
      window.cancelAnimationFrame ||
      p('CancelAnimationFrame') ||
      p('CancelRequestAnimationFrame') ||
      function(t) {
        window.clearTimeout(t);
      },
    pe = (Object.freeze || Object)({
      freeze: se,
      extend: e,
      create: ae,
      bind: i,
      lastId: re,
      stamp: n,
      throttle: o,
      wrapNum: s,
      falseFn: a,
      formatNum: r,
      trim: h,
      splitWords: l,
      setOptions: u,
      getParamString: c,
      template: d,
      isArray: le,
      indexOf: _,
      emptyImageUrl: ue,
      requestFn: de,
      cancelFn: _e,
      requestAnimFrame: f,
      cancelAnimFrame: g,
    });
  (v.extend = function(t) {
    var i = function() {
        this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      },
      n = (i.__super__ = this.prototype),
      o = ae(n);
    (o.constructor = i), (i.prototype = o);
    for (var s in this)
      this.hasOwnProperty(s) && 'prototype' !== s && '__super__' !== s && (i[s] = this[s]);
    return (
      t.statics && (e(i, t.statics), delete t.statics),
      t.includes && (y(t.includes), e.apply(null, [o].concat(t.includes)), delete t.includes),
      o.options && (t.options = e(ae(o.options), t.options)),
      e(o, t),
      (o._initHooks = []),
      (o.callInitHooks = function() {
        if (!this._initHooksCalled) {
          n.callInitHooks && n.callInitHooks.call(this), (this._initHooksCalled = !0);
          for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this);
        }
      }),
      i
    );
  }),
    (v.include = function(t) {
      return e(this.prototype, t), this;
    }),
    (v.mergeOptions = function(t) {
      return e(this.prototype.options, t), this;
    }),
    (v.addInitHook = function(t) {
      var e = Array.prototype.slice.call(arguments, 1),
        i =
          'function' == typeof t
            ? t
            : function() {
                this[t].apply(this, e);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(i),
        this
      );
    });
  var me = {
    on: function(t, e, i) {
      if ('object' == typeof t) for (var n in t) this._on(n, t[n], e);
      else for (var o = 0, s = (t = l(t)).length; o < s; o++) this._on(t[o], e, i);
      return this;
    },
    off: function(t, e, i) {
      if (t)
        if ('object' == typeof t) for (var n in t) this._off(n, t[n], e);
        else for (var o = 0, s = (t = l(t)).length; o < s; o++) this._off(t[o], e, i);
      else delete this._events;
      return this;
    },
    _on: function(t, e, i) {
      this._events = this._events || {};
      var n = this._events[t];
      n || ((n = []), (this._events[t] = n)), i === this && (i = void 0);
      for (var o = { fn: e, ctx: i }, s = n, a = 0, r = s.length; a < r; a++)
        if (s[a].fn === e && s[a].ctx === i) return;
      s.push(o);
    },
    _off: function(t, e, i) {
      var n, o, s;
      if (this._events && (n = this._events[t]))
        if (e) {
          if ((i === this && (i = void 0), n))
            for (o = 0, s = n.length; o < s; o++) {
              var r = n[o];
              if (r.ctx === i && r.fn === e)
                return (
                  (r.fn = a),
                  this._firingCount && (this._events[t] = n = n.slice()),
                  void n.splice(o, 1)
                );
            }
        } else {
          for (o = 0, s = n.length; o < s; o++) n[o].fn = a;
          delete this._events[t];
        }
    },
    fire: function(t, i, n) {
      if (!this.listens(t, n)) return this;
      var o = e({}, i, { type: t, target: this, sourceTarget: (i && i.sourceTarget) || this });
      if (this._events) {
        var s = this._events[t];
        if (s) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var a = 0, r = s.length; a < r; a++) {
            var h = s[a];
            h.fn.call(h.ctx || this, o);
          }
          this._firingCount--;
        }
      }
      return n && this._propagateEvent(o), this;
    },
    listens: function(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) return !0;
      if (e) for (var n in this._eventParents) if (this._eventParents[n].listens(t, e)) return !0;
      return !1;
    },
    once: function(t, e, n) {
      if ('object' == typeof t) {
        for (var o in t) this.once(o, t[o], e);
        return this;
      }
      var s = i(function() {
        this.off(t, e, n).off(t, s, n);
      }, this);
      return this.on(t, e, n).on(t, s, n);
    },
    addEventParent: function(t) {
      return (this._eventParents = this._eventParents || {}), (this._eventParents[n(t)] = t), this;
    },
    removeEventParent: function(t) {
      return this._eventParents && delete this._eventParents[n(t)], this;
    },
    _propagateEvent: function(t) {
      for (var i in this._eventParents)
        this._eventParents[i].fire(t.type, e({ layer: t.target, propagatedFrom: t.target }, t), !0);
    },
  };
  (me.addEventListener = me.on),
    (me.removeEventListener = me.clearAllEventListeners = me.off),
    (me.addOneTimeEventListener = me.once),
    (me.fireEvent = me.fire),
    (me.hasEventListeners = me.listens);
  var fe = v.extend(me),
    ge =
      Math.trunc ||
      function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
  (x.prototype = {
    clone: function() {
      return new x(this.x, this.y);
    },
    add: function(t) {
      return this.clone()._add(w(t));
    },
    _add: function(t) {
      return (this.x += t.x), (this.y += t.y), this;
    },
    subtract: function(t) {
      return this.clone()._subtract(w(t));
    },
    _subtract: function(t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    },
    divideBy: function(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function(t) {
      return (this.x /= t), (this.y /= t), this;
    },
    multiplyBy: function(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function(t) {
      return (this.x *= t), (this.y *= t), this;
    },
    scaleBy: function(t) {
      return new x(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function(t) {
      return new x(this.x / t.x, this.y / t.y);
    },
    round: function() {
      return this.clone()._round();
    },
    _round: function() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function() {
      return this.clone()._floor();
    },
    _floor: function() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function() {
      return this.clone()._ceil();
    },
    _ceil: function() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    trunc: function() {
      return this.clone()._trunc();
    },
    _trunc: function() {
      return (this.x = ge(this.x)), (this.y = ge(this.y)), this;
    },
    distanceTo: function(t) {
      var e = (t = w(t)).x - this.x,
        i = t.y - this.y;
      return Math.sqrt(e * e + i * i);
    },
    equals: function(t) {
      return (t = w(t)).x === this.x && t.y === this.y;
    },
    contains: function(t) {
      return (t = w(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function() {
      return 'Point(' + r(this.x) + ', ' + r(this.y) + ')';
    },
  }),
    (b.prototype = {
      extend: function(t) {
        return (
          (t = w(t)),
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y)))
            : ((this.min = t.clone()), (this.max = t.clone())),
          this
        );
      },
      getCenter: function(t) {
        return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
      },
      getBottomLeft: function() {
        return new x(this.min.x, this.max.y);
      },
      getTopRight: function() {
        return new x(this.max.x, this.min.y);
      },
      getTopLeft: function() {
        return this.min;
      },
      getBottomRight: function() {
        return this.max;
      },
      getSize: function() {
        return this.max.subtract(this.min);
      },
      contains: function(t) {
        var e, i;
        return (
          (t = 'number' == typeof t[0] || t instanceof x ? w(t) : P(t)) instanceof b
            ? ((e = t.min), (i = t.max))
            : (e = i = t),
          e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        );
      },
      intersects: function(t) {
        t = P(t);
        var e = this.min,
          i = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= e.x && n.x <= i.x,
          a = o.y >= e.y && n.y <= i.y;
        return s && a;
      },
      overlaps: function(t) {
        t = P(t);
        var e = this.min,
          i = this.max,
          n = t.min,
          o = t.max,
          s = o.x > e.x && n.x < i.x,
          a = o.y > e.y && n.y < i.y;
        return s && a;
      },
      isValid: function() {
        return !(!this.min || !this.max);
      },
    }),
    (T.prototype = {
      extend: function(t) {
        var e,
          i,
          n = this._southWest,
          o = this._northEast;
        if (t instanceof C) (e = t), (i = t);
        else {
          if (!(t instanceof T)) return t ? this.extend(A(t) || M(t)) : this;
          if (((e = t._southWest), (i = t._northEast), !e || !i)) return this;
        }
        return (
          n || o
            ? ((n.lat = Math.min(e.lat, n.lat)),
              (n.lng = Math.min(e.lng, n.lng)),
              (o.lat = Math.max(i.lat, o.lat)),
              (o.lng = Math.max(i.lng, o.lng)))
            : ((this._southWest = new C(e.lat, e.lng)), (this._northEast = new C(i.lat, i.lng))),
          this
        );
      },
      pad: function(t) {
        var e = this._southWest,
          i = this._northEast,
          n = Math.abs(e.lat - i.lat) * t,
          o = Math.abs(e.lng - i.lng) * t;
        return new T(new C(e.lat - n, e.lng - o), new C(i.lat + n, i.lng + o));
      },
      getCenter: function() {
        return new C(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function() {
        return this._southWest;
      },
      getNorthEast: function() {
        return this._northEast;
      },
      getNorthWest: function() {
        return new C(this.getNorth(), this.getWest());
      },
      getSouthEast: function() {
        return new C(this.getSouth(), this.getEast());
      },
      getWest: function() {
        return this._southWest.lng;
      },
      getSouth: function() {
        return this._southWest.lat;
      },
      getEast: function() {
        return this._northEast.lng;
      },
      getNorth: function() {
        return this._northEast.lat;
      },
      contains: function(t) {
        t = 'number' == typeof t[0] || t instanceof C || 'lat' in t ? A(t) : M(t);
        var e,
          i,
          n = this._southWest,
          o = this._northEast;
        return (
          t instanceof T ? ((e = t.getSouthWest()), (i = t.getNorthEast())) : (e = i = t),
          e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        );
      },
      intersects: function(t) {
        t = M(t);
        var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= e.lat && n.lat <= i.lat,
          a = o.lng >= e.lng && n.lng <= i.lng;
        return s && a;
      },
      overlaps: function(t) {
        t = M(t);
        var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > e.lat && n.lat < i.lat,
          a = o.lng > e.lng && n.lng < i.lng;
        return s && a;
      },
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
      },
      equals: function(t, e) {
        return (
          !!t &&
          ((t = M(t)),
          this._southWest.equals(t.getSouthWest(), e) &&
            this._northEast.equals(t.getNorthEast(), e))
        );
      },
      isValid: function() {
        return !(!this._southWest || !this._northEast);
      },
    }),
    (C.prototype = {
      equals: function(t, e) {
        return (
          !!t &&
          ((t = A(t)),
          Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
            (void 0 === e ? 1e-9 : e))
        );
      },
      toString: function(t) {
        return 'LatLng(' + r(this.lat, t) + ', ' + r(this.lng, t) + ')';
      },
      distanceTo: function(t) {
        return ye.distance(this, A(t));
      },
      wrap: function() {
        return ye.wrapLatLng(this);
      },
      toBounds: function(t) {
        var e = (180 * t) / 40075017,
          i = e / Math.cos((Math.PI / 180) * this.lat);
        return M([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
      },
      clone: function() {
        return new C(this.lat, this.lng, this.alt);
      },
    });
  var ve = {
      latLngToPoint: function(t, e) {
        var i = this.projection.project(t),
          n = this.scale(e);
        return this.transformation._transform(i, n);
      },
      pointToLatLng: function(t, e) {
        var i = this.scale(e),
          n = this.transformation.untransform(t, i);
        return this.projection.unproject(n);
      },
      project: function(t) {
        return this.projection.project(t);
      },
      unproject: function(t) {
        return this.projection.unproject(t);
      },
      scale: function(t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function(t) {
        if (this.infinite) return null;
        var e = this.projection.bounds,
          i = this.scale(t);
        return new b(
          this.transformation.transform(e.min, i),
          this.transformation.transform(e.max, i)
        );
      },
      infinite: !1,
      wrapLatLng: function(t) {
        var e = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
        return new C(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
      },
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(),
          i = this.wrapLatLng(e),
          n = e.lat - i.lat,
          o = e.lng - i.lng;
        if (0 === n && 0 === o) return t;
        var s = t.getSouthWest(),
          a = t.getNorthEast();
        return new T(new C(s.lat - n, s.lng - o), new C(a.lat - n, a.lng - o));
      },
    },
    ye = e({}, ve, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function(t, e) {
        var i = Math.PI / 180,
          n = t.lat * i,
          o = e.lat * i,
          s = Math.sin(((e.lat - t.lat) * i) / 2),
          a = Math.sin(((e.lng - t.lng) * i) / 2),
          r = s * s + Math.cos(n) * Math.cos(o) * a * a,
          h = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
        return this.R * h;
      },
    }),
    xe = {
      R: 6378137,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180,
          i = this.MAX_LATITUDE,
          n = Math.max(Math.min(i, t.lat), -i),
          o = Math.sin(n * e);
        return new x(this.R * t.lng * e, (this.R * Math.log((1 + o) / (1 - o))) / 2);
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new C((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, (t.x * e) / this.R);
      },
      bounds: (function() {
        var t = 6378137 * Math.PI;
        return new b([-t, -t], [t, t]);
      })(),
    };
  z.prototype = {
    transform: function(t, e) {
      return this._transform(t.clone(), e);
    },
    _transform: function(t, e) {
      return (
        (e = e || 1),
        (t.x = e * (this._a * t.x + this._b)),
        (t.y = e * (this._c * t.y + this._d)),
        t
      );
    },
    untransform: function(t, e) {
      return (e = e || 1), new x((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
    },
  };
  var we,
    be,
    Le,
    Pe,
    Te = e({}, ye, {
      code: 'EPSG:3857',
      projection: xe,
      transformation: (function() {
        var t = 0.5 / (Math.PI * xe.R);
        return S(t, 0.5, -t, 0.5);
      })(),
    }),
    Me = e({}, Te, { code: 'EPSG:900913' }),
    Ce = document.documentElement.style,
    Ae = 'ActiveXObject' in window,
    ze = Ae && !document.addEventListener,
    Se = 'msLaunchUri' in navigator && !('documentMode' in document),
    ke = B('webkit'),
    Ee = B('android'),
    Be = B('android 2') || B('android 3'),
    Ze = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    Ie = Ee && B('Google') && Ze < 537 && !('AudioNode' in window),
    Oe = !!window.opera,
    Re = B('chrome'),
    je = B('gecko') && !ke && !Oe && !Ae,
    De = !Re && B('safari'),
    Ne = B('phantom'),
    He = 'OTransition' in Ce,
    We = 0 === navigator.platform.indexOf('Win'),
    Fe = Ae && 'transition' in Ce,
    Ge = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !Be,
    Ue = 'MozPerspective' in Ce,
    Ve = !window.L_DISABLE_3D && (Fe || Ge || Ue) && !He && !Ne,
    qe = 'undefined' != typeof orientation || B('mobile'),
    Xe = qe && ke,
    Ye = qe && Ge,
    Je = !window.PointerEvent && window.MSPointerEvent,
    Ke = !(!window.PointerEvent && !Je),
    Qe =
      !window.L_NO_TOUCH &&
      (Ke ||
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    $e = qe && Oe,
    ti = qe && je,
    ei = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
    ii = !!document.createElement('canvas').getContext,
    ni = !(!document.createElementNS || !k('svg').createSVGRect),
    oi =
      !ni &&
      (function() {
        try {
          var t = document.createElement('div');
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return (e.style.behavior = 'url(#default#VML)'), e && 'object' == typeof e.adj;
        } catch (t) {
          return !1;
        }
      })(),
    si = (Object.freeze || Object)({
      ie: Ae,
      ielt9: ze,
      edge: Se,
      webkit: ke,
      android: Ee,
      android23: Be,
      androidStock: Ie,
      opera: Oe,
      chrome: Re,
      gecko: je,
      safari: De,
      phantom: Ne,
      opera12: He,
      win: We,
      ie3d: Fe,
      webkit3d: Ge,
      gecko3d: Ue,
      any3d: Ve,
      mobile: qe,
      mobileWebkit: Xe,
      mobileWebkit3d: Ye,
      msPointer: Je,
      pointer: Ke,
      touch: Qe,
      mobileOpera: $e,
      mobileGecko: ti,
      retina: ei,
      canvas: ii,
      svg: ni,
      vml: oi,
    }),
    ai = Je ? 'MSPointerDown' : 'pointerdown',
    ri = Je ? 'MSPointerMove' : 'pointermove',
    hi = Je ? 'MSPointerUp' : 'pointerup',
    li = Je ? 'MSPointerCancel' : 'pointercancel',
    ui = ['INPUT', 'SELECT', 'OPTION'],
    ci = {},
    di = !1,
    _i = 0,
    pi = Je ? 'MSPointerDown' : Ke ? 'pointerdown' : 'touchstart',
    mi = Je ? 'MSPointerUp' : Ke ? 'pointerup' : 'touchend',
    fi = '_gmap_',
    gi = '_gmap_events',
    vi = We && Re ? 2 * window.devicePixelRatio : je ? window.devicePixelRatio : 1,
    yi = {},
    xi = (Object.freeze || Object)({
      on: U,
      off: V,
      stopPropagation: Y,
      disableScrollPropagation: J,
      disableClickPropagation: K,
      preventDefault: Q,
      stop: $,
      getMousePosition: tt,
      getWheelDelta: et,
      fakeStop: it,
      skipped: nt,
      isExternalTarget: ot,
      addListener: U,
      removeListener: V,
    }),
    wi = xt(['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
    bi = xt(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']),
    Li = 'webkitTransition' === bi || 'OTransition' === bi ? bi + 'End' : 'transitionend';
  if ('onselectstart' in document)
    (be = function() {
      U(window, 'selectstart', Q);
    }),
      (Le = function() {
        V(window, 'selectstart', Q);
      });
  else {
    var Pi = xt(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
    (be = function() {
      if (Pi) {
        var t = document.documentElement.style;
        (Pe = t[Pi]), (t[Pi] = 'none');
      }
    }),
      (Le = function() {
        Pi && ((document.documentElement.style[Pi] = Pe), (Pe = void 0));
      });
  }
  var Ti,
    Mi,
    Ci = (Object.freeze || Object)({
      TRANSFORM: wi,
      TRANSITION: bi,
      TRANSITION_END: Li,
      get: at,
      getStyle: rt,
      create: ht,
      remove: lt,
      empty: ut,
      toFront: ct,
      toBack: dt,
      hasClass: _t,
      addClass: pt,
      removeClass: mt,
      setClass: ft,
      getClass: gt,
      setOpacity: vt,
      testProp: xt,
      setTransform: wt,
      setPosition: bt,
      getPosition: Lt,
      disableTextSelection: be,
      enableTextSelection: Le,
      disableImageDrag: Pt,
      enableImageDrag: Tt,
      preventOutline: Mt,
      restoreOutline: Ct,
    }),
    Ai = fe.extend({
      run: function(t, e, i, n) {
        this.stop(),
          (this._el = t),
          (this._inProgress = !0),
          (this._duration = i || 0.25),
          (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
          (this._startPos = Lt(t)),
          (this._offset = e.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire('start'),
          this._animate();
      },
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        (this._animId = f(this._animate, this)), this._step();
      },
      _step: function(t) {
        var e = +new Date() - this._startTime,
          i = 1e3 * this._duration;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var i = this._startPos.add(this._offset.multiplyBy(t));
        e && i._round(), bt(this._el, i), this.fire('step');
      },
      _complete: function() {
        g(this._animId), (this._inProgress = !1), this.fire('end');
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      },
    }),
    zi = fe.extend({
      options: {
        crs: Te,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0,
      },
      initialize: function(t, e) {
        (e = u(this, e)),
          this._initContainer(t),
          this._initLayout(),
          (this._onResize = i(this._onResize, this)),
          this._initEvents(),
          e.maxBounds && this.setMaxBounds(e.maxBounds),
          void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
          e.center && void 0 !== e.zoom && this.setView(A(e.center), e.zoom, { reset: !0 }),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this.callInitHooks(),
          (this._zoomAnimated = bi && Ve && !$e && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(), U(this._proxy, Li, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function(t, i, n) {
        return (
          (i = void 0 === i ? this._zoom : this._limitZoom(i)),
          (t = this._limitCenter(A(t), i, this.options.maxBounds)),
          (n = n || {}),
          this._stop(),
          this._loaded &&
          !n.reset &&
          !0 !== n &&
          (void 0 !== n.animate &&
            ((n.zoom = e({ animate: n.animate }, n.zoom)),
            (n.pan = e({ animate: n.animate, duration: n.duration }, n.pan))),
          this._zoom !== i
            ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom)
            : this._tryAnimatedPan(t, n.pan))
            ? (clearTimeout(this._sizeTimer), this)
            : (this._resetView(t, i), this)
        );
      },
      setZoom: function(t, e) {
        return this._loaded
          ? this.setView(this.getCenter(), t, { zoom: e })
          : ((this._zoom = t), this);
      },
      zoomIn: function(t, e) {
        return (t = t || (Ve ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, e);
      },
      zoomOut: function(t, e) {
        return (t = t || (Ve ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, e);
      },
      setZoomAround: function(t, e, i) {
        var n = this.getZoomScale(e),
          o = this.getSize().divideBy(2),
          s = (t instanceof x ? t : this.latLngToContainerPoint(t))
            .subtract(o)
            .multiplyBy(1 - 1 / n),
          a = this.containerPointToLatLng(o.add(s));
        return this.setView(a, e, { zoom: i });
      },
      _getBoundsCenterZoom: function(t, e) {
        (e = e || {}), (t = t.getBounds ? t.getBounds() : M(t));
        var i = w(e.paddingTopLeft || e.padding || [0, 0]),
          n = w(e.paddingBottomRight || e.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, i.add(n));
        if ((o = 'number' == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
          return { center: t.getCenter(), zoom: o };
        var s = n.subtract(i).divideBy(2),
          a = this.project(t.getSouthWest(), o),
          r = this.project(t.getNorthEast(), o);
        return {
          center: this.unproject(
            a
              .add(r)
              .divideBy(2)
              .add(s),
            o
          ),
          zoom: o,
        };
      },
      fitBounds: function(t, e) {
        if (!(t = M(t)).isValid()) throw new Error('Bounds are not valid.');
        var i = this._getBoundsCenterZoom(t, e);
        return this.setView(i.center, i.zoom, e);
      },
      fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      },
      panBy: function(t, e) {
        if (((t = w(t).round()), (e = e || {}), !t.x && !t.y)) return this.fire('moveend');
        if (!0 !== e.animate && !this.getSize().contains(t))
          return (
            this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
            this
          );
        if (
          (this._panAnim ||
            ((this._panAnim = new Ai()),
            this._panAnim.on(
              { step: this._onPanTransitionStep, end: this._onPanTransitionEnd },
              this
            )),
          e.noMoveStart || this.fire('movestart'),
          !1 !== e.animate)
        ) {
          pt(this._mapPane, 'gmap-pan-anim');
          var i = this._getMapPanePos()
            .subtract(t)
            .round();
          this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
        } else this._rawPanBy(t), this.fire('move').fire('moveend');
        return this;
      },
      flyTo: function(t, e, i) {
        function n(t) {
          var e = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
            i = Math.sqrt(e * e + 1) - e;
          return i < 1e-9 ? -18 : Math.log(i);
        }
        function o(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function s(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        function a(t) {
          return o(t) / s(t);
        }
        function r(t) {
          return m * (s(w) / s(w + y * t));
        }
        function h(t) {
          return (m * (s(w) * a(w + y * t) - o(w))) / x;
        }
        function l(t) {
          return 1 - Math.pow(1 - t, 1.5);
        }
        function u() {
          var i = (Date.now() - b) / P,
            n = l(i) * L;
          i <= 1
            ? ((this._flyToFrame = f(u, this)),
              this._move(
                this.unproject(c.add(d.subtract(c).multiplyBy(h(n) / v)), p),
                this.getScaleZoom(m / r(n), p),
                { flyTo: !0 }
              ))
            : this._move(t, e)._moveEnd(!0);
        }
        if (!1 === (i = i || {}).animate || !Ve) return this.setView(t, e, i);
        this._stop();
        var c = this.project(this.getCenter()),
          d = this.project(t),
          _ = this.getSize(),
          p = this._zoom;
        (t = A(t)), (e = void 0 === e ? p : e);
        var m = Math.max(_.x, _.y),
          g = m * this.getZoomScale(p, e),
          v = d.distanceTo(c) || 1,
          y = 1.42,
          x = y * y,
          w = n(0),
          b = Date.now(),
          L = (n(1) - w) / y,
          P = i.duration ? 1e3 * i.duration : 1e3 * L * 0.8;
        return this._moveStart(!0, i.noMoveStart), u.call(this), this;
      },
      flyToBounds: function(t, e) {
        var i = this._getBoundsCenterZoom(t, e);
        return this.flyTo(i.center, i.zoom, e);
      },
      setMaxBounds: function(t) {
        return (t = M(t)).isValid()
          ? (this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
            (this.options.maxBounds = t),
            this._loaded && this._panInsideMaxBounds(),
            this.on('moveend', this._panInsideMaxBounds))
          : ((this.options.maxBounds = null), this.off('moveend', this._panInsideMaxBounds));
      },
      setMinZoom: function(t) {
        var e = this.options.minZoom;
        return (
          (this.options.minZoom = t),
          this._loaded &&
          e !== t &&
          (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
            ? this.setZoom(t)
            : this
        );
      },
      setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return (
          (this.options.maxZoom = t),
          this._loaded &&
          e !== t &&
          (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
            ? this.setZoom(t)
            : this
        );
      },
      panInsideBounds: function(t, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter(),
          n = this._limitCenter(i, this._zoom, M(t));
        return i.equals(n) || this.panTo(n, e), (this._enforcingBounds = !1), this;
      },
      invalidateSize: function(t) {
        if (!this._loaded) return this;
        t = e({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
        var n = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var o = this.getSize(),
          s = n.divideBy(2).round(),
          a = o.divideBy(2).round(),
          r = s.subtract(a);
        return r.x || r.y
          ? (t.animate && t.pan
              ? this.panBy(r)
              : (t.pan && this._rawPanBy(r),
                this.fire('move'),
                t.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(i(this.fire, this, 'moveend'), 200)))
                  : this.fire('moveend')),
            this.fire('resize', { oldSize: n, newSize: o }))
          : this;
      },
      stop: function() {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire('viewreset'),
          this._stop()
        );
      },
      locate: function(t) {
        if (
          ((t = this._locateOptions = e({ timeout: 1e4, watch: !1 }, t)),
          !('geolocation' in navigator))
        )
          return (
            this._handleGeolocationError({ code: 0, message: 'Geolocation not supported.' }), this
          );
        var n = i(this._handleGeolocationResponse, this),
          o = i(this._handleGeolocationError, this);
        return (
          t.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(n, o, t))
            : navigator.geolocation.getCurrentPosition(n, o, t),
          this
        );
      },
      stopLocate: function() {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function(t) {
        var e = t.code,
          i =
            t.message ||
            (1 === e ? 'permission denied' : 2 === e ? 'position unavailable' : 'timeout');
        this._locateOptions.setView && !this._loaded && this.fitWorld(),
          this.fire('locationerror', { code: e, message: 'Geolocation error: ' + i + '.' });
      },
      _handleGeolocationResponse: function(t) {
        var e = new C(t.coords.latitude, t.coords.longitude),
          i = e.toBounds(t.coords.accuracy),
          n = this._locateOptions;
        if (n.setView) {
          var o = this.getBoundsZoom(i);
          this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o);
        }
        var s = { latlng: e, bounds: i, timestamp: t.timestamp };
        for (var a in t.coords) 'number' == typeof t.coords[a] && (s[a] = t.coords[a]);
        this.fire('locationfound', s);
      },
      addHandler: function(t, e) {
        if (!e) return this;
        var i = (this[t] = new e(this));
        return this._handlers.push(i), this.options[t] && i.enable(), this;
      },
      remove: function() {
        if ((this._initEvents(!0), this._containerId !== this._container._gmap_id))
          throw new Error('Map container is being reused by another instance');
        try {
          delete this._container._gmap_id, delete this._containerId;
        } catch (t) {
          (this._container._gmap_id = void 0), (this._containerId = void 0);
        }
        void 0 !== this._locationWatchId && this.stopLocate(),
          this._stop(),
          lt(this._mapPane),
          this._clearControlPos && this._clearControlPos(),
          this._clearHandlers(),
          this._loaded && this.fire('unload');
        var t;
        for (t in this._layers) this._layers[t].remove();
        for (t in this._panes) lt(this._panes[t]);
        return (
          (this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this
        );
      },
      createPane: function(t, e) {
        var i = ht(
          'div',
          'gmap-pane' + (t ? ' gmap-' + t.replace('Pane', '') + '-pane' : ''),
          e || this._mapPane
        );
        return t && (this._panes[t] = i), i;
      },
      getCenter: function() {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function() {
        return this._zoom;
      },
      getBounds: function() {
        var t = this.getPixelBounds();
        return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
      },
      getMinZoom: function() {
        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      getMaxZoom: function() {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function(t, e, i) {
        (t = M(t)), (i = w(i || [0, 0]));
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          a = t.getNorthWest(),
          r = t.getSouthEast(),
          h = this.getSize().subtract(i),
          l = P(this.project(r, n), this.project(a, n)).getSize(),
          u = Ve ? this.options.zoomSnap : 1,
          c = h.x / l.x,
          d = h.y / l.y,
          _ = e ? Math.max(c, d) : Math.min(c, d);
        return (
          (n = this.getScaleZoom(_, n)),
          u &&
            ((n = Math.round(n / (u / 100)) * (u / 100)),
            (n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u)),
          Math.max(o, Math.min(s, n))
        );
      },
      getSize: function() {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new x(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function(t, e) {
        var i = this._getTopLeftPoint(t, e);
        return new b(i, i.add(this.getSize()));
      },
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
      },
      getPane: function(t) {
        return 'string' == typeof t ? this._panes[t] : t;
      },
      getPanes: function() {
        return this._panes;
      },
      getContainer: function() {
        return this._container;
      },
      getZoomScale: function(t, e) {
        var i = this.options.crs;
        return (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e);
      },
      getScaleZoom: function(t, e) {
        var i = this.options.crs;
        e = void 0 === e ? this._zoom : e;
        var n = i.zoom(t * i.scale(e));
        return isNaN(n) ? 1 / 0 : n;
      },
      project: function(t, e) {
        return (e = void 0 === e ? this._zoom : e), this.options.crs.latLngToPoint(A(t), e);
      },
      unproject: function(t, e) {
        return (e = void 0 === e ? this._zoom : e), this.options.crs.pointToLatLng(w(t), e);
      },
      layerPointToLatLng: function(t) {
        var e = w(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      latLngToLayerPoint: function(t) {
        return this.project(A(t))
          ._round()
          ._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(A(t));
      },
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(M(t));
      },
      distance: function(t, e) {
        return this.options.crs.distance(A(t), A(e));
      },
      containerPointToLayerPoint: function(t) {
        return w(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function(t) {
        return w(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(w(t));
        return this.layerPointToLatLng(e);
      },
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(A(t)));
      },
      mouseEventToContainerPoint: function(t) {
        return tt(t, this._container);
      },
      mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function(t) {
        var e = (this._container = at(t));
        if (!e) throw new Error('Map container not found.');
        if (e._gmap_id) throw new Error('Map container is already initialized.');
        U(e, 'scroll', this._onScroll, this), (this._containerId = n(e));
      },
      _initLayout: function() {
        var t = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && Ve),
          pt(
            t,
            'gmap-container' +
              (Qe ? ' gmap-touch' : '') +
              (ei ? ' gmap-retina' : '') +
              (ze ? ' gmap-oldie' : '') +
              (De ? ' gmap-safari' : '') +
              (this._fadeAnimated ? ' gmap-fade-anim' : '')
          );
        var e = rt(t, 'position');
        'absolute' !== e && 'relative' !== e && 'fixed' !== e && (t.style.position = 'relative'),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane('mapPane', this._container)),
          bt(this._mapPane, new x(0, 0)),
          this.createPane('tilePane'),
          this.createPane('shadowPane'),
          this.createPane('overlayPane'),
          this.createPane('markerPane'),
          this.createPane('tooltipPane'),
          this.createPane('popupPane'),
          this.options.markerZoomAnimation ||
            (pt(t.markerPane, 'gmap-zoom-hide'), pt(t.shadowPane, 'gmap-zoom-hide'));
      },
      _resetView: function(t, e) {
        bt(this._mapPane, new x(0, 0));
        var i = !this._loaded;
        (this._loaded = !0), (e = this._limitZoom(e)), this.fire('viewprereset');
        var n = this._zoom !== e;
        this._moveStart(n, !1)
          ._move(t, e)
          ._moveEnd(n),
          this.fire('viewreset'),
          i && this.fire('load');
      },
      _moveStart: function(t, e) {
        return t && this.fire('zoomstart'), e || this.fire('movestart'), this;
      },
      _move: function(t, e, i) {
        void 0 === e && (e = this._zoom);
        var n = this._zoom !== e;
        return (
          (this._zoom = e),
          (this._lastCenter = t),
          (this._pixelOrigin = this._getNewPixelOrigin(t)),
          (n || (i && i.pinch)) && this.fire('zoom', i),
          this.fire('move', i)
        );
      },
      _moveEnd: function(t) {
        return t && this.fire('zoomend'), this.fire('moveend');
      },
      _stop: function() {
        return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        bt(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded) throw new Error('Set map center and zoom first.');
      },
      _initEvents: function(t) {
        (this._targets = {}), (this._targets[n(this._container)] = this);
        var e = t ? V : U;
        e(
          this._container,
          'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress',
          this._handleDOMEvent,
          this
        ),
          this.options.trackResize && e(window, 'resize', this._onResize, this),
          Ve &&
            this.options.transform3DLimit &&
            (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
      },
      _onResize: function() {
        g(this._resizeRequest),
          (this._resizeRequest = f(function() {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function() {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(t, e) {
        for (
          var i,
            o = [],
            s = 'mouseout' === e || 'mouseover' === e,
            a = t.target || t.srcElement,
            r = !1;
          a;

        ) {
          if (
            (i = this._targets[n(a)]) &&
            ('click' === e || 'preclick' === e) &&
            !t._simulated &&
            this._draggableMoved(i)
          ) {
            r = !0;
            break;
          }
          if (i && i.listens(e, !0)) {
            if (s && !ot(a, t)) break;
            if ((o.push(i), s)) break;
          }
          if (a === this._container) break;
          a = a.parentNode;
        }
        return o.length || r || s || !ot(a, t) || (o = [this]), o;
      },
      _handleDOMEvent: function(t) {
        if (this._loaded && !nt(t)) {
          var e = t.type;
          ('mousedown' !== e && 'keypress' !== e) || Mt(t.target || t.srcElement),
            this._fireDOMEvent(t, e);
        }
      },
      _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
      _fireDOMEvent: function(t, i, n) {
        if ('click' === t.type) {
          var o = e({}, t);
          (o.type = 'preclick'), this._fireDOMEvent(o, o.type, n);
        }
        if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, i))).length) {
          var s = n[0];
          'contextmenu' === i && s.listens(i, !0) && Q(t);
          var a = { originalEvent: t };
          if ('keypress' !== t.type) {
            var r = s.getLatLng && (!s._radius || s._radius <= 10);
            (a.containerPoint = r
              ? this.latLngToContainerPoint(s.getLatLng())
              : this.mouseEventToContainerPoint(t)),
              (a.layerPoint = this.containerPointToLayerPoint(a.containerPoint)),
              (a.latlng = r ? s.getLatLng() : this.layerPointToLatLng(a.layerPoint));
          }
          for (var h = 0; h < n.length; h++)
            if (
              (n[h].fire(i, a, !0),
              a.originalEvent._stopped ||
                (!1 === n[h].options.bubblingMouseEvents && -1 !== _(this._mouseEvents, i)))
            )
              return;
        }
      },
      _draggableMoved: function(t) {
        return (
          ((t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved()) ||
          (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
      },
      whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on('load', t, e), this;
      },
      _getMapPanePos: function() {
        return Lt(this._mapPane) || new x(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, e) {
        return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(
          this._getMapPanePos()
        );
      },
      _getNewPixelOrigin: function(t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)
          ._subtract(i)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return P([
          this.project(t.getSouthWest(), e)._subtract(n),
          this.project(t.getNorthWest(), e)._subtract(n),
          this.project(t.getSouthEast(), e)._subtract(n),
          this.project(t.getNorthEast(), e)._subtract(n),
        ]);
      },
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function(t, e, i) {
        if (!i) return t;
        var n = this.project(t, e),
          o = this.getSize().divideBy(2),
          s = new b(n.subtract(o), n.add(o)),
          a = this._getBoundsOffset(s, i, e);
        return a.round().equals([0, 0]) ? t : this.unproject(n.add(a), e);
      },
      _limitOffset: function(t, e) {
        if (!e) return t;
        var i = this.getPixelBounds(),
          n = new b(i.min.add(t), i.max.add(t));
        return t.add(this._getBoundsOffset(n, e));
      },
      _getBoundsOffset: function(t, e, i) {
        var n = P(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);
        return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
      },
      _rebound: function(t, e) {
        return t + e > 0
          ? Math.round(t - e) / 2
          : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(),
          i = this.getMaxZoom(),
          n = Ve ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
      },
      _onPanTransitionStep: function() {
        this.fire('move');
      },
      _onPanTransitionEnd: function() {
        mt(this._mapPane, 'gmap-pan-anim'), this.fire('moveend');
      },
      _tryAnimatedPan: function(t, e) {
        var i = this._getCenterOffset(t)._trunc();
        return !(!0 !== (e && e.animate) && !this.getSize().contains(i)) && (this.panBy(i, e), !0);
      },
      _createAnimProxy: function() {
        var t = (this._proxy = ht('div', 'gmap-proxy gmap-zoom-animated'));
        this._panes.mapPane.appendChild(t),
          this.on(
            'zoomanim',
            function(t) {
              var e = wi,
                i = this._proxy.style[e];
              wt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
            },
            this
          ),
          this.on(
            'load moveend',
            function() {
              var t = this.getCenter(),
                e = this.getZoom();
              wt(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
            },
            this
          ),
          this._on('unload', this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        lt(this._proxy), delete this._proxy;
      },
      _catchTransitionEnd: function(t) {
        this._animatingZoom &&
          t.propertyName.indexOf('transform') >= 0 &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName('gmap-zoom-animated').length;
      },
      _tryAnimatedZoom: function(t, e, i) {
        if (this._animatingZoom) return !0;
        if (
          ((i = i || {}),
          !this._zoomAnimated ||
            !1 === i.animate ||
            this._nothingToAnimate() ||
            Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var n = this.getZoomScale(e),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return (
          !(!0 !== i.animate && !this.getSize().contains(o)) &&
          (f(function() {
            this._moveStart(!0, !1)._animateZoom(t, e, !0);
          }, this),
          !0)
        );
      },
      _animateZoom: function(t, e, n, o) {
        this._mapPane &&
          (n &&
            ((this._animatingZoom = !0),
            (this._animateToCenter = t),
            (this._animateToZoom = e),
            pt(this._mapPane, 'gmap-zoom-anim')),
          this.fire('zoomanim', { center: t, zoom: e, noUpdate: o }),
          setTimeout(i(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom &&
          (this._mapPane && mt(this._mapPane, 'gmap-zoom-anim'),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom),
          f(function() {
            this._moveEnd(!0);
          }, this));
      },
    }),
    Si = v.extend({
      options: { position: 'topright' },
      initialize: function(t) {
        u(this, t);
      },
      getPosition: function() {
        return this.options.position;
      },
      setPosition: function(t) {
        var e = this._map;
        return (
          e && e.removeControl(this), (this.options.position = t), e && e.addControl(this), this
        );
      },
      getContainer: function() {
        return this._container;
      },
      addTo: function(t) {
        this.remove(), (this._map = t);
        var e = (this._container = this.onAdd(t)),
          i = this.getPosition(),
          n = t._controlCorners[i];
        return (
          pt(e, 'gmap-control'),
          -1 !== i.indexOf('bottom') ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
          this
        );
      },
      remove: function() {
        return this._map
          ? (lt(this._container),
            this.onRemove && this.onRemove(this._map),
            (this._map = null),
            this)
          : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      },
    }),
    ki = function(t) {
      return new Si(t);
    };
  zi.include({
    addControl: function(t) {
      return t.addTo(this), this;
    },
    removeControl: function(t) {
      return t.remove(), this;
    },
    _initControlPos: function() {
      function t(t, o) {
        var s = i + t + ' ' + i + o;
        e[t + o] = ht('div', s, n);
      }
      var e = (this._controlCorners = {}),
        i = 'gmap-',
        n = (this._controlContainer = ht('div', i + 'control-container', this._container));
      t('top', 'left'), t('top', 'right'), t('bottom', 'left'), t('bottom', 'right');
    },
    _clearControlPos: function() {
      for (var t in this._controlCorners) lt(this._controlCorners[t]);
      lt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
    },
  });
  var Ei = Si.extend({
      options: {
        collapsed: !0,
        position: 'topright',
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function(t, e, i, n) {
          return i < n ? -1 : n < i ? 1 : 0;
        },
      },
      initialize: function(t, e, i) {
        u(this, i),
          (this._layerControlInputs = []),
          (this._layers = []),
          (this._lastZIndex = 0),
          (this._handlingClick = !1);
        for (var n in t) this._addLayer(t[n], n);
        for (n in e) this._addLayer(e[n], n, !0);
      },
      onAdd: function(t) {
        this._initLayout(),
          this._update(),
          (this._map = t),
          t.on('zoomend', this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on('add remove', this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return Si.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off('zoomend', this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off('add remove', this._onLayerChange, this);
      },
      addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      addOverlay: function(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      removeLayer: function(t) {
        t.off('add remove', this._onLayerChange, this);
        var e = this._getLayer(n(t));
        return (
          e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
        );
      },
      expand: function() {
        pt(this._container, 'gmap-control-layers-expanded'), (this._form.style.height = null);
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          t < this._form.clientHeight
            ? (pt(this._form, 'gmap-control-layers-scrollbar'),
              (this._form.style.height = t + 'px'))
            : mt(this._form, 'gmap-control-layers-scrollbar'),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function() {
        return mt(this._container, 'gmap-control-layers-expanded'), this;
      },
      _initLayout: function() {
        var t = 'gmap-control-layers',
          e = (this._container = ht('div', t)),
          i = this.options.collapsed;
        e.setAttribute('aria-haspopup', !0), K(e), J(e);
        var n = (this._form = ht('form', t + '-list'));
        i &&
          (this._map.on('click', this.collapse, this),
          Ee || U(e, { mouseenter: this.expand, mouseleave: this.collapse }, this));
        var o = (this._layersLink = ht('a', t + '-toggle', e));
        (o.href = '#'),
          (o.title = 'Layers'),
          Qe
            ? (U(o, 'click', $), U(o, 'click', this.expand, this))
            : U(o, 'focus', this.expand, this),
          i || this.expand(),
          (this._baseLayersList = ht('div', t + '-base', n)),
          (this._separator = ht('div', t + '-separator', n)),
          (this._overlaysList = ht('div', t + '-overlays', n)),
          e.appendChild(n);
      },
      _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && n(this._layers[e].layer) === t) return this._layers[e];
      },
      _addLayer: function(t, e, n) {
        this._map && t.on('add remove', this._onLayerChange, this),
          this._layers.push({ layer: t, name: e, overlay: n }),
          this.options.sortLayers &&
            this._layers.sort(
              i(function(t, e) {
                return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
              }, this)
            ),
          this.options.autoZIndex &&
            t.setZIndex &&
            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container) return this;
        ut(this._baseLayersList), ut(this._overlaysList), (this._layerControlInputs = []);
        var t,
          e,
          i,
          n,
          o = 0;
        for (i = 0; i < this._layers.length; i++)
          (n = this._layers[i]),
            this._addItem(n),
            (e = e || n.overlay),
            (t = t || !n.overlay),
            (o += n.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((t = t && o > 1), (this._baseLayersList.style.display = t ? '' : 'none')),
          (this._separator.style.display = e && t ? '' : 'none'),
          this
        );
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(n(t.target)),
          i = e.overlay
            ? 'add' === t.type
              ? 'overlayadd'
              : 'overlayremove'
            : 'add' === t.type
            ? 'baselayerchange'
            : null;
        i && this._map.fire(i, e);
      },
      _createRadioElement: function(t, e) {
        var i =
            '<input type="radio" class="gmap-control-layers-selector" name="' +
            t +
            '"' +
            (e ? ' checked="checked"' : '') +
            '/>',
          n = document.createElement('div');
        return (n.innerHTML = i), n.firstChild;
      },
      _addItem: function(t) {
        var e,
          i = document.createElement('label'),
          o = this._map.hasLayer(t.layer);
        t.overlay
          ? (((e = document.createElement('input')).type = 'checkbox'),
            (e.className = 'gmap-control-layers-selector'),
            (e.defaultChecked = o))
          : (e = this._createRadioElement('gmap-base-layers', o)),
          this._layerControlInputs.push(e),
          (e.layerId = n(t.layer)),
          U(e, 'click', this._onInputClick, this);
        var s = document.createElement('span');
        s.innerHTML = ' ' + t.name;
        var a = document.createElement('div');
        return (
          i.appendChild(a),
          a.appendChild(e),
          a.appendChild(s),
          (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
          this._checkDisabledLayers(),
          i
        );
      },
      _onInputClick: function() {
        var t,
          e,
          i = this._layerControlInputs,
          n = [],
          o = [];
        this._handlingClick = !0;
        for (var s = i.length - 1; s >= 0; s--)
          (t = i[s]),
            (e = this._getLayer(t.layerId).layer),
            t.checked ? n.push(e) : t.checked || o.push(e);
        for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
        for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
        (this._handlingClick = !1), this._refocusOnMap();
      },
      _checkDisabledLayers: function() {
        for (
          var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1;
          o >= 0;
          o--
        )
          (t = i[o]),
            (e = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== e.options.minZoom && n < e.options.minZoom) ||
              (void 0 !== e.options.maxZoom && n > e.options.maxZoom));
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expand: function() {
        return this.expand();
      },
      _collapse: function() {
        return this.collapse();
      },
    }),
    Bi = Si.extend({
      options: {
        position: 'topleft',
        zoomInText: '+',
        zoomInTitle: 'Zoom in',
        zoomOutText: '&#x2212;',
        zoomOutTitle: 'Zoom out',
      },
      onAdd: function(t) {
        var e = 'gmap-control-zoom',
          i = ht('div', e + ' gmap-bar'),
          n = this.options;
        return (
          (this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            e + '-in',
            i,
            this._zoomIn
          )),
          (this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            e + '-out',
            i,
            this._zoomOut
          )),
          this._updateDisabled(),
          t.on('zoomend zoomlevelschange', this._updateDisabled, this),
          i
        );
      },
      onRemove: function(t) {
        t.off('zoomend zoomlevelschange', this._updateDisabled, this);
      },
      disable: function() {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function() {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function(t) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function(t) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function(t, e, i, n, o) {
        var s = ht('a', i, n);
        return (
          (s.innerHTML = t),
          (s.href = '#'),
          (s.title = e),
          s.setAttribute('role', 'button'),
          s.setAttribute('aria-label', e),
          K(s),
          U(s, 'click', $),
          U(s, 'click', o, this),
          U(s, 'click', this._refocusOnMap, this),
          s
        );
      },
      _updateDisabled: function() {
        var t = this._map;
        mt(this._zoomInButton, 'gmap-disabled'),
          mt(this._zoomOutButton, 'gmap-disabled'),
          (this._disabled || t._zoom === t.getMinZoom()) &&
            pt(this._zoomOutButton, 'gmap-disabled'),
          (this._disabled || t._zoom === t.getMaxZoom()) && pt(this._zoomInButton, 'gmap-disabled');
      },
    });
  zi.mergeOptions({ zoomControl: !0 }),
    zi.addInitHook(function() {
      this.options.zoomControl &&
        ((this.zoomControl = new Bi()), this.addControl(this.zoomControl));
    });
  var Zi = Si.extend({
      options: { position: 'bottomleft', maxWidth: 100, metric: !0, imperial: !0 },
      onAdd: function(t) {
        var e = ht('div', 'gmap-control-scale'),
          i = this.options;
        return (
          this._addScales(i, 'gmap-control-scale-line', e),
          t.on(i.updateWhenIdle ? 'moveend' : 'move', this._update, this),
          t.whenReady(this._update, this),
          e
        );
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
      },
      _addScales: function(t, e, i) {
        t.metric && (this._mScale = ht('div', e, i)),
          t.imperial && (this._iScale = ht('div', e, i));
      },
      _update: function() {
        var t = this._map,
          e = t.getSize().y / 2,
          i = t.distance(
            t.containerPointToLatLng([0, e]),
            t.containerPointToLatLng([this.options.maxWidth, e])
          );
        this._updateScales(i);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t),
          this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var e = this._getRoundNum(t),
          i = e < 1e3 ? e + ' m' : e / 1e3 + ' km';
        this._updateScale(this._mScale, i, e / t);
      },
      _updateImperial: function(t) {
        var e,
          i,
          n,
          o = 3.2808399 * t;
        o > 5280
          ? ((e = o / 5280),
            (i = this._getRoundNum(e)),
            this._updateScale(this._iScale, i + ' mi', i / e))
          : ((n = this._getRoundNum(o)), this._updateScale(this._iScale, n + ' ft', n / o));
      },
      _updateScale: function(t, e, i) {
        (t.style.width = Math.round(this.options.maxWidth * i) + 'px'), (t.innerHTML = e);
      },
      _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + '').length - 1),
          i = t / e;
        return (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1), e * i;
      },
    }),
    Ii = Si.extend({
      options: { position: 'bottomright', prefix: '' },
      initialize: function(t) {
        u(this, t), (this._attributions = {});
      },
      onAdd: function(t) {
        (t.attributionControl = this),
          (this._container = ht('div', 'gmap-control-attribution')),
          K(this._container);
        for (var e in t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), this._container;
      },
      setPrefix: function(t) {
        return (this.options.prefix = t), this._update(), this;
      },
      addAttribution: function(t) {
        return t
          ? (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update(),
            this)
          : this;
      },
      removeAttribution: function(t) {
        return t
          ? (this._attributions[t] && (this._attributions[t]--, this._update()), this)
          : this;
      },
      _update: function() {
        if (this._map) {
          var t = [];
          for (var e in this._attributions) this._attributions[e] && t.push(e);
          var i = [];
          this.options.prefix && i.push(this.options.prefix),
            t.length && i.push(t.join(', ')),
            (this._container.innerHTML = i.join(' | '));
        }
      },
    });
  zi.mergeOptions({ attributionControl: !0 }),
    zi.addInitHook(function() {
      this.options.attributionControl && new Ii().addTo(this);
    });
  (Si.Layers = Ei),
    (Si.Zoom = Bi),
    (Si.Scale = Zi),
    (Si.Attribution = Ii),
    (ki.layers = function(t, e, i) {
      return new Ei(t, e, i);
    }),
    (ki.zoom = function(t) {
      return new Bi(t);
    }),
    (ki.scale = function(t) {
      return new Zi(t);
    }),
    (ki.attribution = function(t) {
      return new Ii(t);
    });
  var Oi = v.extend({
    initialize: function(t) {
      this._map = t;
    },
    enable: function() {
      return this._enabled ? this : ((this._enabled = !0), this.addHooks(), this);
    },
    disable: function() {
      return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
    },
    enabled: function() {
      return !!this._enabled;
    },
  });
  Oi.addTo = function(t, e) {
    return t.addHandler(e, this), this;
  };
  var Ri,
    ji = { Events: me },
    Di = Qe ? 'touchstart mousedown' : 'mousedown',
    Ni = {
      mousedown: 'mouseup',
      touchstart: 'touchend',
      pointerdown: 'touchend',
      MSPointerDown: 'touchend',
    },
    Hi = {
      mousedown: 'mousemove',
      touchstart: 'touchmove',
      pointerdown: 'touchmove',
      MSPointerDown: 'touchmove',
    },
    Wi = fe.extend({
      options: { clickTolerance: 3 },
      initialize: function(t, e, i, n) {
        u(this, n),
          (this._element = t),
          (this._dragStartTarget = e || t),
          (this._preventOutline = i);
      },
      enable: function() {
        this._enabled || (U(this._dragStartTarget, Di, this._onDown, this), (this._enabled = !0));
      },
      disable: function() {
        this._enabled &&
          (Wi._dragging === this && this.finishDrag(),
          V(this._dragStartTarget, Di, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function(t) {
        if (
          !t._simulated &&
          this._enabled &&
          ((this._moved = !1),
          !_t(this._element, 'gmap-zoom-anim') &&
            !(
              Wi._dragging ||
              t.shiftKey ||
              (1 !== t.which && 1 !== t.button && !t.touches) ||
              ((Wi._dragging = this),
              this._preventOutline && Mt(this._element),
              Pt(),
              be(),
              this._moving)
            ))
        ) {
          this.fire('down');
          var e = t.touches ? t.touches[0] : t;
          (this._startPoint = new x(e.clientX, e.clientY)),
            U(document, Hi[t.type], this._onMove, this),
            U(document, Ni[t.type], this._onUp, this);
        }
      },
      _onMove: function(t) {
        if (!t._simulated && this._enabled)
          if (t.touches && t.touches.length > 1) this._moved = !0;
          else {
            var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
              i = new x(e.clientX, e.clientY).subtract(this._startPoint);
            (i.x || i.y) &&
              (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                (Q(t),
                this._moved ||
                  (this.fire('dragstart'),
                  (this._moved = !0),
                  (this._startPos = Lt(this._element).subtract(i)),
                  pt(document.body, 'gmap-dragging'),
                  (this._lastTarget = t.target || t.srcElement),
                  window.SVGElementInstance &&
                    this._lastTarget instanceof SVGElementInstance &&
                    (this._lastTarget = this._lastTarget.correspondingUseElement),
                  pt(this._lastTarget, 'gmap-drag-target')),
                (this._newPos = this._startPos.add(i)),
                (this._moving = !0),
                g(this._animRequest),
                (this._lastEvent = t),
                (this._animRequest = f(this._updatePosition, this, !0))));
          }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire('predrag', t), bt(this._element, this._newPos), this.fire('drag', t);
      },
      _onUp: function(t) {
        !t._simulated && this._enabled && this.finishDrag();
      },
      finishDrag: function() {
        mt(document.body, 'gmap-dragging'),
          this._lastTarget && (mt(this._lastTarget, 'gmap-drag-target'), (this._lastTarget = null));
        for (var t in Hi)
          V(document, Hi[t], this._onMove, this), V(document, Ni[t], this._onUp, this);
        Tt(),
          Le(),
          this._moved &&
            this._moving &&
            (g(this._animRequest),
            this.fire('dragend', { distance: this._newPos.distanceTo(this._startPos) })),
          (this._moving = !1),
          (Wi._dragging = !1);
      },
    }),
    Fi = (Object.freeze || Object)({
      simplify: At,
      pointToSegmentDistance: zt,
      closestPointOnSegment: function(t, e, i) {
        return Rt(t, e, i);
      },
      clipSegment: Bt,
      _getEdgeIntersection: Zt,
      _getBitCode: It,
      _sqClosestPointOnSegment: Rt,
      isFlat: jt,
      _flat: Dt,
      segmentsIntersect: function(t, e, i, n) {
        return (
          this._checkCounterclockwise(t, i, n) !== this._checkCounterclockwise(e, i, n) &&
          this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, n)
        );
      },
      _checkCounterclockwise: function(t, e, i) {
        return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x);
      },
    }),
    Gi = (Object.freeze || Object)({ clipPolygon: Nt }),
    Ui = {
      project: function(t) {
        return new x(t.lng, t.lat);
      },
      unproject: function(t) {
        return new C(t.y, t.x);
      },
      bounds: new b([-180, -90], [180, 90]),
    },
    Vi = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new b([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
      project: function(t) {
        var e = Math.PI / 180,
          i = this.R,
          n = t.lat * e,
          o = this.R_MINOR / i,
          s = Math.sqrt(1 - o * o),
          a = s * Math.sin(n),
          r = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), s / 2);
        return (n = -i * Math.log(Math.max(r, 1e-10))), new x(t.lng * e * i, n);
      },
      unproject: function(t) {
        for (
          var e,
            i = 180 / Math.PI,
            n = this.R,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o),
            a = Math.exp(-t.y / n),
            r = Math.PI / 2 - 2 * Math.atan(a),
            h = 0,
            l = 0.1;
          h < 15 && Math.abs(l) > 1e-7;
          h++
        )
          (e = s * Math.sin(r)),
            (e = Math.pow((1 - e) / (1 + e), s / 2)),
            (r += l = Math.PI / 2 - 2 * Math.atan(a * e) - r);
        return new C(r * i, (t.x * i) / n);
      },
    },
    qi = (Object.freeze || Object)({ LonLat: Ui, Mercator: Vi, SphericalMercator: xe }),
    Xi = e({}, ye, {
      code: 'EPSG:3395',
      projection: Vi,
      transformation: (function() {
        var t = 0.5 / (Math.PI * Vi.R);
        return S(t, 0.5, -t, 0.5);
      })(),
    }),
    Yi = e({}, ye, {
      code: 'EPSG:4326',
      projection: Ui,
      transformation: S(1 / 180, 1, -1 / 180, 0.5),
    }),
    Ji = e({}, ve, {
      projection: Ui,
      transformation: S(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, e) {
        var i = e.lng - t.lng,
          n = e.lat - t.lat;
        return Math.sqrt(i * i + n * n);
      },
      infinite: !0,
    });
  (ve.Earth = ye),
    (ve.EPSG3395 = Xi),
    (ve.EPSG3857 = Te),
    (ve.EPSG900913 = Me),
    (ve.EPSG4326 = Yi),
    (ve.Simple = Ji);
  var Ki = fe.extend({
    options: { pane: 'overlayPane', attribution: null, bubblingMouseEvents: !0 },
    addTo: function(t) {
      return t.addLayer(this), this;
    },
    remove: function() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function(t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function(t) {
      return (this._map._targets[n(t)] = this), this;
    },
    removeInteractiveTarget: function(t) {
      return delete this._map._targets[n(t)], this;
    },
    getAttribution: function() {
      return this.options.attribution;
    },
    _layerAdd: function(t) {
      var e = t.target;
      if (e.hasLayer(this)) {
        if (((this._map = e), (this._zoomAnimated = e._zoomAnimated), this.getEvents)) {
          var i = this.getEvents();
          e.on(i, this),
            this.once(
              'remove',
              function() {
                e.off(i, this);
              },
              this
            );
        }
        this.onAdd(e),
          this.getAttribution &&
            e.attributionControl &&
            e.attributionControl.addAttribution(this.getAttribution()),
          this.fire('add'),
          e.fire('layeradd', { layer: this });
      }
    },
  });
  zi.include({
    addLayer: function(t) {
      if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
      var e = n(t);
      return this._layers[e]
        ? this
        : ((this._layers[e] = t),
          (t._mapToAdd = this),
          t.beforeAdd && t.beforeAdd(this),
          this.whenReady(t._layerAdd, t),
          this);
    },
    removeLayer: function(t) {
      var e = n(t);
      return this._layers[e]
        ? (this._loaded && t.onRemove(this),
          t.getAttribution &&
            this.attributionControl &&
            this.attributionControl.removeAttribution(t.getAttribution()),
          delete this._layers[e],
          this._loaded && (this.fire('layerremove', { layer: t }), t.fire('remove')),
          (t._map = t._mapToAdd = null),
          this)
        : this;
    },
    hasLayer: function(t) {
      return !!t && n(t) in this._layers;
    },
    eachLayer: function(t, e) {
      for (var i in this._layers) t.call(e, this._layers[i]);
      return this;
    },
    _addLayers: function(t) {
      for (var e = 0, i = (t = t ? (le(t) ? t : [t]) : []).length; e < i; e++) this.addLayer(t[e]);
    },
    _addZoomLimit: function(t) {
      (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
        ((this._zoomBoundLayers[n(t)] = t), this._updateZoomLevels());
    },
    _removeZoomLimit: function(t) {
      var e = n(t);
      this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
    },
    _updateZoomLevels: function() {
      var t = 1 / 0,
        e = -1 / 0,
        i = this._getZoomSpan();
      for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options;
        (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
          (e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom));
      }
      (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
        (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
        i !== this._getZoomSpan() && this.fire('zoomlevelschange'),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    },
  });
  var Qi = Ki.extend({
      initialize: function(t, e) {
        u(this, e), (this._layers = {});
        var i, n;
        if (t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
      },
      addLayer: function(t) {
        var e = this.getLayerId(t);
        return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
      },
      removeLayer: function(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return (
          this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
          delete this._layers[e],
          this
        );
      },
      hasLayer: function(t) {
        return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
      },
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function(t) {
        var e,
          i,
          n = Array.prototype.slice.call(arguments, 1);
        for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
        return this;
      },
      onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      getLayer: function(t) {
        return this._layers[t];
      },
      getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function(t) {
        return this.invoke('setZIndex', t);
      },
      getLayerId: function(t) {
        return n(t);
      },
    }),
    $i = Qi.extend({
      addLayer: function(t) {
        return this.hasLayer(t)
          ? this
          : (t.addEventParent(this),
            Qi.prototype.addLayer.call(this, t),
            this.fire('layeradd', { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t)
          ? (t in this._layers && (t = this._layers[t]),
            t.removeEventParent(this),
            Qi.prototype.removeLayer.call(this, t),
            this.fire('layerremove', { layer: t }))
          : this;
      },
      setStyle: function(t) {
        return this.invoke('setStyle', t);
      },
      bringToFront: function() {
        return this.invoke('bringToFront');
      },
      bringToBack: function() {
        return this.invoke('bringToBack');
      },
      getBounds: function() {
        var t = new T();
        for (var e in this._layers) {
          var i = this._layers[e];
          t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return t;
      },
    }),
    tn = v.extend({
      options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
      initialize: function(t) {
        u(this, t);
      },
      createIcon: function(t) {
        return this._createIcon('icon', t);
      },
      createShadow: function(t) {
        return this._createIcon('shadow', t);
      },
      _createIcon: function(t, e) {
        var i = this._getIconUrl(t);
        if (!i) {
          if ('icon' === t) throw new Error('iconUrl not set in Icon options (see the docs).');
          return null;
        }
        var n = this._createImg(i, e && 'IMG' === e.tagName ? e : null);
        return this._setIconStyles(n, t), n;
      },
      _setIconStyles: function(t, e) {
        var i = this.options,
          n = i[e + 'Size'];
        'number' == typeof n && (n = [n, n]);
        var o = w(n),
          s = w(('shadow' === e && i.shadowAnchor) || i.iconAnchor || (o && o.divideBy(2, !0)));
        (t.className = 'gmap-marker-' + e + ' ' + (i.className || '')),
          s && ((t.style.marginLeft = -s.x + 'px'), (t.style.marginTop = -s.y + 'px')),
          o && ((t.style.width = o.x + 'px'), (t.style.height = o.y + 'px'));
      },
      _createImg: function(t, e) {
        return (e = e || document.createElement('img')), (e.src = t), e;
      },
      _getIconUrl: function(t) {
        return (ei && this.options[t + 'RetinaUrl']) || this.options[t + 'Url'];
      },
    }),
    en = tn.extend({
      options: {
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      },
      _getIconUrl: function(t) {
        return (
          en.imagePath || (en.imagePath = this._detectIconPath()),
          (this.options.imagePath || en.imagePath) + tn.prototype._getIconUrl.call(this, t)
        );
      },
      _detectIconPath: function() {
        var t = ht('div', 'gmap-default-icon-path', document.body),
          e = rt(t, 'background-image') || rt(t, 'backgroundImage');
        return (
          document.body.removeChild(t),
          (e =
            null === e || 0 !== e.indexOf('url')
              ? ''
              : (e = e.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '')))
        );
      },
    }),
    nn = Oi.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Wi(t, t, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .enable(),
          pt(t, 'gmap-marker-draggable');
      },
      removeHooks: function() {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          )
          .disable(),
          this._marker._icon && mt(this._marker._icon, 'gmap-marker-draggable');
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker,
          i = e._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = GMap.DomUtil.getPosition(e._icon),
          a = i.getPixelBounds(),
          r = i.getPixelOrigin(),
          h = P(a.min._subtract(r).add(o), a.max._subtract(r).subtract(o));
        if (!h.contains(s)) {
          var l = w(
            (Math.max(h.max.x, s.x) - h.max.x) / (a.max.x - h.max.x) -
              (Math.min(h.min.x, s.x) - h.min.x) / (a.min.x - h.min.x),
            (Math.max(h.max.y, s.y) - h.max.y) / (a.max.y - h.max.y) -
              (Math.min(h.min.y, s.y) - h.min.y) / (a.min.y - h.min.y)
          ).multiplyBy(n);
          i.panBy(l, { animate: !1 }),
            this._draggable._newPos._add(l),
            this._draggable._startPos._add(l),
            GMap.DomUtil.setPosition(e._icon, this._draggable._newPos),
            this._onDrag(t),
            (this._panRequest = f(this._adjustPan.bind(this, t)));
        }
      },
      _onDragStart: function() {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker
            .closePopup()
            .fire('movestart')
            .fire('dragstart');
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan &&
          (g(this._panRequest), (this._panRequest = f(this._adjustPan.bind(this, t))));
      },
      _onDrag: function(t) {
        var e = this._marker,
          i = e._shadow,
          n = Lt(e._icon),
          o = e._map.layerPointToLatLng(n);
        i && bt(i, n),
          (e._latlng = o),
          (t.latlng = o),
          (t.oldLatLng = this._oldLatLng),
          e.fire('move', t).fire('drag', t);
      },
      _onDragEnd: function(t) {
        g(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire('moveend').fire('dragend', t);
      },
    }),
    on = Ki.extend({
      options: {
        icon: new en(),
        interactive: !0,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10,
        keyboard: !0,
        title: '',
        alt: '',
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: 'markerPane',
        bubblingMouseEvents: !1,
      },
      initialize: function(t, e) {
        u(this, e), (this._latlng = A(t));
      },
      onAdd: function(t) {
        (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation),
          this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function(t) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function() {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function() {
        return this._latlng;
      },
      setLatLng: function(t) {
        var e = this._latlng;
        return (
          (this._latlng = A(t)),
          this.update(),
          this.fire('move', { oldLatLng: e, latlng: this._latlng })
        );
      },
      setZIndexOffset: function(t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      setIcon: function(t) {
        return (
          (this.options.icon = t),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function() {
        var t = this.options,
          e = 'gmap-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
          i = t.icon.createIcon(this._icon),
          n = !1;
        i !== this._icon &&
          (this._icon && this._removeIcon(),
          (n = !0),
          t.title && (i.title = t.title),
          'IMG' === i.tagName && (i.alt = t.alt || '')),
          pt(i, e),
          t.keyboard && (i.tabIndex = '0'),
          (this._icon = i),
          t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex });
        var o = t.icon.createShadow(this._shadow),
          s = !1;
        o !== this._shadow && (this._removeShadow(), (s = !0)),
          o && (pt(o, e), (o.alt = '')),
          (this._shadow = o),
          t.opacity < 1 && this._updateOpacity(),
          n && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          o && s && this.getPane('shadowPane').appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover &&
          this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
          lt(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function() {
        this._shadow && lt(this._shadow), (this._shadow = null);
      },
      _setPos: function(t) {
        bt(this._icon, t),
          this._shadow && bt(this._shadow, t),
          (this._zIndex = t.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon.style.zIndex = this._zIndex + t;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (
          this.options.interactive &&
          (pt(this._icon, 'gmap-interactive'), this.addInteractiveTarget(this._icon), nn)
        ) {
          var t = this.options.draggable;
          this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new nn(this)),
            t && this.dragging.enable();
        }
      },
      setOpacity: function(t) {
        return (this.options.opacity = t), this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        vt(this._icon, t), this._shadow && vt(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      },
    }),
    sn = Ki.extend({
      options: {
        stroke: !0,
        color: '#3388ff',
        weight: 3,
        opacity: 1,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: 'evenodd',
        interactive: !0,
        bubblingMouseEvents: !0,
      },
      beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function(t) {
        return u(this, t), this._renderer && this._renderer._updateStyle(this), this;
      },
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
        );
      },
    }),
    an = sn.extend({
      options: { fill: !0, radius: 10 },
      initialize: function(t, e) {
        u(this, e), (this._latlng = A(t)), (this._radius = this.options.radius);
      },
      setLatLng: function(t) {
        return (this._latlng = A(t)), this.redraw(), this.fire('move', { latlng: this._latlng });
      },
      getLatLng: function() {
        return this._latlng;
      },
      setRadius: function(t) {
        return (this.options.radius = this._radius = t), this.redraw();
      },
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(t) {
        var e = (t && t.radius) || this._radius;
        return sn.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function() {
        (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius,
          e = this._radiusY || t,
          i = this._clickTolerance(),
          n = [t + i, e + i];
        this._pxBounds = new b(this._point.subtract(n), this._point.add(n));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      },
    }),
    rn = an.extend({
      initialize: function(t, i, n) {
        if (
          ('number' == typeof i && (i = e({}, n, { radius: i })),
          u(this, i),
          (this._latlng = A(t)),
          isNaN(this.options.radius))
        )
          throw new Error('Circle radius cannot be NaN');
        this._mRadius = this.options.radius;
      },
      setRadius: function(t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function() {
        return this._mRadius;
      },
      getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new T(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: sn.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng,
          e = this._latlng.lat,
          i = this._map,
          n = i.options.crs;
        if (n.distance === ye.distance) {
          var o = Math.PI / 180,
            s = this._mRadius / ye.R / o,
            a = i.project([e + s, t]),
            r = i.project([e - s, t]),
            h = a.add(r).divideBy(2),
            l = i.unproject(h).lat,
            u =
              Math.acos(
                (Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) /
                  (Math.cos(e * o) * Math.cos(l * o))
              ) / o;
          (isNaN(u) || 0 === u) && (u = s / Math.cos((Math.PI / 180) * e)),
            (this._point = h.subtract(i.getPixelOrigin())),
            (this._radius = isNaN(u) ? 0 : h.x - i.project([l, t - u]).x),
            (this._radiusY = h.y - a.y);
        } else {
          var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
          (this._point = i.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - i.latLngToLayerPoint(c).x);
        }
        this._updateBounds();
      },
    }),
    hn = sn.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function(t, e) {
        u(this, e), this._setLatLngs(t);
      },
      getLatLngs: function() {
        return this._latlngs;
      },
      setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function() {
        return !this._latlngs.length;
      },
      closestLayerPoint: function(t) {
        for (var e, i, n = 1 / 0, o = null, s = Rt, a = 0, r = this._parts.length; a < r; a++)
          for (var h = this._parts[a], l = 1, u = h.length; l < u; l++) {
            var c = s(t, (e = h[l - 1]), (i = h[l]), !0);
            c < n && ((n = c), (o = s(t, e, i)));
          }
        return o && (o.distance = Math.sqrt(n)), o;
      },
      getCenter: function() {
        if (!this._map) throw new Error('Must add layer to map before using getCenter()');
        var t,
          e,
          i,
          n,
          o,
          s,
          a,
          r = this._rings[0],
          h = r.length;
        if (!h) return null;
        for (t = 0, e = 0; t < h - 1; t++) e += r[t].distanceTo(r[t + 1]) / 2;
        if (0 === e) return this._map.layerPointToLatLng(r[0]);
        for (t = 0, n = 0; t < h - 1; t++)
          if (((o = r[t]), (s = r[t + 1]), (i = o.distanceTo(s)), (n += i) > e))
            return (
              (a = (n - e) / i),
              this._map.layerPointToLatLng([s.x - a * (s.x - o.x), s.y - a * (s.y - o.y)])
            );
      },
      getBounds: function() {
        return this._bounds;
      },
      addLatLng: function(t, e) {
        return (
          (e = e || this._defaultShape()),
          (t = A(t)),
          e.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function(t) {
        (this._bounds = new T()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function() {
        return jt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function(t) {
        for (var e = [], i = jt(t), n = 0, o = t.length; n < o; n++)
          i ? ((e[n] = A(t[n])), this._bounds.extend(e[n])) : (e[n] = this._convertLatLngs(t[n]));
        return e;
      },
      _project: function() {
        var t = new b();
        (this._rings = []), this._projectLatlngs(this._latlngs, this._rings, t);
        var e = this._clickTolerance(),
          i = new x(e, e);
        this._bounds.isValid() &&
          t.isValid() &&
          (t.min._subtract(i), t.max._add(i), (this._pxBounds = t));
      },
      _projectLatlngs: function(t, e, i) {
        var n,
          o,
          s = t[0] instanceof C,
          a = t.length;
        if (s) {
          for (o = [], n = 0; n < a; n++)
            (o[n] = this._map.latLngToLayerPoint(t[n])), i.extend(o[n]);
          e.push(o);
        } else for (n = 0; n < a; n++) this._projectLatlngs(t[n], e, i);
      },
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
          if (this.options.noClip) this._parts = this._rings;
          else {
            var e,
              i,
              n,
              o,
              s,
              a,
              r,
              h = this._parts;
            for (e = 0, n = 0, o = this._rings.length; e < o; e++)
              for (i = 0, s = (r = this._rings[e]).length; i < s - 1; i++)
                (a = Bt(r[i], r[i + 1], t, i, !0)) &&
                  ((h[n] = h[n] || []),
                  h[n].push(a[0]),
                  (a[1] === r[i + 1] && i !== s - 2) || (h[n].push(a[1]), n++));
          }
      },
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
          t[i] = At(t[i], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function(t, e) {
        var i,
          n,
          o,
          s,
          a,
          r,
          h = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (i = 0, s = this._parts.length; i < s; i++)
          for (n = 0, o = (a = (r = this._parts[i]).length) - 1; n < a; o = n++)
            if ((e || 0 !== n) && zt(t, r[o], r[n]) <= h) return !0;
        return !1;
      },
    });
  hn._flat = Dt;
  var ln = hn.extend({
      options: { fill: !0 },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function() {
        if (!this._map) throw new Error('Must add layer to map before using getCenter()');
        var t,
          e,
          i,
          n,
          o,
          s,
          a,
          r,
          h,
          l = this._rings[0],
          u = l.length;
        if (!u) return null;
        for (s = a = r = 0, t = 0, e = u - 1; t < u; e = t++)
          (i = l[t]),
            (n = l[e]),
            (o = i.y * n.x - n.y * i.x),
            (a += (i.x + n.x) * o),
            (r += (i.y + n.y) * o),
            (s += 3 * o);
        return (h = 0 === s ? l[0] : [a / s, r / s]), this._map.layerPointToLatLng(h);
      },
      _convertLatLngs: function(t) {
        var e = hn.prototype._convertLatLngs.call(this, t),
          i = e.length;
        return i >= 2 && e[0] instanceof C && e[0].equals(e[i - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        hn.prototype._setLatLngs.call(this, t),
          jt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return jt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds,
          e = this.options.weight,
          i = new x(e, e);
        if (
          ((t = new b(t.min.subtract(i), t.max.add(i))),
          (this._parts = []),
          this._pxBounds && this._pxBounds.intersects(t))
        )
          if (this.options.noClip) this._parts = this._rings;
          else
            for (var n, o = 0, s = this._rings.length; o < s; o++)
              (n = Nt(this._rings[o], t, !0)).length && this._parts.push(n);
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function(t) {
        var e,
          i,
          n,
          o,
          s,
          a,
          r,
          h,
          l = !1;
        if (!this._pxBounds.contains(t)) return !1;
        for (o = 0, r = this._parts.length; o < r; o++)
          for (s = 0, a = (h = (e = this._parts[o]).length) - 1; s < h; a = s++)
            (i = e[s]),
              (n = e[a]),
              i.y > t.y != n.y > t.y &&
                t.x < ((n.x - i.x) * (t.y - i.y)) / (n.y - i.y) + i.x &&
                (l = !l);
        return l || hn.prototype._containsPoint.call(this, t, !0);
      },
    }),
    un = $i.extend({
      initialize: function(t, e) {
        u(this, e), (this._layers = {}), t && this.addData(t);
      },
      addData: function(t) {
        var e,
          i,
          n,
          o = le(t) ? t : t.features;
        if (o) {
          for (e = 0, i = o.length; e < i; e++)
            ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var a = Ht(t, s);
        return a
          ? ((a.feature = qt(t)),
            (a.defaultOptions = a.options),
            this.resetStyle(a),
            s.onEachFeature && s.onEachFeature(t, a),
            this.addLayer(a))
          : this;
      },
      resetStyle: function(t) {
        return (
          (t.options = e({}, t.defaultOptions)), this._setLayerStyle(t, this.options.style), this
        );
      },
      setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function(t, e) {
        'function' == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e);
      },
    }),
    cn = {
      toGeoJSON: function(t) {
        return Vt(this, { type: 'Point', coordinates: Gt(this.getLatLng(), t) });
      },
    };
  on.include(cn),
    rn.include(cn),
    an.include(cn),
    hn.include({
      toGeoJSON: function(t) {
        var e = !jt(this._latlngs),
          i = Ut(this._latlngs, e ? 1 : 0, !1, t);
        return Vt(this, { type: (e ? 'Multi' : '') + 'LineString', coordinates: i });
      },
    }),
    ln.include({
      toGeoJSON: function(t) {
        var e = !jt(this._latlngs),
          i = e && !jt(this._latlngs[0]),
          n = Ut(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
        return e || (n = [n]), Vt(this, { type: (i ? 'Multi' : '') + 'Polygon', coordinates: n });
      },
    }),
    Qi.include({
      toMultiPoint: function(t) {
        var e = [];
        return (
          this.eachLayer(function(i) {
            e.push(i.toGeoJSON(t).geometry.coordinates);
          }),
          Vt(this, { type: 'MultiPoint', coordinates: e })
        );
      },
      toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if ('MultiPoint' === e) return this.toMultiPoint(t);
        var i = 'GeometryCollection' === e,
          n = [];
        return (
          this.eachLayer(function(e) {
            if (e.toGeoJSON) {
              var o = e.toGeoJSON(t);
              if (i) n.push(o.geometry);
              else {
                var s = qt(o);
                'FeatureCollection' === s.type ? n.push.apply(n, s.features) : n.push(s);
              }
            }
          }),
          i
            ? Vt(this, { geometries: n, type: 'GeometryCollection' })
            : { type: 'FeatureCollection', features: n }
        );
      },
    });
  var dn = Xt,
    _n = Ki.extend({
      options: {
        opacity: 1,
        alt: '',
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: '',
        zIndex: 1,
        className: '',
      },
      initialize: function(t, e, i) {
        (this._url = t), (this._bounds = M(e)), u(this, i);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (pt(this._image, 'gmap-interactive'), this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function() {
        lt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function(t) {
        return (this.options.opacity = t), this._image && this._updateOpacity(), this;
      },
      setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function() {
        return this._map && ct(this._image), this;
      },
      bringToBack: function() {
        return this._map && dt(this._image), this;
      },
      setUrl: function(t) {
        return (this._url = t), this._image && (this._image.src = t), this;
      },
      setBounds: function(t) {
        return (this._bounds = M(t)), this._map && this._reset(), this;
      },
      getEvents: function() {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function(t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      getBounds: function() {
        return this._bounds;
      },
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var t = 'IMG' === this._url.tagName,
          e = (this._image = t ? this._url : ht('img'));
        pt(e, 'gmap-image-layer'),
          this._zoomAnimated && pt(e, 'gmap-zoom-animated'),
          this.options.className && pt(e, this.options.className),
          (e.onselectstart = a),
          (e.onmousemove = a),
          (e.onload = i(this.fire, this, 'load')),
          (e.onerror = i(this._overlayOnError, this, 'error')),
          this.options.crossOrigin && (e.crossOrigin = ''),
          this.options.zIndex && this._updateZIndex(),
          t ? (this._url = e.src) : ((e.src = this._url), (e.alt = this.options.alt));
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom),
          i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        wt(this._image, i, e);
      },
      _reset: function() {
        var t = this._image,
          e = new b(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ),
          i = e.getSize();
        bt(t, e.min), (t.style.width = i.x + 'px'), (t.style.height = i.y + 'px');
      },
      _updateOpacity: function() {
        vt(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire('error');
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && ((this._url = t), (this._image.src = t));
      },
    }),
    pn = _n.extend({
      options: { autoplay: !0, loop: !0 },
      _initImage: function() {
        var t = 'VIDEO' === this._url.tagName,
          e = (this._image = t ? this._url : ht('video'));
        if (
          (pt(e, 'gmap-image-layer'),
          this._zoomAnimated && pt(e, 'gmap-zoom-animated'),
          (e.onselectstart = a),
          (e.onmousemove = a),
          (e.onloadeddata = i(this.fire, this, 'load')),
          t)
        ) {
          for (var n = e.getElementsByTagName('source'), o = [], s = 0; s < n.length; s++)
            o.push(n[s].src);
          this._url = n.length > 0 ? o : [e.src];
        } else {
          le(this._url) || (this._url = [this._url]),
            (e.autoplay = !!this.options.autoplay),
            (e.loop = !!this.options.loop);
          for (var r = 0; r < this._url.length; r++) {
            var h = ht('source');
            (h.src = this._url[r]), e.appendChild(h);
          }
        }
      },
    }),
    mn = Ki.extend({
      options: { offset: [0, 7], className: '', pane: 'popupPane' },
      initialize: function(t, e) {
        u(this, t), (this._source = e);
      },
      onAdd: function(t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && vt(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && vt(this._container, 1),
          this.bringToFront();
      },
      onRemove: function(t) {
        t._fadeAnimated
          ? (vt(this._container, 0),
            (this._removeTimeout = setTimeout(i(lt, void 0, this._container), 200)))
          : lt(this._container);
      },
      getLatLng: function() {
        return this._latlng;
      },
      setLatLng: function(t) {
        return (
          (this._latlng = A(t)), this._map && (this._updatePosition(), this._adjustPan()), this
        );
      },
      getContent: function() {
        return this._content;
      },
      setContent: function(t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function() {
        return this._container;
      },
      update: function() {
        this._map &&
          ((this._container.style.visibility = 'hidden'),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ''),
          this._adjustPan());
      },
      getEvents: function() {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function() {
        return this._map && ct(this._container), this;
      },
      bringToBack: function() {
        return this._map && dt(this._container), this;
      },
      _updateContent: function() {
        if (this._content) {
          var t = this._contentNode,
            e =
              'function' == typeof this._content
                ? this._content(this._source || this)
                : this._content;
          if ('string' == typeof e) t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire('contentupdate');
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            e = w(this.options.offset),
            i = this._getAnchor();
          this._zoomAnimated ? bt(this._container, t.add(i)) : (e = e.add(t).add(i));
          var n = (this._containerBottom = -e.y),
            o = (this._containerLeft = -Math.round(this._containerWidth / 2) + e.x);
          (this._container.style.bottom = n + 'px'), (this._container.style.left = o + 'px');
        }
      },
      _getAnchor: function() {
        return [0, 0];
      },
    }),
    fn = mn.extend({
      options: {
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: '',
      },
      openOn: function(t) {
        return t.openPopup(this), this;
      },
      onAdd: function(t) {
        mn.prototype.onAdd.call(this, t),
          t.fire('popupopen', { popup: this }),
          this._source &&
            (this._source.fire('popupopen', { popup: this }, !0),
            this._source instanceof sn || this._source.on('preclick', Y));
      },
      onRemove: function(t) {
        mn.prototype.onRemove.call(this, t),
          t.fire('popupclose', { popup: this }),
          this._source &&
            (this._source.fire('popupclose', { popup: this }, !0),
            this._source instanceof sn || this._source.off('preclick', Y));
      },
      getEvents: function() {
        var t = mn.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) && (t.preclick = this._close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
        );
      },
      _close: function() {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function() {
        var t = 'gmap-popup',
          e = (this._container = ht(
            'div',
            t + ' ' + (this.options.className || '') + ' gmap-zoom-animated'
          )),
          i = (this._wrapper = ht('div', t + '-content-wrapper', e));
        if (
          ((this._contentNode = ht('div', t + '-content', i)),
          K(i),
          J(this._contentNode),
          U(i, 'contextmenu', Y),
          (this._tipContainer = ht('div', t + '-tip-container', e)),
          (this._tip = ht('div', t + '-tip', this._tipContainer)),
          this.options.closeButton)
        ) {
          var n = (this._closeButton = ht('a', t + '-close-button', e));
          (n.href = '#close'),
            (n.innerHTML = '&#215;'),
            U(n, 'click', this._onCloseButtonClick, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode,
          e = t.style;
        (e.width = ''), (e.whiteSpace = 'nowrap');
        var i = t.offsetWidth;
        (i = Math.min(i, this.options.maxWidth)),
          (i = Math.max(i, this.options.minWidth)),
          (e.width = i + 1 + 'px'),
          (e.whiteSpace = ''),
          (e.height = '');
        var n = t.offsetHeight,
          o = this.options.maxHeight;
        o && n > o
          ? ((e.height = o + 'px'), pt(t, 'gmap-popup-scrolled'))
          : mt(t, 'gmap-popup-scrolled'),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          i = this._getAnchor();
        bt(this._container, e.add(i));
      },
      _adjustPan: function() {
        if (!(!this.options.autoPan || (this._map._panAnim && this._map._panAnim._inProgress))) {
          var t = this._map,
            e = parseInt(rt(this._container, 'marginBottom'), 10) || 0,
            i = this._container.offsetHeight + e,
            n = this._containerWidth,
            o = new x(this._containerLeft, -i - this._containerBottom);
          o._add(Lt(this._container));
          var s = t.layerPointToContainerPoint(o),
            a = w(this.options.autoPanPadding),
            r = w(this.options.autoPanPaddingTopLeft || a),
            h = w(this.options.autoPanPaddingBottomRight || a),
            l = t.getSize(),
            u = 0,
            c = 0;
          s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x),
            s.x - u - r.x < 0 && (u = s.x - r.x),
            s.y + i + h.y > l.y && (c = s.y + i - l.y + h.y),
            s.y - c - r.y < 0 && (c = s.y - r.y),
            (u || c) && t.fire('autopanstart').panBy([u, c]);
        }
      },
      _onCloseButtonClick: function(t) {
        this._close(), $(t);
      },
      _getAnchor: function() {
        return w(
          this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]
        );
      },
    });
  zi.mergeOptions({ closePopupOnClick: !0 }),
    zi.include({
      openPopup: function(t, e, i) {
        return (
          t instanceof fn || (t = new fn(i).setContent(t)),
          e && t.setLatLng(e),
          this.hasLayer(t)
            ? this
            : (this._popup && this._popup.options.autoClose && this.closePopup(),
              (this._popup = t),
              this.addLayer(t))
        );
      },
      closePopup: function(t) {
        return (
          (t && t !== this._popup) || ((t = this._popup), (this._popup = null)),
          t && this.removeLayer(t),
          this
        );
      },
    }),
    Ki.include({
      bindPopup: function(t, e) {
        return (
          t instanceof fn
            ? (u(t, e), (this._popup = t), (t._source = this))
            : ((this._popup && !e) || (this._popup = new fn(e, this)), this._popup.setContent(t)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function() {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function(t, e) {
        if ((t instanceof Ki || ((e = t), (t = this)), t instanceof $i))
          for (var i in this._layers) {
            t = this._layers[i];
            break;
          }
        return (
          e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
          this._popup &&
            this._map &&
            ((this._popup._source = t), this._popup.update(), this._map.openPopup(this._popup, e)),
          this
        );
      },
      closePopup: function() {
        return this._popup && this._popup._close(), this;
      },
      togglePopup: function(t) {
        return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
      },
      isPopupOpen: function() {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(t) {
        var e = t.layer || t.target;
        this._popup &&
          this._map &&
          ($(t),
          e instanceof sn
            ? this.openPopup(t.layer || t.target, t.latlng)
            : this._map.hasLayer(this._popup) && this._popup._source === e
            ? this.closePopup()
            : this.openPopup(e, t.latlng));
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      },
    });
  var gn = mn.extend({
    options: {
      pane: 'tooltipPane',
      offset: [0, 0],
      direction: 'auto',
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: 0.9,
    },
    onAdd: function(t) {
      mn.prototype.onAdd.call(this, t),
        this.setOpacity(this.options.opacity),
        t.fire('tooltipopen', { tooltip: this }),
        this._source && this._source.fire('tooltipopen', { tooltip: this }, !0);
    },
    onRemove: function(t) {
      mn.prototype.onRemove.call(this, t),
        t.fire('tooltipclose', { tooltip: this }),
        this._source && this._source.fire('tooltipclose', { tooltip: this }, !0);
    },
    getEvents: function() {
      var t = mn.prototype.getEvents.call(this);
      return Qe && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function() {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function() {
      var t =
        'gmap-tooltip ' +
        (this.options.className || '') +
        ' gmap-zoom-' +
        (this._zoomAnimated ? 'animated' : 'hide');
      this._contentNode = this._container = ht('div', t);
    },
    _updateLayout: function() {},
    _adjustPan: function() {},
    _setPosition: function(t) {
      var e = this._map,
        i = this._container,
        n = e.latLngToContainerPoint(e.getCenter()),
        o = e.layerPointToContainerPoint(t),
        s = this.options.direction,
        a = i.offsetWidth,
        r = i.offsetHeight,
        h = w(this.options.offset),
        l = this._getAnchor();
      'top' === s
        ? (t = t.add(w(-a / 2 + h.x, -r + h.y + l.y, !0)))
        : 'bottom' === s
        ? (t = t.subtract(w(a / 2 - h.x, -h.y, !0)))
        : 'center' === s
        ? (t = t.subtract(w(a / 2 + h.x, r / 2 - l.y + h.y, !0)))
        : 'right' === s || ('auto' === s && o.x < n.x)
        ? ((s = 'right'), (t = t.add(w(h.x + l.x, l.y - r / 2 + h.y, !0))))
        : ((s = 'left'), (t = t.subtract(w(a + l.x - h.x, r / 2 - l.y - h.y, !0)))),
        mt(i, 'gmap-tooltip-right'),
        mt(i, 'gmap-tooltip-left'),
        mt(i, 'gmap-tooltip-top'),
        mt(i, 'gmap-tooltip-bottom'),
        pt(i, 'gmap-tooltip-' + s),
        bt(i, t);
    },
    _updatePosition: function() {
      var t = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(t);
    },
    setOpacity: function(t) {
      (this.options.opacity = t), this._container && vt(this._container, t);
    },
    _animateZoom: function(t) {
      var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
      this._setPosition(e);
    },
    _getAnchor: function() {
      return w(
        this._source && this._source._getTooltipAnchor && !this.options.sticky
          ? this._source._getTooltipAnchor()
          : [0, 0]
      );
    },
  });
  zi.include({
    openTooltip: function(t, e, i) {
      return (
        t instanceof gn || (t = new gn(i).setContent(t)),
        e && t.setLatLng(e),
        this.hasLayer(t) ? this : this.addLayer(t)
      );
    },
    closeTooltip: function(t) {
      return t && this.removeLayer(t), this;
    },
  }),
    Ki.include({
      bindTooltip: function(t, e) {
        return (
          t instanceof gn
            ? (u(t, e), (this._tooltip = t), (t._source = this))
            : ((this._tooltip && !e) || (this._tooltip = new gn(e, this)),
              this._tooltip.setContent(t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function() {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function(t) {
        if (t || !this._tooltipHandlersAdded) {
          var e = t ? 'off' : 'on',
            i = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent
            ? (i.add = this._openTooltip)
            : ((i.mouseover = this._openTooltip),
              (i.mouseout = this.closeTooltip),
              this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
              Qe && (i.click = this._openTooltip)),
            this[e](i),
            (this._tooltipHandlersAdded = !t);
        }
      },
      openTooltip: function(t, e) {
        if ((t instanceof Ki || ((e = t), (t = this)), t instanceof $i))
          for (var i in this._layers) {
            t = this._layers[i];
            break;
          }
        return (
          e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
          this._tooltip &&
            this._map &&
            ((this._tooltip._source = t),
            this._tooltip.update(),
            this._map.openTooltip(this._tooltip, e),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (pt(this._tooltip._container, 'gmap-clickable'),
              this.addInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      closeTooltip: function() {
        return (
          this._tooltip &&
            (this._tooltip._close(),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (mt(this._tooltip._container, 'gmap-clickable'),
              this.removeInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      toggleTooltip: function(t) {
        return (
          this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        );
      },
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function() {
        return this._tooltip;
      },
      _openTooltip: function(t) {
        var e = t.layer || t.target;
        this._tooltip &&
          this._map &&
          this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0);
      },
      _moveTooltip: function(t) {
        var e,
          i,
          n = t.latlng;
        this._tooltip.options.sticky &&
          t.originalEvent &&
          ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
          (i = this._map.containerPointToLayerPoint(e)),
          (n = this._map.layerPointToLatLng(i))),
          this._tooltip.setLatLng(n);
      },
    });
  var vn = tn.extend({
    options: { iconSize: [12, 12], html: !1, bgPos: null, className: 'gmap-div-icon' },
    createIcon: function(t) {
      var e = t && 'DIV' === t.tagName ? t : document.createElement('div'),
        i = this.options;
      if (((e.innerHTML = !1 !== i.html ? i.html : ''), i.bgPos)) {
        var n = w(i.bgPos);
        e.style.backgroundPosition = -n.x + 'px ' + -n.y + 'px';
      }
      return this._setIconStyles(e, 'icon'), e;
    },
    createShadow: function() {
      return null;
    },
  });
  tn.Default = en;
  var yn = Ki.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: qe,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: 'tilePane',
        className: '',
        keepBuffer: 2,
      },
      initialize: function(t) {
        u(this, t);
      },
      onAdd: function() {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView(),
          this._update();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(),
          lt(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function() {
        return this._map && (ct(this._container), this._setAutoZIndex(Math.max)), this;
      },
      bringToBack: function() {
        return this._map && (dt(this._container), this._setAutoZIndex(Math.min)), this;
      },
      getContainer: function() {
        return this._container;
      },
      setOpacity: function(t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function(t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function() {
        return this._loading;
      },
      redraw: function() {
        return this._map && (this._removeAllTiles(), this._update()), this;
      },
      getEvents: function() {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function() {
        return document.createElement('div');
      },
      getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof x ? t : new x(t, t);
      },
      _updateZIndex: function() {
        this._container &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (
          var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length;
          o < s;
          o++
        )
          (e = i[o].style.zIndex), i[o] !== this._container && e && (n = t(n, +e));
        isFinite(n) && ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !ze) {
          vt(this._container, this.options.opacity);
          var t = +new Date(),
            e = !1,
            i = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (o.current && o.loaded) {
              var s = Math.min(1, (t - o.loaded) / 200);
              vt(o.el, s),
                s < 1 ? (e = !0) : (o.active ? (i = !0) : this._onOpaqueTile(o), (o.active = !0));
            }
          }
          i && !this._noPrune && this._pruneTiles(),
            e && (g(this._fadeFrame), (this._fadeFrame = f(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: a,
      _initContainer: function() {
        this._container ||
          ((this._container = ht('div', 'gmap-layer ' + (this.options.className || ''))),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom,
          e = this.options.maxZoom;
        if (void 0 !== t) {
          for (var i in this._levels)
            this._levels[i].el.children.length || i === t
              ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)), this._onUpdateLevel(i))
              : (lt(this._levels[i].el),
                this._removeTilesAtZoom(i),
                this._onRemoveLevel(i),
                delete this._levels[i]);
          var n = this._levels[t],
            o = this._map;
          return (
            n ||
              (((n = this._levels[t] = {}).el = ht(
                'div',
                'gmap-tile-container gmap-zoom-animated',
                this._container
              )),
              (n.el.style.zIndex = e),
              (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
              (n.zoom = t),
              this._setZoomTransform(n, o.getCenter(), o.getZoom()),
              n.el.offsetWidth,
              this._onCreateLevel(n)),
            (this._level = n),
            n
          );
        }
      },
      _onUpdateLevel: a,
      _onRemoveLevel: a,
      _onCreateLevel: a,
      _pruneTiles: function() {
        if (this._map) {
          var t,
            e,
            i = this._map.getZoom();
          if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
          else {
            for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
            for (t in this._tiles)
              if ((e = this._tiles[t]).current && !e.active) {
                var n = e.coords;
                this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                  this._retainChildren(n.x, n.y, n.z, n.z + 2);
              }
            for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
          }
        }
      },
      _removeTilesAtZoom: function(t) {
        for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function() {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function() {
        for (var t in this._levels)
          lt(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function(t, e, i, n) {
        var o = Math.floor(t / 2),
          s = Math.floor(e / 2),
          a = i - 1,
          r = new x(+o, +s);
        r.z = +a;
        var h = this._tileCoordsToKey(r),
          l = this._tiles[h];
        return l && l.active
          ? ((l.retain = !0), !0)
          : (l && l.loaded && (l.retain = !0), a > n && this._retainParent(o, s, a, n));
      },
      _retainChildren: function(t, e, i, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * e; s < 2 * e + 2; s++) {
            var a = new x(o, s);
            a.z = i + 1;
            var r = this._tileCoordsToKey(a),
              h = this._tiles[r];
            h && h.active
              ? (h.retain = !0)
              : (h && h.loaded && (h.retain = !0),
                i + 1 < n && this._retainChildren(o, s, i + 1, n));
          }
      },
      _resetView: function(t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function(t) {
        var e = this.options;
        return void 0 !== e.minNativeZoom && t < e.minNativeZoom
          ? e.minNativeZoom
          : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
          ? e.maxNativeZoom
          : t;
      },
      _setView: function(t, e, i, n) {
        var o = this._clampZoom(Math.round(e));
        ((void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)) &&
          (o = void 0);
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (n && !s) ||
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          void 0 !== o && this._update(t),
          i || this._pruneTiles(),
          (this._noPrune = !!i)),
          this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
      },
      _setZoomTransform: function(t, e, i) {
        var n = this._map.getZoomScale(i, t.zoom),
          o = t.origin
            .multiplyBy(n)
            .subtract(this._map._getNewPixelOrigin(e, i))
            .round();
        Ve ? wt(t.el, o, n) : bt(t.el, o);
      },
      _resetGrid: function() {
        var t = this._map,
          e = t.options.crs,
          i = (this._tileSize = this.getTileSize()),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = e.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
              Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y),
            ]),
          (this._wrapY = e.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
              Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y),
            ]);
      },
      _onMoveEnd: function() {
        this._map && !this._map._animatingZoom && this._update();
      },
      _getTiledPixelBounds: function(t) {
        var e = this._map,
          i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
          n = e.getZoomScale(i, this._tileZoom),
          o = e.project(t, this._tileZoom).floor(),
          s = e.getSize().divideBy(2 * n);
        return new b(o.subtract(s), o.add(s));
      },
      _update: function(t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
            var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              a = [],
              r = this.options.keepBuffer,
              h = new b(o.getBottomLeft().subtract([r, -r]), o.getTopRight().add([r, -r]));
            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
              throw new Error('Attempted to load an infinite number of tiles');
            for (var l in this._tiles) {
              var u = this._tiles[l].coords;
              (u.z === this._tileZoom && h.contains(new x(u.x, u.y))) ||
                (this._tiles[l].current = !1);
            }
            if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
            else {
              for (var c = o.min.y; c <= o.max.y; c++)
                for (var d = o.min.x; d <= o.max.x; d++) {
                  var _ = new x(d, c);
                  if (((_.z = this._tileZoom), this._isValidTile(_))) {
                    var p = this._tiles[this._tileCoordsToKey(_)];
                    p ? (p.current = !0) : a.push(_);
                  }
                }
              if (
                (a.sort(function(t, e) {
                  return t.distanceTo(s) - e.distanceTo(s);
                }),
                0 !== a.length)
              ) {
                this._loading || ((this._loading = !0), this.fire('loading'));
                var m = document.createDocumentFragment();
                for (d = 0; d < a.length; d++) this._addTile(a[d], m);
                this._level.el.appendChild(m);
              }
            }
          }
        }
      },
      _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (
            (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
            (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var n = this._tileCoordsToBounds(t);
        return M(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map,
          i = this.getTileSize(),
          n = t.scaleBy(i),
          o = n.add(i);
        return [e.unproject(n, t.z), e.unproject(o, t.z)];
      },
      _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t),
          i = new T(e[0], e[1]);
        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
      },
      _tileCoordsToKey: function(t) {
        return t.x + ':' + t.y + ':' + t.z;
      },
      _keyToTileCoords: function(t) {
        var e = t.split(':'),
          i = new x(+e[0], +e[1]);
        return (i.z = +e[2]), i;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e &&
          (Ie || e.el.setAttribute('src', ue),
          lt(e.el),
          delete this._tiles[t],
          this.fire('tileunload', { tile: e.el, coords: this._keyToTileCoords(t) }));
      },
      _initTile: function(t) {
        pt(t, 'gmap-tile');
        var e = this.getTileSize();
        (t.style.width = e.x + 'px'),
          (t.style.height = e.y + 'px'),
          (t.onselectstart = a),
          (t.onmousemove = a),
          ze && this.options.opacity < 1 && vt(t, this.options.opacity),
          Ee && !Be && (t.style.WebkitBackfaceVisibility = 'hidden');
      },
      _addTile: function(t, e) {
        var n = this._getTilePos(t),
          o = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), i(this._tileReady, this, t));
        this._initTile(s),
          this.createTile.length < 2 && f(i(this._tileReady, this, t, null, s)),
          bt(s, n),
          (this._tiles[o] = { el: s, coords: t, current: !0 }),
          e.appendChild(s),
          this.fire('tileloadstart', { tile: s, coords: t });
      },
      _tileReady: function(t, e, n) {
        if (this._map) {
          e && this.fire('tileerror', { error: e, tile: n, coords: t });
          var o = this._tileCoordsToKey(t);
          (n = this._tiles[o]) &&
            ((n.loaded = +new Date()),
            this._map._fadeAnimated
              ? (vt(n.el, 0), g(this._fadeFrame), (this._fadeFrame = f(this._updateOpacity, this)))
              : ((n.active = !0), this._pruneTiles()),
            e || (pt(n.el, 'gmap-tile-loaded'), this.fire('tileload', { tile: n.el, coords: t })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire('load'),
              ze || !this._map._fadeAnimated
                ? f(this._pruneTiles, this)
                : setTimeout(i(this._pruneTiles, this), 250)));
        }
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new x(
          this._wrapX ? s(t.x, this._wrapX) : t.x,
          this._wrapY ? s(t.y, this._wrapY) : t.y
        );
        return (e.z = t.z), e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new b(
          t.min.unscaleBy(e).floor(),
          t.max
            .unscaleBy(e)
            .ceil()
            .subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      },
    }),
    xn = yn.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: 'abc',
        errorTileUrl: '',
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
      },
      initialize: function(t, e) {
        (this._url = t),
          (e = u(this, e)).detectRetina &&
            ei &&
            e.maxZoom > 0 &&
            ((e.tileSize = Math.floor(e.tileSize / 2)),
            e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--),
            (e.minZoom = Math.max(0, e.minZoom))),
          'string' == typeof e.subdomains && (e.subdomains = e.subdomains.split('')),
          Ee || this.on('tileunload', this._onTileRemove);
      },
      setUrl: function(t, e) {
        return (this._url = t), e || this.redraw(), this;
      },
      createTile: function(t, e) {
        var n = document.createElement('img');
        return (
          U(n, 'load', i(this._tileOnLoad, this, e, n)),
          U(n, 'error', i(this._tileOnError, this, e, n)),
          this.options.crossOrigin && (n.crossOrigin = ''),
          (n.alt = ''),
          n.setAttribute('role', 'presentation'),
          (n.src = this.getTileUrl(t)),
          n
        );
      },
      getTileUrl: function(t) {
        var i = {
          r: ei ? '@2x' : '',
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var n = this._globalTileRange.max.y - t.y;
          this.options.tms && (i.y = n), (i['-y'] = n);
        }
        return d(this._url, e(i, this.options));
      },
      _tileOnLoad: function(t, e) {
        ze ? setTimeout(i(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function(t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute('src') !== n && (e.src = n), t(i, e);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom,
          e = this.options.maxZoom,
          i = this.options.zoomReverse,
          n = this.options.zoomOffset;
        return i && (t = e - t), t + n;
      },
      _getSubdomain: function(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      _abortLoading: function() {
        var t, e;
        for (t in this._tiles)
          this._tiles[t].coords.z !== this._tileZoom &&
            (((e = this._tiles[t].el).onload = a),
            (e.onerror = a),
            e.complete || ((e.src = ue), lt(e), delete this._tiles[t]));
      },
    }),
    wn = xn.extend({
      defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: !1,
        version: '1.1.1',
      },
      options: { crs: null, uppercase: !1 },
      initialize: function(t, i) {
        this._url = t;
        var n = e({}, this.defaultWmsParams);
        for (var o in i) o in this.options || (n[o] = i[o]);
        var s = (i = u(this, i)).detectRetina && ei ? 2 : 1,
          a = this.getTileSize();
        (n.width = a.x * s), (n.height = a.y * s), (this.wmsParams = n);
      },
      onAdd: function(t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
        (this.wmsParams[e] = this._crs.code), xn.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t),
          i = this._crs,
          n = P(i.project(e[0]), i.project(e[1])),
          o = n.min,
          s = n.max,
          a = (this._wmsVersion >= 1.3 && this._crs === Yi
            ? [o.y, o.x, s.y, s.x]
            : [o.x, o.y, s.x, s.y]
          ).join(','),
          r = GMap.TileLayer.prototype.getTileUrl.call(this, t);
        return (
          r +
          c(this.wmsParams, r, this.options.uppercase) +
          (this.options.uppercase ? '&BBOX=' : '&bbox=') +
          a
        );
      },
      setParams: function(t, i) {
        return e(this.wmsParams, t), i || this.redraw(), this;
      },
    });
  (xn.WMS = wn),
    (Yt.wms = function(t, e) {
      return new wn(t, e);
    });
  var bn = Ki.extend({
      options: { padding: 0.1, tolerance: 0 },
      initialize: function(t) {
        u(this, t), n(this), (this._layers = this._layers || {});
      },
      onAdd: function() {
        this._container ||
          (this._initContainer(), this._zoomAnimated && pt(this._container, 'gmap-zoom-animated')),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on('update', this._updatePaths, this);
      },
      onRemove: function() {
        this.off('update', this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd,
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(t, e) {
        var i = this._map.getZoomScale(e, this._zoom),
          n = Lt(this._container),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          s = this._map.project(this._center, e),
          a = this._map.project(t, e).subtract(s),
          r = o
            .multiplyBy(-i)
            .add(n)
            .add(o)
            .subtract(a);
        Ve ? wt(this._container, r, i) : bt(this._container, r);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers) this._layers[t]._reset();
      },
      _onZoomEnd: function() {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function() {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function() {
        var t = this.options.padding,
          e = this._map.getSize(),
          i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        (this._bounds = new b(i, i.add(e.multiplyBy(1 + 2 * t)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      },
    }),
    Ln = bn.extend({
      getEvents: function() {
        var t = bn.prototype.getEvents.call(this);
        return (t.viewprereset = this._onViewPreReset), t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        bn.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = (this._container = document.createElement('canvas'));
        U(t, 'mousemove', o(this._onMouseMove, 32, this), this),
          U(t, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
          U(t, 'mouseout', this._handleMouseOut, this),
          (this._ctx = t.getContext('2d'));
      },
      _destroyContainer: function() {
        delete this._ctx, lt(this._container), V(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          this._redrawBounds = null;
          for (var t in this._layers) this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!this._map._animatingZoom || !this._bounds) {
          (this._drawnLayers = {}), bn.prototype._update.call(this);
          var t = this._bounds,
            e = this._container,
            i = t.getSize(),
            n = ei ? 2 : 1;
          bt(e, t.min),
            (e.width = n * i.x),
            (e.height = n * i.y),
            (e.style.width = i.x + 'px'),
            (e.style.height = i.y + 'px'),
            ei && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire('update');
        }
      },
      _reset: function() {
        bn.prototype._reset.call(this),
          this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function(t) {
        this._updateDashArray(t), (this._layers[n(t)] = t);
        var e = (t._order = { layer: t, prev: this._drawLast, next: null });
        this._drawLast && (this._drawLast.next = e),
          (this._drawLast = e),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function(t) {
        this._requestRedraw(t);
      },
      _removePath: function(t) {
        var e = t._order,
          i = e.next,
          n = e.prev;
        i ? (i.prev = n) : (this._drawLast = n),
          n ? (n.next = i) : (this._drawFirst = i),
          delete t._order,
          delete this._layers[GMap.stamp(t)],
          this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (t.options.dashArray) {
          var e,
            i = t.options.dashArray.split(','),
            n = [];
          for (e = 0; e < i.length; e++) n.push(Number(i[e]));
          t.options._dashArray = n;
        }
      },
      _requestRedraw: function(t) {
        this._map &&
          (this._extendRedrawBounds(t),
          (this._redrawRequest = this._redrawRequest || f(this._redraw, this)));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          (this._redrawBounds = this._redrawBounds || new b()),
            this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
            this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      },
      _redraw: function() {
        (this._redrawRequest = null),
          this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
      },
      _draw: function() {
        var t,
          e = this._redrawBounds;
        if ((this._ctx.save(), e)) {
          var i = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          (t = n.layer), (!e || (t._pxBounds && t._pxBounds.intersects(e))) && t._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function(t, e) {
        if (this._drawing) {
          var i,
            n,
            o,
            s,
            a = t._parts,
            r = a.length,
            h = this._ctx;
          if (r) {
            for (this._drawnLayers[t._gmap_id] = t, h.beginPath(), i = 0; i < r; i++) {
              for (n = 0, o = a[i].length; n < o; n++)
                (s = a[i][n]), h[n ? 'lineTo' : 'moveTo'](s.x, s.y);
              e && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (this._drawing && !t._empty()) {
          var e = t._point,
            i = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          (this._drawnLayers[t._gmap_id] = t),
            1 !== o && (i.save(), i.scale(1, o)),
            i.beginPath(),
            i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
            1 !== o && i.restore(),
            this._fillStroke(i, t);
        }
      },
      _fillStroke: function(t, e) {
        var i = e.options;
        i.fill &&
          ((t.globalAlpha = i.fillOpacity),
          (t.fillStyle = i.fillColor || i.color),
          t.fill(i.fillRule || 'evenodd')),
          i.stroke &&
            0 !== i.weight &&
            (t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []),
            (t.globalAlpha = i.opacity),
            (t.lineWidth = i.weight),
            (t.strokeStyle = i.color),
            (t.lineCap = i.lineCap),
            (t.lineJoin = i.lineJoin),
            t.stroke());
      },
      _onClick: function(t) {
        for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
          (e = o.layer).options.interactive &&
            e._containsPoint(n) &&
            !this._map._draggableMoved(e) &&
            (i = e);
        i && (it(t), this._fireEvent([i], t));
      },
      _onMouseMove: function(t) {
        if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e &&
          (mt(this._container, 'gmap-interactive'),
          this._fireEvent([e], t, 'mouseout'),
          (this._hoveredLayer = null));
      },
      _handleMouseHover: function(t, e) {
        for (var i, n, o = this._drawFirst; o; o = o.next)
          (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
        n !== this._hoveredLayer &&
          (this._handleMouseOut(t),
          n &&
            (pt(this._container, 'gmap-interactive'),
            this._fireEvent([n], t, 'mouseover'),
            (this._hoveredLayer = n))),
          this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
      },
      _fireEvent: function(t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      },
      _bringToFront: function(t) {
        var e = t._order,
          i = e.next,
          n = e.prev;
        i &&
          ((i.prev = n),
          n ? (n.next = i) : i && (this._drawFirst = i),
          (e.prev = this._drawLast),
          (this._drawLast.next = e),
          (e.next = null),
          (this._drawLast = e),
          this._requestRedraw(t));
      },
      _bringToBack: function(t) {
        var e = t._order,
          i = e.next,
          n = e.prev;
        n &&
          ((n.next = i),
          i ? (i.prev = n) : n && (this._drawLast = n),
          (e.prev = null),
          (e.next = this._drawFirst),
          (this._drawFirst.prev = e),
          (this._drawFirst = e),
          this._requestRedraw(t));
      },
    }),
    Pn = (function() {
      try {
        return (
          document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
          function(t) {
            return document.createElement('<lvml:' + t + ' class="lvml">');
          }
        );
      } catch (t) {
        return function(t) {
          return document.createElement(
            '<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      }
    })(),
    Tn = {
      _initContainer: function() {
        this._container = ht('div', 'gmap-vml-container');
      },
      _update: function() {
        this._map._animatingZoom || (bn.prototype._update.call(this), this.fire('update'));
      },
      _initPath: function(t) {
        var e = (t._container = Pn('shape'));
        pt(e, 'gmap-vml-shape ' + (this.options.className || '')),
          (e.coordsize = '1 1'),
          (t._path = Pn('path')),
          e.appendChild(t._path),
          this._updateStyle(t),
          (this._layers[n(t)] = t);
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        lt(e), t.removeInteractiveTarget(e), delete this._layers[n(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke,
          i = t._fill,
          n = t.options,
          o = t._container;
        (o.stroked = !!n.stroke),
          (o.filled = !!n.fill),
          n.stroke
            ? (e || (e = t._stroke = Pn('stroke')),
              o.appendChild(e),
              (e.weight = n.weight + 'px'),
              (e.color = n.color),
              (e.opacity = n.opacity),
              n.dashArray
                ? (e.dashStyle = le(n.dashArray)
                    ? n.dashArray.join(' ')
                    : n.dashArray.replace(/( *, *)/g, ' '))
                : (e.dashStyle = ''),
              (e.endcap = n.lineCap.replace('butt', 'flat')),
              (e.joinstyle = n.lineJoin))
            : e && (o.removeChild(e), (t._stroke = null)),
          n.fill
            ? (i || (i = t._fill = Pn('fill')),
              o.appendChild(i),
              (i.color = n.fillColor || n.color),
              (i.opacity = n.fillOpacity))
            : i && (o.removeChild(i), (t._fill = null));
      },
      _updateCircle: function(t) {
        var e = t._point.round(),
          i = Math.round(t._radius),
          n = Math.round(t._radiusY || i);
        this._setPath(
          t,
          t._empty() ? 'M0 0' : 'AL ' + e.x + ',' + e.y + ' ' + i + ',' + n + ' 0,23592600'
        );
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        ct(t._container);
      },
      _bringToBack: function(t) {
        dt(t._container);
      },
    },
    Mn = oi ? Pn : k,
    Cn = bn.extend({
      getEvents: function() {
        var t = bn.prototype.getEvents.call(this);
        return (t.zoomstart = this._onZoomStart), t;
      },
      _initContainer: function() {
        (this._container = Mn('svg')),
          this._container.setAttribute('pointer-events', 'none'),
          (this._rootGroup = Mn('g')),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        lt(this._container),
          V(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize;
      },
      _onZoomStart: function() {
        this._update();
      },
      _update: function() {
        if (!this._map._animatingZoom || !this._bounds) {
          bn.prototype._update.call(this);
          var t = this._bounds,
            e = t.getSize(),
            i = this._container;
          (this._svgSize && this._svgSize.equals(e)) ||
            ((this._svgSize = e), i.setAttribute('width', e.x), i.setAttribute('height', e.y)),
            bt(i, t.min),
            i.setAttribute('viewBox', [t.min.x, t.min.y, e.x, e.y].join(' ')),
            this.fire('update');
        }
      },
      _initPath: function(t) {
        var e = (t._path = Mn('path'));
        t.options.className && pt(e, t.options.className),
          t.options.interactive && pt(e, 'gmap-interactive'),
          this._updateStyle(t),
          (this._layers[n(t)] = t);
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        lt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path,
          i = t.options;
        e &&
          (i.stroke
            ? (e.setAttribute('stroke', i.color),
              e.setAttribute('stroke-opacity', i.opacity),
              e.setAttribute('stroke-width', i.weight),
              e.setAttribute('stroke-linecap', i.lineCap),
              e.setAttribute('stroke-linejoin', i.lineJoin),
              i.dashArray
                ? e.setAttribute('stroke-dasharray', i.dashArray)
                : e.removeAttribute('stroke-dasharray'),
              i.dashOffset
                ? e.setAttribute('stroke-dashoffset', i.dashOffset)
                : e.removeAttribute('stroke-dashoffset'))
            : e.setAttribute('stroke', 'none'),
          i.fill
            ? (e.setAttribute('fill', i.fillColor || i.color),
              e.setAttribute('fill-opacity', i.fillOpacity),
              e.setAttribute('fill-rule', i.fillRule || 'evenodd'))
            : e.setAttribute('fill', 'none'));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, E(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point,
          i = Math.max(Math.round(t._radius), 1),
          n = 'a' + i + ',' + (Math.max(Math.round(t._radiusY), 1) || i) + ' 0 1,0 ',
          o = t._empty()
            ? 'M0 0'
            : 'M' + (e.x - i) + ',' + e.y + n + 2 * i + ',0 ' + n + 2 * -i + ',0 ';
        this._setPath(t, o);
      },
      _setPath: function(t, e) {
        t._path.setAttribute('d', e);
      },
      _bringToFront: function(t) {
        ct(t._path);
      },
      _bringToBack: function(t) {
        dt(t._path);
      },
    });
  oi && Cn.include(Tn),
    zi.include({
      getRenderer: function(t) {
        var e =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          e || (e = this._renderer = (this.options.preferCanvas && Jt()) || Kt()),
          this.hasLayer(e) || this.addLayer(e),
          e
        );
      },
      _getPaneRenderer: function(t) {
        if ('overlayPane' === t || void 0 === t) return !1;
        var e = this._paneRenderers[t];
        return (
          void 0 === e &&
            ((e = (Cn && Kt({ pane: t })) || (Ln && Jt({ pane: t }))),
            (this._paneRenderers[t] = e)),
          e
        );
      },
    });
  var An = ln.extend({
    initialize: function(t, e) {
      ln.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
    },
    setBounds: function(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function(t) {
      return (t = M(t)), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    },
  });
  (Cn.create = Mn),
    (Cn.pointsToPath = E),
    (un.geometryToLayer = Ht),
    (un.coordsToLatLng = Wt),
    (un.coordsToLatLngs = Ft),
    (un.latLngToCoords = Gt),
    (un.latLngsToCoords = Ut),
    (un.getFeature = Vt),
    (un.asFeature = qt),
    zi.mergeOptions({ boxZoom: !0 });
  var zn = Oi.extend({
    initialize: function(t) {
      (this._map = t),
        (this._container = t._container),
        (this._pane = t._panes.overlayPane),
        (this._resetStateTimeout = 0),
        t.on('unload', this._destroy, this);
    },
    addHooks: function() {
      U(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function() {
      V(this._container, 'mousedown', this._onMouseDown, this);
    },
    moved: function() {
      return this._moved;
    },
    _destroy: function() {
      lt(this._pane), delete this._pane;
    },
    _resetState: function() {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function() {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function(t) {
      if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        be(),
        Pt(),
        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
        U(
          document,
          {
            contextmenu: $,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseMove: function(t) {
      this._moved ||
        ((this._moved = !0),
        (this._box = ht('div', 'gmap-zoom-box', this._container)),
        pt(this._container, 'gmap-crosshair'),
        this._map.fire('boxzoomstart')),
        (this._point = this._map.mouseEventToContainerPoint(t));
      var e = new b(this._point, this._startPoint),
        i = e.getSize();
      bt(this._box, e.min),
        (this._box.style.width = i.x + 'px'),
        (this._box.style.height = i.y + 'px');
    },
    _finish: function() {
      this._moved && (lt(this._box), mt(this._container, 'gmap-crosshair')),
        Le(),
        Tt(),
        V(
          document,
          {
            contextmenu: $,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseUp: function(t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(i(this._resetState, this), 0));
        var e = new T(
          this._map.containerPointToLatLng(this._startPoint),
          this._map.containerPointToLatLng(this._point)
        );
        this._map.fitBounds(e).fire('boxzoomend', { boxZoomBounds: e });
      }
    },
    _onKeyDown: function(t) {
      27 === t.keyCode && this._finish();
    },
  });
  zi.addInitHook('addHandler', 'boxZoom', zn), zi.mergeOptions({ doubleClickZoom: !0 });
  var Sn = Oi.extend({
    addHooks: function() {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function() {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function(t) {
      var e = this._map,
        i = e.getZoom(),
        n = e.options.zoomDelta,
        o = t.originalEvent.shiftKey ? i - n : i + n;
      'center' === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
    },
  });
  zi.addInitHook('addHandler', 'doubleClickZoom', Sn),
    zi.mergeOptions({
      dragging: !0,
      inertia: !Be,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0,
    });
  var kn = Oi.extend({
    addHooks: function() {
      if (!this._draggable) {
        var t = this._map;
        (this._draggable = new Wi(t._mapPane, t._container)),
          this._draggable.on(
            { dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd },
            this
          ),
          this._draggable.on('predrag', this._onPreDragLimit, this),
          t.options.worldCopyJump &&
            (this._draggable.on('predrag', this._onPreDragWrap, this),
            t.on('zoomend', this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this));
      }
      pt(this._map._container, 'gmap-grab gmap-touch-drag'),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function() {
      mt(this._map._container, 'gmap-grab'),
        mt(this._map._container, 'gmap-touch-drag'),
        this._draggable.disable();
    },
    moved: function() {
      return this._draggable && this._draggable._moved;
    },
    moving: function() {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function() {
      var t = this._map;
      if ((t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
        var e = M(this._map.options.maxBounds);
        (this._offsetLimit = P(
          this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
          this._map
            .latLngToContainerPoint(e.getSouthEast())
            .multiplyBy(-1)
            .add(this._map.getSize())
        )),
          (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
      } else this._offsetLimit = null;
      t.fire('movestart').fire('dragstart'),
        t.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function(t) {
      if (this._map.options.inertia) {
        var e = (this._lastTime = +new Date()),
          i = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
        this._positions.push(i), this._times.push(e), this._prunePositions(e);
      }
      this._map.fire('move', t).fire('drag', t);
    },
    _prunePositions: function(t) {
      for (; this._positions.length > 1 && t - this._times[0] > 50; )
        this._positions.shift(), this._times.shift();
    },
    _onZoomEnd: function() {
      var t = this._map.getSize().divideBy(2),
        e = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = e.subtract(t).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function(t, e) {
      return t - (t - e) * this._viscosity;
    },
    _onPreDragLimit: function() {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
          e = this._offsetLimit;
        t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
          t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
          t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
          t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
          (this._draggable._newPos = this._draggable._startPos.add(t));
      }
    },
    _onPreDragWrap: function() {
      var t = this._worldWidth,
        e = Math.round(t / 2),
        i = this._initialWorldOffset,
        n = this._draggable._newPos.x,
        o = ((n - e + i) % t) + e - i,
        s = ((n + e + i) % t) - e - i,
        a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
      (this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = a);
    },
    _onDragEnd: function(t) {
      var e = this._map,
        i = e.options,
        n = !i.inertia || this._times.length < 2;
      if ((e.fire('dragend', t), n)) e.fire('moveend');
      else {
        this._prunePositions(+new Date());
        var o = this._lastPos.subtract(this._positions[0]),
          s = (this._lastTime - this._times[0]) / 1e3,
          a = i.easeLinearity,
          r = o.multiplyBy(a / s),
          h = r.distanceTo([0, 0]),
          l = Math.min(i.inertiaMaxSpeed, h),
          u = r.multiplyBy(l / h),
          c = l / (i.inertiaDeceleration * a),
          d = u.multiplyBy(-c / 2).round();
        d.x || d.y
          ? ((d = e._limitOffset(d, e.options.maxBounds)),
            f(function() {
              e.panBy(d, { duration: c, easeLinearity: a, noMoveStart: !0, animate: !0 });
            }))
          : e.fire('moveend');
      }
    },
  });
  zi.addInitHook('addHandler', 'dragging', kn),
    zi.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  var En = Oi.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173],
    },
    initialize: function(t) {
      (this._map = t),
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function() {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = '0'),
        U(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function() {
      this._removeHooks(),
        V(
          this._map._container,
          { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown },
          this
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function() {
      if (!this._focused) {
        var t = document.body,
          e = document.documentElement,
          i = t.scrollTop || e.scrollTop,
          n = t.scrollLeft || e.scrollLeft;
        this._map._container.focus(), window.scrollTo(n, i);
      }
    },
    _onFocus: function() {
      (this._focused = !0), this._map.fire('focus');
    },
    _onBlur: function() {
      (this._focused = !1), this._map.fire('blur');
    },
    _setPanDelta: function(t) {
      var e,
        i,
        n = (this._panKeys = {}),
        o = this.keyCodes;
      for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
      for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
      for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
      for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t];
    },
    _setZoomDelta: function(t) {
      var e,
        i,
        n = (this._zoomKeys = {}),
        o = this.keyCodes;
      for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
      for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t;
    },
    _addHooks: function() {
      U(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function() {
      V(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var e,
          i = t.keyCode,
          n = this._map;
        if (i in this._panKeys) {
          if (n._panAnim && n._panAnim._inProgress) return;
          (e = this._panKeys[i]),
            t.shiftKey && (e = w(e).multiplyBy(3)),
            n.panBy(e),
            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds);
        } else if (i in this._zoomKeys)
          n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
        else {
          if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
          n.closePopup();
        }
        $(t);
      }
    },
  });
  zi.addInitHook('addHandler', 'keyboard', En),
    zi.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
  var Bn = Oi.extend({
    addHooks: function() {
      U(this._map._container, 'mousewheel', this._onWheelScroll, this), (this._delta = 0);
    },
    removeHooks: function() {
      V(this._map._container, 'mousewheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function(t) {
      var e = et(t),
        n = this._map.options.wheelDebounceTime;
      (this._delta += e),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
        this._startTime || (this._startTime = +new Date());
      var o = Math.max(n - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer), (this._timer = setTimeout(i(this._performZoom, this), o)), $(t);
    },
    _performZoom: function() {
      var t = this._map,
        e = t.getZoom(),
        i = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
        s = i ? Math.ceil(o / i) * i : o,
        a = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
      (this._delta = 0),
        (this._startTime = null),
        a &&
          ('center' === t.options.scrollWheelZoom
            ? t.setZoom(e + a)
            : t.setZoomAround(this._lastMousePos, e + a));
    },
  });
  zi.addInitHook('addHandler', 'scrollWheelZoom', Bn),
    zi.mergeOptions({ tap: !0, tapTolerance: 15 });
  var Zn = Oi.extend({
    addHooks: function() {
      U(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function() {
      V(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function(t) {
      if (t.touches) {
        if ((Q(t), (this._fireClick = !0), t.touches.length > 1))
          return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
        var e = t.touches[0],
          n = e.target;
        (this._startPos = this._newPos = new x(e.clientX, e.clientY)),
          n.tagName && 'a' === n.tagName.toLowerCase() && pt(n, 'gmap-active'),
          (this._holdTimeout = setTimeout(
            i(function() {
              this._isTapValid() &&
                ((this._fireClick = !1), this._onUp(), this._simulateEvent('contextmenu', e));
            }, this),
            1e3
          )),
          this._simulateEvent('mousedown', e),
          U(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    },
    _onUp: function(t) {
      if (
        (clearTimeout(this._holdTimeout),
        V(document, { touchmove: this._onMove, touchend: this._onUp }, this),
        this._fireClick && t && t.changedTouches)
      ) {
        var e = t.changedTouches[0],
          i = e.target;
        i && i.tagName && 'a' === i.tagName.toLowerCase() && mt(i, 'gmap-active'),
          this._simulateEvent('mouseup', e),
          this._isTapValid() && this._simulateEvent('click', e);
      }
    },
    _isTapValid: function() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function(t) {
      var e = t.touches[0];
      (this._newPos = new x(e.clientX, e.clientY)), this._simulateEvent('mousemove', e);
    },
    _simulateEvent: function(t, e) {
      var i = document.createEvent('MouseEvents');
      (i._simulated = !0),
        (e.target._simulatedClick = !0),
        i.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          e.screenX,
          e.screenY,
          e.clientX,
          e.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
        e.target.dispatchEvent(i);
    },
  });
  Qe && !Ke && zi.addInitHook('addHandler', 'tap', Zn),
    zi.mergeOptions({ touchZoom: Qe && !Be, bounceAtZoomLimits: !0 });
  var In = Oi.extend({
    addHooks: function() {
      pt(this._map._container, 'gmap-touch-zoom'),
        U(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function() {
      mt(this._map._container, 'gmap-touch-zoom'),
        V(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function(t) {
      var e = this._map;
      if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
        var i = e.mouseEventToContainerPoint(t.touches[0]),
          n = e.mouseEventToContainerPoint(t.touches[1]);
        (this._centerPoint = e.getSize()._divideBy(2)),
          (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
          'center' !== e.options.touchZoom &&
            (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))),
          (this._startDist = i.distanceTo(n)),
          (this._startZoom = e.getZoom()),
          (this._moved = !1),
          (this._zooming = !0),
          e._stop(),
          U(document, 'touchmove', this._onTouchMove, this),
          U(document, 'touchend', this._onTouchEnd, this),
          Q(t);
      }
    },
    _onTouchMove: function(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var e = this._map,
          n = e.mouseEventToContainerPoint(t.touches[0]),
          o = e.mouseEventToContainerPoint(t.touches[1]),
          s = n.distanceTo(o) / this._startDist;
        if (
          ((this._zoom = e.getScaleZoom(s, this._startZoom)),
          !e.options.bounceAtZoomLimits &&
            ((this._zoom < e.getMinZoom() && s < 1) || (this._zoom > e.getMaxZoom() && s > 1)) &&
            (this._zoom = e._limitZoom(this._zoom)),
          'center' === e.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 === s)) return;
        } else {
          var a = n
            ._add(o)
            ._divideBy(2)
            ._subtract(this._centerPoint);
          if (1 === s && 0 === a.x && 0 === a.y) return;
          this._center = e.unproject(
            e.project(this._pinchStartLatLng, this._zoom).subtract(a),
            this._zoom
          );
        }
        this._moved || (e._moveStart(!0, !1), (this._moved = !0)), g(this._animRequest);
        var r = i(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 });
        (this._animRequest = f(r, this, !0)), Q(t);
      }
    },
    _onTouchEnd: function() {
      this._moved && this._zooming
        ? ((this._zooming = !1),
          g(this._animRequest),
          V(document, 'touchmove', this._onTouchMove),
          V(document, 'touchend', this._onTouchEnd),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
        : (this._zooming = !1);
    },
  });
  zi.addInitHook('addHandler', 'touchZoom', In),
    (zi.BoxZoom = zn),
    (zi.DoubleClickZoom = Sn),
    (zi.Drag = kn),
    (zi.Keyboard = En),
    (zi.ScrollWheelZoom = Bn),
    (zi.Tap = Zn),
    (zi.TouchZoom = In);
  var On = e({}, ye, {
      code: 'PGIS',
      projection: Ui,
      transformation: S(1 / 512, 0.5, -1 / 512, 0.5),
    }),
    Rn = e({}, ye, {
      code: 'PGIS2',
      projection: Ui,
      transformation: S(1 / 360, 0.5, -1 / 360, 0.25),
    }),
    jn = e({}, ye, {
      code: 'Tianditu',
      projection: Ui,
      transformation: S(1 / 360, 0.5, -1 / 360, 0.25),
    });
  (ve.PGIS = On), (ve.PGIS2 = Rn), (ve.Tianditu = jn);
  var Dn = v.extend({
      options: {
        url: null,
        params: {},
        onDone: te,
        onFail: te,
        type: 'jsonp',
        cached: !1,
        timeout: 2e4,
      },
      initialize: function(t) {
        if (!t || !t.url) throw (console.log(t), "The url of the json data can't be empty.");
        u(this, t), (this._scriptNode = null), (this._timer = null), (this._key = null);
      },
      doGet: function() {
        this._key = '__jsonp_' + ('' + Math.random()).slice(2);
        var t = this;
        (this._timer = setTimeout(function() {
          t.cleanup(),
            t.options.onFail &&
              t.options.onFail(
                new Error(
                  'After ' +
                    t.options.timeout / 1e3 +
                    ' seconds, request to get JSON data from ' +
                    t.options.url +
                    ' is timeout'
                )
              );
        }, this.options.timeout)),
          (window[this._key] = function(e) {
            t.cleanup(), t.options.onDone && t.options.onDone(e);
          });
        var e = this.options.url;
        (e += ~e.indexOf('?') ? '&' : '?'),
          (e += 'callback=' + this._key + '&'),
          (e = (e = (e += Qt(this.options.params)).replace('?&', '?')).replace('&&', '&'));
        var i = document.getElementsByTagName('script')[0] || document.head;
        (this._scriptNode = ht('script', '', i.parentNode)),
          (this._scriptNode.type = 'text/javascript'),
          (this._scriptNode.onerror = function(e) {
            t.cleanup(),
              t.options.onFail &&
                t.options.onFail(
                  new Error('Request to get JSON data from ' + t.options.url + ' failed')
                );
          }),
          (this._scriptNode.src = e);
      },
      doPost: function() {
        this.doGet();
      },
      cleanup: function() {
        this._timer && (clearTimeout(this._timer), delete this._timer),
          this._scriptNode && (lt(this._scriptNode), delete this._scriptNode),
          (window[this._key] = te);
      },
      cancel: function() {
        window[this._key] && this.cleanup();
      },
    }),
    Nn = v.extend({
      options: {
        url: null,
        params: {},
        onDone: te,
        onFail: te,
        type: 'json',
        cache: !1,
        timeout: 2e4,
      },
      initialize: function(t) {
        if (!(t = t || {}).url) throw "The url of the json data can't be empty.";
        u(this, t);
      },
      doGet: function() {
        this._sendGet('GET', null);
      },
      doGetDelete: function() {
        this._sendGet('DELETE', null);
      },
      doGetGeoJson: function() {
        this._sendGet('GET', {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/geo+json',
        });
      },
      _sendGet: function(t, e) {
        var i = this.options,
          n = i.url;
        (n += ~n.indexOf('?') ? '&' : '?'),
          (n += Qt(i.params)),
          (n += i.cache ? '' : '&_t=' + new Date().getTime());
        var o = e || {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'xml' == i.type ? 'application/xml' : 'application/json',
        };
        this.sendRequest(t, n, null, i.type, i.onDone, i.onFail, o);
      },
      doPost: function() {
        var t = Qt(this.options.params);
        t += this.cache ? '' : '&_t=' + new Date().getTime();
        var e = this.options;
        this.sendRequest('POST', e.url, t, e.type, e.onDone, e.onFail, {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'xml' == e.type ? 'appliction/xml' : 'application/json',
        });
      },
      postJson: function() {
        this.sendJson('POST');
      },
      putJson: function() {
        this.sendJson('PUT');
      },
      sendJson: function(t) {
        var e = this.options;
        this.sendRequest(t, e.url, JSON.stringify(e.params), e.type, e.onDone, e.onFail, {
          'Content-Type': 'application/json',
        });
      },
      sendRequest: function(t, e, i, n, o, s, a) {
        var r = this.getXHR();
        if (!r) return !1;
        r.open(t, e, !0), r.setRequestHeader('X-Request-With', 'XMLHttpRequest');
        for (var h in a || {}) r.setRequestHeader(h, a[h]);
        var l = this;
        (r.onreadystatechange = function() {
          r.readyState > 3 &&
            o &&
            ((r.status >= 200 && r.status < 300) || 304 == r.status
              ? o(l.getResponseData(n, r))
              : s(r.responseText, r));
        }),
          r.send(i);
      },
      getXHR: function() {
        for (var t = 'undefined' == typeof window ? this : window, e = 4; e--; )
          try {
            return new (t.XMLHttpRequest || t.ActiveXObject)(
              ['Mxxml2.XMLHTTP', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP.6.0', 'Microsoft.XMLHTTP'][e]
            );
          } catch (t) {}
        return !1;
      },
      getResponseData: function(t, e) {
        return 'xml' == t
          ? null != e.responseXML
            ? e.responseXML
            : $t(e.responseText)
          : 'json' == t
          ? ee('' == e.responseText ? '{}' : e.responseText)
          : e.responseText;
      },
    }),
    Hn = v.extend({
      filters: {},
      options: { geometry: 'GEOMETRY' },
      initialize: function(t) {
        u(this, t || {}), (this.filters = {});
      },
      CQL: function(t) {
        return (this.filters.CQL = t), this;
      },
      _CQL2kvp: function(t) {
        return 'CQL_FILTER=' + t;
      },
      bbox: function(t, e, i, n) {
        return (this.filters.bbox = t instanceof b ? t : new b(new x(t, e), new x(i, n))), this;
      },
      _bbox2kvp: function(t) {
        var e = t.getBottomLeft(),
          i = t.getTopRight();
        return (
          'CQL_FILTER=BBOX(' +
          this.options.geometry +
          ', ' +
          e.x +
          ',' +
          e.y +
          ',' +
          i.x +
          ',' +
          i.y +
          ')'
        );
      },
      limit: function(t) {
        return (this.filters.limit = parseInt(t)), this;
      },
      _limit2kvp: function(t) {
        return 'count=' + t;
      },
      offset: function(t, e) {
        if (!e)
          throw Error(
            'Tow parameters needed: offset number and column name which used to be sorted'
          );
        return (this.filters.offset = parseInt(t)), (this.filters.sortBy = e), this;
      },
      _offset2kvp: function(t) {
        return 'startIndex=' + t;
      },
      sortBy: function(t) {
        return (this.filters.sortBy = t), this;
      },
      _sortBy2kvp: function(t) {
        return 'sortBy=' + t;
      },
      toKvp: function() {
        var t = this.options.namespace + ':' + this.options.layer + '?';
        for (var e in this.filters) {
          var i = this.filters[e];
          t += this['_' + e + '2kvp'](i) + '&';
        }
        return t.endsWith('&') ? t.substring(0, t.length - 1) : t;
      },
      send: function(t, e) {
        this.options.ims._doQuery(this, t, e);
      },
    }),
    Wn = v.extend({
      options: {
        host: 'localhost',
        port: 7749,
        protocol: 'http',
        type: 'ajax',
        cache: !1,
        timeout: 2e4,
      },
      initialize: function(t) {
        u(this, (t = t || {}));
      },
      registerDatastore: function(t, e, i, n) {
        var o = this._getRoot() + 'datastore/' + t;
        this._ajax(o, e || {}, i, n).postJson();
      },
      datastores: function(t, e) {
        var i = this._getRoot() + 'datastore';
        this._ajax(i, null, t, e).doGet();
      },
      datastore: function(t, e, i) {
        if (!t) throw Error('datastore key can not be empty.');
        var n = this._getRoot() + 'datastore/' + t;
        this._ajax(n, null, e, i).doGet();
      },
      namespaces: function(t, e) {
        var i = this._getRoot() + 'namespace';
        this._ajax(i, null, t, e).doGet();
      },
      namespace: function(t, e, i) {
        var n = this._getRoot() + 'namespace/' + t;
        this._ajax(n, null, e, i).doGet();
      },
      registerNamespace: function(t, e, i) {
        var n = this._getRoot() + 'namespace';
        this._ajax(n, { name: t }, e, i).postJson();
      },
      delNamespace: function(t, e, i) {
        var n = this._getRoot() + 'namespace/' + t;
        this._ajax(n, null, e, i).doGetDelete();
      },
      renNamespace: function(t, e, i, n) {
        var o = this._getRoot() + 'namespace/' + t;
        this._ajax(o, { name: e }, i, n).postJson();
      },
      publish: function(t, e, i, n, o) {
        (t && e) || o(new Error('namespace and datastore parameters can not be null'));
        for (
          var s = this._getRoot() + 'namespace/' + t,
            a = i ? (Array.isArray(i) ? i : [i]) : [],
            r = [],
            h = [],
            l = 0;
          l < a.length;
          l++
        ) {
          var u = a[l];
          u.featureType
            ? (h.push(u.featureType), u.layerName ? r.push(u.layerName) : r.push(u.featureType))
            : this._isString(u)
            ? (h.push(u), r.push(u))
            : o(new Error('Invalid map parameter of FeatureTypes and Layers'));
        }
        0 == r.length || 0 == h.length
          ? this._ajax(s, { featureTypes: [{ datastore: e }] }, n, o).putJson()
          : this._ajax(
              s,
              { featureTypes: [{ datastore: e, featureTypeNames: h, alias: r }] },
              n,
              o
            ).putJson();
      },
      unpublish: function(t, e, i, n) {
        var o = this._getRoot() + 'namespace/' + t + '/layer/' + e;
        this._ajax(o, null, i, n).doGetDelete();
      },
      _isString: function(t) {
        return '[object String]' === Object.prototype.toString.call(t);
      },
      describeLayer: function(t, e, i, n) {
        var o = this._getRoot() + 'namespace/' + t + '/layer/' + e;
        this._ajax(o, null, i, n).doGet();
      },
      query: function(t, e, i) {
        var n = t.indexOf(':');
        return new Hn(
          n > 0
            ? {
                ims: this,
                namespace: t.substring(0, n),
                layer: t.substring(n + 1),
                geometry: e || 'GEOMETRY',
              }
            : { ims: this, namespace: t, layer: e, geometry: i || 'GEOMETRY' }
        );
      },
      _doQuery: function(t, e, i) {
        var n = this._getRoot() + 'layer/' + t.toKvp();
        this._ajax(n, null, e, i).doGetGeoJson();
      },
      _getRoot: function() {
        return (
          this.options.protocol + '://' + this.options.host + ':' + this.options.port + '/ims/'
        );
      },
      _ajax: function(t, e, i, n) {
        var o = this;
        return ie({
          url: t,
          type: o.options.type,
          timeout: o.options.timeout,
          params: e || {},
          cache: o.options.cache,
          onDone: i,
          onFail: n,
        });
      },
    });
  zi.include({
    getOverlayById: function(t) {
      return this._layers && this._layers[t] ? this._layers[t] : null;
    },
    removeOverlayById: function(t) {
      var e = this.getOverlayById(t);
      e && this.removeLayer(e);
    },
    centerOverlayById: function(t) {
      var e = this.getOverlayById(t);
      e && (e.getBounds ? this.panTo(e.getBounds().getCenter()) : this.panTo(e.getLatLng()));
    },
    fitOverlayBoundsById: function(t) {
      var e = this.getOverlayById(t);
      e && (e.getBounds ? this.fitBounds(e.getBounds()) : this.panTo(e.getLatLng()));
    },
    getOverlays: function() {
      return this._layers;
    },
  });
  var Fn = xn.extend({
      initialize: function(t, e, i, n) {
        (this._url =
          'http://' +
          t +
          ':' +
          e +
          '/QuadServer/maprequest?services=' +
          i +
          '&level={z}&col={x}&row={y}&rowModel=d'),
          u(this, n);
      },
    }),
    Gn = tn.extend({
      options: { onload: function() {} },
      initialize: function(t) {
        u(this, t), this._prepare();
      },
      _prepare: function() {
        var t = this;
        (t._icon = tn.prototype.createIcon.call(this)),
          (t._rotatedIcons = []),
          (t._icon.onload = function() {
            (t._rotatedIcons = t._prepareRotatedIcons(t._icon)),
              t.options.onload.call(t),
              t.__onload__ && t.__onload__.call(t);
          });
      },
      createIcon: function(t) {
        var e = this._rotatedIcons;
        if (null === e || 0 === e.length) return this._icon;
        var i = e[Math.floor((t ? parseFloat(t) : 0) / ((2 * Math.PI) / e.length))];
        return i || this._icon;
      },
      _prepareRotatedIcons: function(t) {
        for (var e = new Array(32), i = 0; i < e.length; i++)
          e[i] = this._rotateIcon(t, (i * Math.PI * 2) / e.length);
        return e;
      },
      _rotateIcon: function(t, e) {
        var i = ht('canvas'),
          n = i.getContext('2d'),
          o = t.width,
          s = t.height;
        return (
          (i.width = o),
          (i.height = s),
          n.save(),
          n.translate(o / 2, s / 2),
          n.rotate(e),
          n.translate(-o / 2, -o / 2),
          n.drawImage(t, 0, 0, o, s),
          n.restore(),
          i
        );
      },
    }),
    Un = yn.extend({
      initialize: function(t) {
        var e = this;
        t.icon &&
          'function' != typeof t.icon &&
          (t.icon.__onload__ = function() {
            e.refresh();
          }),
          (this._tileSizeBounds = new b(new x(0, 0), this.getTileSize())),
          u(this, t);
      },
      createTile: function(t) {
        var e = ht('canvas', 'gmap-tile'),
          i = this.getTileSize();
        return (e.width = i.x), (e.height = i.y), this._drawTile(e.getContext('2d'), t), e;
      },
      _drawTile: function(t, e) {
        for (
          var i,
            n,
            o = this._tileCoordsToBounds(e),
            s = o.pad(0.1),
            a = this.options.markers,
            r = this.getTileSize(),
            h = this,
            l = [],
            u = [],
            c = 'function' == typeof this.options.icon,
            d = 0;
          d < a.length;
          d++
        )
          if (s.contains(a[d].coord)) {
            var _ = this._getRelativePosition(o, a[d].coord, r),
              p = null;
            if (c) {
              var m = this.options.icon(a[d]);
              m.__onload__ ||
                (m.__onload__ = function() {
                  h.refresh();
                }),
                (p = m.createIcon(a[d].angle));
            } else p = this.options.icon.createIcon(a[d].angle);
            (i = _[0] - p.width / 2),
              (n = _[1] - p.height / 2),
              t.drawImage(p, i, n, p.width, p.height),
              l.push(new b(new x(i, n), new x(i + p.width, n + p.height))),
              u.push([d, _[0], _[1] + p.height]);
          }
        for (d = 0; d < u.length; d++) {
          var f = u[d][0];
          this._drawLabel(t, new x(u[d][1], u[d][2]), a[f].label, a[f].labelStyle, l);
        }
      },
      _drawLabel: function(t, e, i, n, o) {
        var n = n || {};
        (t.globalAlpha = 1),
          (t.font = n.font ? n.font : '0.9em sans-serif'),
          (t.fillStyle = n.textColor ? n.textColor : '#000000'),
          (t.textAlign = n.textAlign ? n.textAlign : 'center'),
          (t.textBaseline = n.textBaseline ? n.textBaseline : 'alphabetic'),
          n.shadowColor &&
            ((t.shadowColor = n.shadowColor), (t.shadowBlur = n.shadowBlur ? n.shadowBlur : 5));
        var s = n.offsetX ? n.offsetX : 0,
          a = n.offsetY ? n.offsetY : 0,
          r = 1.1 * t.measureText('M').width,
          h = t.measureText(i).width,
          l = new b(
            new x(e.x + s - h / 2, e.y + a - r / 2),
            new x(e.x + s + h / 2, e.y + a + r / 2)
          );
        if (this._tileSizeBounds.contains(l)) {
          for (var u in o) if (o[u].intersects(l)) return;
          o.push(l), t.fillText(i, e.x + s, e.y + a);
        }
      },
      _update: function() {
        yn.prototype._update.call(this);
      },
      _getRelativePosition: function(t, e, i) {
        return [
          Math.floor((i.x * (e[1] - t.getWest())) / (t.getEast() - t.getWest())),
          Math.floor((i.y * (t.getNorth() - e[0])) / (t.getNorth() - t.getSouth())),
        ];
      },
      refresh: function() {
        for (var t in this._tiles) {
          var e = this._tiles[t];
          this._drawDoubleBufferImage(e);
        }
      },
      _drawDoubleBufferImage: function(t) {
        var e = this.getTileSize(),
          i = ht('canvas', 'gmap-tile'),
          n = i.getContext('2d'),
          o = t.el.getContext('2d');
        (i.width = e.x),
          (i.height = e.y),
          this._drawTile(n, t.coords),
          f(function() {
            o.clearRect(0, 0, e.x, e.y), o.drawImage(i, 0, 0, e.x, e.y), (i = null), (n = null);
          });
      },
    }),
    Vn = Ln.extend({
      options: { collision: !0 },
      initialize: function(t) {
        Ln.prototype.initialize.call(this), (t = u(this, t));
      },
      _initContainer: function() {
        Ln.prototype._initContainer.call(this),
          (this._containerText = ht('canvas')),
          (this._ctxLabel = this._containerText.getContext('2d')),
          pt(this._containerText, 'gmap-zoom-animated'),
          this.getPane().appendChild(this._containerText),
          U(this._containerText, 'mousemove', o(Ln.prototype._onMouseMove, 32, this), this),
          U(
            this._containerText,
            'click dblclick mousedown mouseup contextmenu',
            Ln.prototype._onClick,
            this
          ),
          U(this._containerText, 'mouseout', Ln.prototype._handleMouseOut, this);
      },
      _destroyContainer: function() {
        delete this._ctxLabel,
          lt(this._containerText),
          V(this._containerText),
          delete this._cotainerText,
          Ln.prototype._destroyContainer.call(this);
      },
      _updateTransform: function(t, e) {
        Ln.prototype._updateTransform.call(this, t, e);
        var i = this._map.getZoomScale(e, this._zoom),
          n = Lt(this._container),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          s = this._map.project(this._center, e),
          a = this._map.project(t, e).subtract(s),
          r = o
            .multiplyBy(-i)
            .add(n)
            .add(o)
            .subtract(a);
        Ve ? wt(this._containerText, r, i) : bt(this._containerText, r);
      },
      _update: function() {
        (this._textList = []), bn.prototype._update.call(this);
        var t = this._bounds,
          e = this._containerText,
          i = t.getSize(),
          n = ei ? 2 : 1;
        bt(e, t.min),
          (e.width = n * i.x),
          (e.height = n * i.y),
          (e.style.width = i.x + 'px'),
          (e.style.height = i.y + 'px'),
          (e.style.zIndex = '4'),
          (this._container.style.zIndex = '3'),
          ei && this._ctxLable.scale(2, 2),
          this._ctxLabel.translate(-t.min.x, -t.min.y),
          Ln.prototype._update.call(this);
      },
      _clear: function() {
        this._textList = [];
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctxLabel.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else
          this._ctxLabel.clearRect(0, 0, this._containerText.width, this._containerText.height);
        Ln.prototype._clear.call(this);
      },
      _updatePoly: function(t, e) {
        this._drawing && (Ln.prototype._updatePoly.call(this, t, e), this._text(this._ctxLabel, t));
      },
      _updateCircle: function(t) {
        Ln.prototype._updateCircle.call(this, t), this._text(this._ctxLabel, t);
      },
      _text: function(t, e) {
        if (this._drawing) {
          var i = e.options;
          if (void 0 != i.label) {
            var n = e._point ? e._point : e._map.latLngToLayerPoint(e.getCenter()),
              o = e.options.labelStyle ? e.options.labelStyle : {};
            (t.globalAlpha = 1),
              (t.font = o.font ? o.font : '0.9em sans-serif'),
              (t.fillStyle = o.textColor ? o.textColor : '#000000'),
              (t.textAlign = o.textAlign ? o.textAlign : 'center'),
              (t.textBaseline = o.textBaseline ? o.textBaseline : 'alphabetic'),
              o.shadowColor &&
                ((t.shadowColor = o.shadowColor), (t.shadowBlur = o.shadowBlur ? o.shadowBlur : 5));
            var s = i.label(e.feature),
              a = o.offsetX ? o.offsetX : 0,
              r = o.offsetY ? o.offsetY : 0,
              h = o.padding ? o.padding : 0,
              l = 1.1 * t.measureText('M').width,
              u = t.measureText(s).width,
              c = new b(new x(n.x + a - h, n.y + r - l - h), new x(n.x + a + u + h, n.y + h));
            if (this.options.collision)
              for (var d in this._textList) if (this._textList[d].intersects(c)) return;
            this._textList.push(c), t.fillText(s, n.x + a, n.y + r);
          }
        }
      },
    }),
    qn = Ln.extend({
      _updatePoly: function(t, e) {
        this._drawing && (Ln.prototype._updatePoly.call(this, t, e), this._map.updateLabel(t));
      },
      _updateCircle: function(t) {
        this._drawing && (Ln.prototype._updateCircle.call(this, t), this._map.updateLabel(t));
      },
    }),
    Xn = Ln.extend({
      options: { pane: 'labelPane', collision: !0, zoomAnimation: !0 },
      initialize: function(t) {
        (t = u(this, t)), Ln.prototype.initialize.call(this, t), (this._collisonPool = []);
      },
      _initContainer: function() {
        Ln.prototype._initContainer.call(this),
          pt(this._container, 'gmap-zoom-hide'),
          (this._containerLabel = this._container),
          (this._ctxLabel = this._ctx);
      },
      _update: function() {
        (this._collisionPool = []), Ln.prototype._update.call(this);
      },
      updateLabel: function(t) {
        var e = t.options;
        if (void 0 != e.label) {
          var i = null;
          i = t._gridOffset
            ? t._gridOffset.add(t._point ? t._point : this._getCenter(t))
            : t._point
            ? t._point
            : t._map.latLngToLayerPoint(t.getCenter());
          var n = e.labelStyle ? e.labelStyle : {},
            o = null;
          (o = t.feature
            ? e.label(t.feature)
            : 'function' == typeof e.label
            ? e.label(t)
            : t.properties[e.label]),
            this._drawLabel(this._ctxLabel, i, o, n);
        }
      },
      _getCenter: function(t) {
        var e,
          i,
          n,
          o,
          s,
          a,
          r,
          h,
          l = t._parts[0],
          u = l.length;
        if (!u) return null;
        for (a = r = h = 0, e = 0, i = u - 1; e < u; i = e++)
          (n = l[e]),
            (o = l[i]),
            (s = n.y * o.x - o.y * n.x),
            (r += (n.x + o.x) * s),
            (h += (n.y + o.y) * s),
            (a += 3 * s);
        return 0 === a ? l[0] : [r / a, h / a];
      },
      _drawLabel: function(t, e, i, n) {
        (t.globalAlpha = 1),
          (t.font = n.font ? n.font : '0.9em sans-serif'),
          (t.fillStyle = n.textColor ? n.textColor : '#000000'),
          (t.textAlign = n.textAlign ? n.textAlign : 'center'),
          (t.textBaseline = n.textBaseline ? n.textBaseline : 'alphabetic'),
          n.shadowColor &&
            ((t.shadowColor = n.shadowColor), (t.shadowBlur = n.shadowBlur ? n.shadowBlur : 5));
        var o = n.offsetX ? n.offsetX : 0,
          s = n.offsetY ? n.offsetY : 0,
          a = n.padding ? n.padding : 0,
          r = 1.1 * t.measureText('M').width,
          h = t.measureText(i).width,
          l = new b(new x(e.x + o - a, e.y + s - r - a), new x(e.x + o + h + a, e.y + a));
        if (this.options.collision)
          for (var u in this._collisionPool) if (this._collisionPool[u].intersects(l)) return;
        this._collisionPool.push(l), t.fillText(i, e.x + o, e.y + s);
      },
    });
  zi.addInitHook(function() {
    this.createPane('labelPane').style.zIndex = 420;
    var t = new Xn();
    t.addTo(this), (this._labelLayer = t);
  }),
    zi.include({
      updateLabel: function(t) {
        this._labelLayer.updateLabel(t);
      },
    });
  var Yn = [
      'data:image/png;base64,',
      'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAC7lBMVEUAAAABAQECAgIDAwMEBAQF',
      'BQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcY',
      'GBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKior',
      'KyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+',
      'Pj4/Pz9AQEBBQUFCQkJDQ0NERERGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFS',
      'UlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRl',
      'ZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29xcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5',
      'eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiKioqLi4uMjIyN',
      'jY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+g',
      'oKChoaGioqKkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0',
      'tLS1tbW2tra3t7e4uLi5ubm6urq7u7u9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fI',
      'yMjJycnKysrLy8vMzMzNzc3Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc',
      '3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v',
      '7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///9A5nLSAAAA',
      'AWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB98FHBEuKjDLarAAAAAdaVRY',
      'dENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAAjNJREFUOMtjYEACjExMLCzMTIwM',
      '2AETK7eQhIyslAgvOzM2aU4xTbvAhMyspFAXPWkedCWM7GJGYVUz1+0+fGTfpvnNCdYynEwo8twq',
      'fo1rTt978fbDh3evHl7c1hOty49kCCOPTtK8U08+fPvx4+fPnz++fXpxaXWhhRAzQr9O5uob7779',
      'hIPvHx/sqLISgNnCrpK8+s6nHz+RwI8vT3aVGnJDPMwk5jfvBqo8SMWjDUkKrGAFnEYNJ9+hyQNV',
      'fLo+zUUAZASTeNjaJ99+YoDvr/flKLEAFbBpVp368BML+HJzohU3UAG33Yy7X7Ep+P58XZAwEwOT',
      'UOC65z+wKfj5/lCmLDMDk0T87rfYFXw6W6HGysAik3kYqxOAjrjcpM3GwCKbdQSXgivNOuwMTFLJ',
      '+95ht+Lz+Wp1VgYmkdBNL7Er+HA0V56FgZHXef7Db9jkf7zaEikGjC92vaYLn7Ap+HpvliMPMKyZ',
      'peO3vfiOxYB3x8s02ECRxWPdc+kjpiu+3FvoKwJOESwy0asefEGX//Zid74GOyTBcOoW7njyFdWM',
      'b6+Ot9rwQ3MIE79F9a5Hn74jJ5cXx3vcxeCJklnIqnTD9TdfoEp+fH13b3ebuxQrIlkzCxgmTdt3',
      '4/n7T1++fP7w6u6xhfk24qwo+YpbwSVn4rqDZy9fOX90y6wyXw1+tLzFyMqvZBWcUdHUXJ0b6agh',
      'zI6ZgxlZuIRlVbW11eXFeFhxZHAmZlY2dlYWlPwPAD6nKPWk11d/AAAAAElFTkSuQmCC',
    ].join(''),
    Jn = [
      'data:image/png;base64,',
      'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBI',
      'WXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoPCTgwPYjdqAAAABl0RVh0Q29tbWVudABDcmVhdGVk',
      'IHdpdGggR0lNUFeBDhcAAAAsSURBVFjD7c4xAQAACAOgaf/OM4YPJGDaNo82zwQEBAQEBAQEBAQE',
      'BAQEBA5NiAQ8SOnY7gAAAABJRU5ErkJggg==',
    ].join(''),
    Kn = Fn.extend({
      options: { maskUrl: Yn, maskSize: 200 },
      getMaskSize: function() {
        var t = this.options.maskSize;
        return t instanceof x ? t : new x(t, t);
      },
      setCenter: function(t) {
        if (2 !== arguments.length) {
          if (this._map) {
            var e = this._map.containerPointToLayerPoint(t);
            (e = e.subtract(this.getMaskSize().divideBy(2))),
              this._image.setAttribute('x', e.x),
              this._image.setAttribute('y', e.y);
          }
        } else this.setCenter(new x(arguments[0], arguments[1]));
      },
      setMaskStyle: function(t, e) {
        (this.options.maskSize = e || 400),
          (this.options.maskUrl = t && 'circle' === t ? Yn : t && 'rect' === t ? Jn : t);
        var e = this.getMaskSize();
        this._image &&
          (this._image.setAttribute('width', e.x),
          this._image.setAttribute('height', e.y),
          this._image.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'xlink:href',
            this.options.maskUrl
          ));
      },
      _initContainer: function() {
        if (!this._container) {
          var t = this._map.getRenderer(this)._rootGroup,
            e = t.appendChild(Cn.create('defs')),
            i = t.appendChild(Cn.create('g')),
            o = e.appendChild(Cn.create('mask')),
            s = o.appendChild(Cn.create('image')),
            a = this.getMaskSize();
          o.setAttribute('id', 'gmap-tilelayer-mask-' + n(this)),
            s.setAttribute('width', a.x),
            s.setAttribute('height', a.y),
            s.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.options.maskUrl),
            t.setAttribute('mask', 'url(#' + o.getAttribute('id') + ')'),
            (this._container = i),
            (this._image = s),
            this.setCenter(this._map.getSize().divideBy(2));
        }
      },
      _updateLevels: function() {
        var t = this._tileZoom;
        if (void 0 != t) {
          for (var e in this._levels)
            this._levels[e].el.firstChild ||
              e === t ||
              (lt(this._levels[e].el), this._removeTilesAtZoom(e), delete this._levels[e]);
          var i = this._levels[t];
          if (!i) {
            var n = this._map;
            (i = {
              el: this._container.appendChild(Cn.create('g')),
              origin: n.project(n.unproject(n.getPixelOrigin()), t).round(),
              zoom: t,
            }),
              this._setZoomTransform(i, n.getCenter(), n.getZoom()),
              (this._levels[t] = i);
          }
          return (this._level = i), i;
        }
      },
      _addTile: function(t, e) {
        var i = this._getTilePos(t),
          n = this.getTileSize(),
          o = this._tileCoordsToKey(t),
          s = this.getTileUrl(this._wrapCoords(t)),
          a = e.appendChild(Cn.create('image'));
        a.setAttribute('width', n.x),
          a.setAttribute('height', n.y),
          a.setAttribute('x', i.x),
          a.setAttribute('y', i.y),
          a.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', s),
          (this._tiles[o] = { el: a, coords: t, current: !0 });
      },
    }),
    Qn = Ki.extend({
      initialize: function(t, e) {
        (this.cfg = t),
          (this._el = ht('div', 'gmap-zoom-hide')),
          (this._data = []),
          (this._max = 1),
          (this._min = 0),
          (this.cfg.container = this._el),
          (this._heatmapRender = e);
      },
      onAdd: function(t) {
        var e = t.getSize();
        (this._map = t),
          (this._width = e.x),
          (this._height = e.y),
          (this._el.style.width = e.x + 'px'),
          (this._el.style.height = e.y + 'px'),
          (this._el.style.position = 'absolute'),
          (this._origin = this._map.layerPointToLatLng(new x(0, 0))),
          t.getPanes().overlayPane.appendChild(this._el),
          this._heatmap || (this._heatmap = this._heatmapRender.create(this.cfg)),
          t.on('moveend', this._reset, this),
          this._draw();
      },
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      onRemove: function(t) {
        t.getPanes().overlayPane.removeChild(this._el), t.off('moveend', this._reset, this);
      },
      _draw: function() {
        if (this._map) {
          var t = this._map.getPanes().mapPane._gmap_pos;
          (this._el.style[Qn.CSS_TRANSFORM] =
            'translate(' + -Math.round(t.x) + 'px,' + -Math.round(t.y) + 'px)'),
            this._update();
        }
      },
      _update: function() {
        var t,
          e,
          i,
          n = { max: this._max, min: this._min, data: [] };
        if (
          ((t = this._map.getBounds()),
          (e = this._map.getZoom()),
          (i = Math.pow(2, e)),
          0 != this._data.length)
        ) {
          for (
            var o = [],
              s = this.cfg.scaleRadius ? i : 1,
              a = 0,
              r = 0,
              h = this.cfg.valueField,
              l = this._data.length;
            l--;

          ) {
            var u = this._data[l],
              c = u[h],
              d = u.latlng;
            if (t.contains(d)) {
              (a = Math.max(c, a)), (r = Math.min(c, r));
              var _ = this._map.latLngToContainerPoint(d),
                p = { x: Math.round(_.x), y: Math.round(_.y) };
              p[h] = c;
              var m;
              (m = u.radius ? u.radius * s : (this.cfg.radius || 2) * s), (p.radius = m), o.push(p);
            }
          }
          this.cfg.useLocalExtrema && ((n.max = a), (n.min = r)),
            (n.data = o),
            this._heatmap.setData(n);
        } else this._heatmap && this._heatmap.setData(n);
      },
      setData: function(t) {
        (this._max = t.max || this._max), (this._min = t.min || this._min);
        for (
          var e = this.cfg.latField || 'lat',
            i = this.cfg.lngField || 'lng',
            n = this.cfg.valueField || 'value',
            o = (t = t.data).length,
            s = [];
          o--;

        ) {
          var a = t[o],
            r = { latlng: new C(a[e], a[i]) };
          (r[n] = a[n]), a.radius && (r.radius = a.radius), s.push(r);
        }
        (this._data = s), this._draw();
      },
      addData: function(t) {
        if (t.length > 0) for (var e = t.length; e--; ) this.addData(t[e]);
        else {
          var i = this.cfg.latField || 'lat',
            n = this.cfg.lngField || 'lng',
            o = this.cfg.valueField || 'value',
            s = t,
            a = { latlng: new C(s[i], s[n]) };
          (a[o] = s[o]),
            (this._max = Math.max(this._max, a[o])),
            (this._min = Math.min(this._min, a[o])),
            s.radius && (a.radius = s.radius),
            this._data.push(a),
            this._draw();
        }
      },
      _reset: function() {
        this._origin = this._map.layerPointToLatLng(new x(0, 0));
        var t = this._map.getSize();
        (this._width === t.x && this._height === t.y) ||
          ((this._width = t.x),
          (this._height = t.y),
          (this._el.style.width = this._width + 'px'),
          (this._el.style.height = this._height + 'px'),
          this._heatmap._renderer.setDimensions(this._width, this._height)),
          this._draw();
      },
    });
  Qn.CSS_TRANSFORM = (function() {
    for (
      var t = document.createElement('div'),
        e = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'],
        i = 0;
      i < e.length;
      i++
    ) {
      var n = e[i];
      if (void 0 !== t.style[n]) return n;
    }
    return e[0];
  })();
  var $n = rn.extend({
      _project: function() {
        rn.prototype._project.call(this), (this._radiusY = this._radius);
      },
    }),
    to = tn.extend({
      options: { bgPos: null, canvas: null },
      createIcon: function(t) {
        (t && 'CANVAS' === t.tagName) || document.createElement('canvas');
        var e = this.options,
          i = this.options.canvas;
        if (this.options.bgPos) {
          var n = point(e.bgPos);
          i.style.backgroundPosition = -n.x + 'px ' + -n.y + 'px';
        }
        return this._setIconStyles(i, 'icon'), i;
      },
      createShadow: function() {
        return null;
      },
    }),
    eo = v.extend({
      options: { cached: !0, load: ne, error: ne, done: ne, files: [] },
      initialize: function(t) {
        u(this, t || {}),
          (this._css_files = []),
          (this._js_files = []),
          (this._place = document.getElementsByTagName('head')[0]),
          this._splitJSCSS(this._js_files, this._css_files);
      },
      _splitJSCSS: function(t, e) {
        for (var i = this.options.files, n = 0; n < i.length; ++n)
          if (oe(i[n], '.css')) e.push(i[n]);
          else {
            if (!oe(i[n], '.js')) throw 'Error unknown filetype "' + i[n] + '".';
            t.push(i[n]);
          }
      },
      load: function() {
        for (var t = 0; t < this._css_files.length; ++t) this._loadStyle(this._css_files[t]);
        this._js_files.length > 0 && this._loadScript(0);
      },
      _loadStyle: function(t) {
        var e = document.createElement('link');
        (e.rel = 'stylesheet'),
          (e.type = 'text/css'),
          (e.href = this.options.cached ? t : this._withNoCache(t));
        var i = this;
        (e.onload = function() {
          i.options.load(t);
        }),
          (e.onerror = function() {
            i.options.error(t);
          }),
          this._place.appendChild(e);
      },
      _loadScript: function(t) {
        var e = this,
          i = this._js_files[t],
          n = document.createElement('script');
        (n.type = 'text/javascript'),
          (n.src = this.options.cached ? i : this._withNoCache(i)),
          (n.onload = function() {
            e.options.load(i),
              t + 1 >= e._js_files.length ? e.options.done() : e._loadScript(t + 1);
          }),
          (n.onerror = function() {
            e.options.error(i),
              t + 1 >= e._js_files.length ? e.options.done() : e._loadScript(t + 1);
          }),
          this._place.appendChild(n);
      },
      _withNoCache: function(t) {
        return (
          -1 === t.indexOf('?')
            ? (t += '?n_c=' + new Date().getTime())
            : (t += '&n_c=' + new Date().getTime()),
          t
        );
      },
    }),
    io = {},
    no = v.extend({
      options: {},
      initialize: function(t) {
        u(this, t || {});
      },
      load: function(t, e) {
        if (!t) throw 'can not in parameters';
        var i = this._tryGMapPath();
        if (null === i) throw 'Can not find default GMap library folder';
        var n = t.toLowerCase();
        if (this._isload(n)) e.done(t);
        else {
          if (((e = e || {}), 'markercluster' === n)) this._loadMarkerCluster(i, e);
          else if ('heatmap' === n) this._loadHeatmap(i, e);
          else if ('density-heatmap' === n) this._loadDensityHeatmap(i, e);
          else if ('curve' === n) this._loadCurve(i, e);
          else if ('vector-tile' === n) this._loadVectorTile(i, e);
          else if ('gts' === n) this._loadGTS(i, e);
          else if ('draw' === n) this._loadDraw(i, e);
          else if ('moving-marker' === n) this._loadMovingMarker(i, e);
          else if ('animated-sector' === n)
            this._loadPlugin(i, e, 'animated-sector', ['gmap.animated-sector.js']);
          else {
            if ('leading-line' !== n) throw 'unknown plugin "' + t + '"';
            this._loadPlugin(i, e, 'leading-line', ['gmap.leading-line.js']);
          }
          this._register(n);
        }
      },
      _register: function(t) {
        io[t] = 'loaded';
      },
      _isload: function(t) {
        return io[t];
      },
      _tryGMapPath: function() {
        for (var t = document.querySelectorAll('script[src]'), e = 0; e < t.length; e++) {
          var i = t[e].src.split('?')[0];
          if (oe(i, 'gmap.js') || oe(i, 'gmap-src.js'))
            return (
              i
                .split('/')
                .slice(0, -1)
                .join('/') + '/plugins/'
            );
        }
        return null;
      },
      _loadMarkerCluster: function(t, e) {
        (e.files = [
          t + 'markercluster/MarkerCluster.css',
          t + 'markercluster/MarkerCluster.Default.css',
          t + 'markercluster/gmap.markercluster.js',
        ]),
          new eo(e).load();
      },
      _loadHeatmap: function(t, e) {
        (e.files = [t + 'heatmap/heatmap.min.js']), new eo(e).load();
      },
      _loadDensityHeatmap: function(t, e) {
        (e.files = [t + 'density-heatmap/gmap.density-heatmap.js']), new eo(e).load();
      },
      _loadCurve: function(t, e) {
        (e.files = [t + 'curve/gmap.curve.js']), new eo(e).load();
      },
      _loadVectorTile: function(t, e) {
        (e.files = [t + 'vector-tile/gmap.vector-tile.js']), new eo(e).load();
      },
      _loadGTS: function(t, e) {
        (e.files = [t + 'gts/gmap.topology-suite.js']), new eo(e).load();
      },
      _loadDraw: function(t, e) {
        (e.files = [t + 'draw/gmap.draw.js', t + 'draw/GJBLine.min.js', t + 'draw/gmap.draw.css']),
          new eo(e).load();
      },
      _loadMovingMarker: function(t, e) {
        (e.files = [t + 'moving-marker/gmap.moving-marker.js']), new eo(e).load();
      },
      _loadPlugin: function(t, e, i, n) {
        for (var o = [], s = 0; s < n.length; s++) o.push(t + i + '/' + n[s]);
        (e.files = o), new eo(e).load();
      },
    });
  zi.addInitHook(function() {
    for (
      var t = this.options.plugins ? this.options.plugins : [], e = GMap.pluginManager(), i = 0;
      i < t.length;
      i++
    )
      e.load(t[i], {
        done: function() {
          console.log('plugin loaded.');
        },
        fail: function(t, e) {
          console.log('load ' + e + ' failed');
        },
      });
  });
  var oo = window.GMap;
  (window.GMap = t),
    (Object.freeze = se),
    (t.version = '1.3.1+HEAD.ba6f97f'),
    (t.noConflict = function() {
      return (window.GMap = oo), this;
    }),
    (t.Control = Si),
    (t.control = ki),
    (t.Browser = si),
    (t.Evented = fe),
    (t.Mixin = ji),
    (t.Util = pe),
    (t.Class = v),
    (t.Handler = Oi),
    (t.extend = e),
    (t.bind = i),
    (t.stamp = n),
    (t.setOptions = u),
    (t.DomEvent = xi),
    (t.DomUtil = Ci),
    (t.PosAnimation = Ai),
    (t.Draggable = Wi),
    (t.LineUtil = Fi),
    (t.PolyUtil = Gi),
    (t.Point = x),
    (t.point = w),
    (t.Bounds = b),
    (t.bounds = P),
    (t.Transformation = z),
    (t.transformation = S),
    (t.Projection = qi),
    (t.LatLng = C),
    (t.latLng = A),
    (t.LatLngBounds = T),
    (t.latLngBounds = M),
    (t.CRS = ve),
    (t.GeoJSON = un),
    (t.geoJSON = Xt),
    (t.geoJson = dn),
    (t.Layer = Ki),
    (t.LayerGroup = Qi),
    (t.layerGroup = function(t, e) {
      return new Qi(t, e);
    }),
    (t.FeatureGroup = $i),
    (t.featureGroup = function(t) {
      return new $i(t);
    }),
    (t.ImageOverlay = _n),
    (t.imageOverlay = function(t, e, i) {
      return new _n(t, e, i);
    }),
    (t.VideoOverlay = pn),
    (t.videoOverlay = function(t, e, i) {
      return new pn(t, e, i);
    }),
    (t.DivOverlay = mn),
    (t.Popup = fn),
    (t.popup = function(t, e) {
      return new fn(t, e);
    }),
    (t.Tooltip = gn),
    (t.tooltip = function(t, e) {
      return new gn(t, e);
    }),
    (t.Icon = tn),
    (t.icon = function(t) {
      return new tn(t);
    }),
    (t.DivIcon = vn),
    (t.divIcon = function(t) {
      return new vn(t);
    }),
    (t.Marker = on),
    (t.marker = function(t, e) {
      return new on(t, e);
    }),
    (t.TileLayer = xn),
    (t.tileLayer = Yt),
    (t.GridLayer = yn),
    (t.gridLayer = function(t) {
      return new yn(t);
    }),
    (t.SVG = Cn),
    (t.svg = Kt),
    (t.Renderer = bn),
    (t.Canvas = Ln),
    (t.canvas = Jt),
    (t.Path = sn),
    (t.CircleMarker = an),
    (t.circleMarker = function(t, e) {
      return new an(t, e);
    }),
    (t.Circle = rn),
    (t.circle = function(t, e, i) {
      return new rn(t, e, i);
    }),
    (t.Polyline = hn),
    (t.polyline = function(t, e) {
      return new hn(t, e);
    }),
    (t.Polygon = ln),
    (t.polygon = function(t, e) {
      return new ln(t, e);
    }),
    (t.Rectangle = An),
    (t.rectangle = function(t, e) {
      return new An(t, e);
    }),
    (t.Map = zi),
    (t.map = function(t, e) {
      return new zi(t, e);
    }),
    (t.Ajax = Nn),
    (t.ajax = ie),
    (t.Ims4 = Wn),
    (t.ims4 = function(t) {
      return new Wn(t);
    }),
    (t.QuadServerImgLayer = Fn),
    (t.tileLayerQSImg = function(t, e, i, n) {
      return new Fn(t, e, i, n);
    }),
    (t.CanvasMarkerTileLayer = Un),
    (t.tileLayerCanvasMarker = function(t) {
      return new Un(t);
    }),
    (t.LabelCollisionCanvas = Vn),
    (t.canvasEx = function(t) {
      return ii ? new Vn(t) : null;
    }),
    (t.LabelCanvas = qn),
    (t.labelCanvas = function(t) {
      return ii ? new qn(t) : null;
    }),
    (t.LabelLayer = Xn),
    (t.TileLayerMask = Kn),
    (t.tileLayerMask = function(t, e, i, n) {
      return new Kn(t, e, i, n);
    }),
    (t.HeatmapLayer = Qn),
    (t.heatmapLayer = function(t, e) {
      return new Qn(t, e);
    }),
    (t.RoundCircle = $n),
    (t.roundCircle = function(t, e, i) {
      return new $n(t, e, i);
    }),
    (t.RotateIcon = Gn),
    (t.rotateIcon = function(t) {
      return new Gn(t);
    }),
    (t.CanvasIcon = to),
    (t.canvasIcon = function(t) {
      return new to(t);
    }),
    (t.ScriptLoader = eo),
    (t.scriptLoader = function(t) {
      return new eo(t);
    }),
    (t.PluginManager = no),
    (t.pluginManager = function(t) {
      return new no(t);
    });
});
