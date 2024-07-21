<script setup>  
  import Receta from '../components/Receta.vue'
  import { useComidasStore } from '../stores/comidas';

  const comidas = useComidasStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>

  <p v-if="comidas.noRecetas" class="my-10 text-center text-2xl">No hay Resultado, escoge una receta </p>

  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 my-10 gap-10 max-h-696">
    <Receta 
      v-for="receta in comidas.recetas"
      :receta="receta"
      :key="receta.idMeal"
    />
  </div>

</template>

