import {createRouter , createWebHistory} from "vue-router";
import home from '@/components/home.vue'
import sports from '@/components/sports.vue'
import health from '@/components/health.vue'
import business from '@/components/business.vue'
import news from '@/components/news.vue'
const routes = [
    {
        path : '/',
        name : 'home',
        component : home,
        children :[
            {
                path : '/sports',
                name : 'sports',
                component : sports
            },
            {
                path: '/health',
                name: 'health',
                component: health
            },
            {
                path: '/business',
                name : 'business',
                component: business
            }
        ]

    },
    {
        path: '/news/:title',
        name : 'news',
        component: news
    }
]
const router = createRouter({
    history :createWebHistory(),
    routes
})
export default router
