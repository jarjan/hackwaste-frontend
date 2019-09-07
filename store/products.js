import { mockProduct } from './__mocks__'

export const state = () => ({
  list: [mockProduct],
})

export const mutations = {
  addProduct(state, product) {
    state.list.push(product)
  },
  removeProduct(state, productId) {
    const newProducts = state.list.filter((product) => product.id !== productId)
    state.list = newProducts
  },
}
