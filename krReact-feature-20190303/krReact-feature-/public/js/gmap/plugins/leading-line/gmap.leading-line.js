(GMap.LeadingLine = GMap.Polyline.extend({
  options: {
    weight: 14,
    color: '#ffff00',
    borderSize: 2,
    borderColor: '#aaaaaa',
    signColor: '#ffffff',
    signInterval: 60,
  },
  initialize: function(t, e) {
    GMap.Polyline.prototype.initialize.call(this, t, e),
      (this.leadingSign = this._createLeadingSign());
  },
  _updatePath: function() {
    this._renderer._updatePolyLeading(this, this.options.weight);
  },
  _clickTolerance: function() {
    return GMap.Polyline.prototype._clickTolerance.call(this) + this.options.weight;
  },
  _createLeadingSign: function() {
    var t = GMap.DomUtil.create('canvas'),
      e = t.getContext('2d'),
      i = 1 * this.options.weight,
      n = this.options.weight;
    return (
      (t.width = i),
      (t.height = n),
      e.beginPath(),
      e.moveTo(0, 0),
      e.lineTo((2 * i) / 3, n / 2),
      e.lineTo(0, n),
      (e.lineWidth = 3),
      (e.strokeStyle = this.options.signColor),
      (e.lineCap = 'butt'),
      (e.lineJoin = 'miter'),
      e.stroke(),
      t
    );
  },
  _rotateLeadingSign: function(t) {
    var e = GMap.DomUtil.create('canvas'),
      i = e.getContext('2d'),
      n = this.leadingSign.width,
      a = this.leadingSign.height;
    return (
      (e.width = n),
      (e.height = a),
      i.save(),
      i.translate(n / 2, a / 2),
      i.rotate(t),
      i.translate(-n / 2, -n / 2),
      i.drawImage(this.leadingSign, 0, 0, n, a),
      i.restore(),
      e
    );
  },
})),
  (GMap.Canvas.prototype._updatePolyLeading = function(t, e, i) {
    if (this._drawing) {
      var n,
        a,
        o,
        r,
        l = t._parts,
        h = l.length,
        g = this._ctx;
      if (h) {
        for (this._drawnLayers[t._leaflet_id] = t, g.save(), g.beginPath(), n = 0; n < h; n++) {
          for (a = 0, o = l[n].length; a < o; a++)
            (r = l[n][a]), g[a ? 'lineTo' : 'moveTo'](r.x, r.y);
          i && g.closePath();
        }
        for (this._fillStrokeLeadingBackground(g, t), g.beginPath(), n = 0; n < h; n++) {
          for (a = 0, o = l[n].length; a < o; a++)
            (r = l[n][a]), g[a ? 'lineTo' : 'moveTo'](r.x, r.y);
          i && g.closePath();
        }
        this._fillStrokeLeadingForground(g, t);
        var s,
          p,
          d,
          f,
          c = 50,
          y = t.options.signInterval;
        for (n = 0; n < h; n++)
          for (a = 0, o = l[n].length - 1; a < o; a++)
            if (
              ((s = l[n][a]),
              (p = l[n][a + 1]),
              (d = Math.sqrt(Math.pow(p.x - s.x, 2) + Math.pow(p.y - s.y, 2))),
              (c += d),
              !((f = parseInt(c / y)) < 1))
            ) {
              thelta = Math.atan2(p.y - s.y, p.x - s.x);
              for (var u = t._rotateLeadingSign(thelta), w = 1; w <= f; w++)
                (c -= y),
                  g.drawImage(
                    u,
                    s.x + (d - c) * Math.cos(thelta) - u.width / 2,
                    s.y + (d - c) * Math.sin(thelta) - u.height / 2
                  );
            }
        g.restore();
      }
    }
  }),
  (GMap.Canvas.prototype._fillStrokeLeadingBackground = function(t, e) {
    var i = e.options;
    0 !== i.weight &&
      ((t.globalAlpha = i.opacity),
      (t.lineWidth = i.weight),
      (t.strokeStyle = i.borderColor),
      (t.lineCap = i.lineCap),
      (t.lineJoin = i.lineJoin),
      t.stroke());
  }),
  (GMap.Canvas.prototype._fillStrokeLeadingForground = function(t, e) {
    var i = e.options;
    0 !== i.weight &&
      ((t.globalAlpha = i.opacity),
      (t.lineWidth = i.weight - 2 * i.borderSize),
      (t.strokeStyle = i.color),
      (t.lineCap = i.lineCap),
      (t.lineJoin = i.lineJoin),
      t.stroke());
  }),
  (GMap.leadingLine = function(t, e) {
    return new GMap.LeadingLine(t, e);
  });
