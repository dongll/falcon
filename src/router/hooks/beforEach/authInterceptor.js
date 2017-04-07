// 权限拦截
const authInterceptor =  ( to,from,next) => {
	console.info(`[befor] ${to.path}`)
	next()
}
export default authInterceptor
