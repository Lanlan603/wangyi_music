<!--  -->
<template>
  <div>
    <!-- 热歌榜图片 -->
    <div class="info">
      <img src="@/assets/images/hot_music_bg_2x.jpg" width="100%">
    </div>
    <!-- 播放列表 -->
    <div class="list" v-for="(item, index) in list" :key="item.id">
      <div class="code" :class="{'code-red': index < 3}">{{index > 8 ? index + 1 : '0' + (index + 1)}}</div>
        <div class="list-item">
         <div class="left">
          <div class="subtitle">{{item.name}} <span v-if="item.alia">{{item.alia[0]}}</span></div>
          <div class="author">
            <span class="ele" v-for="ele in item.ar" :key="ele.id">
              {{ele.name}}
            </span>
            - {{item.al.name}}
          </div>
         </div>
         <div class="right"><van-icon name="play-circle-o" /></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
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
.list{
  display: flex;
  .code{
      width:1rem;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      font-size: 16px;
    }
  .code-red{
    color: #df3436;
  }
}
.list-item {
    border-bottom: 1px solid #eee;
    // padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    display:flex;
    flex: 1;
    .left{
        flex:1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
    }
    .right{
        width:.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: .6rem;
            height: .6rem;

        }
    }
    .subtitle {
        width: 6rem;
        font-size: 17px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
        span{
            // font-size: 12px;
            color: #888; 
        }
    }

    .author {
        margin-top: 4px;
        font-size: 12px;
        color: #888;
       
        .ele{
           &::after{
            content: "/";
           }
        }
        .ele:last-child{
            &::after{
            content: "";
           }
        }
    }
}
// vant库播放小图标样式
.van-icon-play-circle-o:before {
  font-size: 0.5rem;
  color: #aaa;
}
</style>
