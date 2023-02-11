<!--  -->
<template>
  <div>
    <!-- 1. 公共的顶部logo区域 -->
    <div class="header">
      <img src="@/assets/images/logo.jpg" alt="">
    </div>
    <!-- 2. 选项卡 -->
    <van-tabs v-model="active">
      <van-tab title="推荐音乐" name="1">
        <Music></Music>
      </van-tab>
      <van-tab title="热歌榜" name="2">
        <HotMusic></HotMusic>
      </van-tab>
      <van-tab title="搜索" name="3">
        <Search></Search>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Music from './Music'
import HotMusic from './HotMusic'
import Search from './Search'
export default {
  components: {
    Music,
    HotMusic,
    Search
  },
  data() {
    return {
      active: 1,
    }
  },
}
</script>

<style lang="less" scoped>
.header {
  background-color: #d43c33;
  height: 1.68rem;
}
// Vant库 Tab样式(样式穿透)
/deep/ .van-tabs--line .van-tabs__wrap {
  border-bottom: 1px solid #dbdbdb;
  .vat-tab {
    font-size: 16px;
  }
}
// 选项卡被选中的字体颜色
/deep/ .van-tab--active {
  color: #d43c33;
}
// 选项卡被选中的下划线
/deep/ .van-tabs__line {
  width: 56px;
}
</style>
