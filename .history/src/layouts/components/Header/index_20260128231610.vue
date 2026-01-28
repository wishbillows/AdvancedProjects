<template>
  <div class="title">
    <el-icon @click="onIsCollapse(true)" v-if="!isCollapse"><Fold /></el-icon>
    <el-icon @click="onIsCollapse(false)" v-else><Expand /></el-icon>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :icon="UserFilled" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item @click="logoOut()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { UserFilled } from "@element-plus/icons-vue";
import { userTabsStore } from "@/stores/modules/tabs";
import { useRoute } from "vue-router";
defineProps(["onIsCollapse", "isCollapse"]);
const logoOut = () => {
  console.log("点击退出");
  localStorage.removeItem("token");
  localStorage.removeItem("username");
};
</script>
<style lang="scss" scoped>
@import url(./index.scss);
</style>
