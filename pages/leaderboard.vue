<template>
  <section class="container section">
    <b-table :data="leaders" :default-sort="['score', 'desc']">
      <template slot-scope="props">
        <b-table-column field="imgSrc" label="" width="80">
          <img :src="props.row.imgSrc" class="image is-48x48" />
        </b-table-column>
        <b-table-column field="name" label="Name">{{ props.row.name }}</b-table-column>
        <b-table-column sortable field="score" label="Points">{{ props.row.score }}</b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mockLeaders } from '~/static/__mocks__'

export default {
  name: 'ProductsPage',
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
  mounted() {
    console.log(this.leaders)
  },
}
</script>
