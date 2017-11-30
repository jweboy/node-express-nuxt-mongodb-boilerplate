<style>
  .token{
    word-break: wrapper;
  }
  .tag{
    cursor: pointer;
  }
</style>

<template>
  <div>
    <div class="token">
      <el-form :label-position="labelPosition">
        <el-form-item label="access_token">
          <el-tooltip content="点击复制" placement="top">
            <p class="clipboard" :data-clipboard-text="accessToken.access_token">
              <el-tag type="primary" class="tag">{{accessToken.access_token}}</el-tag>
            </p>
          </el-tooltip>
        </el-form-item>
        <el-form-item label="过期时间(当天有效)">
          <el-tag type="primary">{{$moment(accessToken.expires_time).format('YYYY-MM-DD')}}</el-tag>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import { axios } from '~/plugins/axios'
  export default {
    data() {
      return {
        accessToken: {
          access_token: '',
          expires_time: ''
        },
        labelPosition: 'top'
      }
    },
    methods: {
      async asyncGetData() {
        const result = await axios.get('/api/accessToken')
        this.accessToken = result.data
      },
      setClipboard() { // TODO 这里会有重复的问题 其次需要增加message提示
        const _success = (e) => {
          console.info('复制成功', e);
          e.clearSelection()
        }
        const _error = (e) => {
          console.info('复制失败', e);
        }
        const _clipboard = new this.$Clipboard('.clipboard')
        _clipboard
          .on('success', _success)
          .on('error', _error)
      }
    },
    mounted() {
      this.asyncGetData()
      this.setClipboard()
    }
  }
</script>
