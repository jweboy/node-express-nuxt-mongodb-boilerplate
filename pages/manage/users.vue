<style scoped>
.pagination {
  margin-top: 10px;
  float: right;
}
</style>

<template>
  <div>
    <el-table :data="data" stripe style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="dateCrawled" label="日期" width="380">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" @click="handleOpenEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleOpenDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block pagination">
      <el-pagination layout="prev, pager, next" :total="250" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    <el-dialog title="编辑用户" :visible.sync="dialogVisible" size="tiny">
      <span>用户编辑表单</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCloseEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    async getTableData(pageNumber) {
      let { data } = await axios.get('/api/users', {
        params: {
          pageNumber
        }
      })
      console.warn(data)
      this.data = data
      // return { tableData: data }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.getTableData(val)
    },
    handleOpenEdit(index, row) {
      console.info(index, row);
      this.$data.dialogVisible = true;
    },
    handleCloseEdit() {
      this.$data.dialogVisible = false;
    },
    handleOpenDelete(index, row) {
      console.info(index, row);
      this.$confirm('确定删除该用户吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    }
  },
  data() {
    return {
      dialogVisible: false,
      data: []
    };
  },
  mounted() {
    this.getTableData(1)
  }
  // async asyncData() {
  //   let { data } = await axios.get('/api/users', {
  //     params: {
  //       pageNumber: 1
  //     }
  //   })
  //   this.data = data
  // }
};
</script>
