<template>
  <h2>Details {{ user.name }}</h2>
  <go-back/>
  <img :src="user.avatar_url" :alt="user.login">
  <ul class="list-group">
    <li class="list-group-item" v-for="(val, k) in user" :key="k">{{ k }} : {{ val }}</li>
  </ul>
  <router-link :to="{ name: 'repositories', params: { login: user.login } }">Voir les repositories</router-link>
  <!--:key="$route.path" force vue to re-render-->
  <router-view :key="$route.path" />
</template>
<script>
import { users } from '@/assets/data/github.json'
import GoBack from '@/components/navigation/GoBack.vue'
export default {
  components: { GoBack },
  created() {
    this.users = users
  },
  data() {
    return {
      users: []
    }
  },
  computed: {
    user() {
      return this.users.find(user => this.$route.params.login == user.login)
    },
  }
}
</script>
<style scoped>

a {
  font-size: 1.5rem;
  text-align: center;
}

img {
  width: 250px;
  height: 250px;
  margin: 10px auto;
  display: block;
}
.list-group {
  margin: 10px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 1rem;
}

.list-group-item {
  position: relative;
  width: 33.33%;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .125);
}
</style>