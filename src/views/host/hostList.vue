<template>
  <div>
    <span>
      设备列表
    </span>
    <ftable v-bind:headers="['id','images','title']" :headerTitles="['ID','圖片','標題']" :restUrl="['mng','host']" ></ftable>
  </div>
</template>

<script>
  import ftable from '../../components/table.vue'

  export default {
    components:{ ftable }
  }
</script>
