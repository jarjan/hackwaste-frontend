<template>
  <section class="section">
    <b-table :data="products" :columns="columns"></b-table>
    <!-- <product v-for="product in " :key="product.id" :product="product"></product> -->
  </section>
</template>

<script>
// import Product from '~/components/Product'

export default {
  name: 'ProductsPage',

  // components: {
  //   Product,
  // },
  data() {
    return {
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
        },
        {
          field: 'ean',
          label: 'Barcode EAN',
        },
        {
          field: 'category',
          label: 'Product category',
        },
        {
          field: 'title',
          label: 'Product name',
        },
        {
          field: 'bestBeforeDate',
          label: 'Due Date',
          centered: true,
        },
        {
          field: 'wasteDate',
          label: 'Expiration Date',
          centered: true,
        },
        {
          field: 'status',
          label: 'Status',
        },
      ],
    }
  },
  computed: {
    products() {
      return this.$store.state.products.list
    },
  },
}
</script>
