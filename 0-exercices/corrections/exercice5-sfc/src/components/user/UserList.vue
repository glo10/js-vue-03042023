<template>
  <div class="row">
    <loader-data v-if="users.length === 0"/>
    <transition-group name="fade">
      <UserCard v-for="user in users" :key="user.login" :user="user" />
    </transition-group>
  </div>
</template>
<script>
import UserCard from '@/components/user/UserCard.vue'
import {mapActions, mapGetters} from 'vuex'
import LoaderData from '@/components/navigation/LoaderData.vue'
export default {
  created(){
    if(this.users.length === 0) {
      this.getUsers()
    }
  },
  components: {
    UserCard,
    LoaderData
  },
  computed: {
    ...mapGetters(['users']),
  },
  methods: {
    ...mapActions(['getUsers'])
  }
}
</script>
<style scoped>
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>