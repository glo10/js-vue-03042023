<template>
  <div>
    <img :src="logo.src" :alt="logo.alt">
  </div>
</template>
<script>
import src from '@/assets/img/logo.svg'
export default {
  data() {
    return {
      logo: {
        src,
        alt: "Logo GTM Bank"
      }
    }
  }
}
</script>