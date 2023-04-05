<template>
  <header>
    <the-logo/>
    <the-navigation/>
    <div>
      <input type="search" name="search" id="search" placeholder="Ne cherchez pas votre argent ici" @focus="searchFocus($event)">
      <img src="https://api.iconify.design/ic:twotone-search.svg" alt="Search Icon">
    </div>
    <div>
      <img src="https://api.iconify.design/ph:user-bold.svg" alt="User Icon" >
      <span>Espace membres</span>
    </div>
  </header>
  <div>
    <the-banner/>
  </div>
</template>
<script>
import TheLogo from '@/components/logo/TheLogo.vue'
import TheNavigation from '@/components/navigation/TheNavigation.vue'
import TheBanner from '@/components/header/TheBanner.vue'
export default {
  data() {
    return {
      focusClasses: Object
    }
  },
  components: {
    TheLogo,
    TheNavigation,
    TheBanner
  },
  methods: {
    searchFocus($event) {
      console.log('event', $event)
      //TODO add class to enlarge input
    }
  }
}
</script>
<style scoped>
span {
  margin-left: 2px;
}
</style>