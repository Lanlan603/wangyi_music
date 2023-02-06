<!--  -->
<template>
  <div>
    <!-- 编辑音乐 -->
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  // 进入页面调用生命周期钩子
  created() {
    this.getMusic()
  },
  methods: {
    // 编辑推荐接口
    async getMusic() {
      let res = await this.$api.getMusic()
      console.log(res.data.result)
      this.list = res.data.result
    }
  },
  filters: {
    // 处理播放次数
    num(val) {
      if(!val) return
      val = val > 9999 ? (val/10000).toFixed(1) + '万' : val
      return val
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
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
</style>
