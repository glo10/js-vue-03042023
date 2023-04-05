<template>
  <div class="card">
    <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <p class="card-text">{{ user.bio }}</p>
      <div>
        <router-link :to='{ name: "userDetails", params: { login: user.login}}'>
          <span class="btn btn-primary">
            more details
          </span>
        </router-link>
        <button 
          :class="{disabled: user.login === currentUser.login}"
          :disabled="user.login == currentUser.login"
          @click="changeCurrentUser(user)"
        >
          Select
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: ['user'],
  computed: {
    ...mapGetters(['current']), // user from vuex is a proxy
    currentUser() {// transform user from vuex proxy by object
      return JSON.parse(JSON.stringify(this.current))
    }
  },
  methods: {
    ...mapActions(['changeCurrentUser'])
  }
}
</script>
<style scoped>
.card {
  width: 15rem;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
  margin-bottom: 1rem;
}
.card-img-top {
  height: 180px;
  width: 100%;
  display: block;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
  border-style: none;
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: .5rem;
}
.card-text {
  height: 100px;
}

button {
  width: 92px;
  height: 32px;
  background: #008c74;
  color: #fff;
  cursor: pointer;
}

button.disabled {
  background: #8c807b;
  cursor:not-allowed;
}

.card-text + div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>