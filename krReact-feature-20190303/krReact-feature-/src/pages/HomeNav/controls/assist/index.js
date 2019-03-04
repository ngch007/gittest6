import React from 'react';
import Buttons from 'components/Button/index'
class Assist extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {
			visible: false,
			visibleTable: false ,
			databean:{}
		};
	}

	render() {	
		const btnOptions = {
			change: this.headerClick,
			btns: [
				{text: '导入上级任务3', icon:'menu_03.png', id: '11'},
				{text: '新建计划3', icon:'menu_05.png', id: '22'},
				{text: '计划拆分3', icon:'menu_07.png', id: '221'},
			]
		}
		return (
			<div className="data x">
				<Buttons data={btnOptions}/>				
			</div>
		);
	}
}

export default Assist;