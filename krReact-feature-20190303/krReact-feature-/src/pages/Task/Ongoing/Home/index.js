import { Menu, Icon } from 'antd';
import React from 'react';
// import Buttons from '../../../Components/Button/index'
import Buttons from '../../../../Components/Button/index'
class TaskOngoingHome extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {};
	}
	componentDidMount() {
	
	
	}
	//button点击事件
	headerClick = (e) => {
		console.log(`id为${e}被单击`)
	}

	render() {
		//声明图片
		const btnOptions = {
			//声明点击事件
      change: this.headerClick,
      btns: [
        {text: '图片312', icon:'1.jpg', id: '121'},
        {text: '图片22', icon:'2.jpg', id: '222'},
        {text: '图片35', icon:'2.jpg', id: '2231'},
      ]
    }
		return (
			<div>
				{/* 公共组件引用 */}
      	<Buttons data={btnOptions}/>
      </div>
		);
	}
}
export default TaskOngoingHome;