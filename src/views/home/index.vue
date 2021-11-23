<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row type="flex" justify="space-around">
      <van-col class="songItem" span="8" v-for="o in reList" :key="o.id"
        ><van-image width="100%" height="3rem" fit="cover" :src="o.picUrl" />
        <p class="song_name">{{ o.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>
    <song-item
      v-for="o in newList"
      :key="o.id"
      :name="o.name"
      :author="o.song.artists[0].name"
      :id="o.id"
    ></song-item>
  </div>
</template>

<script>
import { recommendMusicAPI, newSongAPI } from "@/api";
import SongItem from "@/components/SongItem";
export default {
  components: {
    SongItem,
  },
  data() {
    return {
      reList: [],
      newList: [],
    };
  },
  async created() {
    const { data: res } = await recommendMusicAPI({
      limit: 6,
    });

    this.reList = res.result;
    const { data: res2 } = await newSongAPI({
      limit: 20,
    });
    this.newList = res2.result;
  },
};
</script>

<style scoped>
html,
.title {
  font-size: 0.4rem;
  padding: 0.2rem 0.2rem;
  background-color: rgb(230, 222, 222);
}
.song_name {
  font-size: 0.35rem;
}
.songItem {
  padding: 0.1rem;
}
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>