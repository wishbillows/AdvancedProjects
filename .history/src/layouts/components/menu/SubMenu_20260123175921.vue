<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <!-- <div>{{ item.children }}</div> -->
    <el-sub-menu :index="subItem.path" v-if="subItem.children?.length">
      <template>
        <el-icon v-if="subItem.meta.icon">
          <component :is="subItem.meta.icon"></component
        ></el-icon>
        <span class="els">{{ subItem.meta.title }}||000</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item :index="item.path" v-else>
      <el-icon v-if="subItem.meta.icon"
        ><component :is="subItem.meta.icon"></component
      ></el-icon>
      <span>{{ subItem.meta.title }}</span>
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
  width: 50px;
  height: 50px;
  background-color: pink;
}
</style>
