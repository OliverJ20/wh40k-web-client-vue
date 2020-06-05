<template>
  <div>
    <header class="card-header">
      <p class="card-header-title has-text-white secondary-header-colour">
        HQ Units
      </p>
    </header>
    <div class="is-collapsible white-background-colour">
      <div class="card-content">
        <div class="columns is-full">

        </div>
        <button class="button primary-button-colour"> Add Unit </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HQUnits',
    props: {
      id: Number,
      detachmentIndex: Number,
    },
    data() {
      return {
        hqUnits: this.$store.state.hqUnits,
        selectedUnits: [],
      }
    }
  }
</script>