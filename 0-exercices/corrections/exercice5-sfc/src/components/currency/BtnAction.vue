<template>
  <button class="btn btn-primary m-2" @click="$emit(btn.customEvent)">
    {{ btn.label }}
  </button>
</template>
<script>
export default {
  props: {
    btn: {
      type: Object,
      required: true
    }
  },
  emits: [
    'get-result',
    'clear'
  ],
}
</script>
<style>
.btn {
  width: 50%;
}
</style>