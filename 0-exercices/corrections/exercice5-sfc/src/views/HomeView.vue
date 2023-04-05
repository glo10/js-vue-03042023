<template>
  <service-list />
  <block-list />
</template>
<script>
import BlockList from '@/components/layout/BlockList.vue'
import ServiceList from "@/components/service/ServiceList.vue"
export default {
  components: {
    ServiceList,
    BlockList
  }
}
</script>