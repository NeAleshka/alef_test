import {createRouter,createWebHistory} from 'vue-router'
import MainPage from  '../pages/MainPage.vue'
import PreviewPage from '../pages/PreviewPage.vue'
const routes=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:MainPage,
            name:'MainPage'
        },
        {
            path:'/preview',
            component:PreviewPage,
            name:'PreviewPage'
        }
    ]
})

export default routes