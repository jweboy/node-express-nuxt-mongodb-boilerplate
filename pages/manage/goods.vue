<template>
  <div>
    goods table
    <el-button @click="handleClick">btn</el-button>
  </div>
</template>

<script>
import { axios } from '~/plugins/axios';

export default {
  mounted() {
    // fetch('/api/goods')
    //   .then(res => res.json())
    //   .then(data => console.warn(data))
    //   .catch(error => console.error(error))
    // console.warn(this.post)
  },
  // async asyncData() {
  //   let { data } = await axios.get('/api/goods');
  //   console.warn(data);
  //   return { post: data };
  // },
  methods: {
    handleClick() {
      axios.get('/api/goods').then(res => {
        console.warn(res.data);
      });
    }
  }
};
</script>
