<template>
<div>
	<div>
		<a href="/" class="btn btn-default btn-block">首页</a>
	</div>
	<div>
		<a href="#panel1" class="btn btn-default btn-block">用户列表
			<span class="caret"></span>
		</a>
		<div id="panel1" class="collapse in w-90p m-0-auto">
			<router-link to="/user/list" class="btn btn-default btn-block m-t-0 ">列表</router-link>
			<a href="#user/add" class="btn btn-default btn-block m-t-0 ">添加</a>
		</div>
	</div>
	<div>
		<a href="#device" class="btn btn-default btn-block">设备</a>
	</div>
</div>
</template>

<script>
import _pickBy from 'lodash/pickBy'

export default {
	name: "sidebar"
}
</script>
<style>
.m-t-0 {
	margin-top: 0 !important;
}
.w-90p {
	width: 90%;
}
.m-0-auto {
	margin: 0 auto;
}
</style>
