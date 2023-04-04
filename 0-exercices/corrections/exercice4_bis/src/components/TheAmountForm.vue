<template>
  <div>
    <div class="form-group">
        <label for="oamount">
          Amount to Convert :
        </label>
        <input type="number" class="form-control searchBox" id="oamount" v-model="amount">
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      amount: 0
    }
  }
}
</script>