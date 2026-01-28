<template>
  <template v-for="item in meunsList" :key="item.path">
    <el-sub-menu :index="item.path" v-if="item.children?.length">
      <template #title>
        <el-icon> <component :is="item.meta.icon"></component></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <SubMenu :menu-list="item.children" />
    </el-sub-menu>
    <el-menu-item :index="item.path" v-else>
      <el-icon><component :is="item.meta.icon"></component></el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
defineProps<{ meunsList: Menu.MenuOptions[] }>();
</script>
