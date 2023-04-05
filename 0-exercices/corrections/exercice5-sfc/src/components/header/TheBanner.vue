<template>
    <img :src="banner.src" :alt="banner.alt">
</template>
<script>
import src from '@/assets/img/money.jpg'
export default {
  data() {
    return {
      banner: {
        src, 
        alt: "Money banner"
      }
    }
  }
}
</script>