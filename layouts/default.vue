<template>
  <div>
    <b-navbar wrapper-class="container" type="is-primary">
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" to="/">HACK WASTE</b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item v-for="(item, key) of items" :key="key" tag="nuxt-link" :to="item.to">
          {{ item.title }}
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="main-content columns">
      <div class="container column">
        <nuxt />
      </div>
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
          title: 'Chart',
          icon: 'cards-playing-outline',
          to: { name: 'chart' },
        },
      ],
    }
  },
}
</script>

<style lang="scss">
$primary: #2a5231;
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
