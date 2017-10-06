<style scoped>
.login {
  margin-top: 80px;
}
</style>

<template>
  <el-row class="login">
    <el-col :span="6" :offset="9">
      <el-form ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input type="text" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$refs.loginForm.$router.push('/manage/users')
    }
  }
}
</script>

