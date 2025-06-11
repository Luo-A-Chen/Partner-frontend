<script setup lang="ts">
import type {UserType} from "../model/user";

interface UserCardListProps{
  userList:UserType[];
}
const props=withDefaults(defineProps<UserCardListProps>(),{
    userList:[],
});
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
</template>

<style scoped>

</style>