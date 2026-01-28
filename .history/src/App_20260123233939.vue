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
  height: 100%;
  background: rgba(148, 144, 144, 0.6);
}
</style>
