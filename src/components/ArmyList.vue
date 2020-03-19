<template>
    <div class="columns">
        <div class="column" v-if="isLoading">Loading army lists...</div>
        <div class="column" v-else>
            <table class="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Faction</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="army in armys">
                    <tr v-bind:key="army.id">
                        <td>{{ army.id }}</td>
                        <td>{{ army.name }}</td>
                        <td>{{ army.factionType }}</td>
                        <td>{{ army.points }}</td>
                        <td>
                            <router-link :to="{ name: 'army', params: { id: 1 } }" class="navbar-item">Select</router-link>
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { API_BASE_URL } from '../config'
    export default {
        data() {
            return {
                isLoading: true,
                armys: {},
            }
        },
        async created () {
            axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`
            try {
                const response = await axios.get(API_BASE_URL + '/armyList')
                this.armys = response.data.data
                this.isLoading = false
            } catch (e) {
                // handle the authentication error here
            }
        },
        methods: {
            // To be populated
        }
    }
</script>
