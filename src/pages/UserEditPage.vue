<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

//获取跳转路由
const route=useRoute();
const editUser=ref({
  editKey:route.query.editKey,//对应字段
  editName:route.query.editName,//提示输入内容
  currentValue:route.query.currentValue,//当前昵称
})
const onSubmit = (values) => {
  console.log('submit', values);
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