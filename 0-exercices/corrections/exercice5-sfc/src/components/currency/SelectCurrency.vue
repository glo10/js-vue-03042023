<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">{{ label }}</span>
    </div>
    <select class="form-control from" @change="choiceCurrency($event, label)">
      <option value="">Select One …</option>
      <option
        v-for='currency in currencies'
        :value="currency"
        :key="currency"
        :selected="currency === currencyStore && label.toLowerCase() === 'from'"
      >
        {{ currency }}
      </option>
    </select>
  </div>
</template>
<script>
import { currencies } from '@/assets/data/currencies.json'
import { mapGetters } from 'vuex'
export default {
  created() {
    this.currencies = currencies
  },
  emits: ['choice-currency'],
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currencies: null
    }
  },
  methods: {
    choiceCurrency(evt, origin) {
      this.$emit(`choice-currency`, { origin: origin, value: evt.target.value })
    }
  },
  computed: {
    ...mapGetters(['currency']), // proxy
    currencyStore() { // transform to object
      return JSON.parse(JSON.stringify(this.currency))
    }
  }
}
</script>
<style scoped>
.form-control {
  width: 50%;
}
</style>