import Cookies from 'universal-cookie';

export const state = () => ({
  baseUrl: '/api',
})

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    const headerCookies = req.headers.cookie || '';
    const cookies = new Cookies(headerCookies);
    const loginUser = cookies.get('login_user');
    if(loginUser) {
      commit('authentication/setLoginUser', loginUser);
    }
  },
}