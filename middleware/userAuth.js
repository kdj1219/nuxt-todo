export default function({ store, redirect }) {
  if (!store.getters['authentication/isLoggedIn']) {
    return redirect('/login')
  }
}