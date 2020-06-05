<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title primary-header-colour">
        {{detachments.name}}
      </p>
      <span v-if="selectedAmount > 0" class="card-header-icon is-hidden-fullscreen primary-header-colour user-select-none">
        <router-link
                class="button primary-button-colour"
                :to="{ name: 'armyBuilder',
                params: { id: id }}">
          Continue
        </router-link>
      </span>
      <span v-if="selectedAmount > 0" @click="theReverseCount(detachments)" class="card-header-icon is-hidden-fullscreen primary-header-colour user-select-none">
        <span class="icon">
          <i class="fas fa-minus" ></i>
        </span>
      </span>
    </header>
    <div class="is-collapsible primary-background-colour">
      <div class="card-content">
        <div class="columns is-centered">

            <div class="img-wrapper">
              <img
                      class="img-size"
                      :src='getImgUrl(detachments.shorthand)'
                      :alt='detachments.name'
              />
              <div :id="'overlay-id-' + detachments.shorthand" @click="theCount(detachments)" class="img-detachment-overlay user-select-none">
                <p class="img-overlay-text"> {{selectedAmount}} </p>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Detachments',
    data() {
      return {
        isLoading: true,
        collapse: true,
        selectedAmount: 0,
        el: '',
        selectedDetachment: [],
      }
    },
    props: {
      detachments: Object,
      id: Number,
    },
    mounted () {
      this.el = document.getElementById('overlay-id-' + this.detachments.shorthand)
    },
    methods: {
      ...mapActions([
          'setValue'
      ]),
      getImgUrl (img) {
        const images = require.context('../../assets/', false, /\.jpg$/)
        return images('./' + img + ".jpg")
      },
      theCount (addDetachment) {
        this.selectedDetachment.push(addDetachment)
        this.selectedAmount += 1
        this.$store.commit('setDetachmentArrayValue', { newValue: addDetachment })
      },
      theReverseCount (removeDetachment) {
        if (this.selectedAmount > 0)
        this.selectedAmount -= 1
        this.$store.commit('removeValue', { removedValue: removeDetachment })
      }
  },
    updated () {
      if (this.selectedAmount > 0) {
        this.el.classList.add('overlay-stay')
      }
      if (this.selectedAmount === 0) {
        this.el.classList.remove('overlay-stay')
      }
    },
  }

</script>