/*
 公共的请求方法
*/
import base from "./base"
import axios from '@/utils/request'

const api = {
  // 获取推荐音乐
  getMusic() {
    return axios.get(base.musicUrl)
  },
  // 获取最新音乐
  getNewSong() {
    return axios.post(base.newsong, {
      params:
        "IZ+w5OfW3rRPTIqi7F/038d+jTtdXmo1vsWV2lMZ3nAHFK5h3Ac0fM1z2yK+4kTo",
      encSecKey:
        "14d91aef4f16e63d72081a7195fbdcf9158f946cb46a89ae51c2baf5b95b716e301513d7c70800c74dad1b20350f71c4320e4729b5e6c17f18351a48f85dc04674cc3508b45ce931e4ea2d9c58ce60e5668a1b147aafb7893eca8a5a066581463f4ae653e4ffa06bcafec0712442204676a63952f9d241b73da83ab087d4094b",
    })
  },
  // 获取热歌榜音乐
  getPlayList() {
    return axios.post(base.playlist, {
      params:
        "feVv4wQZEwTM9p67scRNYJPJwBYQ6q8/2I3qL8LomYwhZ5JFUKS+pluxWjdbBueI",
      encSecKey:
        "3c33c5f6ff92be3132aae4ba1f8a8e51d772a0cd3b904cfa6ae090822d634fb5a68f4d72d5058b0ef585111fcbea3b472c09a473cb25d433251e22c54b5ac02a8bc886641c59308ad06e7ba8c63bd9c8f256a7dee1fe34e844d184a2e9fe18f13fa122325e641dcffa8409c7f0a953a13ccea376f927e3309a518478ce3ba730",
    })
  }
}

export default api