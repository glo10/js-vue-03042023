<template>
  <div>
    <header>
      <h1 class="heading text-center display-2">Currency</h1>
      <hr>
    </header>
    <main class="container">

      <div class="main">

        <div class="form-group">
          <label for="oamount">
            Amount to Convert :
          </label>
          <input type="number" class="form-control searchBox" id="oamount" v-model="amount">
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">From</span>
              </div>
              <select class="form-control from" v-model="from">
                <option value="">Select One …</option>
                <option v-for="currency in currencies" :key="currency" :value="currency">
                  {{ currency }}
                </option>
              </select>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">To</span>
              </div>
              <select class="form-control to" v-model="to">
                <option value="">Select One …</option>
                <option v-for="currency in currencies" :key="currency" :value="currency">
                  {{ currency }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button :disabled="isDisabled" class="btn btn-primary convert m-2" @click="convertion()">
            Convert
          </button>
          <button class="btn btn-primary m-2" @click="clearValues()">
            Reset
          </button>
        </div>

      </div>

      <footer>

        <div v-show="convert != 0" id="finalAmount" class="text-center">
          <h2>Converted Amount :
            <span class="finalValue"> {{ convert }}</span>
          </h2>
        </div>
        <div>
          <p>
            Credit <a href="https://www.geeksforgeeks.org/currency-converter-in-javascript/">geeksforgeeks</a>
          </p>
        </div>
      </footer>
    </main>
  </div>
</template>
<script>
import { currencies } from '@/assets/currencies.json'
export default {
  created() {
    this.data = this.getRates()
  },
  unmounted() {
    localStorage.clear()
  },
  computed: {
    isDisabled() {
      return !(this.from && this.to)
    }
  },
  data() {
    return {
      from: 0,
      to: 0,
      convert: 0,
      amount: 0,
      currencies,
      data: []
    }
  },
  methods: {
    getRates() {
      let data = localStorage.getItem('currency')
      if (data === null) {
        fetch('https://open.er-api.com/v6/latest/USD')
          .then(res => {
            return res.json()
          })
          .then((res) => {
            localStorage.setItem('currency', JSON.stringify(res))
            return res.rates
          }).catch(error => console.log('error', error))
      } else {
        data = JSON.parse(localStorage.getItem('currency'))
        return data.rates
      }
    },
    convertion() {
      let fromRate = this.data[this.from]
      let toRate = this.data[this.to]
      this.convert = ((toRate / fromRate) * this.amount).toFixed(2)
    },
    clearValues() {
      this.amount = 0
      this.convert = 0
    }
  }
}
</script>
<style scoped>
body {
  background-color: aliceblue;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.heading {
  font-family: 'Pacifico', cursive;
  margin: 35px auto 20px;
}

hr {
  border-top: 2px solid black;
  width: 40%;
  margin-bottom: 55px;
}

.main {
  width: 50vw;
  margin: auto;
  padding: 30px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

label {
  font-size: 20px;
}

.btn {
  width: 200px;
}

#finalAmount {
  font-family: 'Lobster', cursive;
  margin: 50px auto;
}

#finalAmount h2 {
  font-size: 50px;
}

.finalValue {
  font-family: 'Amiri', serif;
  color: green;
}

footer p {
  text-align: center;
}

@media (max-width: 768px) {
  hr {
    width: 60%;
  }

  .main {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .heading {
    font-size: 60px;
  }

  hr {
    width: 75%;
  }

  #finalAmount h2,
  .finalValue {
    font-size: 40px;
  }
}
</style>