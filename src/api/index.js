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
  },
  // 获取搜索热词
  hotSearch() {
    return axios.post(base.hotSearch, {
      params: "S3xthdqH2ftJ0YFuKlVAvxEyy6PMVVnUAswrUo2sNbU=",
      encSecKey:
        "1c0d0da2a5e8e36ca20f1d88751e1663804d9c63a229bd540d4df2a0cb669159e1bb2e96dd2646fc7ad99bbc41d8bda2767dcbfc5f570084614e7237d342e996f30a816c7b3d2ac0ad64711c1eff233ba123d499b5e868f044e75ad965a01fa2d05f19f836cff1e89d86e6465761c89037ce21f158df8675fac2af8d3f26ca99",
    });
  },
  // 搜索接口
  search(params) {
    return axios.get(base.search,{
        params
    })
  },
  // 首页推荐详情页
  musicplaylist(){//params={id:xx }
    return axios.post(base.musicplaylist,{
      params:'cSOEUsizOrp4xB3gOY5SBqAnxM6rT9Kp2yGOKt2Q8kWRCUzCGSsISR27016KSgiPEI78skJl0WXFLZ0SlsH/XX2yYwDZ3OL28L0roQ5AC/4=',
      encSecKey:'b02df059ec4ffb639f0ef58ab06eb8592e2dcceb1152391d7aaaee0a98a33b60db5d10c62e95fd9f5e8ac64e8a3a1ec8667d8f971d8ef4de031172443b74613b7f408ac94c3daf58fa2d63c9cc4eef7dfba493d0cf2200e3a95676bbcc6c325776dcc7534aea2c3c6ce8bd8e2f8fcaaf17592bc9f1f0270c5c05ee1147acdd2c'
    })
  },
  // 歌曲信息
  songUrl(params){
    return axios.post(base.songUrl,{
      params:'XA86f32PO9F66jiQS9rFYL7q2NrORVgLdwj7nboO1LKgPv3TGqsGvOLNeJg1B2ZToZIL0J8JCVmiExnzM9un+80mbyxvN/Y1AVXPPvIrEUOtTclqxSRopiAYu5zaNN21',
      encSecKey:'3803141bfad622865ff8a747d84e10948e7f50bd2cee5ac92114a83d44630c4111fde9a3c92da58f20d174884a738746f8611647209a880aee3f022fbbb0b1f4215e0fd76042d5b7e2fc9fe6021bca284f4b44919c6167872d144817dd7334823c201730c15a3f46baa46a42c622f6bea1b186eaa96de0aa264a40e1df4a9154'
    })
  },
  // 歌词
  getLyric(params){
    return axios.get(base.lyric,{
      params
    })
   }
}

export default api