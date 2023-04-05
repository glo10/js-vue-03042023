<template>
  <div>
    <h3>{{ service.label }}</h3>
    <ul>
      <li 
        v-for="item in service.items"
        :key="item.alt"
      >
      <img :src="item.src" :alt="item.alt">
      <span>
        {{ item.label }}
      </span>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>