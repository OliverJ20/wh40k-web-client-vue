<template>
  <div>
    <div>
      <div v-bind:key="detachments" v-for="detachments in ArmyDetachments">
        <Detachments
                :detachments="detachments"
                :id="id"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import Detachments from "../../components/army-detachments/Detachments";

  export default {
    name: 'DetachmentList',
    components: {
      Detachments,
    },
    data() {
      return {
        id: this.$route.params.id,
        isLoading: true,
        ArmyDetachments: {},
        imperium: [],
        chaos: [],
        xenos: [],
      }
    },
    async created () {
      await this.$store.dispatch('clearDetachmentArray')
      this.ArmyDetachments = [
        {
          id: 1,
          name: 'Battalion Detachment',
          shorthand: 'battalion'
        },
        {
          id: 2,
          name: 'Brigade Detachment',
          shorthand: 'brigade'
        },
        {
          id: 3,
          name: 'Outrider Detachment',
          shorthand: 'outrider'
        },
        {
          id: 4,
          name: 'Spearhead Detachment',
          shorthand: 'spearhead'
        },
        {
          id: 5,
          name: 'Vanguard Detachment',
          shorthand: 'vanguard'
        },
        {
          id: 6,
          name: 'Patrol Detachment',
          shorthand: 'patrol'
        },
        {
          id: 7,
          name: 'Super Heavy Auxiliary Detachment',
          shorthand: 'super-heavy-auxiliary'
        },
        {
          id: 8,
          name: 'Supreme Command Detachment',
          shorthand: 'supreme-command'
        },
        {
          id: 9,
          name: 'Air Wing Detachment',
          shorthand: 'air-wing'
        },
        {
          id: 10,
          name: 'Super Heavy Detachment',
          shorthand: 'super-heavy'
        },
        {
          id: 11,
          name: 'Fortification Network',
          shorthand: 'fortification-network'
        },
        {
          id: 12,
          name: 'Auxiliary Support Detachment',
          shorthand: 'auxiliary-support'
        },
      ]
    },
  }
</script>
