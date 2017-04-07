<template>
	<nav class="navbar navbar-default">
		<div class="navbar-header">
			<a class="navbar-brand" href="/" >kaixiang logo</a>
		</div>
		<ul class="nav navbar-nav navbar-right ">
			<li title="注销">
				<a href="#"><img alt="user"></img></a>
			</li>
			<li>
				<router-link to="user">user</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name:"Navbar"
}
</srcript>

