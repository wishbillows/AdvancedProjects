<template>
  <el-row class="tac">
    <el-col :span="24">
      <h5 class="mb-2">欢迎</h5>
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
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { userTabsStore } from "@/stores/modules/tabs";
import SubMenu from "../components/Menu/SubMenu.vue";
const { tabsMenuList } = JSON.parse(
  JSON.stringify(storeToRefs(userTabsStore())),
);
const menuList = tabsMenuList._object.tabsMenuList[0];
console.log(menuList, "从store中取值");

const route = useRoute();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);e.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.el-container {
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
.mb-2 {
  font-size: 20px;
  text-align: center;
}
</style>
