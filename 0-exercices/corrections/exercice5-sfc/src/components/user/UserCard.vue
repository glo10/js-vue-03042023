<template>
  <div class="card">
    <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <p class="card-text">{{ user.bio }}</p>
      <router-link :to='{ name: "userDetails", params: { login: user.login}}'>
        <span class="btn btn-primary">
          more details
        </span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['user']
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
</style>