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
  background: rgba(214, 213, 213, 0.6);
  overflow: visible;
}
</style>
