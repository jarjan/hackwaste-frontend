import { mockProducts } from '../static/__mocks__'

export const state = () => ({
  list: mockProducts,
})

export const mutations = {
  addProduct(state, product) {
    state.list = [product, ...state.list]
  },
  removeProduct(state, productId) {
    const newProducts = state.list.filter((product) => product.id !== productId)
    state.list = newProducts
  },
  updateProduct(state, product) {
    const updatedProducts = state.list.filter((item) => item.id !== product.id)
    state.list = [...updatedProducts, product]
  },
}
