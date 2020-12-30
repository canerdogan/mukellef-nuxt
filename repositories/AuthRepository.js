const resource = '/login'
export default ($axios) => ({
  login(username, password) {
    return $axios.post(`${resource}`, { username, password })
  },

  logout() {
    return $axios.post('/logout')
  },
})
