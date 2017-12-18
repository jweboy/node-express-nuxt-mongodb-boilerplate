<style scoped>
  .input{
    margin-bottom: 10px
  }
</style>


<template>
  <div>
     <el-form>
       <el-form-item 
        label="菜单一"
        class="el-form--inline"
      >
        <el-input placeholder=""></el-input>
      </el-form-item>
      <el-form-item 
        label="子菜单"
      >
        <p>
          <el-input placeholder="" class="input"></el-input>
          <el-button>删除</el-button>
        </p>
        <el-input placeholder="" class="input"></el-input>
      </el-form-item>
      <el-form-item 
        label="菜单二"
      >
        <el-input placeholder=""></el-input>
      </el-form-item>
      <el-form-item 
        label="菜单三"
      >
        <el-input placeholder=""></el-input>
      </el-form-item>
     </el-form>
  </div>
</template>