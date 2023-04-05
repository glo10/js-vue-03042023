<template>
  <header>
    <the-logo/>
    <the-navigation/>
    <div v-show="currency">
      <img src="https://api.iconify.design/bi:currency-exchange.svg" alt="currency exchange icon">
      <span>{{ currency }}</span>
    </div>
    <div>
      <input type="search" name="search" id="search" placeholder="Ne cherchez pas votre argent ici" @focus="searchFocus($event)">
      <img src="https://api.iconify.design/ic:twotone-search.svg" alt="Search Icon">
    </div>
    <div>
      <img src="https://api.iconify.design/ph:user-bold.svg" alt="User Icon" >
      <span v-if="current.name">{{current.name}}</span>
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
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      focusClasses: Object
    }
  },
  computed: {
    ...mapGetters(['current', 'currency'])
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