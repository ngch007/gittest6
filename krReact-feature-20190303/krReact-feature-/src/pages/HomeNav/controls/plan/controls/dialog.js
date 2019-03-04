import {
  Form, Input, Modal, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import React from "react";
import ajax from 'ajax';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



class MyRegister extends React.Component {
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
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
   
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    const { onCancel, title,databean} = this.props;//获取属性值
    const { loading } = this.state;//获取state值
    return (
      <Modal
        title = {title}
        onOk = {this.handleSubmit}
        onCancel = {onCancel}
        visible = {true}
        loading = {loading}
        footer={[
          <Button key="back" onClick={onCancel}>重置</Button>,
          <Button key="submit" type="primary" onClick={this.handleSubmit}>
            提交
          </Button>,
        ]}
      >
      <Form>
        <Form.Item
          {...formItemLayout}
          label="作战阶段"
        >
         {getFieldDecorator('zzjd', {
            rules: [{ required: false, message: '请填写作战阶段' }
          
          ],
          //initialValue:userInfo.username//设置默认值
            initialValue:databean.data.zzjd
          })(
            <Input  placeholder="作战阶段"   />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="任务名称"
        >
        {getFieldDecorator('rwmc', {
            rules: [{ required: false, message: '请填写任务名称' }
          
          ],
          //initialValue:userInfo.username//设置默认值
            initialValue:databean.data.rwmc
          })(
            <Input  placeholder="任务名称"   />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="任务代码"
        >
           {getFieldDecorator('rwdm', {
            rules: [{ required: false, message: '请填写任务代码' }
          
          ],
          //initialValue:userInfo.username//设置默认值
            initialValue:databean.data.rwdm
          })(
            <Input  placeholder="任务代码"   />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="任务类型"
        >
           {getFieldDecorator('rwlx', {
            rules: [{ required: false, message: '请填写任务类型' }
          
          ],
          //initialValue:userInfo.username//设置默认值
            initialValue:databean.data.rwlx
          })(
            <Input  placeholder="任务类型"   />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="任务目的"
        >
        {getFieldDecorator('rwmd', {
            rules: [{ required: false, message: '请填写任务目的' }
          
          ],
          //initialValue:userInfo.username//设置默认值
            initialValue:databean.data.rwmd
          })(
            <Input  placeholder="任务目的"   />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="任务要求"
        >
          {getFieldDecorator('rwyq', {
            rules: [{ required: false, message: '请填写任务要求' }
          
          ],
          //initialValue:userInfo.username//设置默认值
            initialValue:databean.data.rwyq
          })(
            <Input  placeholder="任务要求"   />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="优先级别"
        >
          {getFieldDecorator('yxjb', {
            rules: [{ required: false, message: '请填写优先级别' }
          
          ],
          //initialValue:userInfo.username//设置默认值
            initialValue:databean.data.yxjb
          })(
            <Input  placeholder="优先级别"   />
          )}
        </Form.Item>
        {/* <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </Form.Item> */}
      </Form>
      </Modal>
    );
  }
}

export default Form.create()(MyRegister);

// const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

// ReactDOM.render(<WrappedRegistrationForm />, mountNode);