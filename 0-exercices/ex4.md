# Exercice 4

---

## Modalités

- Créez l'application Vue avec `vue create`

---

## Enoncé

1. Récupérez les fichiers sources du template [convertisseur de devises](./ressources/convertor.zip)
2. Créez un nouveau projet Vue à partir de Vue-cli
3. Refactorisez le template en application vue en utilisant le Single File Components ainsi que les différentes propriétés, directives et événements Vue.

---

## Aide

1. Créez un nouveau composant au niveau du dossier */src/components*
2. Importez ce fichier dans */src/App.vue*.
3. Supprimez tout ce qui se réfère à *HelloWorld.vue* dans */src/App.vue*.
4. Dans */public/index.html*, ajoutez tous les liens externes aux fonts, librairies, etc dans la balise `<head></head>`.
5. Ajoutez le contenu du body HTML et le CSS aux endroits dédiés dans votre composant.
6. Dans le CSS, supprimez toutes les propriétés `display:none`.
7. Intégrez et refactorisez progressivemment le JavaScript d'origine dans la partie dédiée au JS de votre composant.
- Remplacez l'appel des méthodes du DOM (querySelector, getElementById, etc) par les propriétés Vue
- Ajoutez les fonctions dans la partie methods
- Modifiez les fonctions si nécessaires par rapport à la logique du framework Vue
- Ajoutez, associez les événements et les méthodes

---

## Illustration

![convertor](./img/converter.png)

---

## Bonus : optimisation appel API

Pour éviter de faire des appels à l'API à chaque requête, stockez les taux en local à l'aide de localStorage.
N'oubliez pas d'utiliser les fonctions `JSON.parse() et JSON.stringify` pour sérialiser et désérialiser les données.

