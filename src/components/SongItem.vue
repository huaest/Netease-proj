<template>
  <van-cell
    center
    :title="name"
    :label="author + '-' + '' + name"
    @click="playFn"
  >
    <template #right-icon>
      <van-icon name="play-circle-o" size=".7rem" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id, // 歌曲id, 通过路由跳转传递过去
        },
      });
    },
  },
};
</script>

<style>
</style> 