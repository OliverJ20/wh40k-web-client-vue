<template>
    <div>
    <div v-if="isLoading">Loading army lists...</div>
    <div v-else class="card">
        <div v-bind:key="selectedDetachment" v-for="(selectedDetachment, index) in detachments">
            <ArmyBuilderDetachments
                    :id="id"
                    :selectedDetactment="selectedDetachment"
                    :index="index"
            />
        </div>
    </div>
    </div>
</template>

<script>
    import ArmyBuilderDetachments from "../../components/armyBuilder-components/ArmyBuilderDetachments";
    import axios from "axios";
    import { API_BASE_URL } from "../../config";
    export default {
        name: 'ArmyBuilder',
        components: {
            ArmyBuilderDetachments,
        },
        data() {
            return {
                isLoading: true,
                id: this.$route.params.id,
                detachments: this.$store.state.detachmentArrayState,
            }
        },
        async created () {
            axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`
            try {
                const response = await axios.get(API_BASE_URL + '/armyIndividual/' + this.id)
                this.armySingle = response.data.data
                this.$store.commit('setArmyUnits', { item: 'hqUnits', newValue: this.armySingle.army_hq_units })
                this.isLoading = false
            } catch (e) {
                // handle authentication error here
            }
        },
    }
</script>