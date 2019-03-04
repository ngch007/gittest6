import React from 'react';
import Header from 'pages/HomeHeader';
import Nav from 'pages/HomeNav';
import Con from 'pages/HomeCon';
class Home extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {
			active: 0
		};
	}

	headChange = (active) => {
		this.setState({ active })
	}

	render() {
		const { active } = this.state;
		return (
			<div>
				<Header onClick={this.headChange}/>
				<Nav active={active}/>
				<Con/>
			</div>
		);
	}
}

export default Home;