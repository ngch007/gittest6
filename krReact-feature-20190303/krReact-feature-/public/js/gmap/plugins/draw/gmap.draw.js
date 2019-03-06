!(function(t, e, i) {
  function a(t, e) {
    for (; (t = t.parentElement) && !t.classList.contains(e); );
    return t;
  }
  (GMap.drawVersion = '1.0.0+e671303'),
    (GMap.Draw = {}),
    (GMap.drawLocal = {
      draw: {
        toolbar: {
          actions: { title: '取消绘制', text: '取消' },
          finish: { title: '结束绘制', text: '结束' },
          undo: { title: '删除最后一点', text: '删除最后一点' },
          buttons: {
            polyline: '绘制线',
            polygon: '绘制面',
            rectangle: '绘制矩形',
            circle: '绘制圆',
            marker: '绘制地标',
          },
        },
        handlers: {
          circle: { tooltip: { start: '点击并拖拽绘制圆' }, radius: '半径' },
          circlemarker: { tooltip: { start: '点击放置地标' } },
          marker: { tooltip: { start: '点击地图放置一个地标' } },
          polygon: {
            tooltip: {
              start: '点击开始绘制图形',
              cont: '继续点击绘制图形',
              end: '点击第一个点结束绘制',
            },
          },
          polyline: {
            error: '<strong>错误:</strong> 图形边界不能相交!',
            tooltip: {
              start: '点击开始绘制线',
              cont: '点击继续绘制线',
              end: '点击第一个点结束绘制',
            },
          },
          rectangle: { tooltip: { start: '点击拖拽绘制矩形' } },
          simpleshape: { tooltip: { end: '释放鼠标结束绘制' } },
        },
      },
      edit: {
        toolbar: {
          actions: {
            save: { title: '保存更改', text: '保存' },
            cancel: { title: '取消编辑, 放弃所有更改', text: '取消' },
            clearAll: { title: '清空所有图层', text: '清空' },
          },
          buttons: {
            edit: '编辑图层',
            editDisabled: '没有可编辑图层',
            remove: '删除图层',
            removeDisabled: '没有图层可删除',
          },
        },
        handlers: {
          edit: { tooltip: { text: '拖拽控制点编辑图元', subtext: '点击取消按钮放弃更改' } },
          remove: { tooltip: { text: '点击要删除的图元' } },
        },
      },
    }),
    (GMap.Draw.Event = {}),
    (GMap.Draw.Event.CREATED = 'draw:created'),
    (GMap.Draw.Event.EDITED = 'draw:edited'),
    (GMap.Draw.Event.DELETED = 'draw:deleted'),
    (GMap.Draw.Event.DRAWSTART = 'draw:drawstart'),
    (GMap.Draw.Event.DRAWSTOP = 'draw:drawstop'),
    (GMap.Draw.Event.DRAWVERTEX = 'draw:drawvertex'),
    (GMap.Draw.Event.EDITSTART = 'draw:editstart'),
    (GMap.Draw.Event.EDITMOVE = 'draw:editmove'),
    (GMap.Draw.Event.EDITRESIZE = 'draw:editresize'),
    (GMap.Draw.Event.EDITVERTEX = 'draw:editvertex'),
    (GMap.Draw.Event.EDITSTOP = 'draw:editstop'),
    (GMap.Draw.Event.DELETESTART = 'draw:deletestart'),
    (GMap.Draw.Event.DELETESTOP = 'draw:deletestop'),
    (GMap.Draw.Event.TOOLBAROPENED = 'draw:toolbaropened'),
    (GMap.Draw.Event.TOOLBARCLOSED = 'draw:toolbarclosed'),
    (GMap.Draw.Event.MARKERCONTEXT = 'draw:markercontext'),
    (GMap.Draw = GMap.Draw || {}),
    (GMap.Draw.Feature = GMap.Handler.extend({
      initialize: function(t, e) {
        (this._map = t),
          (this._container = t._container),
          (this._overlayPane = t._panes.overlayPane),
          (this._popupPane = t._panes.popupPane),
          e &&
            e.shapeOptions &&
            (e.shapeOptions = GMap.Util.extend({}, this.options.shapeOptions, e.shapeOptions)),
          GMap.setOptions(this, e);
        var i = GMap.version.split('.');
        1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2
          ? GMap.Draw.Feature.include(GMap.Evented.prototype)
          : GMap.Draw.Feature.include(new GMap.Evented());
      },
      enable: function() {
        this._enabled ||
          (GMap.Handler.prototype.enable.call(this),
          this.fire('enabled', { handler: this.type }),
          this._map.fire(GMap.Draw.Event.DRAWSTART, { layerType: this.type }));
      },
      disable: function() {
        this._enabled &&
          (GMap.Handler.prototype.disable.call(this),
          this._map.fire(GMap.Draw.Event.DRAWSTOP, { layerType: this.type }),
          this.fire('disabled', { handler: this.type }));
      },
      addHooks: function() {
        var t = this._map;
        t &&
          (GMap.DomUtil.disableTextSelection(),
          t.getContainer().focus(),
          (this._tooltip = new GMap.Draw.Tooltip(this._map)),
          GMap.DomEvent.on(this._container, 'keyup', this._cancelDrawing, this));
      },
      removeHooks: function() {
        this._map &&
          (GMap.DomUtil.enableTextSelection(),
          this._tooltip.dispose(),
          (this._tooltip = null),
          GMap.DomEvent.off(this._container, 'keyup', this._cancelDrawing, this));
      },
      setOptions: function(t) {
        GMap.setOptions(this, t);
      },
      _fireCreatedEvent: function(t) {
        this._map.fire(GMap.Draw.Event.CREATED, { layer: t, layerType: this.type });
      },
      _cancelDrawing: function(t) {
        27 === t.keyCode &&
          (this._map.fire('draw:canceled', { layerType: this.type }), this.disable());
      },
    })),
    (GMap.Draw.Polyline = GMap.Draw.Feature.extend({
      statics: { TYPE: 'polyline' },
      Poly: GMap.Polyline,
      options: {
        allowIntersection: !0,
        repeatMode: !1,
        drawError: { color: '#b00b00', timeout: 2500 },
        icon: new GMap.DivIcon({
          iconSize: new GMap.Point(8, 8),
          className: 'gmap-div-icon gmap-editing-icon',
        }),
        touchIcon: new GMap.DivIcon({
          iconSize: new GMap.Point(20, 20),
          className: 'gmap-div-icon gmap-editing-icon gmap-touch-icon',
        }),
        guidelineDistance: 20,
        maxGuideLineLength: 4e3,
        shapeOptions: {
          stroke: !0,
          color: '#3388ff',
          weight: 4,
          opacity: 0.5,
          fill: !1,
          clickable: !0,
        },
        metric: !0,
        feet: !0,
        nautic: !1,
        showLength: !0,
        zIndexOffset: 2e3,
        factor: 1,
        maxPoints: 0,
      },
      initialize: function(t, e) {
        GMap.Browser.touch && (this.options.icon = this.options.touchIcon),
          (this.options.drawError.message = GMap.drawLocal.draw.handlers.polyline.error),
          e &&
            e.drawError &&
            (e.drawError = GMap.Util.extend({}, this.options.drawError, e.drawError)),
          (this.type = GMap.Draw.Polyline.TYPE),
          GMap.Draw.Feature.prototype.initialize.call(this, t, e);
      },
      addHooks: function() {
        GMap.Draw.Feature.prototype.addHooks.call(this),
          this._map &&
            ((this._markers = []),
            (this._markerGroup = new GMap.LayerGroup()),
            this._map.addLayer(this._markerGroup),
            (this._poly = new GMap.Polyline([], this.options.shapeOptions)),
            this._tooltip.updateContent(this._getTooltipText()),
            this._mouseMarker ||
              (this._mouseMarker = GMap.marker(this._map.getCenter(), {
                icon: GMap.divIcon({
                  className: 'gmap-mouse-marker',
                  iconAnchor: [20, 20],
                  iconSize: [40, 40],
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset,
              })),
            this._mouseMarker
              .on('mouseout', this._onMouseOut, this)
              .on('mousemove', this._onMouseMove, this)
              .on('mousedown', this._onMouseDown, this)
              .on('mouseup', this._onMouseUp, this)
              .addTo(this._map),
            this._map
              .on('mouseup', this._onMouseUp, this)
              .on('mousemove', this._onMouseMove, this)
              .on('zoomlevelschange', this._onZoomEnd, this)
              .on('touchstart', this._onTouch, this)
              .on('zoomend', this._onZoomEnd, this));
      },
      removeHooks: function() {
        GMap.Draw.Feature.prototype.removeHooks.call(this),
          this._clearHideErrorTimeout(),
          this._cleanUpShape(),
          this._map.removeLayer(this._markerGroup),
          delete this._markerGroup,
          delete this._markers,
          this._map.removeLayer(this._poly),
          delete this._poly,
          this._mouseMarker
            .off('mousedown', this._onMouseDown, this)
            .off('mouseout', this._onMouseOut, this)
            .off('mouseup', this._onMouseUp, this)
            .off('mousemove', this._onMouseMove, this),
          this._map.removeLayer(this._mouseMarker),
          delete this._mouseMarker,
          this._clearGuides(),
          this._map
            .off('mouseup', this._onMouseUp, this)
            .off('mousemove', this._onMouseMove, this)
            .off('zoomlevelschange', this._onZoomEnd, this)
            .off('zoomend', this._onZoomEnd, this)
            .off('touchstart', this._onTouch, this)
            .off('click', this._onTouch, this);
      },
      deleteLastVertex: function() {
        if (!(this._markers.length <= 1)) {
          var t = this._markers.pop(),
            e = this._poly,
            i = e.getLatLngs(),
            a = i.splice(-1, 1)[0];
          this._poly.setLatLngs(i),
            this._markerGroup.removeLayer(t),
            e.getLatLngs().length < 2 && this._map.removeLayer(e),
            this._vertexChanged(a, !1);
        }
      },
      addVertex: function(t) {
        if (
          this._markers.length >= 2 &&
          !this.options.allowIntersection &&
          this._poly.newLatLngIntersects(t)
        )
          return void this._showErrorTooltip();
        this._errorShown && this._hideErrorTooltip(),
          this._markers.push(this._createMarker(t)),
          this._poly.addLatLng(t),
          2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly),
          this._vertexChanged(t, !0);
      },
      completeShape: function() {
        this._markers.length <= 1 ||
          !this._shapeIsValid() ||
          (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable());
      },
      _finishShape: function() {
        var t = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(),
          e = this._poly.newLatLngIntersects(t[t.length - 1]);
        if ((!this.options.allowIntersection && e) || !this._shapeIsValid())
          return void this._showErrorTooltip();
        this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
      },
      _shapeIsValid: function() {
        return !0;
      },
      _onZoomEnd: function() {
        null !== this._markers && this._updateGuide();
      },
      _onMouseMove: function(t) {
        var e = this._map.mouseEventToLayerPoint(t.originalEvent),
          i = this._map.layerPointToLatLng(e);
        (this._currentLatLng = i),
          this._updateTooltip(i),
          this._updateGuide(e),
          this._mouseMarker.setLatLng(i),
          GMap.DomEvent.preventDefault(t.originalEvent);
      },
      _vertexChanged: function(t, e) {
        this._map.fire(GMap.Draw.Event.DRAWVERTEX, { layers: this._markerGroup }),
          this._updateFinishHandler(),
          this._updateRunningMeasure(t, e),
          this._clearGuides(),
          this._updateTooltip();
      },
      _onMouseDown: function(t) {
        if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
          this._onMouseMove(t), (this._clickHandled = !0), this._disableNewMarkers();
          var e = t.originalEvent,
            i = e.clientX,
            a = e.clientY;
          this._startPoint.call(this, i, a);
        }
      },
      _startPoint: function(t, e) {
        this._mouseDownOrigin = GMap.point(t, e);
      },
      _onMouseUp: function(t) {
        var e = t.originalEvent,
          i = e.clientX,
          a = e.clientY;
        this._endPoint.call(this, i, a, t), (this._clickHandled = null);
      },
      _endPoint: function(e, i, a) {
        if (this._mouseDownOrigin) {
          var o = GMap.point(e, i).distanceTo(this._mouseDownOrigin),
            n = this._calculateFinishDistance(a.latlng);
          this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1
            ? (this.addVertex(a.latlng), this._finishShape())
            : n < 10 && GMap.Browser.touch
            ? this._finishShape()
            : Math.abs(o) < 9 * (t.devicePixelRatio || 1) && this.addVertex(a.latlng),
            this._enableNewMarkers();
        }
        this._mouseDownOrigin = null;
      },
      _onTouch: function(t) {
        var e,
          i,
          a = t.originalEvent;
        !a.touches ||
          !a.touches[0] ||
          this._clickHandled ||
          this._touchHandled ||
          this._disableMarkers ||
          ((e = a.touches[0].clientX),
          (i = a.touches[0].clientY),
          this._disableNewMarkers(),
          (this._touchHandled = !0),
          this._startPoint.call(this, e, i),
          this._endPoint.call(this, e, i, t),
          (this._touchHandled = null)),
          (this._clickHandled = null);
      },
      _onMouseOut: function() {
        this._tooltip && this._tooltip._onMouseOut.call(this._tooltip);
      },
      _calculateFinishDistance: function(t) {
        var e;
        if (this._markers.length > 0) {
          var i;
          if (this.type === GMap.Draw.Polyline.TYPE) i = this._markers[this._markers.length - 1];
          else {
            if (this.type !== GMap.Draw.Polygon.TYPE) return 1 / 0;
            i = this._markers[0];
          }
          var a = this._map.latLngToContainerPoint(i.getLatLng()),
            o = new GMap.Marker(t, {
              icon: this.options.icon,
              zIndexOffset: 2 * this.options.zIndexOffset,
            }),
            n = this._map.latLngToContainerPoint(o.getLatLng());
          e = a.distanceTo(n);
        } else e = 1 / 0;
        return e;
      },
      _updateFinishHandler: function() {
        var t = this._markers.length;
        t > 1 && this._markers[t - 1].on('click', this._finishShape, this),
          t > 2 && this._markers[t - 2].off('click', this._finishShape, this);
      },
      _createMarker: function(t) {
        var e = new GMap.Marker(t, {
          icon: this.options.icon,
          zIndexOffset: 2 * this.options.zIndexOffset,
        });
        return this._markerGroup.addLayer(e), e;
      },
      _updateGuide: function(t) {
        var e = this._markers ? this._markers.length : 0;
        e > 0 &&
          ((t = t || this._map.latLngToLayerPoint(this._currentLatLng)),
          this._clearGuides(),
          this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t));
      },
      _updateTooltip: function(t) {
        var e = this._getTooltipText();
        t && this._tooltip.updatePosition(t), this._errorShown || this._tooltip.updateContent(e);
      },
      _drawGuide: function(t, e) {
        var i,
          a,
          o,
          n = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))),
          s = this.options.guidelineDistance,
          r = this.options.maxGuideLineLength,
          h = n > r ? n - r : s;
        for (
          this._guidesContainer ||
          (this._guidesContainer = GMap.DomUtil.create(
            'div',
            'gmap-draw-guides',
            this._overlayPane
          ));
          h < n;
          h += this.options.guidelineDistance
        )
          (i = h / n),
            (a = {
              x: Math.floor(t.x * (1 - i) + i * e.x),
              y: Math.floor(t.y * (1 - i) + i * e.y),
            }),
            (o = GMap.DomUtil.create('div', 'gmap-draw-guide-dash', this._guidesContainer)),
            (o.style.backgroundColor = this._errorShown
              ? this.options.drawError.color
              : this.options.shapeOptions.color),
            GMap.DomUtil.setPosition(o, a);
      },
      _updateGuideColor: function(t) {
        if (this._guidesContainer)
          for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++)
            this._guidesContainer.childNodes[e].style.backgroundColor = t;
      },
      _clearGuides: function() {
        if (this._guidesContainer)
          for (; this._guidesContainer.firstChild; )
            this._guidesContainer.removeChild(this._guidesContainer.firstChild);
      },
      _getTooltipText: function() {
        var t,
          e,
          i = this.options.showLength;
        return (
          0 === this._markers.length
            ? (t = { text: GMap.drawLocal.draw.handlers.polyline.tooltip.start })
            : ((e = i ? this._getMeasurementString() : ''),
              (t =
                1 === this._markers.length
                  ? { text: GMap.drawLocal.draw.handlers.polyline.tooltip.cont, subtext: e }
                  : { text: GMap.drawLocal.draw.handlers.polyline.tooltip.end, subtext: e })),
          t
        );
      },
      _updateRunningMeasure: function(t, e) {
        var i,
          a,
          o = this._markers.length;
        1 === this._markers.length
          ? (this._measurementRunningTotal = 0)
          : ((i = o - (e ? 2 : 1)),
            (a = GMap.GeometryUtil.isVersion07x()
              ? t.distanceTo(this._markers[i].getLatLng()) * (this.options.factor || 1)
              : this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1)),
            (this._measurementRunningTotal += a * (e ? 1 : -1)));
      },
      _getMeasurementString: function() {
        var t,
          e = this._currentLatLng,
          i = this._markers[this._markers.length - 1].getLatLng();
        return (
          (t = GMap.GeometryUtil.isVersion07x()
            ? i && e && e.distanceTo
              ? this._measurementRunningTotal + e.distanceTo(i) * (this.options.factor || 1)
              : this._measurementRunningTotal || 0
            : i && e
            ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1)
            : this._measurementRunningTotal || 0),
          GMap.GeometryUtil.readableDistance(
            t,
            this.options.metric,
            this.options.feet,
            this.options.nautic,
            this.options.precision
          )
        );
      },
      _showErrorTooltip: function() {
        (this._errorShown = !0),
          this._tooltip.showAsError().updateContent({ text: this.options.drawError.message }),
          this._updateGuideColor(this.options.drawError.color),
          this._poly.setStyle({ color: this.options.drawError.color }),
          this._clearHideErrorTimeout(),
          (this._hideErrorTimeout = setTimeout(
            GMap.Util.bind(this._hideErrorTooltip, this),
            this.options.drawError.timeout
          ));
      },
      _hideErrorTooltip: function() {
        (this._errorShown = !1),
          this._clearHideErrorTimeout(),
          this._tooltip.removeError().updateContent(this._getTooltipText()),
          this._updateGuideColor(this.options.shapeOptions.color),
          this._poly.setStyle({ color: this.options.shapeOptions.color });
      },
      _clearHideErrorTimeout: function() {
        this._hideErrorTimeout &&
          (clearTimeout(this._hideErrorTimeout), (this._hideErrorTimeout = null));
      },
      _disableNewMarkers: function() {
        this._disableMarkers = !0;
      },
      _enableNewMarkers: function() {
        setTimeout(
          function() {
            this._disableMarkers = !1;
          }.bind(this),
          50
        );
      },
      _cleanUpShape: function() {
        this._markers.length > 1 &&
          this._markers[this._markers.length - 1].off('click', this._finishShape, this);
      },
      _fireCreatedEvent: function() {
        var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
        GMap.Draw.Feature.prototype._fireCreatedEvent.call(this, t);
      },
    })),
    (GMap.Draw.Polygon = GMap.Draw.Polyline.extend({
      statics: { TYPE: 'polygon' },
      Poly: GMap.Polygon,
      options: {
        showArea: !1,
        showLength: !1,
        shapeOptions: {
          stroke: !0,
          color: '#3388ff',
          weight: 4,
          opacity: 0.5,
          fill: !0,
          fillColor: null,
          fillOpacity: 0.2,
          clickable: !0,
        },
        metric: ['km', 'm'],
        feet: !0,
        nautic: !1,
        precision: {},
      },
      initialize: function(t, e) {
        GMap.Draw.Polyline.prototype.initialize.call(this, t, e),
          (this.type = GMap.Draw.Polygon.TYPE);
      },
      _updateFinishHandler: function() {
        var t = this._markers.length;
        1 === t && this._markers[0].on('click', this._finishShape, this),
          t > 2 &&
            (this._markers[t - 1].on('dblclick', this._finishShape, this),
            t > 3 && this._markers[t - 2].off('dblclick', this._finishShape, this));
      },
      _getTooltipText: function() {
        var t, e;
        return (
          0 === this._markers.length
            ? (t = GMap.drawLocal.draw.handlers.polygon.tooltip.start)
            : this._markers.length < 3
            ? ((t = GMap.drawLocal.draw.handlers.polygon.tooltip.cont),
              (e = this._getMeasurementString()))
            : ((t = GMap.drawLocal.draw.handlers.polygon.tooltip.end),
              (e = this._getMeasurementString())),
          { text: t, subtext: e }
        );
      },
      _getMeasurementString: function() {
        var t = this._area,
          e = '';
        return t || this.options.showLength
          ? (this.options.showLength &&
              (e = GMap.Draw.Polyline.prototype._getMeasurementString.call(this)),
            t &&
              (e +=
                '<br>' +
                GMap.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)),
            e)
          : null;
      },
      _shapeIsValid: function() {
        return this._markers.length >= 3;
      },
      _vertexChanged: function(t, e) {
        var i;
        !this.options.allowIntersection &&
          this.options.showArea &&
          ((i = this._poly.getLatLngs()), (this._area = GMap.GeometryUtil.geodesicArea(i))),
          GMap.Draw.Polyline.prototype._vertexChanged.call(this, t, e);
      },
      _cleanUpShape: function() {
        var t = this._markers.length;
        t > 0 &&
          (this._markers[0].off('click', this._finishShape, this),
          t > 2 && this._markers[t - 1].off('dblclick', this._finishShape, this));
      },
    })),
    (GMap.SimpleShape = {}),
    (GMap.Draw.SimpleShape = GMap.Draw.Feature.extend({
      options: { repeatMode: !1 },
      initialize: function(t, e) {
        (this._endLabelText = GMap.drawLocal.draw.handlers.simpleshape.tooltip.end),
          GMap.Draw.Feature.prototype.initialize.call(this, t, e);
      },
      addHooks: function() {
        GMap.Draw.Feature.prototype.addHooks.call(this),
          this._map &&
            ((this._mapDraggable = this._map.dragging.enabled()),
            this._mapDraggable && this._map.dragging.disable(),
            (this._container.style.cursor = 'crosshair'),
            this._tooltip.updateContent({ text: this._initialLabelText }),
            this._map
              .on('mousedown', this._onMouseDown, this)
              .on('mousemove', this._onMouseMove, this)
              .on('touchstart', this._onMouseDown, this)
              .on('touchmove', this._onMouseMove, this),
            e.addEventListener('touchstart', GMap.DomEvent.preventDefault, { passive: !1 }));
      },
      removeHooks: function() {
        GMap.Draw.Feature.prototype.removeHooks.call(this),
          this._map &&
            (this._mapDraggable && this._map.dragging.enable(),
            (this._container.style.cursor = ''),
            this._map
              .off('mousedown', this._onMouseDown, this)
              .off('mousemove', this._onMouseMove, this)
              .off('touchstart', this._onMouseDown, this)
              .off('touchmove', this._onMouseMove, this),
            GMap.DomEvent.off(e, 'mouseup', this._onMouseUp, this),
            GMap.DomEvent.off(e, 'touchend', this._onMouseUp, this),
            e.removeEventListener('touchstart', GMap.DomEvent.preventDefault),
            this._shape && (this._map.removeLayer(this._shape), delete this._shape)),
          (this._isDrawing = !1);
      },
      _getTooltipText: function() {
        return { text: this._endLabelText };
      },
      _onMouseDown: function(t) {
        (this._isDrawing = !0),
          (this._startLatLng = t.latlng),
          GMap.DomEvent.on(e, 'mouseup', this._onMouseUp, this)
            .on(e, 'touchend', this._onMouseUp, this)
            .preventDefault(t.originalEvent);
      },
      _onMouseMove: function(t) {
        var e = t.latlng;
        this._tooltip.updatePosition(e),
          this._isDrawing &&
            (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(e));
      },
      _onMouseUp: function() {
        this._shape && this._fireCreatedEvent(),
          this.disable(),
          this.options.repeatMode && this.enable();
      },
    })),
    (GMap.Draw.Rectangle = GMap.Draw.SimpleShape.extend({
      statics: { TYPE: 'rectangle' },
      options: {
        shapeOptions: {
          stroke: !0,
          color: '#3388ff',
          weight: 4,
          opacity: 0.5,
          fill: !0,
          fillColor: null,
          fillOpacity: 0.2,
          showArea: !0,
          clickable: !0,
        },
        metric: !0,
      },
      initialize: function(t, e) {
        (this.type = GMap.Draw.Rectangle.TYPE),
          (this._initialLabelText = GMap.drawLocal.draw.handlers.rectangle.tooltip.start),
          GMap.Draw.SimpleShape.prototype.initialize.call(this, t, e);
      },
      disable: function() {
        this._enabled &&
          ((this._isCurrentlyTwoClickDrawing = !1),
          GMap.Draw.SimpleShape.prototype.disable.call(this));
      },
      _onMouseUp: function(t) {
        if (!this._shape && !this._isCurrentlyTwoClickDrawing)
          return void (this._isCurrentlyTwoClickDrawing = !0);
        (this._isCurrentlyTwoClickDrawing && !a(t.target, 'gmap-pane')) ||
          GMap.Draw.SimpleShape.prototype._onMouseUp.call(this);
      },
      _drawShape: function(t) {
        this._shape
          ? this._shape.setBounds(new GMap.LatLngBounds(this._startLatLng, t))
          : ((this._shape = new GMap.Rectangle(
              new GMap.LatLngBounds(this._startLatLng, t),
              this.options.shapeOptions
            )),
            this._map.addLayer(this._shape));
      },
      _fireCreatedEvent: function() {
        var t = new GMap.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
        GMap.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t);
      },
      _getTooltipText: function() {
        var t,
          e,
          i,
          a = GMap.Draw.SimpleShape.prototype._getTooltipText.call(this),
          o = this._shape,
          n = this.options.showArea;
        return (
          o &&
            ((t = this._shape._defaultShape
              ? this._shape._defaultShape()
              : this._shape.getLatLngs()),
            (e = GMap.GeometryUtil.geodesicArea(t)),
            (i = n ? GMap.GeometryUtil.readableArea(e, this.options.metric) : '')),
          { text: a.text, subtext: i }
        );
      },
    })),
    (GMap.Draw.Marker = GMap.Draw.Feature.extend({
      statics: { TYPE: 'marker' },
      options: { icon: new GMap.Icon.Default(), repeatMode: !1, zIndexOffset: 2e3 },
      initialize: function(t, e) {
        (this.type = GMap.Draw.Marker.TYPE),
          (this._initialLabelText = GMap.drawLocal.draw.handlers.marker.tooltip.start),
          GMap.Draw.Feature.prototype.initialize.call(this, t, e);
      },
      addHooks: function() {
        GMap.Draw.Feature.prototype.addHooks.call(this),
          this._map &&
            (this._tooltip.updateContent({ text: this._initialLabelText }),
            this._mouseMarker ||
              (this._mouseMarker = GMap.marker(this._map.getCenter(), {
                icon: GMap.divIcon({
                  className: 'gmap-mouse-marker',
                  iconAnchor: [20, 20],
                  iconSize: [40, 40],
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset,
              })),
            this._mouseMarker.on('click', this._onClick, this).addTo(this._map),
            this._map.on('mousemove', this._onMouseMove, this),
            this._map.on('click', this._onTouch, this));
      },
      removeHooks: function() {
        GMap.Draw.Feature.prototype.removeHooks.call(this),
          this._map &&
            (this._map.off('click', this._onClick, this).off('click', this._onTouch, this),
            this._marker &&
              (this._marker.options.icon.options.canvas ||
                (this._marker.off('click', this._onClick, this),
                this._map.removeLayer(this._marker),
                delete this._marker)),
            this._mouseMarker.off('click', this._onClick, this),
            this._map.removeLayer(this._mouseMarker),
            delete this._mouseMarker,
            this._map.off('mousemove', this._onMouseMove, this));
      },
      _onMouseMove: function(t) {
        var e = t.latlng;
        this._tooltip.updatePosition(e),
          this._mouseMarker.setLatLng(e),
          this._marker
            ? ((e = this._mouseMarker.getLatLng()), this._marker.setLatLng(e))
            : ((this._marker = this._createMarker(e)),
              this._marker.on('click', this._onClick, this),
              this._map.on('click', this._onClick, this).addLayer(this._marker));
      },
      _createMarker: function(t) {
        return new GMap.Marker(t, {
          icon: this.options.icon,
          zIndexOffset: this.options.zIndexOffset,
        });
      },
      _onClick: function() {
        this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
      },
      _onTouch: function(t) {
        this._onMouseMove(t), this._onClick();
      },
      _fireCreatedEvent: function() {
        var t = new GMap.Marker.Touch(this._marker.getLatLng(), { icon: this.options.icon });
        GMap.Draw.Feature.prototype._fireCreatedEvent.call(this, t);
      },
    })),
    (GMap.Draw.CircleMarker = GMap.Draw.Marker.extend({
      statics: { TYPE: 'circlemarker' },
      options: {
        stroke: !0,
        color: '#3388ff',
        weight: 4,
        opacity: 0.5,
        fill: !0,
        fillColor: null,
        fillOpacity: 0.2,
        clickable: !0,
        zIndexOffset: 2e3,
      },
      initialize: function(t, e) {
        (this.type = GMap.Draw.CircleMarker.TYPE),
          (this._initialLabelText = GMap.drawLocal.draw.handlers.circlemarker.tooltip.start),
          GMap.Draw.Feature.prototype.initialize.call(this, t, e);
      },
      _fireCreatedEvent: function() {
        var t = new GMap.CircleMarker(this._marker.getLatLng(), this.options);
        GMap.Draw.Feature.prototype._fireCreatedEvent.call(this, t);
      },
      _createMarker: function(t) {
        return new GMap.CircleMarker(t, this.options);
      },
    })),
    (GMap.Draw.Circle = GMap.Draw.SimpleShape.extend({
      statics: { TYPE: 'circle' },
      options: {
        shapeOptions: {
          stroke: !0,
          color: '#3388ff',
          weight: 4,
          opacity: 0.5,
          fill: !0,
          fillColor: null,
          fillOpacity: 0.2,
          clickable: !0,
        },
        showRadius: !0,
        metric: !0,
        feet: !0,
        nautic: !1,
      },
      initialize: function(t, e) {
        (this.type = GMap.Draw.Circle.TYPE),
          (this._initialLabelText = GMap.drawLocal.draw.handlers.circle.tooltip.start),
          GMap.Draw.SimpleShape.prototype.initialize.call(this, t, e);
      },
      _drawShape: function(t) {
        if (GMap.GeometryUtil.isVersion07x()) var e = this._startLatLng.distanceTo(t);
        else var e = this._map.distance(this._startLatLng, t);
        this._shape
          ? this._shape.setRadius(e)
          : ((this._shape = new GMap.Circle(this._startLatLng, e, this.options.shapeOptions)),
            this._map.addLayer(this._shape));
      },
      _fireCreatedEvent: function() {
        var t = new GMap.Circle(
          this._startLatLng,
          this._shape.getRadius(),
          this.options.shapeOptions
        );
        GMap.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t);
      },
      _onMouseMove: function(t) {
        var e,
          i = t.latlng,
          a = this.options.showRadius,
          o = this.options.metric;
        if ((this._tooltip.updatePosition(i), this._isDrawing)) {
          this._drawShape(i), (e = this._shape.getRadius().toFixed(1));
          var n = '';
          a &&
            (n =
              GMap.drawLocal.draw.handlers.circle.radius +
              ': ' +
              GMap.GeometryUtil.readableDistance(e, o, this.options.feet, this.options.nautic)),
            this._tooltip.updateContent({ text: this._endLabelText, subtext: n });
        }
      },
    })),
    (GMap.Edit = GMap.Edit || {}),
    (GMap.Edit.Marker = GMap.Handler.extend({
      initialize: function(t, e) {
        (this._marker = t), GMap.setOptions(this, e);
      },
      addHooks: function() {
        var t = this._marker;
        t.dragging.enable(), t.on('dragend', this._onDragEnd, t), this._toggleMarkerHighlight();
      },
      removeHooks: function() {
        var t = this._marker;
        t.dragging.disable(), t.off('dragend', this._onDragEnd, t), this._toggleMarkerHighlight();
      },
      _onDragEnd: function(t) {
        var e = t.target;
        (e.edited = !0), this._map.fire(GMap.Draw.Event.EDITMOVE, { layer: e });
      },
      _toggleMarkerHighlight: function() {
        var t = this._marker._icon;
        t &&
          ((t.style.display = 'none'),
          GMap.DomUtil.hasClass(t, 'gmap-edit-marker-selected')
            ? (GMap.DomUtil.removeClass(t, 'gmap-edit-marker-selected'), this._offsetMarker(t, -4))
            : (GMap.DomUtil.addClass(t, 'gmap-edit-marker-selected'), this._offsetMarker(t, 4)),
          (t.style.display = ''));
      },
      _offsetMarker: function(t, e) {
        var i = parseInt(t.style.marginTop, 10) - e,
          a = parseInt(t.style.marginLeft, 10) - e;
        (t.style.marginTop = i + 'px'), (t.style.marginLeft = a + 'px');
      },
    })),
    GMap.Marker.addInitHook(function() {
      GMap.Edit.Marker &&
        ((this.editing = new GMap.Edit.Marker(this)),
        this.options.editable && this.editing.enable());
    }),
    (GMap.Edit = GMap.Edit || {}),
    (GMap.Edit.Poly = GMap.Handler.extend({
      initialize: function(t) {
        (this.latlngs = [t._latlngs]),
          t._holes && (this.latlngs = this.latlngs.concat(t._holes)),
          (this._poly = t),
          this._poly.on('revert-edited', this._updateLatLngs, this);
      },
      _defaultShape: function() {
        return GMap.LineUtil.isFlat
          ? GMap.LineUtil.isFlat(this._poly._latlngs)
            ? this._poly._latlngs
            : this._poly._latlngs[0]
          : this._poly._latlngs;
      },
      _eachVertexHandler: function(t) {
        for (var e = 0; e < this._verticesHandlers.length; e++) t(this._verticesHandlers[e]);
      },
      addHooks: function() {
        this._initHandlers(),
          this._eachVertexHandler(function(t) {
            t.addHooks();
          });
      },
      removeHooks: function() {
        this._eachVertexHandler(function(t) {
          t.removeHooks();
        });
      },
      updateMarkers: function() {
        this._eachVertexHandler(function(t) {
          t.updateMarkers();
        });
      },
      _initHandlers: function() {
        this._verticesHandlers = [];
        for (var t = 0; t < this.latlngs.length; t++)
          this._verticesHandlers.push(
            new GMap.Edit.PolyVerticesEdit(this._poly, this.latlngs[t], this._poly.options.poly)
          );
      },
      _updateLatLngs: function(t) {
        (this.latlngs = [t.layer._latlngs]),
          t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes));
      },
    })),
    (GMap.Edit.PolyVerticesEdit = GMap.Handler.extend({
      options: {
        icon: new GMap.DivIcon({
          iconSize: new GMap.Point(8, 8),
          className: 'gmap-div-icon gmap-editing-icon',
        }),
        touchIcon: new GMap.DivIcon({
          iconSize: new GMap.Point(20, 20),
          className: 'gmap-div-icon gmap-editing-icon gmap-touch-icon',
        }),
        drawError: { color: '#b00b00', timeout: 1e3 },
      },
      initialize: function(t, e, i) {
        GMap.Browser.touch && (this.options.icon = this.options.touchIcon),
          (this._poly = t),
          i &&
            i.drawError &&
            (i.drawError = GMap.Util.extend({}, this.options.drawError, i.drawError)),
          (this._latlngs = e),
          GMap.setOptions(this, i);
      },
      _defaultShape: function() {
        return GMap.LineUtil.isFlat
          ? GMap.LineUtil.isFlat(this._latlngs)
            ? this._latlngs
            : this._latlngs[0]
          : this._latlngs;
      },
      addHooks: function() {
        var t = this._poly,
          e = t._path;
        t instanceof GMap.Polygon ||
          ((t.options.fill = !1), t.options.editing && (t.options.editing.fill = !1)),
          e &&
            t.options.editing &&
            t.options.editing.className &&
            (t.options.original.className &&
              t.options.original.className.split(' ').forEach(function(t) {
                GMap.DomUtil.removeClass(e, t);
              }),
            t.options.editing.className.split(' ').forEach(function(t) {
              GMap.DomUtil.addClass(e, t);
            })),
          t.setStyle(t.options.editing),
          this._poly._map &&
            ((this._map = this._poly._map),
            this._markerGroup || this._initMarkers(),
            this._poly._map.addLayer(this._markerGroup));
      },
      removeHooks: function() {
        var t = this._poly,
          e = t._path;
        e &&
          t.options.editing &&
          t.options.editing.className &&
          (t.options.editing.className.split(' ').forEach(function(t) {
            GMap.DomUtil.removeClass(e, t);
          }),
          t.options.original.className &&
            t.options.original.className.split(' ').forEach(function(t) {
              GMap.DomUtil.addClass(e, t);
            })),
          t.setStyle(t.options.original),
          t._map &&
            (t._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers);
      },
      updateMarkers: function() {
        this._markerGroup.clearLayers(), this._initMarkers();
      },
      _initMarkers: function() {
        this._markerGroup || (this._markerGroup = new GMap.LayerGroup()), (this._markers = []);
        var t,
          e,
          i,
          a,
          o = this._defaultShape();
        for (t = 0, i = o.length; t < i; t++)
          (a = this._createMarker(o[t], t)),
            a.on('click', this._onMarkerClick, this),
            a.on('contextmenu', this._onContextMenu, this),
            this._markers.push(a);
        var n, s;
        for (t = 0, e = i - 1; t < i; e = t++)
          (0 !== t || (GMap.Polygon && this._poly instanceof GMap.Polygon)) &&
            ((n = this._markers[e]),
            (s = this._markers[t]),
            this._createMiddleMarker(n, s),
            this._updatePrevNext(n, s));
      },
      _createMarker: function(t, e) {
        var i = new GMap.Marker.Touch(t, { draggable: !0, icon: this.options.icon });
        return (
          (i._origLatLng = t),
          (i._index = e),
          i
            .on('dragstart', this._onMarkerDragStart, this)
            .on('drag', this._onMarkerDrag, this)
            .on('dragend', this._fireEdit, this)
            .on('touchmove', this._onTouchMove, this)
            .on('touchend', this._fireEdit, this)
            .on('MSPointerMove', this._onTouchMove, this)
            .on('MSPointerUp', this._fireEdit, this),
          this._markerGroup.addLayer(i),
          i
        );
      },
      _onMarkerDragStart: function() {
        this._poly.fire('editstart');
      },
      _spliceLatLngs: function() {
        var t = this._defaultShape(),
          e = [].splice.apply(t, arguments);
        return this._poly._convertLatLngs(t, !0), this._poly.redraw(), e;
      },
      _removeMarker: function(t) {
        var e = t._index;
        this._markerGroup.removeLayer(t),
          this._markers.splice(e, 1),
          this._spliceLatLngs(e, 1),
          this._updateIndexes(e, -1),
          t
            .off('dragstart', this._onMarkerDragStart, this)
            .off('drag', this._onMarkerDrag, this)
            .off('dragend', this._fireEdit, this)
            .off('touchmove', this._onMarkerDrag, this)
            .off('touchend', this._fireEdit, this)
            .off('click', this._onMarkerClick, this)
            .off('MSPointerMove', this._onTouchMove, this)
            .off('MSPointerUp', this._fireEdit, this);
      },
      _fireEdit: function() {
        (this._poly.edited = !0),
          this._poly.fire('edit'),
          this._poly._map.fire(GMap.Draw.Event.EDITVERTEX, {
            layers: this._markerGroup,
            poly: this._poly,
          });
      },
      _onMarkerDrag: function(t) {
        var e = t.target,
          i = this._poly;
        if (
          (GMap.extend(e._origLatLng, e._latlng),
          e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)),
          e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)),
          i.options.poly)
        ) {
          var a = i._map._editTooltip;
          if (!i.options.poly.allowIntersection && i.intersects()) {
            var o = i.options.color;
            i.setStyle({ color: this.options.drawError.color }),
              0 !== GMap.version.indexOf('0.7') && e.dragging._draggable._onUp(t),
              this._onMarkerClick(t),
              a && a.updateContent({ text: GMap.drawLocal.draw.handlers.polyline.error }),
              setTimeout(function() {
                i.setStyle({ color: o }),
                  a &&
                    a.updateContent({
                      text: GMap.drawLocal.edit.handlers.edit.tooltip.text,
                      subtext: GMap.drawLocal.edit.handlers.edit.tooltip.subtext,
                    });
              }, 1e3);
          }
        }
        (this._poly._bounds._southWest = GMap.latLng(1 / 0, 1 / 0)),
          (this._poly._bounds._northEast = GMap.latLng(-1 / 0, -1 / 0));
        var n = this._poly.getLatLngs();
        this._poly._convertLatLngs(n, !0), this._poly.redraw(), this._poly.fire('editdrag');
      },
      _onMarkerClick: function(t) {
        var e = GMap.Polygon && this._poly instanceof GMap.Polygon ? 4 : 3,
          i = t.target;
        this._defaultShape().length < e ||
          (this._removeMarker(i),
          this._updatePrevNext(i._prev, i._next),
          i._middleLeft && this._markerGroup.removeLayer(i._middleLeft),
          i._middleRight && this._markerGroup.removeLayer(i._middleRight),
          i._prev && i._next
            ? this._createMiddleMarker(i._prev, i._next)
            : i._prev
            ? i._next || (i._prev._middleRight = null)
            : (i._next._middleLeft = null),
          this._fireEdit());
      },
      _onContextMenu: function(t) {
        var e = t.target;
        this._poly;
        this._poly._map.fire(GMap.Draw.Event.MARKERCONTEXT, {
          marker: e,
          layers: this._markerGroup,
          poly: this._poly,
        }),
          GMap.DomEvent.stopPropagation;
      },
      _onTouchMove: function(t) {
        var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
          i = this._map.layerPointToLatLng(e),
          a = t.target;
        GMap.extend(a._origLatLng, i),
          a._middleLeft && a._middleLeft.setLatLng(this._getMiddleLatLng(a._prev, a)),
          a._middleRight && a._middleRight.setLatLng(this._getMiddleLatLng(a, a._next)),
          this._poly.redraw(),
          this.updateMarkers();
      },
      _updateIndexes: function(t, e) {
        this._markerGroup.eachLayer(function(i) {
          i._index > t && (i._index += e);
        });
      },
      _createMiddleMarker: function(t, e) {
        var i,
          a,
          o,
          n = this._getMiddleLatLng(t, e),
          s = this._createMarker(n);
        s.setOpacity(0.6),
          (t._middleRight = e._middleLeft = s),
          (a = function() {
            s.off('touchmove', a, this);
            var o = e._index;
            (s._index = o),
              s.off('click', i, this).on('click', this._onMarkerClick, this),
              (n.lat = s.getLatLng().lat),
              (n.lng = s.getLatLng().lng),
              this._spliceLatLngs(o, 0, n),
              this._markers.splice(o, 0, s),
              s.setOpacity(1),
              this._updateIndexes(o, 1),
              e._index++,
              this._updatePrevNext(t, s),
              this._updatePrevNext(s, e),
              this._poly.fire('editstart');
          }),
          (o = function() {
            s.off('dragstart', a, this),
              s.off('dragend', o, this),
              s.off('touchmove', a, this),
              this._createMiddleMarker(t, s),
              this._createMiddleMarker(s, e);
          }),
          (i = function() {
            a.call(this), o.call(this), this._fireEdit();
          }),
          s
            .on('click', i, this)
            .on('dragstart', a, this)
            .on('dragend', o, this)
            .on('touchmove', a, this),
          this._markerGroup.addLayer(s);
      },
      _updatePrevNext: function(t, e) {
        t && (t._next = e), e && (e._prev = t);
      },
      _getMiddleLatLng: function(t, e) {
        var i = this._poly._map,
          a = i.project(t.getLatLng()),
          o = i.project(e.getLatLng());
        return i.unproject(a._add(o)._divideBy(2));
      },
    })),
    GMap.Polyline.addInitHook(function() {
      this.editing ||
        (GMap.Edit.Poly &&
          ((this.editing = new GMap.Edit.Poly(this)),
          this.options.editable && this.editing.enable()),
        this.on('add', function() {
          this.editing && this.editing.enabled() && this.editing.addHooks();
        }),
        this.on('remove', function() {
          this.editing && this.editing.enabled() && this.editing.removeHooks();
        }));
    }),
    (GMap.Edit = GMap.Edit || {}),
    (GMap.Edit.SimpleShape = GMap.Handler.extend({
      options: {
        moveIcon: new GMap.DivIcon({
          iconSize: new GMap.Point(8, 8),
          className: 'gmap-div-icon gmap-editing-icon gmap-edit-move',
        }),
        resizeIcon: new GMap.DivIcon({
          iconSize: new GMap.Point(8, 8),
          className: 'gmap-div-icon gmap-editing-icon gmap-edit-resize',
        }),
        touchMoveIcon: new GMap.DivIcon({
          iconSize: new GMap.Point(20, 20),
          className: 'gmap-div-icon gmap-editing-icon gmap-edit-move gmap-touch-icon',
        }),
        touchResizeIcon: new GMap.DivIcon({
          iconSize: new GMap.Point(20, 20),
          className: 'gmap-div-icon gmap-editing-icon gmap-edit-resize gmap-touch-icon',
        }),
      },
      initialize: function(t, e) {
        GMap.Browser.touch &&
          ((this.options.moveIcon = this.options.touchMoveIcon),
          (this.options.resizeIcon = this.options.touchResizeIcon)),
          (this._shape = t),
          GMap.Util.setOptions(this, e);
      },
      addHooks: function() {
        var t = this._shape;
        this._shape._map &&
          ((this._map = this._shape._map),
          t.setStyle(t.options.editing),
          t._map &&
            ((this._map = t._map),
            this._markerGroup || this._initMarkers(),
            this._map.addLayer(this._markerGroup)));
      },
      removeHooks: function() {
        var t = this._shape;
        if ((t.setStyle(t.options.original), t._map)) {
          this._unbindMarker(this._moveMarker);
          for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
            this._unbindMarker(this._resizeMarkers[e]);
          (this._resizeMarkers = null),
            this._map.removeLayer(this._markerGroup),
            delete this._markerGroup;
        }
        this._map = null;
      },
      updateMarkers: function() {
        this._markerGroup.clearLayers(), this._initMarkers();
      },
      _initMarkers: function() {
        this._markerGroup || (this._markerGroup = new GMap.LayerGroup()),
          this._createMoveMarker(),
          this._createResizeMarker();
      },
      _createMoveMarker: function() {},
      _createResizeMarker: function() {},
      _createMarker: function(t, e) {
        var i = new GMap.Marker.Touch(t, { draggable: !0, icon: e, zIndexOffset: 10 });
        return this._bindMarker(i), this._markerGroup.addLayer(i), i;
      },
      _bindMarker: function(t) {
        t.on('dragstart', this._onMarkerDragStart, this)
          .on('drag', this._onMarkerDrag, this)
          .on('dragend', this._onMarkerDragEnd, this)
          .on('touchstart', this._onTouchStart, this)
          .on('touchmove', this._onTouchMove, this)
          .on('MSPointerMove', this._onTouchMove, this)
          .on('touchend', this._onTouchEnd, this)
          .on('MSPointerUp', this._onTouchEnd, this);
      },
      _unbindMarker: function(t) {
        t.off('dragstart', this._onMarkerDragStart, this)
          .off('drag', this._onMarkerDrag, this)
          .off('dragend', this._onMarkerDragEnd, this)
          .off('touchstart', this._onTouchStart, this)
          .off('touchmove', this._onTouchMove, this)
          .off('MSPointerMove', this._onTouchMove, this)
          .off('touchend', this._onTouchEnd, this)
          .off('MSPointerUp', this._onTouchEnd, this);
      },
      _onMarkerDragStart: function(t) {
        t.target.setOpacity(0), this._shape.fire('editstart');
      },
      _fireEdit: function() {
        (this._shape.edited = !0), this._shape.fire('edit');
      },
      _onMarkerDrag: function(t) {
        var e = t.target,
          i = e.getLatLng();
        e === this._moveMarker ? this._move(i) : this._resize(i),
          this._shape.redraw(),
          this._shape.fire('editdrag');
      },
      _onMarkerDragEnd: function(t) {
        t.target.setOpacity(1), this._fireEdit();
      },
      _onTouchStart: function(t) {
        if (
          (GMap.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t),
          'function' == typeof this._getCorners)
        ) {
          var e = this._getCorners(),
            i = t.target,
            a = i._cornerIndex;
          i.setOpacity(0), (this._oppositeCorner = e[(a + 2) % 4]), this._toggleCornerMarkers(0, a);
        }
        this._shape.fire('editstart');
      },
      _onTouchMove: function(t) {
        var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
          i = this._map.layerPointToLatLng(e);
        return (
          t.target === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), !1
        );
      },
      _onTouchEnd: function(t) {
        t.target.setOpacity(1), this.updateMarkers(), this._fireEdit();
      },
      _move: function() {},
      _resize: function() {},
    })),
    (GMap.Edit = GMap.Edit || {}),
    (GMap.Edit.Rectangle = GMap.Edit.SimpleShape.extend({
      _createMoveMarker: function() {
        var t = this._shape.getBounds(),
          e = t.getCenter();
        this._moveMarker = this._createMarker(e, this.options.moveIcon);
      },
      _createResizeMarker: function() {
        var t = this._getCorners();
        this._resizeMarkers = [];
        for (var e = 0, i = t.length; e < i; e++)
          this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)),
            (this._resizeMarkers[e]._cornerIndex = e);
      },
      _onMarkerDragStart: function(t) {
        GMap.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
        var e = this._getCorners(),
          i = t.target,
          a = i._cornerIndex;
        (this._oppositeCorner = e[(a + 2) % 4]), this._toggleCornerMarkers(0, a);
      },
      _onMarkerDragEnd: function(t) {
        var e,
          i,
          a = t.target;
        a === this._moveMarker &&
          ((e = this._shape.getBounds()), (i = e.getCenter()), a.setLatLng(i)),
          this._toggleCornerMarkers(1),
          this._repositionCornerMarkers(),
          GMap.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t);
      },
      _move: function(t) {
        for (
          var e,
            i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(),
            a = this._shape.getBounds(),
            o = a.getCenter(),
            n = [],
            s = 0,
            r = i.length;
          s < r;
          s++
        )
          (e = [i[s].lat - o.lat, i[s].lng - o.lng]), n.push([t.lat + e[0], t.lng + e[1]]);
        this._shape.setLatLngs(n),
          this._repositionCornerMarkers(),
          this._map.fire(GMap.Draw.Event.EDITMOVE, { layer: this._shape });
      },
      _resize: function(t) {
        var e;
        this._shape.setBounds(GMap.latLngBounds(t, this._oppositeCorner)),
          (e = this._shape.getBounds()),
          this._moveMarker.setLatLng(e.getCenter()),
          this._map.fire(GMap.Draw.Event.EDITRESIZE, { layer: this._shape });
      },
      _getCorners: function() {
        var t = this._shape.getBounds();
        return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()];
      },
      _toggleCornerMarkers: function(t) {
        for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
          this._resizeMarkers[e].setOpacity(t);
      },
      _repositionCornerMarkers: function() {
        for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++)
          this._resizeMarkers[e].setLatLng(t[e]);
      },
    })),
    GMap.Rectangle.addInitHook(function() {
      GMap.Edit.Rectangle &&
        ((this.editing = new GMap.Edit.Rectangle(this)),
        this.options.editable && this.editing.enable());
    }),
    (GMap.Edit = GMap.Edit || {}),
    (GMap.Edit.CircleMarker = GMap.Edit.SimpleShape.extend({
      _createMoveMarker: function() {
        var t = this._shape.getLatLng();
        this._moveMarker = this._createMarker(t, this.options.moveIcon);
      },
      _createResizeMarker: function() {
        this._resizeMarkers = [];
      },
      _move: function(t) {
        if (this._resizeMarkers.length) {
          var e = this._getResizeMarkerPoint(t);
          this._resizeMarkers[0].setLatLng(e);
        }
        this._shape.setLatLng(t), this._map.fire(GMap.Draw.Event.EDITMOVE, { layer: this._shape });
      },
    })),
    GMap.CircleMarker.addInitHook(function() {
      GMap.Edit.CircleMarker &&
        ((this.editing = new GMap.Edit.CircleMarker(this)),
        this.options.editable && this.editing.enable()),
        this.on('add', function() {
          this.editing && this.editing.enabled() && this.editing.addHooks();
        }),
        this.on('remove', function() {
          this.editing && this.editing.enabled() && this.editing.removeHooks();
        });
    }),
    (GMap.Edit = GMap.Edit || {}),
    (GMap.Edit.Circle = GMap.Edit.CircleMarker.extend({
      _createResizeMarker: function() {
        var t = this._shape.getLatLng(),
          e = this._getResizeMarkerPoint(t);
        (this._resizeMarkers = []),
          this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon));
      },
      _getResizeMarkerPoint: function(t) {
        var e = this._shape._radius * Math.cos(Math.PI / 4),
          i = this._map.project(t);
        return this._map.unproject([i.x + e, i.y - e]);
      },
      _resize: function(t) {
        var e = this._moveMarker.getLatLng();
        GMap.GeometryUtil.isVersion07x()
          ? (radius = e.distanceTo(t))
          : (radius = this._map.distance(e, t)),
          this._shape.setRadius(radius),
          this._map.editTooltip &&
            this._map._editTooltip.updateContent({
              text:
                GMap.drawLocal.edit.handlers.edit.tooltip.subtext +
                '<br />' +
                GMap.drawLocal.edit.handlers.edit.tooltip.text,
              subtext:
                GMap.drawLocal.draw.handlers.circle.radius +
                ': ' +
                GMap.GeometryUtil.readableDistance(
                  radius,
                  !0,
                  this.options.feet,
                  this.options.nautic
                ),
            }),
          this._shape.setRadius(radius),
          this._map.fire(GMap.Draw.Event.EDITRESIZE, { layer: this._shape });
      },
    })),
    GMap.Circle.addInitHook(function() {
      GMap.Edit.Circle &&
        ((this.editing = new GMap.Edit.Circle(this)),
        this.options.editable && this.editing.enable()),
        this.on('add', function() {
          this.editing && this.editing.enabled() && this.editing.addHooks();
        }),
        this.on('remove', function() {
          this.editing && this.editing.enabled() && this.editing.removeHooks();
        });
    }),
    GMap.Map.mergeOptions({ touchExtend: !0 }),
    (GMap.Map.TouchExtend = GMap.Handler.extend({
      initialize: function(t) {
        (this._map = t), (this._container = t._container), (this._pane = t._panes.overlayPane);
      },
      addHooks: function() {
        GMap.DomEvent.on(this._container, 'touchstart', this._onTouchStart, this),
          GMap.DomEvent.on(this._container, 'touchend', this._onTouchEnd, this),
          GMap.DomEvent.on(this._container, 'touchmove', this._onTouchMove, this),
          this._detectIE()
            ? (GMap.DomEvent.on(this._container, 'MSPointerDown', this._onTouchStart, this),
              GMap.DomEvent.on(this._container, 'MSPointerUp', this._onTouchEnd, this),
              GMap.DomEvent.on(this._container, 'MSPointerMove', this._onTouchMove, this),
              GMap.DomEvent.on(this._container, 'MSPointerCancel', this._onTouchCancel, this))
            : (GMap.DomEvent.on(this._container, 'touchcancel', this._onTouchCancel, this),
              GMap.DomEvent.on(this._container, 'touchleave', this._onTouchLeave, this));
      },
      removeHooks: function() {
        GMap.DomEvent.off(this._container, 'touchstart', this._onTouchStart, this),
          GMap.DomEvent.off(this._container, 'touchend', this._onTouchEnd, this),
          GMap.DomEvent.off(this._container, 'touchmove', this._onTouchMove, this),
          this._detectIE()
            ? (GMap.DomEvent.off(this._container, 'MSPointerDowm', this._onTouchStart, this),
              GMap.DomEvent.off(this._container, 'MSPointerUp', this._onTouchEnd, this),
              GMap.DomEvent.off(this._container, 'MSPointerMove', this._onTouchMove, this),
              GMap.DomEvent.off(this._container, 'MSPointerCancel', this._onTouchCancel, this))
            : (GMap.DomEvent.off(this._container, 'touchcancel', this._onTouchCancel, this),
              GMap.DomEvent.off(this._container, 'touchleave', this._onTouchLeave, this));
      },
      _touchEvent: function(t, e) {
        var i = {};
        if (void 0 !== t.touches) {
          if (!t.touches.length) return;
          i = t.touches[0];
        } else {
          if ('touch' !== t.pointerType) return;
          if (((i = t), !this._filterClick(t))) return;
        }
        var a = this._map.mouseEventToContainerPoint(i),
          o = this._map.mouseEventToLayerPoint(i),
          n = this._map.layerPointToLatLng(o);
        this._map.fire(e, {
          latlng: n,
          layerPoint: o,
          containerPoint: a,
          pageX: i.pageX,
          pageY: i.pageY,
          originalEvent: t,
        });
      },
      _filterClick: function(t) {
        var e = t.timeStamp || t.originalEvent.timeStamp,
          i = GMap.DomEvent._lastClick && e - GMap.DomEvent._lastClick;
        return (i && i > 100 && i < 500) || (t.target._simulatedClick && !t._simulated)
          ? (GMap.DomEvent.stop(t), !1)
          : ((GMap.DomEvent._lastClick = e), !0);
      },
      _onTouchStart: function(t) {
        if (this._map._loaded) {
          this._touchEvent(t, 'touchstart');
        }
      },
      _onTouchEnd: function(t) {
        if (this._map._loaded) {
          this._touchEvent(t, 'touchend');
        }
      },
      _onTouchCancel: function(t) {
        if (this._map._loaded) {
          var e = 'touchcancel';
          this._detectIE() && (e = 'pointercancel'), this._touchEvent(t, e);
        }
      },
      _onTouchLeave: function(t) {
        if (this._map._loaded) {
          this._touchEvent(t, 'touchleave');
        }
      },
      _onTouchMove: function(t) {
        if (this._map._loaded) {
          this._touchEvent(t, 'touchmove');
        }
      },
      _detectIE: function() {
        var e = t.navigator.userAgent,
          i = e.indexOf('MSIE ');
        if (i > 0) return parseInt(e.substring(i + 5, e.indexOf('.', i)), 10);
        if (e.indexOf('Trident/') > 0) {
          var a = e.indexOf('rv:');
          return parseInt(e.substring(a + 3, e.indexOf('.', a)), 10);
        }
        var o = e.indexOf('Edge/');
        return o > 0 && parseInt(e.substring(o + 5, e.indexOf('.', o)), 10);
      },
    })),
    GMap.Map.addInitHook('addHandler', 'touchExtend', GMap.Map.TouchExtend),
    (GMap.Marker.Touch = GMap.Marker.extend({
      _initInteraction: function() {
        return this.addInteractiveTarget
          ? GMap.Marker.prototype._initInteraction.apply(this)
          : this._initInteractionLegacy();
      },
      _initInteractionLegacy: function() {
        if (this.options.clickable) {
          var t = this._icon,
            e = [
              'dblclick',
              'mousedown',
              'mouseover',
              'mouseout',
              'contextmenu',
              'touchstart',
              'touchend',
              'touchmove',
            ];
          this._detectIE
            ? e.concat(['MSPointerDown', 'MSPointerUp', 'MSPointerMove', 'MSPointerCancel'])
            : e.concat(['touchcancel']),
            GMap.DomUtil.addClass(t, 'gmap-clickable'),
            GMap.DomEvent.on(t, 'click', this._onMouseClick, this),
            GMap.DomEvent.on(t, 'keypress', this._onKeyPress, this);
          for (var i = 0; i < e.length; i++) GMap.DomEvent.on(t, e[i], this._fireMouseEvent, this);
          GMap.Handler.MarkerDrag &&
            ((this.dragging = new GMap.Handler.MarkerDrag(this)),
            this.options.draggable && this.dragging.enable());
        }
      },
      _detectIE: function() {
        var e = t.navigator.userAgent,
          i = e.indexOf('MSIE ');
        if (i > 0) return parseInt(e.substring(i + 5, e.indexOf('.', i)), 10);
        if (e.indexOf('Trident/') > 0) {
          var a = e.indexOf('rv:');
          return parseInt(e.substring(a + 3, e.indexOf('.', a)), 10);
        }
        var o = e.indexOf('Edge/');
        return o > 0 && parseInt(e.substring(o + 5, e.indexOf('.', o)), 10);
      },
    })),
    (GMap.LatLngUtil = {
      cloneLatLngs: function(t) {
        for (var e = [], i = 0, a = t.length; i < a; i++)
          Array.isArray(t[i])
            ? e.push(GMap.LatLngUtil.cloneLatLngs(t[i]))
            : e.push(this.cloneLatLng(t[i]));
        return e;
      },
      cloneLatLng: function(t) {
        return GMap.latLng(t.lat, t.lng);
      },
    }),
    (function() {
      var t = { km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2 };
      GMap.GeometryUtil = GMap.extend(GMap.GeometryUtil || {}, {
        geodesicArea: function(t) {
          var e,
            i,
            a = t.length,
            o = 0,
            n = Math.PI / 180;
          if (a > 2) {
            for (var s = 0; s < a; s++)
              (e = t[s]),
                (i = t[(s + 1) % a]),
                (o += (i.lng - e.lng) * n * (2 + Math.sin(e.lat * n) + Math.sin(i.lat * n)));
            o = (6378137 * o * 6378137) / 2;
          }
          return Math.abs(o);
        },
        formattedNumber: function(t, e) {
          var i = parseFloat(t).toFixed(e),
            a = GMap.drawLocal.format && GMap.drawLocal.format.numeric,
            o = a && a.delimiters,
            n = o && o.thousands,
            s = o && o.decimal;
          if (n || s) {
            var r = i.split('.');
            (i = n ? r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + n) : r[0]),
              (s = s || '.'),
              r.length > 1 && (i = i + s + r[1]);
          }
          return i;
        },
        readableArea: function(e, i, a) {
          var o,
            n,
            a = GMap.Util.extend({}, t, a);
          return (
            i
              ? ((n = ['ha', 'm']),
                (type = typeof i),
                'string' === type ? (n = [i]) : 'boolean' !== type && (n = i),
                (o =
                  e >= 1e6 && -1 !== n.indexOf('km')
                    ? GMap.GeometryUtil.formattedNumber(1e-6 * e, a.km) + ' km²'
                    : e >= 1e4 && -1 !== n.indexOf('ha')
                    ? GMap.GeometryUtil.formattedNumber(1e-4 * e, a.ha) + ' ha'
                    : GMap.GeometryUtil.formattedNumber(e, a.m) + ' m²'))
              : ((e /= 0.836127),
                (o =
                  e >= 3097600
                    ? GMap.GeometryUtil.formattedNumber(e / 3097600, a.mi) + ' mi²'
                    : e >= 4840
                    ? GMap.GeometryUtil.formattedNumber(e / 4840, a.ac) + ' acres'
                    : GMap.GeometryUtil.formattedNumber(e, a.yd) + ' yd²')),
            o
          );
        },
        readableDistance: function(e, i, a, o, n) {
          var s,
            n = GMap.Util.extend({}, t, n);
          switch (
            i ? ('string' == typeof i ? i : 'metric') : a ? 'feet' : o ? 'nauticalMile' : 'yards'
          ) {
            case 'metric':
              s =
                e > 1e3
                  ? GMap.GeometryUtil.formattedNumber(e / 1e3, n.km) + ' km'
                  : GMap.GeometryUtil.formattedNumber(e, n.m) + ' m';
              break;
            case 'feet':
              (e *= 3.28083), (s = GMap.GeometryUtil.formattedNumber(e, n.ft) + ' ft');
              break;
            case 'nauticalMile':
              (e *= 0.53996), (s = GMap.GeometryUtil.formattedNumber(e / 1e3, n.nm) + ' nm');
              break;
            case 'yards':
            default:
              (e *= 1.09361),
                (s =
                  e > 1760
                    ? GMap.GeometryUtil.formattedNumber(e / 1760, n.mi) + ' miles'
                    : GMap.GeometryUtil.formattedNumber(e, n.yd) + ' yd');
          }
          return s;
        },
        isVersion07x: function() {
          var t = GMap.version.split('.');
          return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10);
        },
      });
    })(),
    GMap.Util.extend(GMap.LineUtil, {}),
    GMap.Polyline.include({
      intersects: function() {
        var t,
          e,
          i,
          a = this._getProjectedPoints(),
          o = a ? a.length : 0;
        if (this._tooFewPointsForIntersection()) return !1;
        for (t = o - 1; t >= 3; t--)
          if (((e = a[t - 1]), (i = a[t]), this._lineSegmentsIntersectsRange(e, i, t - 2)))
            return !0;
        return !1;
      },
      newLatLngIntersects: function(t, e) {
        return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e);
      },
      newPointIntersects: function(t, e) {
        var i = this._getProjectedPoints(),
          a = i ? i.length : 0,
          o = i ? i[a - 1] : null,
          n = a - 2;
        return (
          !this._tooFewPointsForIntersection(1) &&
          this._lineSegmentsIntersectsRange(o, t, n, e ? 1 : 0)
        );
      },
      _tooFewPointsForIntersection: function(t) {
        var e = this._getProjectedPoints(),
          i = e ? e.length : 0;
        return (i += t || 0), !e || i <= 3;
      },
      _lineSegmentsIntersectsRange: function(t, e, i, a) {
        var o,
          n,
          s = this._getProjectedPoints();
        a = a || 0;
        for (var r = i; r > a; r--)
          if (((o = s[r - 1]), (n = s[r]), GMap.LineUtil.segmentsIntersect(t, e, o, n))) return !0;
        return !1;
      },
      _getProjectedPoints: function() {
        if (!this._defaultShape) return this._originalPoints;
        for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++)
          t.push(this._map.latLngToLayerPoint(e[i]));
        return t;
      },
    }),
    GMap.Polygon.include({
      intersects: function() {
        var t,
          e,
          i,
          a,
          o = this._getProjectedPoints();
        return (
          !this._tooFewPointsForIntersection() &&
          (!!GMap.Polyline.prototype.intersects.call(this) ||
            ((t = o.length),
            (e = o[0]),
            (i = o[t - 1]),
            (a = t - 2),
            this._lineSegmentsIntersectsRange(i, e, a, 1)))
        );
      },
    }),
    (GMap.Control.Draw = GMap.Control.extend({
      options: { position: 'topleft', draw: {}, edit: !1 },
      initialize: function(t) {
        if (GMap.version < '0.7')
          throw new Error(
            'GMap.draw 0.2.3+ requires GMap 0.7.0+. Download latest from https://github.com/GMap/GMap/'
          );
        GMap.Control.prototype.initialize.call(this, t);
        var e;
        (this._toolbars = {}),
          GMap.DrawToolbar &&
            this.options.draw &&
            ((e = new GMap.DrawToolbar(this.options.draw)),
            (this._toolbars[GMap.DrawToolbar.TYPE] = e),
            this._toolbars[GMap.DrawToolbar.TYPE].on('enable', this._toolbarEnabled, this)),
          GMap.EditToolbar &&
            this.options.edit &&
            ((e = new GMap.EditToolbar(this.options.edit)),
            (this._toolbars[GMap.EditToolbar.TYPE] = e),
            this._toolbars[GMap.EditToolbar.TYPE].on('enable', this._toolbarEnabled, this)),
          (GMap.toolbar = this);
      },
      onAdd: function(t) {
        var e,
          i = GMap.DomUtil.create('div', 'gmap-draw'),
          a = !1;
        for (var o in this._toolbars)
          this._toolbars.hasOwnProperty(o) &&
            (e = this._toolbars[o].addToolbar(t)) &&
            (a ||
              (GMap.DomUtil.hasClass(e, 'gmap-draw-toolbar-top') ||
                GMap.DomUtil.addClass(e.childNodes[0], 'gmap-draw-toolbar-top'),
              (a = !0)),
            i.appendChild(e));
        return i;
      },
      onRemove: function() {
        for (var t in this._toolbars)
          this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar();
      },
      setDrawingOptions: function(t) {
        for (var e in this._toolbars)
          this._toolbars[e] instanceof GMap.DrawToolbar && this._toolbars[e].setOptions(t);
      },
      _toolbarEnabled: function(t) {
        var e = t.target;
        for (var i in this._toolbars) this._toolbars[i] !== e && this._toolbars[i].disable();
      },
    })),
    GMap.Map.mergeOptions({ drawControlTooltips: !0, drawControl: !1 }),
    GMap.Map.addInitHook(function() {
      this.options.drawControl &&
        ((this.drawControl = new GMap.Control.Draw()), this.addControl(this.drawControl));
    }),
    (GMap.Toolbar = GMap.Class.extend({
      initialize: function(t) {
        GMap.setOptions(this, t),
          (this._modes = {}),
          (this._actionButtons = []),
          (this._activeMode = null);
        var e = GMap.version.split('.');
        1 === parseInt(e[0], 10) && parseInt(e[1], 10) >= 2
          ? GMap.Toolbar.include(GMap.Evented.prototype)
          : GMap.Toolbar.include(new GMap.Evented());
      },
      enabled: function() {
        return null !== this._activeMode;
      },
      disable: function() {
        this.enabled() && this._activeMode.handler.disable();
      },
      addToolbar: function(t) {
        var e,
          i = GMap.DomUtil.create('div', 'gmap-draw-section'),
          a = 0,
          o = this._toolbarClass || '',
          n = this.getModeHandlers(t);
        for (
          this._toolbarContainer = GMap.DomUtil.create('div', 'gmap-draw-toolbar gmap-bar'),
            this._map = t,
            e = 0;
          e < n.length;
          e++
        )
          n[e].enabled &&
            this._initModeHandler(n[e].handler, this._toolbarContainer, a++, o, n[e].title);
        if (a)
          return (
            (this._lastButtonIndex = --a),
            (this._actionsContainer = GMap.DomUtil.create('ul', 'gmap-draw-actions')),
            i.appendChild(this._toolbarContainer),
            i.appendChild(this._actionsContainer),
            i
          );
      },
      removeToolbar: function() {
        for (var t in this._modes)
          this._modes.hasOwnProperty(t) &&
            (this._disposeButton(
              this._modes[t].button,
              this._modes[t].handler.enable,
              this._modes[t].handler
            ),
            this._modes[t].handler.disable(),
            this._modes[t].handler
              .off('enabled', this._handlerActivated, this)
              .off('disabled', this._handlerDeactivated, this));
        this._modes = {};
        for (var e = 0, i = this._actionButtons.length; e < i; e++)
          this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
        (this._actionButtons = []), (this._actionsContainer = null);
      },
      _initModeHandler: function(t, e, i, a, o) {
        var n = t.type;
        (this._modes[n] = {}),
          (this._modes[n].handler = t),
          (this._modes[n].button = this._createButton({
            type: n,
            title: o,
            className: a + '-' + n,
            container: e,
            callback: this._modes[n].handler.enable,
            context: this._modes[n].handler,
          })),
          (this._modes[n].buttonIndex = i),
          this._modes[n].handler
            .on('enabled', this._handlerActivated, this)
            .on('disabled', this._handlerDeactivated, this);
      },
      _detectIOS: function() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream;
      },
      _createButton: function(t) {
        var e = GMap.DomUtil.create('a', t.className || '', t.container),
          i = GMap.DomUtil.create('span', 'sr-only', t.container);
        (e.href = '#'),
          e.appendChild(i),
          t.title && ((e.title = t.title), (i.innerHTML = t.title)),
          t.text && ((e.innerHTML = t.text), (i.innerHTML = t.text));
        var a = this._detectIOS() ? 'touchstart' : 'click';
        return (
          GMap.DomEvent.on(e, 'click', GMap.DomEvent.stopPropagation)
            .on(e, 'mousedown', GMap.DomEvent.stopPropagation)
            .on(e, 'dblclick', GMap.DomEvent.stopPropagation)
            .on(e, 'touchstart', GMap.DomEvent.stopPropagation)
            .on(e, 'click', GMap.DomEvent.preventDefault)
            .on(e, a, t.callback, t.context),
          e
        );
      },
      _disposeButton: function(t, e) {
        var i = this._detectIOS() ? 'touchstart' : 'click';
        GMap.DomEvent.off(t, 'click', GMap.DomEvent.stopPropagation)
          .off(t, 'mousedown', GMap.DomEvent.stopPropagation)
          .off(t, 'dblclick', GMap.DomEvent.stopPropagation)
          .off(t, 'touchstart', GMap.DomEvent.stopPropagation)
          .off(t, 'click', GMap.DomEvent.preventDefault)
          .off(t, i, e);
      },
      _handlerActivated: function(t) {
        this.disable(),
          (this._activeMode = this._modes[t.handler]),
          GMap.DomUtil.addClass(this._activeMode.button, 'gmap-draw-toolbar-button-enabled'),
          this._showActionsToolbar(),
          this.fire('enable');
      },
      _handlerDeactivated: function() {
        this._hideActionsToolbar(),
          GMap.DomUtil.removeClass(this._activeMode.button, 'gmap-draw-toolbar-button-enabled'),
          (this._activeMode = null),
          this.fire('disable');
      },
      _createActions: function(t) {
        var e,
          i,
          a,
          o,
          n = this._actionsContainer,
          s = this.getActions(t),
          r = s.length;
        for (i = 0, a = this._actionButtons.length; i < a; i++)
          this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback);
        for (this._actionButtons = []; n.firstChild; ) n.removeChild(n.firstChild);
        for (var h = 0; h < r; h++)
          ('enabled' in s[h] && !s[h].enabled) ||
            ((e = GMap.DomUtil.create('li', '', n)),
            (o = this._createButton({
              title: s[h].title,
              text: s[h].text,
              container: e,
              callback: s[h].callback,
              context: s[h].context,
            })),
            this._actionButtons.push({ button: o, callback: s[h].callback }));
      },
      _showActionsToolbar: function() {
        var t = this._activeMode.buttonIndex,
          e = this._lastButtonIndex,
          i = this._activeMode.button.offsetTop - 1;
        this._createActions(this._activeMode.handler),
          (this._actionsContainer.style.top = i + 'px'),
          0 === t &&
            (GMap.DomUtil.addClass(this._toolbarContainer, 'gmap-draw-toolbar-notop'),
            GMap.DomUtil.addClass(this._actionsContainer, 'gmap-draw-actions-top')),
          t === e &&
            (GMap.DomUtil.addClass(this._toolbarContainer, 'gmap-draw-toolbar-nobottom'),
            GMap.DomUtil.addClass(this._actionsContainer, 'gmap-draw-actions-bottom')),
          (this._actionsContainer.style.display = 'block'),
          this._map.fire(GMap.Draw.Event.TOOLBAROPENED);
      },
      _hideActionsToolbar: function() {
        (this._actionsContainer.style.display = 'none'),
          GMap.DomUtil.removeClass(this._toolbarContainer, 'gmap-draw-toolbar-notop'),
          GMap.DomUtil.removeClass(this._toolbarContainer, 'gmap-draw-toolbar-nobottom'),
          GMap.DomUtil.removeClass(this._actionsContainer, 'gmap-draw-actions-top'),
          GMap.DomUtil.removeClass(this._actionsContainer, 'gmap-draw-actions-bottom'),
          this._map.fire(GMap.Draw.Event.TOOLBARCLOSED);
      },
    })),
    (GMap.Draw = GMap.Draw || {}),
    (GMap.Draw.Tooltip = GMap.Class.extend({
      initialize: function(t) {
        (this._map = t),
          (this._popupPane = t._panes.popupPane),
          (this._visible = !1),
          (this._container = t.options.drawControlTooltips
            ? GMap.DomUtil.create('div', 'gmap-draw-tooltip', this._popupPane)
            : null),
          (this._singleLineLabel = !1),
          this._map.on('mouseout', this._onMouseOut, this);
      },
      dispose: function() {
        this._map.off('mouseout', this._onMouseOut, this),
          this._container &&
            (this._popupPane.removeChild(this._container), (this._container = null));
      },
      updateContent: function(t) {
        return this._container
          ? ((t.subtext = t.subtext || ''),
            0 !== t.subtext.length || this._singleLineLabel
              ? t.subtext.length > 0 &&
                this._singleLineLabel &&
                (GMap.DomUtil.removeClass(this._container, 'gmap-draw-tooltip-single'),
                (this._singleLineLabel = !1))
              : (GMap.DomUtil.addClass(this._container, 'gmap-draw-tooltip-single'),
                (this._singleLineLabel = !0)),
            (this._container.innerHTML =
              (t.subtext.length > 0
                ? '<span class="gmap-draw-tooltip-subtext">' + t.subtext + '</span><br />'
                : '') +
              '<span>' +
              t.text +
              '</span>'),
            t.text || t.subtext
              ? ((this._visible = !0), (this._container.style.visibility = 'inherit'))
              : ((this._visible = !1), (this._container.style.visibility = 'hidden')),
            this)
          : this;
      },
      updatePosition: function(t) {
        var e = this._map.latLngToLayerPoint(t),
          i = this._container;
        return (
          this._container &&
            (this._visible && (i.style.visibility = 'inherit'), GMap.DomUtil.setPosition(i, e)),
          this
        );
      },
      showAsError: function() {
        return (
          this._container && GMap.DomUtil.addClass(this._container, 'gmap-error-draw-tooltip'), this
        );
      },
      removeError: function() {
        return (
          this._container && GMap.DomUtil.removeClass(this._container, 'gmap-error-draw-tooltip'),
          this
        );
      },
      _onMouseOut: function() {
        this._container && (this._container.style.visibility = 'hidden');
      },
    })),
    (GMap.DrawToolbar = GMap.Toolbar.extend({
      statics: { TYPE: 'draw' },
      options: {
        polyline: {},
        polygon: {},
        rectangle: {},
        circle: {},
        marker: {},
        circlemarker: {},
      },
      initialize: function(t) {
        for (var e in this.options)
          this.options.hasOwnProperty(e) && t[e] && (t[e] = GMap.extend({}, this.options[e], t[e]));
        (this._toolbarClass = 'gmap-draw-draw'), GMap.Toolbar.prototype.initialize.call(this, t);
      },
      getModeHandlers: function(t) {
        return [
          {
            enabled: this.options.polyline,
            handler: new GMap.Draw.Polyline(t, this.options.polyline),
            title: GMap.drawLocal.draw.toolbar.buttons.polyline,
          },
          {
            enabled: this.options.polygon,
            handler: new GMap.Draw.Polygon(t, this.options.polygon),
            title: GMap.drawLocal.draw.toolbar.buttons.polygon,
          },
          {
            enabled: this.options.rectangle,
            handler: new GMap.Draw.Rectangle(t, this.options.rectangle),
            title: GMap.drawLocal.draw.toolbar.buttons.rectangle,
          },
          {
            enabled: this.options.circle,
            handler: new GMap.Draw.Circle(t, this.options.circle),
            title: GMap.drawLocal.draw.toolbar.buttons.circle,
          },
          {
            enabled: this.options.marker,
            handler: new GMap.Draw.Marker(t, this.options.marker),
            title: GMap.drawLocal.draw.toolbar.buttons.marker,
          },
          {
            enabled: this.options.circlemarker,
            handler: new GMap.Draw.CircleMarker(t, this.options.circlemarker),
            title: GMap.drawLocal.draw.toolbar.buttons.circlemarker,
          },
        ];
      },
      getActions: function(t) {
        return [
          {
            enabled: t.completeShape,
            title: GMap.drawLocal.draw.toolbar.finish.title,
            text: GMap.drawLocal.draw.toolbar.finish.text,
            callback: t.completeShape,
            context: t,
          },
          {
            enabled: t.deleteLastVertex,
            title: GMap.drawLocal.draw.toolbar.undo.title,
            text: GMap.drawLocal.draw.toolbar.undo.text,
            callback: t.deleteLastVertex,
            context: t,
          },
          {
            title: GMap.drawLocal.draw.toolbar.actions.title,
            text: GMap.drawLocal.draw.toolbar.actions.text,
            callback: this.disable,
            context: this,
          },
        ];
      },
      setOptions: function(t) {
        GMap.setOptions(this, t);
        for (var e in this._modes)
          this._modes.hasOwnProperty(e) &&
            t.hasOwnProperty(e) &&
            this._modes[e].handler.setOptions(t[e]);
      },
    })),
    (GMap.EditToolbar = GMap.Toolbar.extend({
      statics: { TYPE: 'edit' },
      options: {
        edit: {
          selectedPathOptions: {
            dashArray: '10, 10',
            fill: !0,
            fillColor: '#fe57a1',
            fillOpacity: 0.1,
            maintainColor: !1,
          },
        },
        remove: {},
        poly: null,
        featureGroup: null,
      },
      initialize: function(t) {
        t.edit &&
          (void 0 === t.edit.selectedPathOptions &&
            (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions),
          (t.edit.selectedPathOptions = GMap.extend(
            {},
            this.options.edit.selectedPathOptions,
            t.edit.selectedPathOptions
          ))),
          t.remove && (t.remove = GMap.extend({}, this.options.remove, t.remove)),
          t.poly && (t.poly = GMap.extend({}, this.options.poly, t.poly)),
          (this._toolbarClass = 'gmap-draw-edit'),
          GMap.Toolbar.prototype.initialize.call(this, t),
          (this._selectedFeatureCount = 0);
      },
      getModeHandlers: function(t) {
        var e = this.options.featureGroup;
        return [
          {
            enabled: this.options.edit,
            handler: new GMap.EditToolbar.Edit(t, {
              featureGroup: e,
              selectedPathOptions: this.options.edit.selectedPathOptions,
              poly: this.options.poly,
            }),
            title: GMap.drawLocal.edit.toolbar.buttons.edit,
          },
          {
            enabled: this.options.remove,
            handler: new GMap.EditToolbar.Delete(t, { featureGroup: e }),
            title: GMap.drawLocal.edit.toolbar.buttons.remove,
          },
        ];
      },
      getActions: function(t) {
        var e = [
          {
            title: GMap.drawLocal.edit.toolbar.actions.save.title,
            text: GMap.drawLocal.edit.toolbar.actions.save.text,
            callback: this._save,
            context: this,
          },
          {
            title: GMap.drawLocal.edit.toolbar.actions.cancel.title,
            text: GMap.drawLocal.edit.toolbar.actions.cancel.text,
            callback: this.disable,
            context: this,
          },
        ];
        return (
          t.removeAllLayers &&
            e.push({
              title: GMap.drawLocal.edit.toolbar.actions.clearAll.title,
              text: GMap.drawLocal.edit.toolbar.actions.clearAll.text,
              callback: this._clearAllLayers,
              context: this,
            }),
          e
        );
      },
      addToolbar: function(t) {
        var e = GMap.Toolbar.prototype.addToolbar.call(this, t);
        return (
          this._checkDisabled(),
          this.options.featureGroup.on('layeradd layerremove', this._checkDisabled, this),
          e
        );
      },
      removeToolbar: function() {
        this.options.featureGroup.off('layeradd layerremove', this._checkDisabled, this),
          GMap.Toolbar.prototype.removeToolbar.call(this);
      },
      disable: function() {
        this.enabled() &&
          (this._activeMode.handler.revertLayers(), GMap.Toolbar.prototype.disable.call(this));
      },
      _save: function() {
        this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable();
      },
      _clearAllLayers: function() {
        this._activeMode.handler.removeAllLayers(),
          this._activeMode && this._activeMode.handler.disable();
      },
      _checkDisabled: function() {
        var t,
          e = this.options.featureGroup,
          i = 0 !== e.getLayers().length;
        this.options.edit &&
          ((t = this._modes[GMap.EditToolbar.Edit.TYPE].button),
          i
            ? GMap.DomUtil.removeClass(t, 'gmap-disabled')
            : GMap.DomUtil.addClass(t, 'gmap-disabled'),
          t.setAttribute(
            'title',
            i
              ? GMap.drawLocal.edit.toolbar.buttons.edit
              : GMap.drawLocal.edit.toolbar.buttons.editDisabled
          )),
          this.options.remove &&
            ((t = this._modes[GMap.EditToolbar.Delete.TYPE].button),
            i
              ? GMap.DomUtil.removeClass(t, 'gmap-disabled')
              : GMap.DomUtil.addClass(t, 'gmap-disabled'),
            t.setAttribute(
              'title',
              i
                ? GMap.drawLocal.edit.toolbar.buttons.remove
                : GMap.drawLocal.edit.toolbar.buttons.removeDisabled
            ));
      },
    })),
    (GMap.EditToolbar.Edit = GMap.Handler.extend({
      statics: { TYPE: 'edit' },
      initialize: function(t, e) {
        if (
          (GMap.Handler.prototype.initialize.call(this, t),
          GMap.setOptions(this, e),
          (this._featureGroup = e.featureGroup),
          !(this._featureGroup instanceof GMap.FeatureGroup))
        )
          throw new Error('options.featureGroup must be a GMap.FeatureGroup');
        (this._uneditedLayerProps = {}), (this.type = GMap.EditToolbar.Edit.TYPE);
        var i = GMap.version.split('.');
        1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2
          ? GMap.EditToolbar.Edit.include(GMap.Evented.prototype)
          : GMap.EditToolbar.Edit.include(new GMap.Evented());
      },
      enable: function() {
        !this._enabled &&
          this._hasAvailableLayers() &&
          (this.fire('enabled', { handler: this.type }),
          this._map.fire(GMap.Draw.Event.EDITSTART, { handler: this.type }),
          GMap.Handler.prototype.enable.call(this),
          this._featureGroup
            .on('layeradd', this._enableLayerEdit, this)
            .on('layerremove', this._disableLayerEdit, this));
      },
      disable: function() {
        this._enabled &&
          (this._featureGroup
            .off('layeradd', this._enableLayerEdit, this)
            .off('layerremove', this._disableLayerEdit, this),
          GMap.Handler.prototype.disable.call(this),
          this._map.fire(GMap.Draw.Event.EDITSTOP, { handler: this.type }),
          this.fire('disabled', { handler: this.type }));
      },
      addHooks: function() {
        var t = this._map;
        t &&
          (t.getContainer().focus(),
          this._featureGroup.eachLayer(this._enableLayerEdit, this),
          (this._tooltip = new GMap.Draw.Tooltip(this._map)),
          this._tooltip.updateContent({
            text: GMap.drawLocal.edit.handlers.edit.tooltip.text,
            subtext: GMap.drawLocal.edit.handlers.edit.tooltip.subtext,
          }),
          (t._editTooltip = this._tooltip),
          this._updateTooltip(),
          this._map
            .on('mousemove', this._onMouseMove, this)
            .on('touchmove', this._onMouseMove, this)
            .on('MSPointerMove', this._onMouseMove, this)
            .on(GMap.Draw.Event.EDITVERTEX, this._updateTooltip, this));
      },
      removeHooks: function() {
        this._map &&
          (this._featureGroup.eachLayer(this._disableLayerEdit, this),
          (this._uneditedLayerProps = {}),
          this._tooltip.dispose(),
          (this._tooltip = null),
          this._map
            .off('mousemove', this._onMouseMove, this)
            .off('touchmove', this._onMouseMove, this)
            .off('MSPointerMove', this._onMouseMove, this)
            .off(GMap.Draw.Event.EDITVERTEX, this._updateTooltip, this));
      },
      revertLayers: function() {
        this._featureGroup.eachLayer(function(t) {
          this._revertLayer(t);
        }, this);
      },
      save: function() {
        var t = new GMap.LayerGroup();
        this._featureGroup.eachLayer(function(e) {
          e.edited && (t.addLayer(e), (e.edited = !1));
        }),
          this._map.fire(GMap.Draw.Event.EDITED, { layers: t });
      },
      _backupLayer: function(t) {
        var e = GMap.Util.stamp(t);
        this._uneditedLayerProps[e] ||
          (t instanceof GMap.Polyline || t instanceof GMap.Polygon || t instanceof GMap.Rectangle
            ? (this._uneditedLayerProps[e] = {
                latlngs: GMap.LatLngUtil.cloneLatLngs(t.getLatLngs()),
              })
            : t instanceof GMap.Circle
            ? (this._uneditedLayerProps[e] = {
                latlng: GMap.LatLngUtil.cloneLatLng(t.getLatLng()),
                radius: t.getRadius(),
              })
            : (t instanceof GMap.Marker || t instanceof GMap.CircleMarker) &&
              (this._uneditedLayerProps[e] = {
                latlng: GMap.LatLngUtil.cloneLatLng(t.getLatLng()),
              }));
      },
      _getTooltipText: function() {
        return {
          text: GMap.drawLocal.edit.handlers.edit.tooltip.text,
          subtext: GMap.drawLocal.edit.handlers.edit.tooltip.subtext,
        };
      },
      _updateTooltip: function() {
        this._tooltip.updateContent(this._getTooltipText());
      },
      _revertLayer: function(t) {
        var e = GMap.Util.stamp(t);
        (t.edited = !1),
          this._uneditedLayerProps.hasOwnProperty(e) &&
            (t instanceof GMap.Polyline || t instanceof GMap.Polygon || t instanceof GMap.Rectangle
              ? t.setLatLngs(this._uneditedLayerProps[e].latlngs)
              : t instanceof GMap.Circle
              ? (t.setLatLng(this._uneditedLayerProps[e].latlng),
                t.setRadius(this._uneditedLayerProps[e].radius))
              : (t instanceof GMap.Marker || t instanceof GMap.CircleMarker) &&
                t.setLatLng(this._uneditedLayerProps[e].latlng),
            t.fire('revert-edited', { layer: t }));
      },
      _enableLayerEdit: function(t) {
        var e,
          i,
          a = t.layer || t.target || t;
        this._backupLayer(a),
          this.options.poly &&
            ((i = GMap.Util.extend({}, this.options.poly)), (a.options.poly = i)),
          this.options.selectedPathOptions &&
            ((e = GMap.Util.extend({}, this.options.selectedPathOptions)),
            e.maintainColor && ((e.color = a.options.color), (e.fillColor = a.options.fillColor)),
            (a.options.original = GMap.extend({}, a.options)),
            (a.options.editing = e)),
          a instanceof GMap.Marker
            ? (a.editing && a.editing.enable(),
              a.dragging.enable(),
              a
                .on('dragend', this._onMarkerDragEnd)
                .on('touchmove', this._onTouchMove, this)
                .on('MSPointerMove', this._onTouchMove, this)
                .on('touchend', this._onMarkerDragEnd, this)
                .on('MSPointerUp', this._onMarkerDragEnd, this))
            : a.editing.enable();
      },
      _disableLayerEdit: function(t) {
        var e = t.layer || t.target || t;
        (e.edited = !1),
          e.editing && e.editing.disable(),
          delete e.options.editing,
          delete e.options.original,
          this._selectedPathOptions &&
            (e instanceof GMap.Marker
              ? this._toggleMarkerHighlight(e)
              : (e.setStyle(e.options.previousOptions), delete e.options.previousOptions)),
          e instanceof GMap.Marker
            ? (e.dragging.disable(),
              e
                .off('dragend', this._onMarkerDragEnd, this)
                .off('touchmove', this._onTouchMove, this)
                .off('MSPointerMove', this._onTouchMove, this)
                .off('touchend', this._onMarkerDragEnd, this)
                .off('MSPointerUp', this._onMarkerDragEnd, this))
            : e.editing.disable();
      },
      _onMouseMove: function(t) {
        this._tooltip.updatePosition(t.latlng);
      },
      _onMarkerDragEnd: function(t) {
        var e = t.target;
        (e.edited = !0), this._map.fire(GMap.Draw.Event.EDITMOVE, { layer: e });
      },
      _onTouchMove: function(t) {
        var e = t.originalEvent.changedTouches[0],
          i = this._map.mouseEventToLayerPoint(e),
          a = this._map.layerPointToLatLng(i);
        t.target.setLatLng(a);
      },
      _hasAvailableLayers: function() {
        return 0 !== this._featureGroup.getLayers().length;
      },
    })),
    (GMap.EditToolbar.Delete = GMap.Handler.extend({
      statics: { TYPE: 'remove' },
      initialize: function(t, e) {
        if (
          (GMap.Handler.prototype.initialize.call(this, t),
          GMap.Util.setOptions(this, e),
          (this._deletableLayers = this.options.featureGroup),
          !(this._deletableLayers instanceof GMap.FeatureGroup))
        )
          throw new Error('options.featureGroup must be a GMap.FeatureGroup');
        this.type = GMap.EditToolbar.Delete.TYPE;
        var i = GMap.version.split('.');
        1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2
          ? GMap.EditToolbar.Delete.include(GMap.Evented.prototype)
          : GMap.EditToolbar.Delete.include(new GMap.Evented());
      },
      enable: function() {
        !this._enabled &&
          this._hasAvailableLayers() &&
          (this.fire('enabled', { handler: this.type }),
          this._map.fire(GMap.Draw.Event.DELETESTART, { handler: this.type }),
          GMap.Handler.prototype.enable.call(this),
          this._deletableLayers
            .on('layeradd', this._enableLayerDelete, this)
            .on('layerremove', this._disableLayerDelete, this));
      },
      disable: function() {
        this._enabled &&
          (this._deletableLayers
            .off('layeradd', this._enableLayerDelete, this)
            .off('layerremove', this._disableLayerDelete, this),
          GMap.Handler.prototype.disable.call(this),
          this._map.fire(GMap.Draw.Event.DELETESTOP, { handler: this.type }),
          this.fire('disabled', { handler: this.type }));
      },
      addHooks: function() {
        var t = this._map;
        t &&
          (t.getContainer().focus(),
          this._deletableLayers.eachLayer(this._enableLayerDelete, this),
          (this._deletedLayers = new GMap.LayerGroup()),
          (this._tooltip = new GMap.Draw.Tooltip(this._map)),
          this._tooltip.updateContent({ text: GMap.drawLocal.edit.handlers.remove.tooltip.text }),
          this._map.on('mousemove', this._onMouseMove, this));
      },
      removeHooks: function() {
        this._map &&
          (this._deletableLayers.eachLayer(this._disableLayerDelete, this),
          (this._deletedLayers = null),
          this._tooltip.dispose(),
          (this._tooltip = null),
          this._map.off('mousemove', this._onMouseMove, this));
      },
      revertLayers: function() {
        this._deletedLayers.eachLayer(function(t) {
          this._deletableLayers.addLayer(t), t.fire('revert-deleted', { layer: t });
        }, this);
      },
      save: function() {
        this._map.fire(GMap.Draw.Event.DELETED, { layers: this._deletedLayers });
      },
      removeAllLayers: function() {
        this._deletableLayers.eachLayer(function(t) {
          this._removeLayer({ layer: t });
        }, this),
          this.save();
      },
      _enableLayerDelete: function(t) {
        (t.layer || t.target || t).on('click', this._removeLayer, this);
      },
      _disableLayerDelete: function(t) {
        var e = t.layer || t.target || t;
        e.off('click', this._removeLayer, this), this._deletedLayers.removeLayer(e);
      },
      _removeLayer: function(t) {
        var e = t.layer || t.target || t;
        this._deletableLayers.removeLayer(e), this._deletedLayers.addLayer(e), e.fire('deleted');
      },
      _onMouseMove: function(t) {
        this._tooltip.updatePosition(t.latlng);
      },
      _hasAvailableLayers: function() {
        return 0 !== this._deletableLayers.getLayers().length;
      },
    }));
})(window, document);
