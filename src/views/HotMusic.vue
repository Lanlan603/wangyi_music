<!--  -->
<template>
  <div>
    <!-- 热歌榜图片 -->
    <div class="info">
      <img src="@/assets/images/hot_music_bg_2x.jpg" width="100%">
    </div>
    <!-- 播放列表 -->
    <MusicList :list="list" :isShow="false"></MusicList>
  </div>
</template>

<script>
import MusicList from '@/components/MusicList'
export default {
  components: {
    MusicList
  },
  data () {
    return {
      list: [], // 音乐列表数据
    }
  },
  // 生命周期(进入页面时请求热歌榜音乐列表)
  created() {
    this.getPlayList()
  },
  methods: {
    // 请求热歌榜音乐接口
    async getPlayList() {
      let res = await this.$api.getPlayList()
      this.list = res.data.playlist.tracks
      console.log(this.list)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
