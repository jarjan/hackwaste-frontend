<template>
  <div class="cards">
    <Card
      v-for="(card, index) in cards"
      :key="card.id"
      :card="card"
      :is-current="index === 0"
      @cardAccepted="(event) => $emit('cardAccepted', event)"
      @cardRejected="(event) => $emit('cardRejected', event)"
      @cardSkipped="(event) => $emit('cardSkipped', event)"
      @hideCard="(event) => $emit('hideCard', event)"
    />
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

<style lang="scss" scoped>
.cards {
  position: relative;
  display: flex;
  margin: 50px;
  width: 300px;
  height: 300px;
}
</style>
