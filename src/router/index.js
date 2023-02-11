import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
const playList = () => import('@/views/PlayList')
const Song = () => import('@/views/Song')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/playList/:id',
    name: 'playlist',
    component: playList,
    props: true
  },
  {
    path: '/song/:id/:title',
    name: 'song',
    component: Song,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
