import authInterceptor from './beforEach/authInterceptor'
import simpleLogger from './afterEach/simpleLogger'

export default (router) => {
	router.beforeEach(authInterceptor)
	//router.beforeEach((to,from,next) => {
	//	console.info(`beforeEach: ${to.path}`)
	//})
	//if(__DEV__){
		router.afterEach(simpleLogger)
	//}
}

