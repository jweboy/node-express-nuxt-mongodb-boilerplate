<style scoped>
  .pagination {
    margin: 10px 0;
    float: right;
  }
</style>

<template>
  <div>
    <el-table
      :data="tableData"
      v-loading="waitLoading"
      element-loading-text="拼命加载中"
      style="width: 100%"
    >
    <el-table-column type="expand">
      <template scope="props">
        <el-form
          label-position="left"
        >
          <el-form-item label="ID">
            <span>{{props.row._id}}</span>
          </el-form-item>
          <el-form-item label="版本">
            <span>{{props.row.version || '-'}}</span>
          </el-form-item>
          <el-form-item label="主图">
            <a :href="'https://'+props.row.picture" target="_blank">{{props.row.picture || '-'}}</a>
          </el-form-item>
          <el-form-item label="缩略图">
            <a :href="'https://'+props.row.picture" target="_blank">{{props.row.thumbnail || '-'}}</a>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        class-name="row"
      >
      </el-table-column>
      <el-table-column 
        prop="price"
        label="价格"
        width="150"
      >
      </el-table-column>
      <el-table-column 
        label="操作"
        width="150"
      >
        <template scope="scope">
          <el-button size="small" @click="handleOpenEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleOpenDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block pagination">
      <el-pagination layout="prev, pager, next" :total="30" @size-change="handleSizeChange" @current-change="handleCurrentChange">
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
      await axios.get(`/api/goods?page=${pageNumber}`)
        .then(({ data }) => {
          this.waitLoading = false
          this.tableData = data
        })
        .catch(err => {
          this.waitLoading = false
          this.$message.error('出错了,查看console')
          console.error(err)
        })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.waitLoading = true
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
      tableData: [],
      waitLoading: false
    };
  },
  mounted() {
    this.waitLoading = true
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
