<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu :index="subItem.path" v-if="subItem.children?.length">
      <template #title>
        <el-icon v-if="subItem.meta.icon">
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span class="sle">{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item
      :index="subItem.path"
      v-else
      @click="handleClickMenu(subItem)"
    >
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
  console.log("菜单点击事件", JSON.parse(JSON.stringify(subItem.meta)));
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
