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

<style lang="scss" scoped></style>
