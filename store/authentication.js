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
};
