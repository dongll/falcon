<template>
<div>
	user list page
	<ul>
		<li v-for="user in users" >
			{{user.name}}
		</li>
	</ul>
</div>
</template>
<script>
import userService from 'SERVICE/userService'
export default {
  //data: () => {return  ({total:0,users:[{name:'a'},{name:'b'}]}) }
  data: ()=> ({total:0,users:[]}),
  methods: {
    getData() {
      //userService.getUserList().then( ({total,users}) =>{this.total=total; this.users=users})
      //this.$router.go(this.$route.path)
      userService.getUserList()
      
    }
  },
  created(){
    var data=userService.getUserList()
    this.total=data.total
    this.users=data.users
  }
}

</script>
