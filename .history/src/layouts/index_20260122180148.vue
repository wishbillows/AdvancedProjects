<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
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
    const userTabs = res.data.data;
  });
});
</script>
