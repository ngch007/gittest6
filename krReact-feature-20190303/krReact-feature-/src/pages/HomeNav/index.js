import React from 'react';
import Plan from './controls/plan';
import './index.less'
import Data from './controls/data';
import Assist from './controls/assist';
class Nav extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {
			visible: false,
			visibleTable: false ,
			databean:{}
		};
	}

	render() {
		const { active } = this.props;
		return (
			<div className="homeNav x">
				{active == 0 && <Plan/>}
				{active == 1 && <Data/>}
				{active == 2 && <Assist/>}
			</div>
		);
	}
}

export default Nav;