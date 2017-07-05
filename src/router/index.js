import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['../components/index.vue'], resolve)
const register = resolve => require(['../components/register.vue'], resolve)
const login = resolve => require(['../components/login.vue'], resolve)
const createBlog = resolve => require(['../components/createBlog.vue'], resolve)
const blogInf = resolve => require(['../components/blogInf.vue'], resolve)
const userCenter = resolve => require(['../components/userCenter.vue'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: index},
    {path: '/index', component: index},
    {path: '/register', component: register},
    {path: '/login', component: login},
    {path: '/createBlog', component: createBlog},
    {path: '/blogInf/:id', component: blogInf},
    {path: '/userCenter', component: userCenter},
    {path: '*', component: index}
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
