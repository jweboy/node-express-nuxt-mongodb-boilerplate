<template>
  <div>
    goods table
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    // fetch('/api/goods')
    //   .then(res => res.json())
    //   .then(data => console.warn(data))
    //   .catch(error => console.error(error))
    // console.warn(this.post)
  },
  async asyncData() {
    let { data } = await axios.get('/api/goods')
    console.warn(data)
    // return { post: data }
  }
}
</script>
