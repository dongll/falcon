<template>
  <div id="app">
	<Navbar></Navbar>
	<div class="row">
		<div class="col-md-2">
			<Sidebar></Sidebar>
		</div>
		<div class="col-md-10">
			<Breadcrumb></Breadcrumb>
			<!-- 路由匹配到的组件将渲染在这里 -->
			<router-view></router-view>
		</div> 
	</div>
 </div>
</template>

<script>
import Navbar from 'COMPONENTS/Navbar'
import Sidebar from 'COMPONENTS/Sidebar/sidebar'
import router from './router/router.js'
import Breadcrumb from 'COMPONENTS/Breadcrumb'

export default {
  name: 'app',
  router: router,
  components: {Navbar,Sidebar,Breadcrumb}
}
</script>

