import React from 'react';
import { message } from 'antd'
import Dialog from './controls/dialog'
import DialogTable from './controls/dialogTable'
import Buttons from 'components/Button/index'
import ajax from 'ajax'
class Plan extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {
			visible: false,
			visibleTable: false ,
			active: '',
			databean:{}
		};
	}

	componentDidMount() {
		ajax.get('demo5').then((res)=>{//获取form表单值
			this.setState({databean:res});
			console.log(res,"=-=====");
		}).catch((err)=>{
			message.error(err.message||'系统出错喽');
		})
	}

	handleClick = (e) => {
		console.log('click ', e);
	}

	headerClick = (e) => {
		console.log(`id为${e}被单击`)
		if(e === '11') {
			return this.setState({
				visible: true,
			});
		}
	
		if(e === '22') {
			return this.setState({
				active: '22',
				visibleTable: true,
			});
		}
	}

	handleOk = () => {
		this.setState({ loading: false, visible: false });
	}
	handleOkTable = () => {
		this.setState({ loading: false, visibleTable: false });
	}
	handleCancel = () => {
		this.setState({ visible: false, visibleTable: false, active: null });
	}
	render() {	
		//声明变量
		const { visible ,visibleTable, active} = this.state;
		const btnOptions = {
			change: this.headerClick,
			active,
			btns: [
				{text: '导入上级任务', icon:'menu_03.png', id: '11'},
				{text: '新建计划', icon:'menu_05.png', id: '22'},
				{text: '计划拆分', icon:'menu_07.png', id: '221'},
			]
		}
		return (
			<div className="plan x">
				<Buttons data={btnOptions}/>				
				{visible && <Dialog onOk={this.handleOk} onCancel={this.handleCancel} databean={this.state.databean} title="作战任务基本属性"/>}
				{visibleTable && <DialogTable onOk={this.handleOkTable} onCancel={this.handleCancel} databean={this.state.databean} title="计划管理"/>}
			</div>
		);
	}
}

export default Plan;