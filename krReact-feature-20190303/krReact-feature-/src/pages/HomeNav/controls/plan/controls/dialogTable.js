import {
  Form, Divider, Modal, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,Table
} from 'antd';
import React from "react";
import ajax from 'ajax';




class DialogTable extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
   
  };
 static databean={};//声明组件属性值
   componentDidMount() {
  //  componentWillMount(){
  //   ajax.get('demo5').then((res)=>{//获取form表单值
  //     databean.data=res.data;
  //     console.log(6);
  //     console.log(res+"-------------------------");
  //     console.log(databean.data);
  //     console.log(7);
	// 	}).catch((err)=>{
	// 		message.error(err.message||'系统出错喽');
	// 	})
	}
  handleSubmit = (e) => {
    e.preventDefault();
    let  data={};
    this.props.form.validateFields((err, values) => {
   
      console.log(values)
      data=values;
      // if (!err) {
       //data = new URLSearchParams(values);
        // console.log(1)
        // console.log(data)
        // console.log(2)
        // }
    })


      
      // ajax请求成功
      this.onOk(data);
    
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  onOk = (data) => {
    const { onOk } = this.props;
  
    
    // ajax json post请求成功后 
    ajax.post('demo5',{a:1}).then((res)=>{
			console.log(res,"=-=====");
		}).catch((err)=>{
			message.error(err.message||'系统出错喽');
		})
    // ajax bean post请求成功后 
    ajax.post('demo2',data).then((res)=>{
			console.log(res,"=-=====");
		}).catch((err)=>{
			message.error(err.message||'系统出错喽');
    })
    // ajax  get请求成功后 
    ajax.get('demo3',{a:1}).then((res)=>{
			console.log(res,"=-=====");
		}).catch((err)=>{
			message.error(err.message||'系统出错喽');
    })
    if(onOk) onOk(data);
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%'
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: '21%',
    }, {
      title: '地址',
      dataIndex: 'address',
      width: '39%',
      key: 'address',
    }, {
      title: '操作',
      key: 'action',
      width: '20%',
      render: (text, record) => (
        <span>
          <a href="javascript:;">删除  </a>
          <a href="javascript:;"> 导出</a>
          {/* <a href="javascript:;" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a> */}
        </span>
      ),
    }];
    
    const data = [{
      key: 1,
      name: 'John Brown sr.',
      action:'删除 | 导出',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [{
        key: 11,
        name: 'John Brown',
        action:'删除 | 导出',
        age: 42,
        address: 'New York No. 2 Lake Park',
      }, {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [{
          key: 121,
          name: 'Jimmy Brown',
          action:'删除 | 导出',
          age: 16,
          address: 'New York No. 3 Lake Park',
        }],
      }, {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        action:'删除 | 导出',
        children: [{
          key: 131,
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park',
          children: [{
            key: 1311,
            name: 'Jim Green jr.',
            action:'删除 | 导出',
            age: 25,
            address: 'London No. 3 Lake Park',
          }, {
            key: 1312,
            name: 'Jimmy Green sr.',
            age: 18,
            action:'删除 | 导出',
            address: 'London No. 4 Lake Park',
          }],
        }],
      }],
    }, {
      key: 2,
      name: 'Joe Black',
      action:'删除 | 导出',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    const { onCancel, title,databean} = this.props;//获取属性值
    const { loading } = this.state;//获取state值
    return (
      <Modal
        title = {title}
        onCancel = {onCancel}
        visible = {true}
        loading = {loading}
        footer={null}
      >
     <Table filterMultiple={false} columns={columns} rowSelection={rowSelection} dataSource={data} />
      </Modal>
    );
  }
}

export default DialogTable;

// const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

// ReactDOM.render(<WrappedRegistrationForm />, mountNode);