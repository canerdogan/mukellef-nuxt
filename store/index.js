export const state = () => ({
  authUser: null,
  cat: { url: 'https://tailwindcss.com/img/card-top.jpg' },
  catLoading: false,
})

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user
  },
  SET_CAT(state, cat) {
    state.catLoading = false
    state.cat = cat
  },
  SET_CATLOADING(state) {
    state.catLoading = true
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      const { data } = await this.$repositories.auth.login(username, password)
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await this.$repositories.auth.logout()
    commit('SET_USER', null)
  },

  async getCat({ commit }) {
    commit('SET_CATLOADING')
    const { data } = await this.$repositories.cat.get()
    commit('SET_CAT', data[0])
  },
}
