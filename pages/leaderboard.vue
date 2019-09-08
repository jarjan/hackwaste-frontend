<template>
  <section class="container section">
    <b-table :data="leaders" :default-sort="['score', 'desc']">
      <template slot-scope="props">
        <b-table-column
          :class="{ chosen: props.row.id === 1000 }"
          field="imgSrc"
          label=""
          width="80"
        >
          <img :src="props.row.imgSrc" class="image is-48x48 leader-avatar" />
        </b-table-column>
        <b-table-column field="name" label="Name" :class="{ chosen: props.row.id === 1000 }">{{
          props.row.name
        }}</b-table-column>
        <b-table-column
          sortable
          field="score"
          label="Points"
          :class="{ chosen: props.row.id === 1000 }"
          >{{ props.row.score }}</b-table-column
        >
      </template>
    </b-table>
  </section>
</template>

<script>
import { mockLeaders } from '~/static/__mocks__'

export default {
  name: 'ProductsPage',
  data() {
    return {
      leaders: [],
    }
  },
  computed: {
    person() {
      const score = this.$store.state.game.points
      const person = this.createPerson(score)
      return person
    },
  },
  watch: {
    '$store.state.game.points'(score) {
      const person = this.createPerson(score)
      this.updateLeaderboard(person)
    },
  },
  mounted() {
    this.leaders = [...mockLeaders, this.person]
  },
  methods: {
    createPerson(score) {
      return {
        id: 1000,
        name: 'Big Brother',
        score,
        imgSrc: '/profiles/user.png',
      }
    },
    updateLeaderboard(person) {
      const leaders = this.leaders.filter((leader) => leader.id !== person.id)
      this.leaders = [...leaders, person]
    },
  },
}
</script>
