import React, { Fragment } from 'react';
import { Button, Row, Col, Icon, Steps, Card } from 'antd';
import { loadMap, openJB } from 'src/utils/map'

export default class Gmap extends React.Component {
  componentDidMount() {
    this.map = loadMap('map');
    this.forceUpdate();
  }

  render() {
    const map = this.map || {};
    return (
      <Fragment>
        <div id="map" style={{ height: 500 }} />
        <div style={{ marginTop: 10 }}>
          <Button onClick={openJB}>打开军标面板</Button>&nbsp;
          <Button onClick={map.drawMarker}>添加点</Button>&nbsp;
          <Button onClick={map.drawPolyline}>添加线</Button>&nbsp;
          <Button onClick={map.drawPolygon}>添加面</Button>&nbsp;
          <Button onClick={map.drawCircle}>添加圆</Button>&nbsp;
          <Button onClick={map.drawRectangle}>添加矩形</Button>&nbsp;
          <br /><br />
          <Button onClick={map.removeAll}>删除所有图元</Button>&nbsp;
          <br /><br />
          <Button onClick={map.editMarker}>编辑点</Button>&nbsp;
          <Button onClick={map.editPolyline}>编辑线</Button>&nbsp;
          <Button onClick={map.editPolygon}>编辑面</Button>&nbsp;
          <Button onClick={map.editCircle}>编辑圆</Button>&nbsp;
          <Button onClick={map.editRectangle}>编辑矩形</Button>&nbsp;
          <br /><br />
          <Button onClick={map.saveEditing}>结束编辑</Button>&nbsp;
          <br /><br />
          <Button onClick={map.addCanvasMarker}>绘制CanvasMarker</Button>&nbsp;
          <Button onClick={map.drawCanvasMarker}>交互式添加CanvasMarker</Button>&nbsp;
          <Button onClick={map.changeMarkerColor}>重新绘制CanvasMarker</Button>&nbsp;
        </div>
      </Fragment>
    )
  }
}
