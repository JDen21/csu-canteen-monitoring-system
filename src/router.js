import { createWebHashHistory, createRouter } from "vue-router"
import LandingPage from './pages/LandingPage.vue'
import ComponentSets from './pages/ComponentsSets.vue'
import StoresPage from './pages/StoresPage.vue'
import SignupLoginPage from './pages/SignupLoginPage.vue'
import SignupForm from './components/SignupForm.vue'
import LoginForm from './components/LoginForm.vue'
import StoreViewPage from './pages/StoreViewPage.vue'
import OrderSummaryPage from './pages/OrderSummaryPage.vue'
import OrderNumberPage from './pages/OrderNumberPage.vue'
import FinishUpdatePage from './pages/FinishUpdatePage.vue'
import StockPage from './pages/StockPage.vue'
import LockPage from './pages/LockPage.vue'
import OrderView from './pages/OrderView.vue'


const routes = [
    {
        path : '/',
        component : LandingPage
    },
    {
        path : '/components',
        component : ComponentSets
    },
    {
        path : '/forms',
        component : SignupLoginPage,
        children : [
            {
                path : 'signup',
                component : SignupForm 
            },
            {
                path : 'login',
                component : LoginForm
            }
        ]
    },
    {
        path : '/stores',
        component : StoresPage
    },
    {
        path : '/store-view/:store/:cid', //requires ID
        component : StoreViewPage
    },
    {
        path : '/order-summary/:cid',
        component : OrderSummaryPage
    },
    {
        path : '/order-number',
        component : OrderNumberPage
    },
    {
        path : '/finish-update',
        component : FinishUpdatePage
    },
    {
        path : '/stocks/:cid',
        component : StockPage
    },
    {
        path : '/lock',
        component : LockPage
    },
    {
        path : '/order-view/:cid',
        component : OrderView
    }

]

 const router = createRouter({
    history : createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router