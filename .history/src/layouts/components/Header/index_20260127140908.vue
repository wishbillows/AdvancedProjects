<template>
  <div class="title">
    <el-icon><Fold /></el-icon>
    <el-dropdown>
      <span class="el-dropdown-link" @click="Upfold()">
        <el-avatar :icon="UserFilled" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { UserFilled } from "@element-plus/icons-vue";
import{isCollapse} from '@/stores/modules/tabs'
Upfold()=>{

}
</script>
<style lang="scss" scoped>
@import url(./index.scss);
</style>
