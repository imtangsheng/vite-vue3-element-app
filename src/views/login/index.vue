<template>
  <div class="container-login">
    <!-- 标题 -->
    <div class="login-title-wrap" >
      <span class="login-title" > 登录界面标题 </span>
    </div>
  <el-form
    :label-position="labelPosition"
    label-width = "auto"

  >
    <el-form-item label="用户名">
      <el-input />
    </el-form-item>
    <el-form-item label="密码">
      <el-input/>
    </el-form-item>
    <!-- 登录按键 -->
    <el-form-item>
      <div style="margin: auto;">
        <el-button type="primary">登录</el-button>
        <el-button >重置</el-button>
      </div>

    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const labelPosition = ref('right')

</script>


<style scoped>
.container-login {
  width: 100%;
  min-height: 100%;
  /* overflow: hidden; */
  background-color: #0e346b;
}
.login-title-wrap {
  padding-bottom: 25px;
  filter: contrast(30); 
}

.login-title {
  font-size: 30px;

  letter-spacing: 4px;
  animation: loadTitle 3s forwards;
}

@keyframes loadTitle {
  0% {
    letter-spacing: -20px; 
  }
  100% {
    letter-spacing: 4px;
  }
}
</style>
