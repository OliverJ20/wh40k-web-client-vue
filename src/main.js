import Vue from 'vue'
import VueRouter from 'vue-router'
import './scss/main.scss'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Dashboard from './containers/layout/Dashboard.vue'
import Auth from '@okta/okta-vue'
import ArmyList from './containers/pages/ArmyList.vue'
import Army from './containers/pages/Army'

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
