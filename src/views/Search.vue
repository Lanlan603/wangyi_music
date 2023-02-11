<!--  -->
<template>
  <div>
    <!-- 1. 搜索 -->
    <div class="search">
      <input v-focus v-model="inpVal" type="text" placeholder="搜索歌曲、歌手" class="inp" id="">
      <van-icon name="close" v-show="inpVal" @click="clearIpt" />
    </div>
    <!-- 2. 热门搜索 -->
    <div class="hot-search" v-if="isShow">
      <div class="title">热门搜索</div>
      <div class="wrapper">
        <div class="item" v-for="(item, index) in hots" :key="index">{{item.first}}</div>
      </div>
    </div>
    <!-- 3. 搜索内容展示 -->
    <div class="search-list" v-else>
      <div class="name">搜索 "{{inpVal}}"</div>
      <div class="info" v-for="item in list" :key="item.keyword">
        <van-icon name="search" />
         {{item.keyword}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hots: [], // 搜索热词
      isShow: true, // 控制搜索结果显示和隐藏
      inpVal: '',
      list: [], // 搜索结果列表
    }
  },
  // 自定义指令--获取焦点
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },
  created() {
    this.hotSearch()
  },
  methods: {
    // 请求搜索热词
    async hotSearch() {
      let res = await this.$api.hotSearch()
      this.hots = res.data.result.hots
    },
    async getSearch(keywords) {
      let res = await this.$api.search({
        keywords,
        type:'mobile'
      })
      this.list = res.data.result.allMatch
    },
    // 点击清空输入框
    clearIpt() {
      this.inpVal = ''
    }
  },
  watch: {
    // 监听搜索结果变化
    inpVal(val) {
      console.log('搜索词修改了',val)
      // 隐藏搜索热词, 展示搜索结果
      if(val) {
        this.isShow = false
        // 请求搜索接口
        this.getSearch(val)
      }else {
        this.isShow = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding: .3rem;
  // display: flex;
  border-bottom: 1px solid #eee;

  .inp {
    border: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    background: #eee;
    height: .6rem;
    line-height: .6rem;
    border-radius: 0.3rem;
    padding-left: .2rem;
  }
  .van-icon {
    position: absolute;
    top: 65px;
    right: 25px;
    font-size: 0.4rem;
    color: #bbb;
  }
}

.hot-search {
  padding: 15px 10px 0;

  .title {
    font-size: 12px;
    line-height: 12px;
    color: #666;
  }

  .wrapper {
    margin: 10px 0 7px;

    .item {
      display: inline-block;
      height: 32px;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 0 14px;
      font-size: 14px;
      line-height: 32px;
      color: #333;
      border: 1px solid #d3d4da;
      border-radius: 32px;
    }
  }
}

.search-list{
  .name{
    color: red;
    padding-left: .2rem;
    line-height: .9rem;
    border-bottom: 1px solid #eee;
  }
  .info{
    line-height: .9rem;
    height: .9rem;
    padding-left: .2rem;
    border-bottom: 1px solid #eee;
    img{
      width: .4rem;
    }
  }
}
</style>
