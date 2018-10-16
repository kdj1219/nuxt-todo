import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const state = () => ({
  registerEmail: null,
  registerPassword: null,
  registerError: null,
  loginEmail: null,
  loginPassword: null,
  loginError: null,
  token: null,
})

export const getters = {
    isLoggedIn(state) {
      return !!state.token;
    },
}

export const mutations = {
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
    cookies.remove('token');
    commit('setToken', null);
    this.$router.push({ name: 'login' });
  },
  login({ state, commit }) {
    commit('setLoginError', null);
    return this.$axios.post('/auth/login', {
      email: state.loginEmail,
      password: state.loginPassword,
    }).then(({ data }) => {
      commit('setToken', data.token);
      cookies.set('token', data.token);

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
      cookies.set('token', data.token);

      commit('setRegisterEmail', null);
      commit('setRegisterPassword', null);
      this.$router.push('/');
    }).catch(() => {
      // const errorMessage = e.response.data.error.message;
      commit('setRegisterError', 'An error has occured trying to create your account.');
    });
  },
}