import Home from './Home';
import Task from './Task';
import Task from './HomeCon';
import Task from './HomeHeader';
import Task from './HomeNav';
// import Form from './Form'
// export default Welcome ;
//项目导出
module.exports = {
	Home,
	...Task,
	...HomeCon,
	HomeHeader,
	...HomeNav
	// Form
}
