<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import myAxios from "../plugins/myAxios.ts";
import qs from "qs";

// //模拟了一个后端的
// const user={
//   id:1,
//   userAccount:'123',
//   username:'luochen',
//   avatarUrl:'https://tse4-mm.cn.bing.net/th/id/OIP-C.7GLMYPqMlt2LgkbPsOnDIAAAAA?cb=iwp2&rs=1&pid=ImgDetMain',
//   gender:'男',
//   phone:'18224882548',
//   email:'835135922@163.com',
//   userRole:1,
//   planetCode:'1',
//   tags:['java'],
//   updateTime:new Date(),
// }

//跳转路由
const router=useRouter()
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
onMounted(async() => {
  const userListData=await myAxios.get('/user/search',{
    paramsSerializer:params=>{
      return qs.stringify(params,{indices:false})
    }
  })
      .then(function (response){
        console.log('/user/search/tags succeed',response);
        // Toast.success('搜索成功');
        return response.data?.data;
      })
      .catch(function (error) {
        console.log('/user/search/tags error',error);
        // Toast.fail('搜索失败');
      })
  if(userListData){
    userList.value=userListData;
  }
})
</script>

<template>
  <van-cell title="头像" is-link to="/user/edit" :value="user.avatarUrl" @click="toEdit('avatarUrl','头像',user.avatarUrl)">
    <img style="height:48px" :src="user.avatarUrl">
  </van-cell>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('userName','昵称',user.username)"/>
  <van-cell title="账号" :value="user.userAccount" />
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
  <van-cell title="星球编号" :value="user.planetCode" />
  <van-cell title="修改时间" :value="user.updateTime.toISOString()" />
</template>

<style scoped>

</style>