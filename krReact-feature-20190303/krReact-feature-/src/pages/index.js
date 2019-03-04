import Home from './Home';
import Task from './Task';
import Basic from './Basic'

// import Form from './Form'
// export default Welcome ;
//项目导出
module.exports = {
	Home,
	...Task,
	Basic,
	// Form
}
