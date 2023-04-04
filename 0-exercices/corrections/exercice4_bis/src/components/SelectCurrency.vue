<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">{{ label }}</span>
      </div>
      <select class="form-control from" @change="choiceCurrency($event, label)">
        <option value="">Select One …</option>
        <option v-for='currency in currencies' :value="currency" :key="currency">{{ currency }} </option>
      </select>
    </div>
  </div>
</template>
<script>
import {currencies} from '@/assets/currencies.json'
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
      currencies:null
    }
  },
  methods: {
    choiceCurrency(evt, origin) {
      this.$emit(`choice-currency`,{ origin: origin, value: evt.target.value} )
    }
  },
}
</script>