<template>
  <div>
    <van-search
      shape="round"
      v-model="value"
      placeholder="请输入搜索关键词"
      @input="toInput"
    />
    <div class="sear_wrap" v-if="resList.length === 0">
      <p class="hot_sear">热门搜索</p>
      <div class="hot_name_wrap">
        <van-tag
          round
          color="#ffe1e1"
          type="primary"
          size="medium"
          text-color="#ad0000"
          @click="toFill(o.first)"
          v-for="(o, i) in hotList"
          :key="i"
          >{{ o.first }}</van-tag
        >
      </div>
    </div>

    <div class="sear_wrap" v-else>
      <p class="hot_sear">最佳匹配</p>
      <div class="hot_name_wrap">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <song-item
            v-for="o in resList"
            :key="o.id"
            :name="o.name"
            :id="o.id"
            :author="o.ar[0].name"
          ></song-item>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, SearchAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";
export default {
  components: {
    SongItem,
  },
  data() {
    return {
      value: "",
      hotList: [],
      resList: [],
      count: 0,
      loading: false,
      finished: false,
      page: 1,
      timer: null,
    };
  },
  async created() {
    const { data: res } = await hotSearchAPI();
    this.hotList = res.result.hots;
  },
  methods: {
    async getList() {
      // 直接返回promise
      return await SearchAPI({
        limit: 20,
        keywords: this.value,
        offset: (this.page - 1) * 20,
      });
    },
    async toFill(data) {
      this.page = 1;
      this.finished = false;
      this.value = data;
      // 这里还要用async 和await ！！
      const { data: res } = await this.getList();
      this.resList = res.result.songs;
    },
    async toInput() {
      this.page = 1;
      this.finished = false;
      // 防抖优化！
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        if (this.value.length === 0) {
          this.resList = [];
          return;
        }
        const { data: res } = await this.getList();
        if (res.code === 400) return;
        if (res.result.songs === undefined) {
          this.resList = [];
          return;
        }
        this.resList = res.result.songs;
      }, 50);
    },
    async onLoad() {
      this.page++;
      const { data: res } = await this.getList();
      if (res.result.songs === undefined) {
        this.resList = [];
        this.finished = true;
        this.loading = false;
        return;
      }
      this.resList = [...this.resList, ...res.result.songs];
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.hot_sear {
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  font-size: 0.4rem;
  color: gray;
}
.hot_name_wrap {
  padding: 0.3rem;
}
.van-tag {
  margin: 0 0.1rem;
}
.hot_name_wrap .van-cell {
  border-bottom: 1px solid lightgray;
}
</style>