<template>
  <div>
    <nav class="navbar header has-shadow is-primary" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">HACK WASTE</a>
          <div class="navbar-burger">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link v-for="(item, key) of items" :key="key" :to="item.to" class="navbar-item">
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
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
