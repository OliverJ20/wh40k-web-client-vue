import createPersistedState from "vuex-persistedstate";

export const plugins = [createPersistedState({
  storage: window.sessionStorage,
})]