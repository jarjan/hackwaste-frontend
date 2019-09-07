export const state = () => ({
  visible: true,
})

export const mutations = {
  show(state) {
    state.visible = true
  },
  hide(state) {
    state.visible = false
  },
}
