<template>
  <div>
    <h3>Crédits</h3>
    <ul>
      <li 
        v-for="item in unsplash"
        :key="item.link"
      >
        <span>
          Photo de
          <a target="_blank" :href="item.link">{{ item.author }}</a> sur 
          <a :href="item.unsplash-link" target="_blank">Unsplash</a>
        </span>
      </li>
      <li>
        <span>
          Icones from
        </span>
        <a :href="icone.link" target="_blank">{{ icone.author }}</a>
      </li>
    </ul>
  </div>
</template>
<script>

import {unsplash, icone,}  from '@/assets/data/credits.json'
export default {
  data() {
    return {
      unsplash: unsplash.items,
      icone
    }
  }
}
</script>