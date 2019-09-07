<template>
  <section class="section">
    <h2 class="title is-3 has-text-centered">
      Play a game!
      <b-icon icon="rocket" size="is-large" />
    </h2>
    <h1 class="title is-1 has-text-centered">
      Score:
      <ICountUp :delay="delay" :end-val="visiblePoints" :options="options" />
    </h1>
    <h1></h1>
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
import ICountUp from 'vue-countup-v2'
import CardsStack from '~/components/CardsStack'
import { ProductStatus } from '~/static/types'

export default {
  components: {
    CardsStack,
    ICountUp,
  },

  data() {
    return {
      сards: ['Chips', 'Chocolate', 'Milk'],
      removedCards: [],
      visiblePoints: 0,
      delay: 1000,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
      },
    }
  },

  computed: {
    visibleCards() {
      return this.$store.state.products.list.filter(
        (item) => item.status === ProductStatus.pending && !this.removedCards.includes(item.id)
      )
    },
    points() {
      return this.$store.state.game.points
    },
  },

  mounted() {
    this.visiblePoints = this.points
  },

  methods: {
    handleCardAccepted(item) {
      // mark product consumed
      const product = { ...item, status: ProductStatus.consumed }
      let points = 1000
      if (product.category) points = 1500
      this.$store.commit('game/increment', points)
      this.$store.commit('products/updateProduct', product)
      this.visiblePoints = this.points
    },
    handleCardRejected(item) {
      // mark product wasted
      const product = { ...item, status: ProductStatus.wasted }
      let points = 1000
      if (product.category) points = 1500
      this.$store.commit('game/decrement', points)
      this.$store.commit('products/updateProduct', product)
      this.visiblePoints = this.points
    },
    handleCardSkipped(item) {
      // Do nothing
    },
    removeCardFromDeck(item) {
      // Removing card from deck
      this.removedCards = [...this.removedCards, item]
      this.visibleCards.shift()
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/index.scss';
</style>
