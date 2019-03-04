
import React from 'react';
class TaskUnfinishedList extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {};
	}
	componentDidMount() {
		// Http.get('/api/krspace-op-web/app/operation/community/use-rate',{dataDate: '2018-12-04'}).then((res)=>{
		// 	console.log(res,"kkkkk")
		// }).catch(()=>{

		// })
	
	}


	render() {

		return (
			<div>
        任务列表
      </div>
		);
	}
}
export default TaskUnfinishedList;