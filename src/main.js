import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import './scss/main.scss'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Dashboard from './containers/layout/Dashboard.vue'
import Auth from '@okta/okta-vue'
import ArmyList from './containers/pages/ArmyList.vue'
import ArmyBuilder from './containers/pages/ArmyBuilder'
import DetachmentList from "./containers/pages/DetachmentList";
import ArmyFactions from "./components/armyList-components/ArmyFactions";

Vue.use( Auth, {
    issuer: 'https://dev-333453.okta.com/oauth2/default',
    client_id: '0oa4102hg2lKNWxDl4x6',
    redirect_uri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email'
})

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        detachmentArrayState: [],
    },
    mutations: {
        setDetachmentArrayValue(state, { newValue }) {
            state.detachmentArrayState = [ ...state.detachmentArrayState, newValue];
        },
        removeValue(state, { removedValue }) {
            const removedIndex = state.detachmentArrayState.findIndex((v) => v.name === removedValue.name)
            state.detachmentArrayState.splice(removedIndex, 1)
        },
        clearDetachmentArray(state) {
            state.detachmentArrayState = []
        }
    },
    actions: {
        clearDetachmentArray({commit}) {
            commit('clearDetachmentArray')
        },
    }
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
