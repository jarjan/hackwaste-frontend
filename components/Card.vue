<template>
  <div class="card" :class="{ isCurrent: isCurrent }">
    <h3 class="cardTitle">{{ card.keyword }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    isCurrent: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
