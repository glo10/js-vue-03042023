<script>
import TheHeader from '@/components/header/TheHeader.vue'
import TheFooter from '@/components/footer/TheFooter.vue'

export default {
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scrool', this.handleScroll)
  },
  components: {
    TheHeader,
    TheFooter
  },
  methods: {
    handleScroll() {
      document.querySelector('header').style.opacity = 1
    }
  }
}
</script>

<template>
  <the-header />
  <main>
    <router-view />
  </main>
  <the-footer/>
</template>