import Cookies from 'universal-cookie';
const cookies = new Cookies();
import md5 from 'md5';

export const state = () => ({
  registerEmail: null,
  registerPassword: null,
  registerError: null,
  loginEmail: null,
  loginPassword: null,
  loginError: null,
  token: null,
  loginUser: null
})

export const getters = {
    isLoggedIn(state) {
      return !!state.loginUser;
    },
}

export const mutations = {
  setLoginUser(state, user) {
    state.loginUser = user;
  },
  setToken(state, token) {
    state.token = token;
  },
  setRegisterError(state, error) {
    state.registerError = error;
  },
  setRegisterEmail(state, email) {
    state.registerEmail = email;
  },
  setRegisterPassword(state, password) {
    state.registerPassword = password;
  },
  setLoginError(state, error) {
    state.loginError = error;
  },
  setLoginEmail(state, email) {
    state.loginEmail = email;
  },
  setLoginPassword(state, password) {
    state.loginPassword = password;
  },
}

export const actions = {
  logout({ commit }) {
    commit('setToken', null);
    commit('setLoginUser', null);
    cookies.remove('login_user');
    this.$router.push({ name: 'login' });
  },
  login({ state, commit }) {
    commit('setLoginError', null);
    return this.$axios.post('/auth/login', {
      email: state.loginEmail,
      password: state.loginPassword,
    }).then(({ data }) => {
      commit('setToken', data.token);
      commit('setLoginUser', md5(state.loginEmail));
      cookies.set('login_user', md5(state.loginEmail));

      commit('setLoginEmail', null);
      commit('setLoginPassword', null);
      this.$router.push('/');
    }).catch(() => {
      commit('setLoginError', 'An error has occured trying to login.');
    });
  },
  register({ state, commit }) {
    commit('setRegisterError', null);
    return this.$axios.post('/auth/register', {
      email: state.registerEmail,
      password: state.registerPassword,
    }).then(({ data }) => {
      commit('setToken', data.token);
      commit('setLoginUser', md5(state.loginEmail));
      cookies.set('login_user', md5(state.registerEmail));

      commit('setRegisterEmail', null);
      commit('setRegisterPassword', null);
      this.$router.push('/');
    }).catch(() => {
      // const errorMessage = e.response.data.error.message;
      commit('setRegisterError', 'An error has occured trying to create your account.');
    });
  },
}