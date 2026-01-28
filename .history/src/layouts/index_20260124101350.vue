<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="aside-box">
          <div class="logo flx-center">
            <!-- <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" /> -->
            <span class="logo-text">{{ 123 }}</span>
          </div>
        </div>
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
import { onMounted, ref } from "vue";
import LayoutVertical from "./LayoutVertical/index.vue";
import { getRoute } from "@/request/modules/getRoute";
import { userTabsStore } from "@/stores/modules/tabs";
let route = ref([]);
onMounted(() => {
  const userTabs = userTabsStore();
  getRoute().then((res) => {
    console.log(res.data.data, "路由请求回调");
    userTabs.tabsMenuList.push(res.data.data);
  });
});
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  :deep(.el-aside) {
    width: auto;
    height: 100vh;
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-aside-border-color);
    overflow: visible;
    .aside-box {
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      // height: 100%;
      transition: width 0.3s ease;
      .el-scrollbar {
        height: calc(100% -55px);
        :depp(.el-menu) {
          width: 100%;
          overflow-y: auto;
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
</style>
