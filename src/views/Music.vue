<!--  -->
<template>
  <div>
    <!-- 编辑推荐 -->
    <div class="wrap">
      <div class="title">编辑推荐</div>
      <div class="content">
        <van-row gutter="2">
          <van-col span="8" v-for="item in list" :key="item.id">
            <div class="item">
              <img :src="item.picUrl" alt="">
              <div class="total">
                <van-icon name="service-o" />
                {{item.playCount | num}}
              </div>
              <div class="info">{{item.name}}</div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="main">
      <div class="title">最新音乐</div>
      <div class="list">
        <div class="list-item" v-for="item in newSong" :key="item.id">
         <div class="left">
          <div class="subtitle">{{item.name}} <span v-if="item.song.alias">{{item.song.alias[0]}}</span></div>
          <div class="author">
            <span class="ele" v-for="ele in item.song.artists" :key="ele.id">
              {{ele.name}}
            </span>
            - {{item.song.album.name}}
          </div>
         </div>
         <div class="right"><van-icon name="play-circle-o" /></div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="foot_bj">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      newSong: []
    }
  },
  // 进入页面调用生命周期钩子
  created() {
    this.getMusic()
    this.getNewSong()
  },
  methods: {
    // 编辑推荐接口
    async getMusic() {
      let res = await this.$api.getMusic()
      // console.log(res.data.result)
      this.list = res.data.result
    },
    // 最新音乐接口
    async getNewSong() {
      let res = await this.$api.getNewSong()
      // console.log(res.data.result)
      this.newSong = res.data.result
    }
  },
  filters: {
    // 处理播放量格式(xxxx.x万)
    num(val) {
      if(!val) return
      val = val > 9999 ? (val/10000).toFixed(1) + '万' : val
      return val
    }
  }
}
</script>

<style lang="less" scoped>
.wrap , .main {
    .title {
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        font-size: 0.34rem;
        position: relative;
        padding-left: 0.2rem;

        &::before {
            content: "";
            position: absolute;
            width: 2px;
            height: 20px;
            top: 2px;
            background: #ff5555;
            left: 0;
        }
    }
}

.content {
    .item {
        position: relative;

        img {
            width: 100%;
        }

        .total {
            color: #fff;
            position: absolute;
            right: 2px;
            top: 2px;
        }

        .info {
            margin: .14rem;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            /* 这里是超出几行省略 */
        }
    }
    .van-col{
        height: 3.56rem;
    }
}
.main {
  margin-top: 0.5rem;
}
.list-item {
    border-bottom: 1px solid #eee;
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;

    .left {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
    }

    .right {
        width: .9rem;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: .6rem;
            height: .6rem;

        }
    }

    .subtitle {
        font-size: 17px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;

        span {
            // font-size: 12px;
            color: #888;
        }
    }

    .author {
        margin-top: 4px;
        font-size: 12px;
        color: #888;

        .ele {
            &::after {
                content: "/";
            }
        }

        .ele:last-child {
            &::after {
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
