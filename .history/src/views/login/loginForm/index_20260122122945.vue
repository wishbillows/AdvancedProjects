<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input
        v-model="ruleForm.username"
        type="username"
        placeholder="用户名：admin"
      />
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input
        v-model="ruleForm.pass"
        type="password"
        placeholder="密码：123456"
      />
    </el-form-item>

    <el-form-item>
      <div class="btn">
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { FormInstance, FormRules, ElMessage } from "element-plus";
import { login } from "../../../request/modules/login";
import { useRouter } from "vue-router";

const router = useRouter();
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({ username: "", pass: "" });
const validateUser = (rule: any, value: any, callback: any) => {
  console.log(value, "user");
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};
const validatePass = (rule: any, value: any, callback: any) => {
  console.log(value, "pass");
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
};

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validateUser, trigger: "blur" }],
  pass: [{ validator: validatePass, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      login(ruleForm.username, ruleForm.pass).then((res) => {
        const { token, desc, error, code, username } = res.data.data.login;
        console.log(token, desc, error, code, username, "----");
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        if (token === localStorage.getItem("token")) {
          ElMessage({
            message: desc,
            type: "success",
          });
          setTimeout(() => {
            router.push({
              name: "Layouts",
            });
          }, 3000);
        } else if (code == 400) {
          ElMessage({
            message: error,
            type: "error",
          });
        } else {
          ElMessage({
            message: error,
            type: "error",
          });
        }
      });
    } else {
      console.log("error submit!");
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  ElMessage({
    message: "重置成功",
    type: "success",
  });
};
</script>
<style lang="scss" scoped>
@use "../index.scss";
</style>
