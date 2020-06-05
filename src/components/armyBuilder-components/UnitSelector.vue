<template>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">units</p>
          <button @click="button" class="delete" aria-label="close"></button>
        </header>
        <table class="table is-fullwidthv">
          <tbody>
          <tr class="user-select-none" v-bind:key="data.name" v-for="data in units">
            <td>{{selectedItems.filter((v) => v.name === data.name).length > 0 ? selectedItems.filter((v) => v.name === data.name).length : '' }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.points }}</td>
            <td v-if="selectedItems.filter((v) => v.name === data.name).length > 0"  @click="onChangeRemove(data)"><i class="fas fa-minus" ></i></td>
          </tr>
          </tbody>
        </table>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="onClickAdd">Add</button>
        </footer>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'UnitSelector',
    props: {
      units: Array,
      addUnits: Function,

    },
    data() {
      return {
        hqUnits: 'his.$store.state[this.props.unitType]',
        selectedItems: [],
        counter: 0,
      }
    },
    methods: {
      onChangeRemove (data) {
        const removeIndex = this.selectedItems.findIndex((v) => v.name === data.name)
        this.selectedItems.splice(removeIndex, 1)
      },
      button() {
        this.$emit('close')
      },
      onClickAdd () {
        this.$emit('close')
        this.$emit('onClickAdd', this.selectedItems)
        this.selectedItems = []
      }
    },
  };
</script>