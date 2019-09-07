<template>
  <li>
    <h3 class="productTitle">
      <strong>{{ product.title }}</strong>
    </h3>
    <p>Ean: {{ product.ean }}</p>
    <p>Due: {{ product.dueDate }}</p>
    <p>Estimated due: {{ product.expirationDate }}</p>
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
