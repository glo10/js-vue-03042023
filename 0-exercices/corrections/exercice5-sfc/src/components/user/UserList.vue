<template>
  <div class="row">
    <UserCard v-for="user in users" :key="user.login" :user="user" />
  </div>
</template>
<script>
// import { users } from '@/assets/data/users.json'
import UserCard from '@/components/user/UserCard.vue'
import {users} from '@/assets/data/github.json'
export default {
  components: {
    UserCard
  },
  data() {
    return {
      users
    }
  },
    // created() {
  //   try {
  //     let i = 0
  //     for (; i < users.length; i++) {
  //       fetch(`https://api.github.com/users/${users[i]}`)
  //         .then(user => user.json())
  //         .then(user => {
  //           this.githubUsers.push(user)
  //         })
  //     }
  //   }
  //   catch (error) {
  //     console.log('error created userlist component', error)
  //   }
  // },
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
</style>