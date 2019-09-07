<template>
  <section class="section">
    <h2 class="title is-3 has-text-centered">
      Play a game!
      <b-icon icon="rocket" size="is-large" />
    </h2>
    <p class="has-text-centered">
      <b-icon icon="gesture-swipe-down"></b-icon>
      Swipe down to skip.
    </p>
    <div class="columns is-vcentered">
      <div class="column">
        <p class="has-text-centered">
          <b-icon icon="gesture-swipe-right"></b-icon>
          Swipe right if you consumed product.
        </p>
      </div>
      <div class="column">
        <div class="level">
          <div class="level-item">
            <CardsStack
              :cards="visibleCards"
              @cardAccepted="handleCardAccepted"
              @cardRejected="handleCardRejected"
              @cardSkipped="handleCardSkipped"
              @hideCard="removeCardFromDeck"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <p class="has-text-centered">
          <b-icon icon="gesture-swipe-right"></b-icon>
          Swipe right if you consumed product.
        </p>
      </div>
    </div>
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
    handleCardAccepted(item) {
      // mark product consumed
      console.log('handleCardAccepted: ', item)
    },
    handleCardRejected(item) {
      // mark product wasted
      console.log('handleCardRejected: ', item)
    },
    handleCardSkipped() {
      // Do nothing
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
