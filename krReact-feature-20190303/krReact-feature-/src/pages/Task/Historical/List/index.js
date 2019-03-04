import { Table, Divider, Tag, Modal, Button, message } from 'antd';
import WrappedRegistrationForm from '../Add'
import React, { Component } from 'react';
import ajax from 'ajax';
const { Column, ColumnGroup } = Table;


class TaskHistoricalList extends Component {
  state = {
    openAdd: false,
    data: []
  }
  componentDidMount() {
    this.getListData({ id: '' })
  }
  // 获取类表数据
  getListData = (params) => {
    ajax.get('demo', params).then((res) => {
      this.setState({
        data:[{
          key: '1',
          firstName: 'John',
          lastName: 'Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        }, {
          key: '2',
          firstName: 'Jim',
          lastName: 'Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        }, {
          key: '3',
          firstName: 'Joe',
          lastName: 'Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        }, {
          key: '4',
          firstName: 'John',
          lastName: 'Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        }, {
          key: '5',
          firstName: 'Jim',
          lastName: 'Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        }, {
          key: '6',
          firstName: 'Joe',
          lastName: 'Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        }, {
          key: '7',
          firstName: 'John',
          lastName: 'Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        }, {
          key: '8',
          firstName: 'Jim',
          lastName: 'Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        }, {
          key: '9',
          firstName: 'Joe',
          lastName: 'Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        }]
      })
    }).catch((err) => {
      message.error(err.message || '系统出错喽');
    })
  }
  // 新建页面确定
  okSubmit=(data)=>{
    ajax.post('demo',{id:1}).then((res)=>{
      this.switchAdd();
    }).catch((err)=>{
      message.error(err.message || '系统出错喽');
    })
  }
  // 新建页面开关
  switchAdd = () => {
    const { openAdd } = this.state;
    this.setState({
      openAdd: !openAdd
    })
  }
  render() {
    const { data, openAdd } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.switchAdd}>新建</Button>
        <Table dataSource={data}>
          <ColumnGroup title="Name">
            <Column
              title="First Name"
              dataIndex="firstName"
              key="firstName"
            />
            <Column
              title="Last Name"
              dataIndex="lastName"
              key="lastName"
            />
          </ColumnGroup>
          <Column
            title="Age"
            dataIndex="age"
            key="age"
          />
          <Column
            title="Address"
            dataIndex="address"
            key="address"
          />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a href="javascript:;">Invite {record.lastName}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
              </span>
            )}
          />
        </Table>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={openAdd}
          onOk={this.okSubmit}
          onCancel={this.switchAdd}
        >
          <WrappedRegistrationForm />
        </Modal>
      </div>
    )
  }
}

export default TaskHistoricalList

