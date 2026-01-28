<template>
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
.el-scrollbar {
  // height: calc(100% - 2px);
  .el-menu {
    // width: 100%;
    overflow-y: auto;
    // border-right: none;
  }
}
</style>
