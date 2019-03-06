import React from 'react';
import './index.less';
import Basic from './controls/Basic';
import Gmap from './controls/Gmap';
class HomeCon extends React.Component {
	render() {
		return (
			<div className="homeCon x">
				<Basic/>
				<Gmap/>
			</div>
		);
	}
}

export default HomeCon;