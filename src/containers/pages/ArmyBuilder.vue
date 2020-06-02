<template>
    <div class="card">
        <div v-bind:key="selectedDetachment" v-for="selectedDetachment in detachments">
            <ArmyBuilderDetachments
                    :id="id"
                    :selectedDetactment="selectedDetachment"
            />
        </div>
    </div>
</template>

<script>
    import ArmyBuilderDetachments from "../../components/armyBuilder-components/ArmyBuilderDetachments";
    export default {
        name: 'ArmyBuilder',
        components: {
            ArmyBuilderDetachments,
        },
        data() {
            return {
                id: this.$route.params.id,
                detachments: this.$store.state.detachmentArrayState,
            }
        },
    }
</script>