<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title primary-header-colour">
        {{detachments.name}}
      </p>
      <span v-if="counter > 0" class="card-header-icon is-hidden-fullscreen primary-header-colour user-select-none">
        <router-link
                class="button primary-button-colour"
                :to="{ name: 'armyBuilder',
                params: { id: id }}">
          Continue
        </router-link>
      </span>
      <span v-if="counter > 0" @click="theReverseCount(detachments)" class="card-header-icon is-hidden-fullscreen primary-header-colour user-select-none">
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
                <p class="img-overlay-text"> {{counter}} </p>
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
        counter: 0,
        el: '',
        selectedDetachment: [],
      }
    },
    props: {
      detachments: Object,
      id: Number,
    },
    mounted () {
      const help = 'overlay-id-' + this.detachments.shorthand
      this.el = document.getElementById(help)
      console.log(this.el)
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
        this.counter += 1
        this.$store.commit('setDetachmentArrayValue', { newValue: addDetachment })
      },
      theReverseCount (removeDetachment) {
        if (this.counter > 0)
        this.counter -= 1
        this.$store.commit('removeValue', { removedValue: removeDetachment })
      }
  },
    updated () {
      if (this.counter > 0) {
        this.el.classList.add('overlay-stay')
      }
      if (this.counter === 0) {
        this.el.classList.remove('overlay-stay')
      }
    },
  }

</script>