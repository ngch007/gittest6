import { Tabs} from 'antd';
import React from 'react';

const TabPane = Tabs.TabPane;

class TabsFlag extends React.Component {
  state = {
    tabPosition: 'bottom',
  }

  render() {
    return (
      <div>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
        </Tabs>
      </div>
    );
  }
}
export default TabsFlag ;