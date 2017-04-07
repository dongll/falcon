import Vue from 'vue'
import Router from 'vue-router'
import routes from './map/user' // 路由映射

Vue.use(Router)

const router = new Router({
	
})

debugger;
router.addRoutes(routes)
router.alias({ '/user':'/user/list' })

export default router
