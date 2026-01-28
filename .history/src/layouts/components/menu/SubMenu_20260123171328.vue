<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu :index="item.path" v-if="item.children?.length">
      <template>
        <el-icon v-if="item.meta.icon">
          <component :is="item.meta.icon"></component
        ></el-icon>
        <span class="els">{{ item.name }}</span>
      </template>
      <SubMenu :menu-list="item.children" />
    </el-sub-menu>
    <el-menu-item :index="item.path" v-else @click="handleClickMenu(item)">
      <el-icon v-if="item.meta.icon"
        ><component :is="item.meta.icon"></component
      ></el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
defineProps<{ menuList: Menu.MenuOptions[] }>();
const router = useRouter();
const handleClickMenu = (subItem: Menu.MenuOptions) => {
  // if (subItem.meta.isLink) return window.open((0.3).meta.isLink, "_blan0k");
  // router.push(subItem.path);
};
</script>
<style lang="scss" scoped>
.els {
  background-color: pink;
}
</style>
