<!--  -->
<template>
  <div>
    歌曲id信息 {{id}}
    <!-- 音频 html -->
    <!-- <audio :src="url" controls></audio> -->
    <!-- 使用音频插件 -->
    <aplayer :music="{...audio}" :showlrc="true" v-if="audio.url"></aplayer>
  </div>
</template>

<script>
import aplayer from 'vue-aplayer'
export default {
  props: ['id', 'name'],
  components: {
    aplayer
  },
  data () {
    return {
      url: '', // 音频路径
      audio: {
        title: this.name, // 歌曲名字
        artist: '演唱者', // 演唱者
        url: '', // 歌曲路径
        pic: '', // 封面
        lrc: '歌词文件', // 歌词文件
        theme: '', // 歌曲主题
      }
    }
  },
  created() {
    this.getSong()
    this.getLyric()
  },
  methods: {
    // 请求歌曲信息
    async getSong() {
      let res = await this.$api.songUrl()
      console.log(res);
      this.url = res.data.data[0].url
      // 获取音乐url
      this.audio.url = res.data.data[0].url
    },
    // 歌词接口
    async getLyric() {
      let res = await this.$api.getLyric({
        id: this.id
      })
      // 获取歌词
      this.audio.lrc = res.data.lrc.lyric
    }
  }
}
</script>

<style  scoped>

</style>
