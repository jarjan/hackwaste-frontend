<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Play a game!
      <b-icon icon="rocket" size="is-large" />"
    </h2>
    <CardsStack
      :cards="visibleCards"
      @cardAccepted="handleCardAccepted"
      @cardRejected="handleCardRejected"
      @cardSkipped="handleCardSkipped"
      @hideCard="removeCardFromDeck"
    />
  </section>
</template>

<script>
import CardsStack from '~/components/CardsStack'

export default {
  components: {
    CardsStack,
  },

  data() {
    return {
      visibleCards: ['Chips', 'Chocolate', 'Milk'],
    }
  },

  methods: {
    handleCardAccepted() {
      console.log('handleCardAccepted')
    },
    handleCardRejected() {
      console.log('handleCardRejected')
    },
    handleCardSkipped() {
      console.log('handleCardSkipped')
    },
    removeCardFromDeck() {
      this.visibleCards.shift()
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/index.scss';
</style>
