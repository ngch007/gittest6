import React from 'react';
import Dialog_tree from 'components/DialogTree/dialog_tree'
import TabsFlag from 'components/DialogTree/tabsFlag'

export default class Basic extends React.Component {

	constructor(props,context){
		super(props, context);
			this.state = {
				visibleTree: false ,
			};
	}
	handleCancelTree = () => {
		this.setState({ visibleTree: false });
	}
	render() {
	//声明变量
	const { visibleTree} = this.state;
		return (
				<div>
					{this.props.children}
				<div>
				 {visibleTree && <Dialog_tree  />}
				</div>
				{/* <div>	
				<TabsFlag/>
				</div> */}
				</div>
				
				
	   );
	}
}
