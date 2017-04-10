<template>
<div>
	<dropdownVue></dropdownVue>
	<!--  :class="customClass" 
          :name="name"
          :disabled="disabled"
          :large="large"
          :markup="markup"
          @click="handleClick" -->
	<buttonVue class="test" id="aaa" large="true">Button</buttonVue>
</div>
</template>
<script>
import dropdownVue from 'COMMON/dropdownVue'
import buttonVue from 'COMMON/buttonVue'
export default {
	components: {dropdownVue,buttonVue}
}
</script>
