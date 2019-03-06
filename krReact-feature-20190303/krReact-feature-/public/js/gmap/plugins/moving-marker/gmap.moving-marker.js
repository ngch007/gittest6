(GMap.interpolatePosition = function(t, i, n, a) {
  var s = a / n;
  return (
    (s = s > 0 ? s : 0),
    (s = s > 1 ? 1 : s),
    GMap.latLng(t.lat + s * (i.lat - t.lat), t.lng + s * (i.lng - t.lng))
  );
}),
  (GMap.Marker.MovingMarker = GMap.Marker.extend({
    statics: { notStartedState: 0, endedState: 1, pausedState: 2, runState: 3 },
    options: { autostart: !1, loop: !1 },
    initialize: function(t, i, n) {
      GMap.Marker.prototype.initialize.call(this, t[0], n),
        (this._latlngs = t.map(function(t, i) {
          return GMap.latLng(t);
        })),
        i instanceof Array
          ? (this._durations = i)
          : (this._durations = this._createDurations(this._latlngs, i)),
        (this._currentDuration = 0),
        (this._currentIndex = 0),
        (this._state = GMap.Marker.MovingMarker.notStartedState),
        (this._startTime = 0),
        (this._startTimeStamp = 0),
        (this._pauseStartTime = 0),
        (this._animId = 0),
        (this._animRequested = !1),
        (this._currentLine = []),
        (this._stations = {});
    },
    isRunning: function() {
      return this._state === GMap.Marker.MovingMarker.runState;
    },
    isEnded: function() {
      return this._state === GMap.Marker.MovingMarker.endedState;
    },
    isStarted: function() {
      return this._state !== GMap.Marker.MovingMarker.notStartedState;
    },
    isPaused: function() {
      return this._state === GMap.Marker.MovingMarker.pausedState;
    },
    start: function() {
      this.isRunning() ||
        (this.isPaused()
          ? this.resume()
          : (this._loadLine(0), this._startAnimation(), this.fire('start')));
    },
    resume: function() {
      this.isPaused() &&
        ((this._currentLine[0] = this.getLatLng()),
        (this._currentDuration -= this._pauseStartTime - this._startTime),
        this._startAnimation());
    },
    pause: function() {
      this.isRunning() &&
        ((this._pauseStartTime = Date.now()),
        (this._state = GMap.Marker.MovingMarker.pausedState),
        this._stopAnimation(),
        this._updatePosition());
    },
    stop: function(t) {
      this.isEnded() ||
        (this._stopAnimation(),
        void 0 === t && ((t = 0), this._updatePosition()),
        (this._state = GMap.Marker.MovingMarker.endedState),
        this.fire('end', { elapsedTime: t }));
    },
    addLatLng: function(t, i) {
      this._latlngs.push(GMap.latLng(t)), this._durations.push(i);
    },
    moveTo: function(t, i) {
      this._stopAnimation(),
        (this._latlngs = [this.getLatLng(), GMap.latLng(t)]),
        (this._durations = [i]),
        (this._state = GMap.Marker.MovingMarker.notStartedState),
        this.start(),
        (this.options.loop = !1);
    },
    addStation: function(t, i) {
      t > this._latlngs.length - 2 || t < 1 || (this._stations[t] = i);
    },
    onAdd: function(t) {
      if ((GMap.Marker.prototype.onAdd.call(this, t), this.options.autostart && !this.isStarted()))
        return void this.start();
      this.isRunning() && this._resumeAnimation();
    },
    onRemove: function(t) {
      GMap.Marker.prototype.onRemove.call(this, t), this._stopAnimation();
    },
    _createDurations: function(t, i) {
      for (var n = t.length - 1, a = [], s = 0, e = 0, r = 0; r < n; r++)
        (e = t[r + 1].distanceTo(t[r])), a.push(e), (s += e);
      var o = i / s,
        h = [];
      for (r = 0; r < a.length; r++) h.push(a[r] * o);
      return h;
    },
    _startAnimation: function() {
      (this._state = GMap.Marker.MovingMarker.runState),
        (this._animId = GMap.Util.requestAnimFrame(
          function(t) {
            (this._startTime = Date.now()), (this._startTimeStamp = t), this._animate(t);
          },
          this,
          !0
        )),
        (this._animRequested = !0);
    },
    _resumeAnimation: function() {
      this._animRequested ||
        ((this._animRequested = !0),
        (this._animId = GMap.Util.requestAnimFrame(
          function(t) {
            this._animate(t);
          },
          this,
          !0
        )));
    },
    _stopAnimation: function() {
      this._animRequested && (GMap.Util.cancelAnimFrame(this._animId), (this._animRequested = !1));
    },
    _updatePosition: function() {
      var t = Date.now() - this._startTime;
      this._animate(this._startTimeStamp + t, !0);
    },
    _loadLine: function(t) {
      (this._currentIndex = t),
        (this._currentDuration = this._durations[t]),
        (this._currentLine = this._latlngs.slice(t, t + 2));
    },
    _updateLine: function(t) {
      var i = t - this._startTimeStamp;
      if (i <= this._currentDuration) return i;
      for (var n, a = this._currentIndex, s = this._currentDuration; i > s; ) {
        if (((i -= s), void 0 !== (n = this._stations[a + 1]))) {
          if (i < n) return this.setLatLng(this._latlngs[a + 1]), null;
          i -= n;
        }
        if (++a >= this._latlngs.length - 1) {
          if (!this.options.loop)
            return this.setLatLng(this._latlngs[this._latlngs.length - 1]), this.stop(i), null;
          (a = 0), this.fire('loop', { elapsedTime: i });
        }
        s = this._durations[a];
      }
      return (
        this._loadLine(a), (this._startTimeStamp = t - i), (this._startTime = Date.now() - i), i
      );
    },
    _animate: function(t, i) {
      this._animRequested = !1;
      var n = this._updateLine(t);
      if (!this.isEnded()) {
        if (null != n) {
          var a = GMap.interpolatePosition(
            this._currentLine[0],
            this._currentLine[1],
            this._currentDuration,
            n
          );
          this.setLatLng(a);
        }
        i ||
          ((this._animId = GMap.Util.requestAnimFrame(this._animate, this, !1)),
          (this._animRequested = !0));
      }
    },
  })),
  (GMap.Marker.movingMarker = function(t, i, n) {
    return new GMap.Marker.MovingMarker(t, i, n);
  });
