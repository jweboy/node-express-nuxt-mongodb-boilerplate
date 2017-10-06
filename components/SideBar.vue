<style scoped>
.sidebar {
  height: 100%;
}
</style>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-vertical-demo sidebar" @select="handleSelect">
    <el-menu-item index="/manage/goods">
      <i class="el-icon-message"></i>商品表
    </el-menu-item>
    <el-menu-item index="/manage/users">
      <i class="el-icon-menu"></i>用户表
    </el-menu-item>
  </el-menu>
</template>

<script>
const PATH = '/manage'
export default {
  beforeMount() {
    this.$data.activeIndex = `${PATH}/users`
  },
  data() {
    return {
      activeIndex: `${PATH}/goods`
    }
  },
  methods: {
    handleSelect(index) {
      this.$router.push(index)
    }
  }
}
</script>