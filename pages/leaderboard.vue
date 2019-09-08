<template>
  <section class="section">
    <b-table :data="leaders" :columns="columns"></b-table>
  </section>
</template>

<script>
import { mockLeaders } from '~/static/__mocks__'

export default {
  name: 'ProductsPage',

  data() {
    return {}
  },
  computed: {
    leaders() {
      return mockLeaders
    },
    person() {
      const person = {
        id: Date.now(),
        name: 'Big brother',
        score: this.$store.state.game.points,
        imgSrc: '/profiles/user.png',
      }
      return person
    },
  },
}
</script>
