<!--  -->
<template>
  <div>
    <!-- 播放列表 -->
    <div class="list" v-for="(item, index) in list" :key="item.id">
      <div class="code" v-if="isShow">{{ index + 1}}</div>
      <!-- 热歌榜列表编号处理 -->
      <div class="code" :class="{ 'code-red': index < 3 }" v-else>{{ index > 8 ? index + 1 : '0' + (index + 1)}}</div>
      <div class="list-item" @click="playMusic(item.id, item.name)">
        <div class="left">
          <div class="subtitle">{{ item.name }} <span v-if="item.alia">{{ item.alia[0] }}</span></div>
          <div class="author">
            <span class="ele" v-for="ele in item.ar" :key="ele.id">
              {{ ele.name }}
            </span>
            - {{ item.al.name }}
          </div>
        </div>
        <div class="right"><van-icon name="play-circle-o" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    playMusic(id, name) {
      this.$router.push({
        name: 'song',
        params: {id, name}
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;

  .code {
    width: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 16px;
  }

  .code-red {
    color: #df3436;
  }
}

.list-item {
  border-bottom: 1px solid #eee;
  // padding-left: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  width: 6.5rem;
  display: flex;
  flex: 1;

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
