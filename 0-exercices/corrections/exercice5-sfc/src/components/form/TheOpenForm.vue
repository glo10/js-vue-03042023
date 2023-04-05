<template>
  <form>
    <input type="text" name="lastName" class="form-control" placeholder="Nom">
    <input type="text" name="firstName" class="form-control" placeholder="Prénom">
    <input type="email" name="email" class="form-control" placeholder="Adresse email">
    <span>Autoriser le découvert</span>
    <label for="yes">Oui</label>
    <input type="radio" name="overdraft" id="yes" value="Oui">
    <label for="no">Non</label>
    <input type="radio" name="overdraft" id="no" value="Non">
    <input type="number" name="overdraftAmount" class="form-control" placeholder="Montant du découvert" min="200"
      max="2000">
    <input type="number" name="deposit" class="form-control" placeholder="Montant premier versement">
    <select class="form-control">
      <option selected value="">Choisir la carte</option>
      <option v-for="card in cards" :value="card" :key="card">{{ card }}</option>
    </select>
    <input type="submit" value="Valider">
  </form>
</template>
<script>
export default {
  data() {
    return {
      cards: ['silver', 'black', 'gold']
    }
  }
}
</script>