<template>
  <li>
    <h3 class="productTitle">
      <strong>{{ product.title }}</strong>
    </h3>
    <p>Ean: {{ product.ean }}</p>
    <p>Due: {{ product.bestBeforeDate }}</p>
    <p>Estimated due: {{ product.wasteDate }}</p>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>
