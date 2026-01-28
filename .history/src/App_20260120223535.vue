<script setup lang="ts">
const buttonConfig = reactive({ autoInsertSpace: false });
</script>

<template>
  <el-config-provider namespace="ep">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
