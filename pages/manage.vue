<template>
  <section class="container">
    <TopBar />
    <el-row class="main">
      <el-col :span="4" class="main__left">
        <SideBar/>
      </el-col>
      <el-col :span="20" class="main__right">
        <MainBody />
      </el-col>
    </el-row>
  </section>
</template>

<script>
import TopBar from '~/components/Topbar'
import SideBar from '~/components/SideBar'
import MainBody from '~/components/MainBody'

export default {
  components: {
    TopBar,
    SideBar,
    MainBody
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}

.main {
  height: calc(100vh - 60px);
  overflow: hidden;
}

.main__left,
.main__right {
  height: 100%;
  overflow-y: scroll;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
