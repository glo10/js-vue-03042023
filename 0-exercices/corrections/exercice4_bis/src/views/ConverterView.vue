<template>
  <div>
    <TheHeader :title="headerTitle" />
    <main class="container">
      <div class="main">
        <TheResult v-show="isShowResult" ref="result" />
        <TheAmountForm ref="inputAmount"/>
        <SelectCurrency 
          v-for="label in labels"
          :label="label"
          :key="label" @choice-currency="selectedCurrency($event)"
        />
        <ConverterBtn
          v-for="btn in btns"
          :key="btn.id"
          :btn="btn"
          v-on="btn.id === 1 ? {'get-result': getRates}:{'clear':clearValues}"
        />
      </div>
      <footer>
        <TheCredit />
      </footer>
    </main>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheAmountForm from '@/components/TheAmountForm.vue'
import SelectCurrency from '@/components/SelectCurrency.vue'
import TheResult from '@/components/TheResult.vue'
import TheCredit from '@/components/TheCredit.vue'
import ConverterBtn from '@/components/ConverterBtn.vue'

export default {
  components: {
    TheHeader,
    TheAmountForm,
    SelectCurrency,
    TheResult,
    TheCredit,
    ConverterBtn
},
  data() {
    return {
      btns: [
        {
          id: 1,
          customEvent: 'get-result',
          label: 'convert'
        },
        {
          id:2,
          customEvent: 'clear',
          label: 'reset'
        },
      ],
      labels: {
        from: 'from',
        to: 'to'
      },
      headerTitle: 'Currency Converter',
      rateFrom: null,
      rateTo: null,
      isShowResult: false
    }
  },
  methods: {
    selectedCurrency(payload) {
      console.log('child -> parent', payload)
      if(payload.origin === 'from') {
        this.rateFrom = payload.value
      } else if(payload.origin === 'to') {
        this.rateTo = payload.value
      }
    },
    getRates() {
      let currency = localStorage.getItem('currency')
      if (currency === null) {
        fetch('https://open.er-api.com/v6/latest/USD')
          .then(currency => {
            return currency.json()
          })
          .then((currency) => {
            localStorage.setItem('currency', JSON.stringify(currency))
            this.conversion(currency.rates)
          })
      } else {
        currency = JSON.parse(localStorage.getItem('currency'))
        this.conversion(currency.rates)
      }
    },
    conversion(rates) {
      console.log('refs result', this.$refs.result)
      if(this.rateFrom && this.rateTo) {
        let fromRate = rates[this.rateFrom]
        let toRate = rates[this.rateTo]
        this.$refs.result.final = ((toRate / fromRate) * this.$refs.inputAmount.amount).toFixed(2)
        this.isShowResult = true
      }
    },
    clearValues() {
      this.$refs.inputAmount.amount = 0
      this.$refs.result.final = 0
      this.$refs.result.init = 0
      this.isShowResult = false
    }
  }
}
</script>