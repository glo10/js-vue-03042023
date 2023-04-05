<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.src"
    >
      <img :src="item.src" :alt="item.alt">
    </li>
  </ul>
</template>
<script>
import {items} from '@/assets/data/social-media.json'
export default {
  data() {
    return {
      items
    }
  }
}
</script>