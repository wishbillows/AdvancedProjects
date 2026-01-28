<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu :index="item.path" v-if="item.children?.length">
      <template>
        <el-icon> <component :is="item.meta.icon"></component></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menu-list="item.children" />
    </el-sub-menu>
    <el-menu-item :index="item.path" v-else>
      <el-icon><component :is="item.meta.icon"></component></el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
defineProps<{ menuList: Menu.MenuOptions[] }>();
</script>
