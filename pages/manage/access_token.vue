<template>
  <div>
    <el-tag type="primary">sd</el-tag>
  </div>
</template>
<script>
  import { axios } from '~/plugins/axios'
  export default {
    methods: {
      async asyncGetData() {
        const result = await axios.get('/api/getAccessToken')
        console.log(result)
        this.data = result
      }
    },
    mounted() {
      this.asyncGetData()
    }
  }
</script>
