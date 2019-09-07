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
import { ProductStatus } from '~/store/types'

export default {
  components: {
    CardsStack,
  },

  data() {
    return {
      сards: ['Chips', 'Chocolate', 'Milk'],
    }
  },

  computed: {
    visibleCards() {
      return this.$store.state.products.list.filter((item) => item.status === ProductStatus.pending)
    },
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
