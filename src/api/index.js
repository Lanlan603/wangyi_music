/*
 公共的请求方法
*/
import base from "./base"
import axios from '@/utils/request'

const api = {
  // 获取推荐音乐
  getMusic() {
    return axios.get(base.musicUrl)
  }
}

export default api