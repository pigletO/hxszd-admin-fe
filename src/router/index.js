import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogLogin from '@/views/BlogLogin.vue'
import BlogIndex from '@/components/BlogIndex.vue'
import WebSocketTest from '@/components/WebSocketTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'BlogIndex',
      component: BlogIndex
    },
    {
      path: '/manage',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'BlogLogin',
      component: BlogLogin
    },
    {
      path: '/123',
      name: 'hellow',
      component: HelloWorld
    },
    {
      path: '/socket',
      name: 'WebSocketTest',
      component: WebSocketTest
    }
  ]
})
