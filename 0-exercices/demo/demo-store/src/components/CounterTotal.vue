<template>
  <div>
    <button @click="increment">+</button>
    <span>
      {{ total }}
    </span>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'totalToString',
    'total'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>