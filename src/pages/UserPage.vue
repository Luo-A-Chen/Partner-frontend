<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted,ref} from "vue";
import {getCurrentUser} from "../services/user.ts";

const user=ref();
const router=useRouter()

//获取用户信息
onMounted(async() => {
  const res=await getCurrentUser();
  user.value=res.data;
})
//修改用户信息
const toEdit=(editKey:string,editName:string,currentValue:string)=>{
  router.push({
    path:'/user/edit',
    query:{
      editKey,
      currentValue,
      editName,
    }
  })
}
</script>

<template>
  <template v-if="user">
    <van-cell title="头像" is-link to="/user/edit" :value="user.avatarUrl" @click="toEdit('avatarUrl','头像',user.avatarUrl)"><img style="height:48px" :src="user.avatarUrl"></van-cell>
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('userName','昵称',user.username)"/>
    <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
    <van-cell title="账号" :value="user.userAccount" />
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="修改时间" :value="user.updateTime" />
  </template>
</template>

<style scoped>

</style>