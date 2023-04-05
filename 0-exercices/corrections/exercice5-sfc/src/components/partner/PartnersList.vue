<template>
  <h3>Nos partenaires</h3>
  <ul>
    <li v-for="link in links" :key="link.alt">
      <img :src="link.src" alt="link.alt">
      <span>
        {{ link.label }}
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          src: 'https://api.iconify.design/material-symbols:home-work-outline-sharp.svg',
          label: 'GT Chez toi',
          alt: 'Home icon'
        },
        {
          src: 'https://api.iconify.design/material-symbols:directions-car-outline.svg',
          label: 'GTM Car',
          alt: 'Car icon'
        },
        {
          src: 'https://api.iconify.design/mdi:hamburger.svg',
          label: 'GM Manger',
          alt: 'Burger icon'
        },
        {
          src: 'https://api.iconify.design/material-symbols:airplane-ticket-outline.svg',
          label: 'GM voler',
          alt: 'Plan icon'
        }
      ]
    }
  }
}
</script>