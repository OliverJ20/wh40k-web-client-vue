<template>
  <div class="unit-display-style">
    <header class="card-header">
      <p class="card-header-title has-text-white secondary-header-colour">
        {{unitType}}
      </p>
    </header>
    <div class="is-collapsible white-background-colour">
      <div class="card-content">
        <div class="columns is-full">
          <table class="table is-fullwidth">
            <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
            </tr>
            </thead>
            <tbody>
            <tr v-bind:key="selectedUnit.name" v-for="(selectedUnit, index) in selectedUnits">
              <td>{{ selectedUnit.name }}</td>
              <td>{{ selectedUnit.points }}</td>
              <td @click="onChangeRemove(index)"><i class="fas fa-minus" ></i></td>
            </tr>
            </tbody>
          </table>
        </div>
        <UnitSelector
                v-show="isVisible"
                :units="units"
                @onClickAdd="onClickAdd"
                @close="toggleDisplay"
        />

        <button v-if="units !== []" @click="toggleDisplay" class="button primary-button-colour"> Add Unit </button>
      </div>
    </div>
  </div>
</template>

<script>
  import UnitSelector from "./UnitSelector";
  export default {
    name: 'UnitDisplay',
    components: {
      UnitSelector,
    },
    props: {
      detachmentIndex: Number,
      unitType: String,
    },
    data() {
      const placeholder = 'hqUnits'
      return {
        isVisible: false,
        units: this.$store.state[placeholder],
        selectedUnits: [],
      }
    },
    methods: {
      toggleDisplay () {
        this.isVisible = !this.isVisible
      },
      onClickAdd(value) {
        this.selectedUnits.push(...value)
      },
      onChangeRemove(index) {
        this.selectedUnits.splice(index, 1)
      }

    }
  }
</script>