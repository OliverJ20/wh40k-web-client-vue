import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import './scss/main.scss'

import * as state from './Store/state'
import * as mutations from './Store/mutations'
import * as actions from './Store/actions'
import * as plugins from './Store/plugins'

import Dashboard from './containers/layout/Dashboard.vue'
import Auth from '@okta/okta-vue'
import ArmyList from './containers/pages/ArmyList.vue'
import ArmyBuilder from './containers/pages/ArmyBuilder'
import DetachmentList from "./containers/pages/DetachmentList";
import ArmyFactions from "./components/armyList-components/ArmyFactions";

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use( Auth, {
    issuer: 'https://dev-333453.okta.com/oauth2/default',
    client_id: '0oa4102hg2lKNWxDl4x6',
    redirect_uri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email'
})

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    plugins,
});

const routes = [
    { path: '/implicit/callback', component: Auth.handleCallback() },
    { path: '/armyList', component: ArmyList, ArmyFactions },
    { path: "/armyList/:id/detachments", component: DetachmentList, name: 'detachments'},
    {
        path: '/armyList/:id/detachments/armyBuilder',
        name: 'armyBuilder',
        component: ArmyBuilder,
        props: true,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    store,
    render: h => h(Dashboard)
}).$mount('#app')
