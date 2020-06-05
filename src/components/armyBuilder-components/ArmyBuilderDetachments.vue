<template>
  <div>
    <header class="card-header"  @click="collapse ? triggerExpand('to-collapse-' + selectedDetactment.name + '-' + index) : triggerCollapse('to-collapse-' + selectedDetactment.name + '-' + index)">
      <p class="card-header-title primary-header-colour">
        {{selectedDetactment.name}}
      </p>
      <a href="#collapsible-card" data-action="collapse" class="card-header-icon is-hidden-fullscreen primary-header-colour" aria-label="more options">
			<span class="icon">
        <span v-if="collapse">
        <span><i class="fas fa-angle-down" ></i></span>
        </span>
        <span v-else>
        <span><i class="fas fa-minus"></i></span>
        </span>
			</span>
      </a>
    </header>
    <div :id="'to-collapse-' + selectedDetactment.name + '-' + index" class="is-collapsible is-active primary-background-colour">
    <div class="is-collapsible primary-background-colour">
      <div class="card-content">
        <div class="columns is-full is-block">
          <div v-bind:key="unit" v-for="unit in unitTypes">
            <UnitDisplay
                    :unitType="unit"
                    :detachmentIndex="index"
            />
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
  import UnitDisplay from "./UnitDisplay";
  import BulmaCollapsible from '@creativebulma/bulma-collapsible';

  export default {
    name: 'ArmyBuilderDetachments',
    components: {
      UnitDisplay,
    },
    props: {
      id: Number,
      selectedDetactment: Object,
      index: Number,
    },
    data() {
      return {
        test: 'this.$route.params.id',
        collapse: false,
        unitTypes: this.$store.state.unitTypeArray,
      }
    },
    methods: {
      triggerCollapse(elementId) {
        const bulmaCollapsibleElement = document.getElementById(elementId);
        if (bulmaCollapsibleElement) {
          this.collapse = !this.collapse
          bulmaCollapsibleElement.bulmaCollapsible('close');
        }
      },
      triggerExpand(elementId) {
        const bulmaCollapsibleElement = document.getElementById(elementId);
        if (bulmaCollapsibleElement) {
          this.collapse = !this.collapse
          bulmaCollapsibleElement.bulmaCollapsible('open');
        }
      },
    },
    mounted() {
      const bulmaCollapsibleElement = document.getElementById('to-collapse-' + this.selectedDetactment.name + '-' + this.index);
      new BulmaCollapsible(bulmaCollapsibleElement);
      bulmaCollapsibleElement.bulmaCollapsible('close');
    },
  }
</script>