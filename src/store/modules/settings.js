const state = {
  showAvatar: false
}

const mutations = {
  CHANGE_AVATAR_SHOW: (state, value) => {
    state.showAvatar = value
  }
}

const actions = {
  changeAvatarShow({ commit }, data) {
    commit('CHANGE_AVATAR_SHOW', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}