<template>
  <section class="section">
    <div class="columns is-mobile">
      <ul class="products-list">
        <product v-for="product in products" :key="product.id" :product="product"></product>
      </ul>
    </div>
  </section>
</template>

<script>
import Product from '~/components/Product'

export default {
  name: 'ProductsPage',

  components: {
    Product,
  },
  computed: {
    products() {
      return this.$store.state.products.list
    },
  },
}
</script>
