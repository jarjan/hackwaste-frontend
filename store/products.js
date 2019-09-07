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
  updateProduct(state, product) {
    const updatedProducts = state.list.filter((item) => item.id !== product.id)
    updatedProducts.append(product)
    state.list = updatedProducts
  },
}
