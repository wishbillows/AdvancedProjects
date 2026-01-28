<template>
  <el-row class="tac">
    <el-col :span="24">
      <h5 class="mb-2">欢迎</h5>
      <el-scrollbar>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse-transition="false"
          :router="false"
        >
          <template v-for="item in meunsList" :key="item.path">
            <el-sub-menu :index="item.path" v-if="item.children?.length">
              <template #title>
                <el-icon> <component :is="item.meta.icon"></component></el-icon>
                <span>{{ item.meta.title }}</span>
              </template>
              <el-sub-menu :index="1 - 4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item :index="item.path" v-else>
              <el-icon><component :is="item.meta.icon"></component></el-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { userTabsStore } from "@/stores/modules/tabs";
const { tabsMenuList } = JSON.parse(
  JSON.stringify(storeToRefs(userTabsStore())),
);
const meunsList = tabsMenuList._object.tabsMenuList[0];
console.log(meunsList, "从store中取值", userTabsStore());

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.mb-2 {
  font-size: 20px;
  text-align: center;
}
</style>
