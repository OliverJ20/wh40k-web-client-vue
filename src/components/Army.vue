<template>
    <div>
    <div class="columns">
        <div class="column">
            <table class="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="unit in hqUnits[0]">
                    <tr v-bind:key="unit.name">
                        <td>{{ unit.name }}</td>
                        <td>{{ unit.points }}</td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>
        <div>
            <button
                type="button"
                class="btn"
                @click="showModal"
            >
                Add Hq Units
            </button>

            <UnitSelector
                :parentData="{ hqUnit: armySingle.army_hq_units}"
                v-show="isModalVisible"
                @close="closeModal"
                v-on:childToParent="onChildClick"
                v-on:unitType="onUnitType"
            />
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { API_BASE_URL } from "../config";
    import UnitSelector from "./UnitSelector";

    export default {
        name: 'army',
        props: ['army'],
        components: {
            UnitSelector,
        },
        data() {
            return {
                id: 0,
                armySingle: {},
                isModalVisible: false,
                hqUnits: [],
            }
        },

        async created () {
            this.id = this.$route.params.id;
            axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`
            try {
                const response = await axios.get(API_BASE_URL + '/armyIndividual/' + this.id)
                this.armySingle = response.data.data
            } catch (e) {
                // handle authentication error here
            }
        },
        methods: {
            onChildClick(value) {
                this.hqUnits.push(value)
            },

            onUnitType(value) {
                console.log(value)
            },

            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
        }


    }
</script>
