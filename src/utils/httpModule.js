import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// Vue.http.options.credentials = true;
// Vue.http.options.xhr = {withCredentials: true}
// Vue.http.options.emulateJSON = true
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'
const http=Vue.http
export default http
