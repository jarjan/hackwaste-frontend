export const state = () => ({
  points: 100,
})

export const mutations = {
  increment(state, points) {
    state.points += points
  },
  decrement(state, points) {
    state.points -= points
  },
}
