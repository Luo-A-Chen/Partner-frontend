<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from 'vue';
import myAxios from "../plugins/myAxios.ts";
//跳转路由
const router=useRouter()

const userAccount = ref('');
const userPassword = ref('');

const onSubmit = async() => {
  const res=await myAxios.post('/user/login',{
    userAccount:userAccount.value,
    userPassword:userPassword.value,
  })
  console.log(res,'用户登陆');
  if(res.data.code==0&&res.data){
    console.log('登陆成功');
    router.replace('/');
  }else{
    console.log('登陆失败');
  }
};

</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<style scoped>

</style>