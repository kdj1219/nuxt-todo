import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'my_vuex',
    storage: sessionStorage,
  })(store);
};