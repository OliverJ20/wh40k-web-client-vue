import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import Auth from '@okta/okta-vue'
import ArmyList from './components/ArmyList.vue'
import Army from './components/Army'

Vue.use(Auth, {
    issuer: 'https://dev-333453.okta.com/oauth2/default',
    client_id: '0oa4102hg2lKNWxDl4x6',
    redirect_uri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email'
})

const routes = [
    { path: '/implicit/callback', component: Auth.handleCallback() },
    { path: '/armyList', component: ArmyList },
    {
        path: '/army/:id',
        name: 'army',
        component: Army,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    render: h => h(Dashboard)
}).$mount('#app')
