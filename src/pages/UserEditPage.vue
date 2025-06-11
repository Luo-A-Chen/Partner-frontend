<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {getCurrentUser} from "../services/user.ts";

//获取跳转路由
const router=useRouter();
const route=useRoute();
//获取当前用户
const editUser=ref({
  editKey:route.query.editKey,//对应字段
  editName:route.query.editName,//提示输入内容
  currentValue:route.query.currentValue,//当前昵称
})

const onSubmit = async() => {
  const currentUser=await getCurrentUser();
  if(!currentUser){
    console.log('用户未登录');
    return;
  }
  const res=await myAxios.post('/user/update',{
    'id':currentUser.id,
    [editUser.value.editKey as string]:editUser.value.currentValue,
  })
  if(res.data.code===0){
    console.log('更新成功');
    router.back();
  }else{
    console.log('更新失败');
    router.back();
  }
};
</script>

<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="editUser.currentValue"
      :name="editUser.editKey"
      :label="editUser.editName"
      :placeholder="`请输入${editUser.editName}`"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>