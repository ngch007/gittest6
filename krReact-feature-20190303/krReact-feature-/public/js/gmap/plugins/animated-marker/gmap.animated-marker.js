GMap.AnimatedMarker = GMap.Marker.extend({
  options: {
    // meters
    distance: 200,
    // ms
    interval: 1000,
    // animate on add?
    autoStart: true,
    // callback onend
    onEnd: function() {},
    clickable: false,
  },

  initialize: function(latlngs, options) {
    this.setLine(latlngs);
    GMap.Marker.prototype.initialize.call(this, latlngs[0], options);
  },

  // Breaks the line up into tiny chunks (see options) ONLY if CSS3 animations
  // are not supported.
  _chunk: function(latlngs) {
    var i,
      len = latlngs.length,
      chunkedLatLngs = [];

    for (i = 1; i < len; i++) {
      var cur = latlngs[i - 1],
        next = latlngs[i],
        dist = cur.distanceTo(next),
        factor = this.options.distance / dist,
        dLat = factor * (next.lat - cur.lat),
        dLng = factor * (next.lng - cur.lng);

      if (dist > this.options.distance) {
        while (dist > this.options.distance) {
          cur = new GMap.LatLng(cur.lat + dLat, cur.lng + dLng);
          dist = cur.distanceTo(next);
          chunkedLatLngs.push(cur);
        }
      } else {
        chunkedLatLngs.push(cur);
      }
    }
    chunkedLatLngs.push(latlngs[len - 1]);

    return chunkedLatLngs;
  },

  onAdd: function(map) {
    GMap.Marker.prototype.onAdd.call(this, map);

    // Start animating when added to the map
    if (this.options.autoStart) {
      this.start();
    }
  },

  animate: function() {
    var self = this,
      len = this._latlngs.length,
      speed = this.options.interval;
    // Normalize the transition speed from vertex to vertex
    if (this._i < len && this._i > 0) {
      speed =
        (this._latlngs[this._i - 1].distanceTo(this._latlngs[this._i]) / this.options.distance) *
        this.options.interval;
    }

    // Only if CSS3 transitions are supported
    if (GMap.DomUtil.TRANSITION) {
      if (this._icon) {
        this._icon.style[GMap.DomUtil.TRANSITION] = 'all ' + speed + 'ms linear';
      }
      if (this._shadow) {
        this._shadow.style[GMap.DomUtil.TRANSITION] = 'all ' + speed + 'ms linear';
      }
    }

    // Move to the next vertex
    this.setLatLng(this._latlngs[this._i]);
    this._i++;

    // Queue up the animation to the next next vertex
    this._tid = setTimeout(function() {
      if (self._i === len) {
        self.options.onEnd.apply(self, Array.prototype.slice.call(arguments));
      } else {
        self.animate();
      }
    }, speed);
  },

  // Start the animation
  start: function() {
    this.animate();
  },

  // Stop the animation in place
  stop: function() {
    if (this._tid) {
      clearTimeout(this._tid);
    }
  },

  setLine: function(latlngs) {
    if (GMap.DomUtil.TRANSITION) {
      // No need to to check up the line if we can animate using CSS3
      this._latlngs = latlngs;
    } else {
      // Chunk up the lines into options.distance bits
      this._latlngs = this._chunk(latlngs);
      this.options.distance = 10;
      this.options.interval = 30;
    }
    this._i = 0;
  },

  update: function() {
    console.log('update');
    console.log(this);
    if (this._icon && this._map) {
      if (GMap.DomUtil.TRANSITION) {
        if (this._icon) {
          this._icon.style[GMap.DomUtil.TRANSITION] = 'all ' + 0 + 'ms linear';
        }
        if (this._shadow) {
          this._shadow.style[GMap.DomUtil.TRANSITION] = 'all ' + 0 + 'ms linear';
        }
      }

      var pos = this._map.latLngToLayerPoint(this._latlng).round();
      console.log(pos);
      this._setPos(pos);

      /*
		if (GMap.DomUtil.TRANSITION) {
			speed = 1000;
		  if (this._icon) { this._icon.style[GMap.DomUtil.TRANSITION] = ('all ' + speed + 'ms linear'); }
		  if (this._shadow) { this._shadow.style[GMap.DomUtil.TRANSITION] = 'all ' + speed + 'ms linear'; }
		}
		*/
    }

    return this;
  },
});

GMap.animatedMarker = function(latlngs, options) {
  return new GMap.AnimatedMarker(latlngs, options);
};
