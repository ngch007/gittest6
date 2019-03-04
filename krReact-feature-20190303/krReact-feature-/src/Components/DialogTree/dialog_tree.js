import './dialog_tree.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Tree, { TreeNode } from 'rc-tree';
import { gData } from './util';
import './draggable.less';

export default class Dialog_tree extends React.Component {
  state = {
    gData,
    autoExpandParent: true,
    selectedKeys:[],
    expandedKeys: ['0-0-key', '0-0-0-key', '0-0-0-0-key'],
  };
  //开始拖拽
  onDragStart = (info) => {
    console.log('start', info);
  }

  onDragEnter = (info) => {
    console.log('enter', info);
    this.setState({
      expandedKeys: info.expandedKeys,
    });
  }
  onDrop = (info) => {
    console.log('drop', info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          callback(item, index, arr);
          return;
        }
        if (item.children) {
          loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 &&  // Has children
      info.node.props.expanded &&                     // Is expanded
      dropPosition === 1                              // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else {
      // Drop on the gap
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    this.setState({
      gData: data,
    });
  }
  onExpand = (expandedKeys) => {
    console.log('onExpand', arguments);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  //鼠标右击事件
  onRightClick = (info) => {
    console.log('right click', info);
    this.setState({ selectedKeys: [info.node.props.eventKey] });
    alert("鼠标右键开启-----添加子节点，删除本节点功能");
  }
  //鼠标左键点击事件
  onSelect = (selectedKeys) => {
    this.setState({ selectedKeys });
    alert("鼠标左键点击-----查看对应节点属性");
  }
  render() {
    const loop = data => {
      return data.map((item) => {
        if (item.children && item.children.length) {
          return <TreeNode key={item.key} title={item.title}>{loop(item.children)}</TreeNode>;
        }
        return <TreeNode key={item.key} title={item.title} />;
      });
    };
    return (<div className="draggable-demo">
      <h2>draggable</h2>
      <p>drag a node into another node</p>
      <div className="draggable-container">
        <Tree
        selectedKeys={this.state.selectedKeys}
          expandedKeys={this.state.expandedKeys}
          onExpand={this.onExpand} autoExpandParent={this.state.autoExpandParent}
          draggable//支持拖拽
          showLine//展示线条
          showIcon={false}//显示节点图片
          onDragStart={this.onDragStart}
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
          onRightClick={this.onRightClick}
          onSelect={this.onSelect}
        >
          {loop(this.state.gData)}
        </Tree>
      </div>
    </div>);
  }
}