const resource = '/cat/images/search'
export default ($axios) => ({
  get() {
    return $axios.get(`${resource}`, {
      params: { limit: 1, size: 'full' },
    })
  },
})
