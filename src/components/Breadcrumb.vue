<template>
<ul class="breadcrumb">
	<li class="fa-map-marker">位</li>
	<li >用户</li>
	<li class="active"><span>列表</span></li>
	<li v-for="route in matchedRoutes">
		{{route.name}}
	</li>
	<button @click="refresh" class="btn btn-default btn-xs pull-right">
		<li>刷新</li>
	</button>
	<button @click="back" class="btn btn-default btn-xs pull-right">
		<li>返回</li>
	</button>
</ul>
</template>
<script>
import trimQs from 'UTIL/trimQs'

export default {
	computed:{
		matchedRoutes(){
			return this.$route.matched.slice()
		}
	},
	methods: {
		refresh(){
			let curPath = trimQs(this.$route.path)
			this.$router.go(`/redirect?dest=${curPath}`)
		},
		back() { history.back() }
	}
}
</script>
