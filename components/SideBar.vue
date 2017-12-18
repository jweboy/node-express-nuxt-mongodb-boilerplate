<style scoped>
.sidebar {
  height: 100%;
}
</style>

<template>
  <el-menu 
    :default-active="activeIndex"
    :default-openeds="['wechat']"
    @select="handleSelect"
    class="el-menu-vertical-demo sidebar"
  >
  <el-submenu index="wechat">
    <template slot="title">微信公众号</template>
      <el-menu-item index="access_token">access_token</el-menu-item>
      <el-menu-item index="custom_menu">自定义菜单</el-menu-item>
    </el-submenu>
    <el-menu-item index="goods">商品表</el-menu-item>
    <!-- <el-menu-item index="users">用户表</el-menu-item> -->
  </el-menu>
</template>

<script>
const PATH = '/manage';
export default {
  // beforeMount() {
  //   this.$data.activeIndex = 'goods'
  // },
  data() {
    return {
      activeIndex: 'goods'
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push(`${PATH}/${key}`)
    }
  }
};
</script>