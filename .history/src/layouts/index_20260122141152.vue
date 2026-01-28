<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <LayoutVertical />
      </el-aside>

      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import LayoutVertical from "./LayoutVertical/index.vue";
</script>
