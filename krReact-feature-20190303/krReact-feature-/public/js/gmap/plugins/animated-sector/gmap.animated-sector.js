(GMap.AnimatedSector = GMap.Circle.extend({
  options: {
    pixelRadius: !0,
    fill: !0,
    fillColor: '#004CB3',
    fillOpacity: 0.2,
    fillGradient: !0,
    border: 0,
    borderColor: '#dddddd',
    borderDashLine: !1,
    directionAngle: 0,
    viewAngleRange: 140,
  },
  initialize: function(e, t, i) {
    GMap.Circle.prototype.initialize.call(this, e, t, i),
      (t = GMap.Util.setOptions(this, t)),
      (this._timer_pendulum = null);
  },
  _updatePath: function() {
    this._renderer._updateSector(this);
  },
  pendulum: function(e, t, i, n) {
    null !== this._timer_pendulum && clearInterval(this._timer_pendulum);
    var r = this.options.directionAngle,
      l = 1,
      a = this;
    this._timer_pendulum = setInterval(function() {
      r >= i && (l = -1), r <= t && (l = 1), (r += l * e), a.setStyle({ directionAngle: r });
    }, n || 200);
  },
  stopPendulum: function() {
    this._timer_pendulum && clearInterval(this._timer_pendulum);
  },
  spin: function(e, t) {
    this.pendulum(e, this.options.directionAngle, Number.MAX_VALUE, t);
  },
  stopSpin: function() {
    this.stopPendulum();
  },
})),
  (GMap.Canvas.prototype._updateSector = function(e) {
    if (this._drawing && !e._empty()) {
      var t = e._point,
        i = this._ctx,
        n = e.options,
        r = Math.max(Math.round(e._radius), 1),
        l = (Math.max(Math.round(e._radiusY), 1) || r) / r;
      if (
        ((this._drawnLayers[e._leaflet_id] = e),
        i.save(),
        1 !== l && i.scale(1, l),
        i.beginPath(),
        i.translate(t.x, t.y / l),
        i.moveTo(0, 0),
        i.arc(
          0,
          0,
          r,
          (-(n.directionAngle - n.viewAngleRange / 2) * Math.PI) / 180,
          (-(n.directionAngle + n.viewAngleRange / 2) * Math.PI) / 180,
          !0
        ),
        i.closePath(),
        n.fill)
      ) {
        if (n.fillGradient) {
          var a = i.createRadialGradient(0, 0, Math.floor(r / 20), 0, 0, r);
          a.addColorStop(0, n.fillColor), a.addColorStop(1, '#ffffff'), (i.fillStyle = a);
        } else i.fillStyle = n.fillColor;
        (i.globalAlpha = n.fillOpacity), i.fill();
      }
      return (
        n.border > 0 &&
          ((i.lineWidth = n.border),
          (i.strokeStyle = n.borderColor),
          n.borderDashLine &&
            i.setLineDash(GMap.Util.isArray(n.borderDashLine) ? n.borderDashLine : [8, 4]),
          i.stroke()),
        i.restore(),
        i
      );
    }
  }),
  (GMap.animatedSector = function(e, t, i) {
    return new GMap.AnimatedSector(e, t, i);
  }),
  (GMap.sector = function(e, t, i) {
    return new GMap.AnimatedSector(e, t, i);
  });
