import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
const Home = () =>
    import ('../views/home/Home.vue')

const Category = () =>
    import ('views/category/Category.vue')
const Shopcart = () =>
    import ('views/shopcart/Shopcart.vue')

const ProFile = () =>
    import ('views/profile/ProFile.vue')
const Detail = () =>
    import ('views/detail/Detail.vue')
    //   const routes = [
    //   {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    //   },
    //   {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
    // ]
const routes = [{
        path: "",
        redirect: "/home"
    }, {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
    {
        path: '/profile',
        component: ProFile
    }, {
        path: '/detail/:iid',
        component: Detail
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router