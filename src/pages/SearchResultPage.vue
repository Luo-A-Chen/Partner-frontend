<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
// import {Toast} from "vant";
import qs from 'qs';


const route = useRoute();
const userList=ref([]);
onMounted(async() => {
  const userListData=await myAxios.get('/user/search/tags',{
    params:{
      tagNameList:tags
    },
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
const {tags}=route.query;
</script>

<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username}(${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in tags" style="margin-right:8px;margin-top:8px">
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系朋友</van-button>
    </template>
  </van-card>
  <van-empty v-if="userList.length==0">
    <template #description>
      没有搜索结果
    </template>
  </van-empty>
</template>

<style scoped>

</style>