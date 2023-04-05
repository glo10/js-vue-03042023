<template>
  <h1>{{ title }}</h1>
  <user-list />
</template>
<script>
import UserList from '@/components/user/UserList.vue'
export default {
  components: {
    UserList
  },
  data() {
    return {
      title: 'Vue js contributors'
    }
  }
}
</script>