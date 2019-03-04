import Ongoing from './Ongoing';
import Unfinished from './Unfinished'
import Historical from './Historical'


// export default Welcome ;

module.exports = {
	//将文件夹下的所有文件导出
	...Ongoing,
	...Unfinished,
	...Historical
}
