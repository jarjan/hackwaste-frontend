<template>
  <div>
    <nuxt-link :to="{ name: 'scan' }" class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <b-icon icon="food-apple" size="is-large" />
            Share a meal
          </h1>
          <h2 class="subtitle">
            Share achievements
          </h2>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link :to="{ name: 'play' }" class="hero is-success is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <b-icon icon="gift" size="is-large" />
            Donation promise
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
            <b-icon icon="information-variant" size="is-large" />
            Origin info
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
            <b-icon icon="magnify" size="is-large" />
            Recipe search
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
