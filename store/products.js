import { mockProducts } from '../static/__mocks__'

export const state = () => ({
  list: mockProducts,
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
