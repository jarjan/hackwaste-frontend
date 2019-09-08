<template>
  <section class="section">
    <div v-if="isTutorialVisible" class="tutorial-section" @click="hideTutorial">
      <h2 class="title is-3 has-text-centered">
        Play a game!
        <b-icon icon="rocket" size="is-large" />
      </h2>
      <div class="columns is-vcentered tutorial-sides">
        <div class="column">
          <p class="has-text-centered">
            <b-icon icon="gesture-swipe-left"></b-icon>
            Swipe left if product has been wasted.
          </p>
        </div>
        <div class="column">
          <p class="has-text-centered">
            <b-icon icon="gesture-swipe-right"></b-icon>
            Swipe right if you consumed product.
          </p>
        </div>
      </div>

      <p class="has-text-centered">
        <b-icon icon="gesture-swipe-down"></b-icon>
        Swipe down to skip.
      </p>
    </div>

    <h1 class="score is-4 has-text-centered">
      Current Score:
      <strong><ICountUp :delay="delay" :end-val="visiblePoints" :options="options"/></strong>
    </h1>
    <p v-if="visibleCards.length > 0" class="score-phrase has-text-centered">{{ phrase }}</p>
    <div v-if="visibleCards.length > 0" class="columns is-vcentered">
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
    </div>
    <h3 v-if="visibleCards.length === 0" class="title is-3 has-text-centered">
      All products have been processed, well done!
    </h3>
  </section>
</template>

<script>
import ICountUp from 'vue-countup-v2'
import CardsStack from '~/components/CardsStack'
import { ProductStatus } from '~/static/types'
import { posPhrases, negPhrases } from '~/static/game'

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
      phrase: posPhrases[0],
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
    isTutorialVisible() {
      return this.$store.state.tutorial.visible
    },
  },

  watch: {
    '$store.state.game.points'() {
      this.handlePointsChanged()
    },
  },

  mounted() {
    this.handlePointsChanged()
  },

  methods: {
    handleCardAccepted(item) {
      // mark product consumed
      const product = { ...item, status: ProductStatus.consumed, updatedAt: Date.now() }
      let points = 1000
      if (product.category) points = 1500
      this.$store.commit('game/increment', points)
      this.$store.commit('products/updateProduct', product)
    },
    handleCardRejected(item) {
      // mark product wasted
      const product = { ...item, status: ProductStatus.wasted, updatedAt: Date.now() }
      let points = 1000
      if (product.category) points = 1500
      this.$store.commit('game/decrement', points)
      this.$store.commit('products/updateProduct', product)
    },
    handleCardSkipped(item) {
      // Do nothing
    },
    removeCardFromDeck(item) {
      // Removing card from deck
      this.removedCards = [...this.removedCards, item]
      this.visibleCards.shift()
    },
    hideTutorial() {
      this.$store.commit('tutorial/hide')
    },
    getPhrase() {
      let phrase = this.phrase
      let prevKey = 0
      let pointsNum, Phrases
      if (this.points >= 0) {
        Phrases = posPhrases
        pointsNum = this.points
      } else {
        Phrases = negPhrases
        pointsNum = this.points * -1
      }

      for (const key in Phrases) {
        if (pointsNum < parseInt(key)) {
          phrase = Phrases[prevKey]
          break
        }
        prevKey = key
      }
      this.phrase = phrase
    },
    handlePointsChanged() {
      this.visiblePoints = this.points
      this.getPhrase()
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/index.scss';
</style>
