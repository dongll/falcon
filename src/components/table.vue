<template>
  <div>
    <table border="1" cellspacing="5" cellpadding="5">
      <tr>
        <th v-for="head in headerTitles">
          {{head}}
        </th>
      </tr>
      <tr v-for="tr in allData">
        <td v-for="td in tr">
          <img v-if="Array.isArray(td)" v-bind:src="td">
          <h4 v-else>{{td}}</h4>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  import http from '../../src/utils/httpModule'
  import $ from 'jquery'

  export default {
    name: 'ftable',
    props: ['headerTitles', 'headers', 'restUrl'],
    data: function () {
      return {
        allData: [[]]
      }
    },
    mounted: function () {
      this.getCustomers();
    },
    methods: {
      getCustomers: function () {
        var vm = this
        http.get("/zhihu/api/4/news/latest")
          .then((response) => {
            var allStory = response.body.stories;
            var targetlist = [];

            $.each(allStory, function (i1, tr) {
              var target = [];
              $.each(vm.headers, function (i2, v) {
                target.push(tr[v]);
              });
              targetlist.push(target);
            })
            vm.allData = targetlist;
          })
      },
    }
  }
</script>
