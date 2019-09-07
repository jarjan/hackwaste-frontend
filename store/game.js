export const state = () => ({
  points: 12500,
})

export const mutations = {
  increment(state, points) {
    state.points += points
  },
  decrement(state, points) {
    state.points -= points
  },
}
