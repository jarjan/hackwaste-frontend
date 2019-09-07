<template>
  <div class="cards">
    <Card v-for="(card, index) in cards" :key="card" :card="card" :is-current="index === 0" />
  </div>
</template>

<script>
import Card from './Card'
export default {
  components: {
    Card,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
}
</script>
