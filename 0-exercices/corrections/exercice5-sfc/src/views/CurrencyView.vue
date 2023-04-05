<template>
  <TheHeader :title="headerTitle" />
  <div class="container-convertor">
    <div class="main-convertor">
      <TheResult v-show="isSwhoResult" ref="result" />
      <TheAmountForm ref="inputAmount" />
      <SelectCurrency v-for="label in labels" :label="label" :key="label" @choice-currency="selectedCurrency($event)" />
      <ConverterBtn v-for="btn in btns" :key="btn.id" :btn="btn"
        v-on="btn.id === 1 ? { 'get-result': getRates } : { 'clear': clearValues }" />
    </div>
    <div>
      <img :src="brokeImg" alt="broke person image">
    </div>
  </div>
  <TheCredit />
</template>
<script>
import TheHeader from '@/components/currency/TheHeader.vue'
import TheAmountForm from '@/components/currency/TheAmountForm.vue'
import SelectCurrency from '@/components/currency/SelectCurrency.vue'
import TheResult from '@/components/currency/TheResult.vue'
import TheCredit from '@/components/currency/TheCredit.vue'
import ConverterBtn from '@/components/currency/BtnAction.vue'
import brokeImg from '@/assets/img/broke.jpg'

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
      brokeImg,
      btns: [
        {
          id: 1,
          customEvent: 'get-result',
          label: 'convert'
        },
        {
          id: 2,
          customEvent: 'clear',
          label: 'reset'
        },
      ],
      labels: {
        from: 'From',
        to: 'To'
      },
      headerTitle: 'Currency Converter',
      rateFrom: null,
      rateTo: null,
      isSwhoResult: false
    }
  },
  methods: {
    selectedCurrency(payload) {
      switch (payload.origin.toLowerCase()) {
        case 'from':
          this.rateFrom = payload.value
          break
        case 'to':
          this.rateTo = payload.value
          break
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
      if (this.from === null || this.to === null) {
        return
      }
      let fromRate = rates[this.rateFrom]
      let toRate = rates[this.rateTo]
      this.$refs.result.final = ((toRate / fromRate) * this.$refs.inputAmount.amount).toFixed(2)
      this.isSwhoResult = true
    },
    clearValues() {
      this.$refs.inputAmount.amount = 0
      this.$refs.result.final = 0
      this.isSwhoResult = false
    }
  }
}
</script>
<style scoped>
.heading {
  font-family: 'Pacifico', cursive;
  margin: 35px auto 20px;
}

.container-convertor {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-convertor {
  width: 50vw;
  padding: 30px;
  border-radius: 5px;
  background-color: #383840;
  color: white;
}

label {
  font-size: 20px;
}

.btn {
  background: #008c74;
  color: #fff;
}

#finalAmount {
  font-family: 'Lobster', cursive;
  margin-right: 10px;
  margin-left: 10px;
}

#finalAmount h2 {
  font-size: 2rem;
}

.finalValue {
  font-family: 'Amiri', serif;
  font-size: 2.5rem;
}

footer p {
  text-align: center;
}

@media (max-width: 768px) {
  .main-convertor {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .heading {
    font-size: 60px;
  }

  #finalAmount h2,
  .finalValue {
    font-size: 40px;
  }
}
</style>