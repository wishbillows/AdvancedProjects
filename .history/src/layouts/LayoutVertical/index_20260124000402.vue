<template>
  <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
    <div class="logo flx-center">
      <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
      <span class="logo-text">{{ 123 }}</span>
    </div>
  </div>
  <el-scrollbar>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse-transition="false"
      :router="false"
    >
      <SubMenu :menu-list="menuList" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { userTabsStore } from "@/stores/modules/tabs";
import SubMenu from "../components/Menu/SubMenu.vue";
const { tabsMenuList } = storeToRefs(userTabsStore());

const route = useRoute();
const menuList = computed(() => tabsMenuList.value[0]);
const activeMenu = computed(
  () => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string,
);
</script>

<style lang="scss" scoped>
// .el-aside {
//   background-color: aliceblue;
// }
.el-scrollbar {
  width: 100%;
  height: 100%;
  :deep(.el-aside) {
    width: auto;
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-aside-border-color);
    .aside-box {
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: width 0.3s ease;
      .el-scrollbar {
        height: calc(100% - 55px);
        .el-menu {
          width: 100%;
          overflow-x: hidden;
          border-right: none;
        }
      }
      .logo {
        box-sizing: border-box;
        height: 55px;
        .logo-img {
          width: 28px;
          object-fit: contain;
        }
        .logo-text {
          margin-left: 6px;
          font-size: 21.5px;
          font-weight: bold;
          color: var(--el-aside-logo-text-color);
          white-space: nowrap;
        }
      }
    }
  }
}
// .el-menu {
//   width: 100%;
//   overflow-x: hidden;
//   border-right: none;
// }
.mb-2 {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding: 0 15px;
  background-color: var(--el-header-bg-color);
  border-bottom: 1px solid var(--el-header-border-color);
}
</style>
