<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from "vue-router";
//搜索栏
const searchText = ref('');
const onSearch = () => {
  tagList.value = origintagList.map(parentTag => {
    const tempChildren=[...parentTag.children];
    const tempParentTag={...parentTag}
    tempParentTag.children=tempChildren.filter(item=>item.text.includes(searchText.value));
    return tempParentTag;
  })
};
const onCancel = () => {
  searchText.value = '';
  tagList.value = origintagList;
}
//已选中标签
const activeId = ref([]);
const activeIndex = ref(0);
//原始数据
const origintagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女'},
      { text: '琛', id: '琛' },
    ],
  },
  {
    text: '语言',
    children: [
      { text: 'java', id: 'java' },
      { text: 'c++', id: 'c++' },
      { text: 'python', id: 'python' },
    ]
  }
]
//标签列表
let tagList = ref(origintagList)
//关闭标签
const doclose = (tag) => {
  activeId.value = activeId.value.filter(item => {
    return item !== tag
  });
};
const router = useRouter();
const doSearchResult = () => {
  router.push({
    path:'/user/searchResult',
    query:{
      tags:activeId.value
    }
  })
}
</script>

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeId.length===0">请选择你的标签</div>
  <van-row gutter="16">
    <van-col v-for="tag in activeId">
      <van-tag closeable size="medium" type="primary" @close="doclose(tag)">
        {{tag}}
      </van-tag>
    </van-col>
  </van-row>
  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeId"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
  <div style="padding: 12px">
    <van-button block type="primary" @click="doSearchResult">搜索</van-button>
  </div>
</template>

<style scoped>

</style>