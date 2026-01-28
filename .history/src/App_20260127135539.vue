<script setup lang="ts">
import { reactive } from "vue";
const buttonConfig = reactive({ autoInsertSpace: false });
</script>

<template>
  <el-config-provider :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
</template>

<style>
html,
body,
#app {
  padding: 0;
  margin: 0;
  /* height: 100%; */
  background: rgba(214, 213, 213, 0.6);
}
/* 全局移除 el-dropdown 的 outline */
.el-dropdown:focus,
.el-dropdown:focus-visible,
.el-dropdown__popper:focus {
  outline: none !important;
}

/* 更精准：只针对触发器 */
.el-dropdown .el-dropdown-selfdefine:focus {
  outline: none !important;
}
</style>
