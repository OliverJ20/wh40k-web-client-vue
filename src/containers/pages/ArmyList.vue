<template>
    <div>
        <div v-if="isLoading">Loading army lists...</div>
        <div v-else>
          <div v-bind:key="armySingle" v-for="armySingle in armys">
          <ArmyFactions
              :armySingle="armySingle"
              :armyFaction="armySingle[0].factionType"
          />
          </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import { API_BASE_URL } from '../../config'
    import ArmyFactions from '../../components/armyList-components/ArmyFactions';
    export default {
      name: 'ArmyList',
      components: {
        ArmyFactions,
      },
      data() {
        return {
          isLoading: false,
          armys: {},
          imperium: [],
          chaos: [],
          xenos: [],
        }
      },
      async created () {
        axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`
          try {
          const response = await axios.get(API_BASE_URL + '/armyList')
          this.armys = response.data.data
          response.data.data.map((data) => {
            switch (data.factionType) {
              case'Imperium':
                this.imperium.push(data);
                break;
              case 'Chaos':
                this.chaos.push(data);
                break;
              case 'Xenos':
                this.xenos.push(data);
                break;
              default:
                break;
            }
          });
          this.isLoading = false
        } catch (e) {
          console.log('there is an error ' + e)
        }
        this.armys = {
          imperium: this.imperium,
          chaos: this.chaos,
          xenos: this.xenos
        }
      },
    }
</script>


