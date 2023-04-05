<template>
  <div>
    <h3>FAQ</h3>
    <p>{{ label }}</p>
    <ul>
      <li v-for="question in questions" :key="question">{{question}}</li>
    </ul>
  </div>
</template>
<script>
import {questions, label} from '@/assets/data/faq.json'
export default {
  data() {
    return {
      questions,
      label
    }
  }
}
</script>