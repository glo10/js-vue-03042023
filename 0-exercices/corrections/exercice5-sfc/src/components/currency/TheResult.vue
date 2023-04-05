<template>
  <div>
    <div id="finalAmount" class="text-center">
      <h2>Converted Amount :
        <span class="finalValue"> {{ final }}</span>
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log('data of my parent', this.$parent)
  },
  data() {
    return {
      final: 0
    }
  }
}
</script>