
import React from "react";
import {Card,Form,Button,Input,Checkbox,Radio
    ,Select,Switch,DatePicker,TimePicker,Upload,
    Icon,message,InputNumber,
    } from "antd";
 
import moment from "moment"
 
const FormItem = Form.Item;
class MyRegister extends React.Component{
    constructor(props,context){
        super(props,context);
    }
 
    login(){
        const {getFieldsValue,validateFields} = this.props.form;
        const value = getFieldsValue();
      //  message.info(`账号为${value.username},密码为${value.pwd}`);
 
        validateFields((err,value)=>{
            if(!err){
                message.info(`账号为${value.username},密码为${value.pwd}`);
            }
        })
 
 
    }
 
 
    render(){
 
        const {getFieldDecorator} = this.props.form;
        const fromItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:20
            }
 
        };
        const offsetLayout = {
 
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
 
            }
        };
 
 
        return(<div>
            <Card title="注册表单">
                <Form >
                   <FormItem align="left" label="用户名字" {...fromItemLayout}>
                    {getFieldDecorator("username",{
                        initialValue:"",
                        rules:[
                            {
                                required:true,message:"用户名不能为空"
                            },{
                                max:10,message:"最大输入10位"
                            }]
                    })(<Input placeholder="请输入用户名" />)}
                </FormItem>
                    <FormItem label="密码"  {...fromItemLayout}>
                        {getFieldDecorator("pwd",{
                            initialValue:"",
                            rules:[
                                {
                                    required:true,message:"密码不能为空"
                                },{
                                    max:10,message:"最大输入10位"
                                }]
                        })(<Input placeholder="请输入密码" type="password" />)}
                    </FormItem>
 
 
 
                    <FormItem label="性别"  {...fromItemLayout}>
                        { getFieldDecorator("sex",{
                                initialValue:"2"
                            })(
                                    <Radio.Group >
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </Radio.Group>
                                )}
 
                    </FormItem>
 
                    <FormItem label="年龄"  {...fromItemLayout}>
                        { getFieldDecorator("age",{
                            initialValue:"18"
                        })(
                           <InputNumber/>
                        )}
 
                    </FormItem>
 
                    <FormItem label="当前状态"  {...fromItemLayout}>
                        { getFieldDecorator("state",{
                            initialValue:"3"
                        })(
                           <Select>
                               <Select.Option value="1">单身</Select.Option>
                               <Select.Option value="2">已婚</Select.Option>
                               <Select.Option value="3">离婚</Select.Option>
                               <Select.Option value="4">隐婚</Select.Option>
                           </Select>
                        )}
 
                    </FormItem>
 
                    <FormItem label="当前状态1"  {...fromItemLayout}>
                        { getFieldDecorator("state1",{
                            initialValue:["3","2","1"]
                        })(
                            <Select mode="multiple">
                                <Select.Option value="1">单身</Select.Option>
                                <Select.Option value="2">已婚</Select.Option>
                                <Select.Option value="3">离婚</Select.Option>
                                <Select.Option value="4">隐婚</Select.Option>
                            </Select>
                        )}
 
                    </FormItem>
 
                    <FormItem label="是否有钱"  {...fromItemLayout}>
                        { getFieldDecorator("isrich",{
                            initialValue:true,
                            valuePropName:"checked"
                        })(
                            <Switch/>
                        )}
 
                    </FormItem>
 
                    <FormItem label="选择你的祭日"  {...fromItemLayout}>
                        { getFieldDecorator("brithday",{
                            initialValue:moment("2018-11-10 02:02:02"),
                        })(
                            <DatePicker
                             showTime
                             for-mat="YY-MM-DD HH:mm:ss"
                            />
                        )}
 
                    </FormItem>
 
                    <FormItem label="留言框"  {...fromItemLayout}>
                        { getFieldDecorator("bigtext",{
                            initialValue:"给我留言好吗",
                        })(
                            <Input.TextArea
                             autosize={{minRows:5,maxRows:10}}
                            />
                        )}
 
                    </FormItem>
 
                    <FormItem label="炸弹爆炸事件"  {...fromItemLayout}>
                        { getFieldDecorator("boontime",{
                            initialValue:moment('11:22:33', 'HH:mm:ss'),
                        })(
                            <TimePicker
 
                            />
                        )}
                    </FormItem>
 
                    <FormItem   {...offsetLayout}>
                        { getFieldDecorator("sock",{
                            initialValue:true,
                            valuePropName:"checked"
                        })(
                            <Checkbox>同意协议</Checkbox>
 
                        )}
 
                    </FormItem>
                    <FormItem   {...offsetLayout}>
                        <Button onClick={this.login.bind(this)}>登录</Button>
                    </FormItem>
 
 
                </Form>
            </Card>
        </div>)
    }
 
}
export default Form.create()(MyRegister);