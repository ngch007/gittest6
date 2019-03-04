import React from 'react';
import './index.less';
class Header extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {
			active: 0
		};
	}

	headers = ['计划管理','数据管理','辅助决策'];

	itemClick = (item, active) => {
		const { onClick } = this.props;
		this.setState({ active });
		onClick(active);
	}
	
	render() {
		const { active } = this.state;
		return (
			<div className="homeHeader x">
				<div className="left">
					<div className="left-logo">电子对抗作战筹划软件</div>
					<div className="left-con">
						{
							this.headers.map((item, index) => {
								return <div className={active === index ? 'active item' : 'item'} key={index} onClick={this.itemClick.bind(this, item, index)}>{item}</div>
							})
						}
					</div>
				</div>
				<div className="right">
					<div className="login-person">admin</div>
					<div className="login-out">退出</div>					
				</div>
			</div>
		);
	}
}

export default Header;