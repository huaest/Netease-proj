<template>
  <div>
    <!-- navbar! -->
    <van-nav-bar
  :title="pageName"

/>
    <router-view></router-view>
    <!-- 打开路由模式！ -->
    <div class="fill"></div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item repalce to="/layout/home" icon="home-o">首页</van-tabbar-item></van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      pageName: this.$route.meta.title,
    };
  },
  // 监听
  watch: {
    // 新技术，通过监听路由的变化来改变title
    $route() {
      this.pageName = this.$route.meta.title;
    },
  },
};
</script>

<style scoped>
.fill {
  width: 100%;
  height: 1.3rem;
}
</style>