<template>
  <div>
    <main>

      <section>
        <h2>Saisie</h2>
        <div>
          <input type="text" placeholder="Nom" v-model="lastName">
        </div>
        <div>
          <input type="text" placeholder="Prénom" v-model="firstName">
        </div>
        <div>
          <input type="number" placeholder="Age" v-model="age">
        </div>
        <div>
          <input v-model="techno" @keyup.enter="addTechno($event)" type="text" placeholder="Langage ou techno préférée" name="techno">
        </div>
        <div>
          <button @click="addTechno" :disabled="techno.length === 0">Ajouter une technologie</button>
        </div>
      </section>

      <section v-show="dataExist">
        <h2>Affichage</h2>
        <h3>Identité</h3>
        <p>Nom : {{ lastName }}</p>
        <p>Prénom : {{ firstName }}</p>
        <p v-show="age != 0">{{ over18 }}</p>
        <div v-show="technos.length">
          <h4>Technos préférées</h4>
          <ul>
            <li v-for="tech in technos" :key="tech.id">
              {{ tech.label }}
              <button @click="remove(tech.id)">x</button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name : 'MyPresentation',
  data() {
    return {
      firstName : '',
      lastName: '',
      age: 0,
      techno: '',
      technos : []
    }
  },
  computed: {
    over18(){
      if(this.age === 0) return ''
      return this.age >= 18 ? 'Vous êtes majeur(e)': 'Vous êtes mineur(e)'
    },
    dataExist () {
      return this.firstName.length > 0 || this.lastName.length > 0 || this.age != 0 || this.technos.length > 0
    }
  },
  methods: {
    addTechno() {
      this.technos.push({id: this.technos.length, label: this.techno})
      this.techno = ''
    },
    remove(id) {
      this.technos = this.technos.filter(tech => tech.id !== id)
    }
  }
}
</script>
<style scoped>
main {
  display: flex;
  justify-content: space-around;
}
</style>