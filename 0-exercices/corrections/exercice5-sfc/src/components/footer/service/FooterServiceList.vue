<template>
  <footer-service-list-item
    v-for="service in services"
    :key="service.id" 
    :service="service"
  />
</template>
<script>
import {services} from '@/assets/data/footer-service.json'
import FooterServiceListItem from '@/components/footer/service/FooterServiceListItem.vue'
export default {
  components: { FooterServiceListItem },
  data() {
    return {
      services
    }
  }
}
</script>