import createPersistedState from 'vuex-persistedstate'
import * as Cookies from "js-cookie";

let cookieStorage = {
  getItem: function(key) {
    return Cookies.getJSON(key);
  },
  setItem: function(key, value) {
    return Cookies.set(key, value, {expires: 3, secure: false});
  },
  removeItem: function(key) {
    return Cookies.remove(key);
  }
};

export default ({ store }) => {
  createPersistedState({
    key: 'my_vuex',
    storage: sessionStorage,
    // storage: localStorage,
    // storage: cookieStorage,
    // getState: cookieStorage.getItem,
    // setState: cookieStorage.setItem
  })(store);
};