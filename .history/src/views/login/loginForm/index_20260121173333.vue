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
      <el-input v-model="ruleForm.username" type="username" />
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        登录
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">注册</el-button>
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
  console.log(formEl.validate, "formEl");
  formEl.validate((valid) => {
    console.log(valid, "valid");
    if (valid) {
      console.log("submit!");
      login(ruleForm.username, ruleForm.pass).then((res) => {
        console.log(res.data.data.login, "登录返回信息");
        const { token, desc, error, code, username } = res.data.data.login;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        console.log(localStorage.getItem("token"), 'localStorage.get("token")');
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
    message: "暂未开放",
    type: "error",
  });
};
</script>
