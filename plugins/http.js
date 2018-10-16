export default ({ $axios, store }) => {
  $axios.onRequest((config) => {
    config.headers.common['Authorization'] = `Bearer ${store.state.authentication.token}`;
  });
};