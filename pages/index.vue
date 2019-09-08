<template>
  <div>
    <nuxt-link :to="{ name: 'scan' }" class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <b-icon icon="barcode" size="is-large" />
            Scan
          </h1>
          <h2 class="subtitle">
            Scan the barcode and optionally enter the best before date.
          </h2>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link :to="{ name: 'play' }" class="hero is-success is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <b-icon icon="cards-playing-outline" size="is-large" />
            Play
          </h1>
          <h2 class="subtitle">
            Consume your food consciously.
          </h2>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link :to="{ name: 'map' }" class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <b-icon icon="plus-circle-outline" size="is-large" />
            Help
          </h1>
          <h2 class="subtitle">
            Find nearby charity and food-saving organizations.
          </h2>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link :to="{ name: 'leaderboard' }" class="hero is-danger is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <b-icon icon="rocket" size="is-large" />
            Lead
          </h1>
          <h2 class="subtitle">
            Save the World together with friends!
          </h2>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
