<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/UserCardList.vue";


const route = useRoute();
const userList=ref([]);
// const {tags} = route.query;
onMounted(async() => {
  const userListData=await myAxios.get('/user/recommend',{
    params:{
      pageSize:8,
      pageNum:1,
    },
  })
      .then(function (response){
        return response.data?.data?.records;
      })
      .catch(function (error) {
        console.log(error);
      })
  if(userListData){
    userListData.forEach(user=>{
      if(user.tags){
        user.tags=JSON.parse(user.tags);
      }
    })
    userList.value=userListData;
  }
})
</script>

<template>
  <UserCardList :user-list="userList"/>
  <van-empty v-if="!userList||userList.length<1" description="数据为空"/>
</template>

<style scoped>

</style>