/*
 公共的接口配置资源
*/
const base = {
  host: 'http://iwenwiki.com:3000', // 基础域名
  musicUrl:'/api/personalized?limit=6',//首页-推荐音乐 limit=1
  newsong:"/foo/weapi/personalized/newsong",//首页-最新音乐
  playlist:"/foo/weapi/v6/playlist/detail",//热歌榜列表数据
}

export default base