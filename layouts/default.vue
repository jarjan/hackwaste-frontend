<template>
  <div>
    <b-navbar wrapper-class="container" type="is-primary">
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" to="/">IsrApp</b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item v-for="(item, key) of items" :key="key" tag="nuxt-link" :to="item.to">
          {{ item.title }}
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Products',
          icon: 'cards-playing-outline',
          to: { name: 'products' },
        },
        {
          title: 'Chart',
          icon: 'cards-playing-outline',
          to: { name: 'chart' },
        },
        {
          title: 'Scan',
          icon: 'barcode-scan',
          to: { name: 'scan' },
        },
        {
          title: 'Play',
          icon: 'cards-playing-outline',
          to: { name: 'play' },
        },
        {
          title: 'Leaderboard',
          icon: 'cards-playing-outline',
          to: { name: 'leaderboard' },
        },
        {
          title: 'Map',
          icon: 'cards-playing-outline',
          to: { name: 'map' },
        },
        {
          title: "What's Next?",
          icon: 'cards-playing-outline',
          to: { name: 'next' },
        },
      ],
    }
  },
}
</script>

<style lang="scss">
$primary: #173144;
$icon-dimensions-large: 5rem;
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
