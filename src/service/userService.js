/**
 * 用户用到的API
 */
class UserService {
	/**
	 * 获取用户列表
	 */
	getUserList(){
		return {total:2,users:[{name:'usera'},{name:'userb'}]}
		
	}

}

// 实例化后导出，全局单例
export default new UserService
