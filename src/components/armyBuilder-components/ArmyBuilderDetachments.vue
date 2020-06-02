<template>
  <div>
    <header class="card-header">
      <p class="card-header-title primary-header-colour">
        {{selectedDetactment.name}}
      </p>
    </header>
    <HQUnits
            :id="id"
    />
  </div>
</template>

<script>
  import HQUnits from "../../components/armyBuilder-components/HQUnits";

  export default {
    name: 'ArmyBuilderDetachments',
    components: {
      HQUnits,
    },
    props: {
      id: Number,
      selectedDetactment: Object,
    },
    data() {
      return {
        test: 'this.$route.params.id',
      }
    },
  }
</script>