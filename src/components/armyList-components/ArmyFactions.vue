<template>
  <div class="card">
    <header class="card-header" @click="collapse ? triggerExpand('to-collapse-' + armyFaction) : triggerCollapse('to-collapse-' + armyFaction)">
      <p class="card-header-title primary-header-colour">
        {{armyFaction}} Armies
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
    <div :id="'to-collapse-' + armyFaction" class="is-collapsible primary-background-colour">
      <div class="card-content">
        <div class="columns is-multiline">
          <div
              v-for="selectedArmy in armySingle"
              @click="goToBlabla(1)"
              v-bind:key="selectedArmy.id"
              class="column is-one-third"
          >
            <div class="img-wrapper">
              <img
                  class="img-size"
                  :src='getImgUrl(selectedArmy.shorthand)'
                  :alt='selectedArmy.name'
              />
              <div class="img-overlay">
                <div class="img-overlay-text"> {{selectedArmy.name}} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BulmaCollapsible from '@creativebulma/bulma-collapsible';
  export default {
    name: 'ArmyFactions',
    data() {
      return {
        isLoading: true,
        collapse: true,
      }
    },
    props: {
      armySingle: Array,
      armyFaction: String,
    },
    methods: {
      getImgUrl (img) {
        const images = require.context('../../assets/', false, /\.jpg$/)
        return images('./' + img + ".jpg")
      },
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
      goToBlabla(id) {
        console.log('triggered')
        this.$router.push({ name: 'army', params: { id: id } });
      },
    },
    mounted() {
      const bulmaCollapsibleElement = document.getElementById('to-collapse-' + this.armyFaction);
      new BulmaCollapsible(bulmaCollapsibleElement);
      bulmaCollapsibleElement.bulmaCollapsible('close');
    },
  }

</script>