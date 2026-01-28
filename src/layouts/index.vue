<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="aside-box">
          <div class="logo flx-center">
            <!-- <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" /> -->
            <span class="logo-text" v-if="!isCollapse"> 关于我的项目 </span>
            <span class="logo-text" v-else> 我的 </span>
          </div>
        </div>
        <LayoutVertical :isCollapse="isCollapse" />
      </el-aside>

      <el-container class="el-content">
        <ElHeader :onIsCollapse="onIsCollapse" :is-collapse="isCollapse" />
        <el-main>Main</el-main>
        <div class="footer">2024 © admin By wish Technology.</div>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import LayoutVertical from "./LayoutVertical/index.vue";
import { getRoute } from "@/request/modules/getRoute";
import { userTabsStore } from "@/stores/modules/tabs";
import ElHeader from "@/layouts/components/Header/index.vue";
import { Value } from "sass";
let route = ref([]);
let isCollapse = ref(false);
onMounted(() => {
  const userTabs = userTabsStore();
  getRoute().then((res) => {
    userTabs.tabsMenuList.push(res.data.data);
  });
});
const onIsCollapse = (value: boolean) => {
  console.log(value, "valkue");
  isCollapse.value = value;
};
</script>

<style lang="scss" scoped>
.el-content {
  display: grid;
  background-color: aliceblue;
  .el-main {
    height: calc(100vh - 95px);
  }
}
.el-container {
  width: 100%;
  height: 100%;
  :deep(.el-aside) {
    width: auto;
    height: 100vh;
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-aside-border-color);
    overflow-y: hidden;
    .aside-box {
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      // height: 100%;
      transition: width 0.3s ease;
      .el-scrollbar {
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
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: pink;
}
.footer {
  width: auto;
  height: 38px;
  font-size: 12px;
  text-align: center;
  line-height: 38px;
  background-color: rgb(255, 255, 255);
}
</style>
