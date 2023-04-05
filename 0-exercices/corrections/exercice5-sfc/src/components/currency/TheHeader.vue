<template>
  <h1 class="heading text-center display-2">{{ title }}</h1>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'convertor'
    }
  }
}
</script>