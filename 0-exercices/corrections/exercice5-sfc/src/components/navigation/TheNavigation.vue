<template>
  <nav>
    <ul>
      <li v-for="page in routes" :key="page.name">
        <router-link v-if="!/NotFound404|.details$/i.test(page.name)"  :to="page.path">{{ page.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import routes from '@/router/routes.js'
export default {
  data() {
    return {
      routes
    }
  }
}
</script>
<style scoped>
li a {
  text-transform: capitalize;
}
</style>