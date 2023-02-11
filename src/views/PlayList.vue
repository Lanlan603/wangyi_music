<!--  -->
<template>
  <div>
    <!-- 1. 头部信息 -->
    <div class="info">
      <img :src="imgUrl" alt="">
      <div class="name">{{ name }}</div>
    </div>
    <!-- 歌曲列表 -->
    <div class="content">
      <div class="desc">歌曲列表</div>
      <!-- 2. 歌单列表 -->
      <MusicList :list="list"></MusicList>
    </div>
  </div>
</template>

<script>
import MusicList from '@/components/MusicList'
export default {
  components: {
    MusicList
  },
  props: ['id'],
  data() {
    return {
      imgUrl: '', // 歌单封面图片地址
      name: '', // 歌单名称
      list: [], // 歌单列表
    }
  },
  created() {
    this.musicplaylist()
  },
  methods: {
    // 歌单歌曲列表
    async musicplaylist() {
      let res = await this.$api.musicplaylist({ id: this.id })
      console.log(res)
      // 保存图片地址
      this.imgUrl = res.data.playlist.coverImgUrl
      // 保存歌单名称
      this.name = res.data.playlist.name
      // 保存歌单列表
      this.list = res.data.playlist.tracks

    },
  }
}
</script>

<style lang="less" scoped>
.info {
  padding: .3rem;
  display: flex;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 155px;
    background: url(https://p1.music.126.net/RKDx0K4qLB_GIp-oJzRMeQ==/109951165475828213.jpg) no-repeat;
    background-size: cover;
    filter:blur(5px);
    z-index:-1;

  }

  img {
    width: 2.5rem;
  }

  .name {
    flex: 1;
    padding-left: .2rem;
    color: white;
  }
}

.content {
  .desc {
    color: #888;
    font-size: 12px;
    padding: .1rem;
    background: #ddd;
  }
}
</style>
