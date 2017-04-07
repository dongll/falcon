export default {
'/user':{
	title:'用户列表',
	showInSidebar:true,
	component(resolve){
		require(['VIEW/user/list'],resolve)
	}
},
// 子路由
subRoutes: {
	'/list':{
		title:'列表',
		component(resolve){
			require(['VIEW/user/list'],resolve)
		}
	},
	'/add':{
		titile:'添加',
		component(resolve){
                        require(['VIEW/user/add'],resolve)
                }
	}
}


}
