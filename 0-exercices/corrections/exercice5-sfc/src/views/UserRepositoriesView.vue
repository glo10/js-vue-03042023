<template>
  <h2>User repositories ({{ repos.length }})</h2>
  <div v-if="!repos.length">
    Aucun repository
  </div>
  <div v-else>
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        <img :src="folderIcon" alt="Folder icon">
        <span>
          {{ repo.name }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import folderIcon from '@/assets/img/folder.svg'
export default {
  async created() {
    try {
      const res = await fetch(`https://api.github.com/users/${this.$route.params.login}/repos`)
      this.repos = await res.json()
    } catch (err) {
      console.error(err)
    }
  },
  data() {
    return {
      repos: [],
      folderIcon
    }
  }
}
</script>
<style scoped>

ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

img {
  width: 8rem;
}

li {
  display: flex;
  flex-direction: column-reverse;
}

li span {
  display: inline-block;
  max-width: 8rem;
  color: #fff;
  position: relative;
  top: 50%;
  text-align: center;
  padding: 1rem;
}

</style>