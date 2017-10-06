<style scoped>
.topbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>

<template>
  <el-menu :default-active="activeIndex" theme="dark" class="el-menu-demo topbar" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">待定</el-menu-item>
    <el-submenu index="2">
      <template slot="title">个人中心</template>
      <el-menu-item index="2-1">个人资料</el-menu-item>
      <el-menu-item index="loginOut">退出登陆</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(index) {
      console.log(index)
      if (index === 'loginOut') {
        this.$router.push('/')
      }
    }
  }
}
</script>
