export const state = () => ({
  rightDrawer: false,
  clipped: false,
})

export const getters = {
  getRightDrawer(state) {
    return state.rightDrawer
  },
  getClipped(state) {
    return state.clipped
  },
}

export const mutations = {
  setRightDrawer(state, data) {
    state.rightDrawer = data
  },
}
//
// export const actions = {
//   toggleRightDrawer({ commit }) {
//     commit('setRightDrawer')
//   }
// }
