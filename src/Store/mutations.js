export const mutations = {
  setArmyUnits(state, { item, newValue }) {
    state[item] = [...newValue]
  },
  setDetachmentArrayValue(state, { newValue }) {
    state.detachmentArrayState = [ ...state.detachmentArrayState, newValue];
  },
  removeValue(state, { removedValue }) {
    const removedIndex = state.detachmentArrayState.findIndex((v) => v.name === removedValue.name)
    state.detachmentArrayState.splice(removedIndex, 1)
  },
  clearDetachmentArray(state) {
    state.detachmentArrayState = []
  }
}