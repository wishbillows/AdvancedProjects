<script setup lang="ts">
const buttonConfig = reactive({ autoInsertSpace: false });
</script>

<template>
  const buttonConfig = reactive({ autoInsertSpace: false });
  <el-config-provider namespace="ep" :button="">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
