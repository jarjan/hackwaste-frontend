<template>
  <section class="container section">
    <b-table default-sort="leaders.score">
      <b-table-row v-for="leader in leaders" :key="leader.id">
        <b-table-column field="imgSrc" label="">
          <img :src="leader.imgSrc" />
        </b-table-column>
        <b-table-column field="name" label="Name">{{ leader.name }}</b-table-column>
        <b-table-column sortable field="score" label="Points">{{ leader.score }}</b-table-column>
      </b-table-row>
    </b-table>
  </section>
</template>

<script>
import { mockLeaders } from '~/static/__mocks__'

export default {
  name: 'ProductsPage',

  data() {
    return {
      columns: [
        {
          field: 'imgSrc',
          label: '',
        },
        {
          field: 'name',
          label: 'Name',
        },
        {
          field: 'score',
          label: 'Points',
        },
      ],
    }
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
  mounted() {
    console.log(this.leaders)
  },
}
</script>
