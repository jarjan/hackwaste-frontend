<template>
  <section class="section">
    <div class="columns is-mobile">
      <scanner></scanner>
    </div>
  </section>
</template>

<script>
import Scanner from '~/components/Scanner'

export default {
  name: 'ScanPage',

  components: {
    Scanner,
  },
}
</script>
