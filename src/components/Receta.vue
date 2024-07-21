<script setup>
    import { useComidasStore } from '../stores/comidas'

    const comidas = useComidasStore()

    defineProps({
        receta: {
            type: Object
        }
    })
</script>

<template>
  <div class="border shadow-lg bg-white rounded-lg">

    <div class="overflow-hidden rounded-t-lg">
        <img
            class="hover:scale-125 transition-transform hover:rotate-2"
            :src="receta.strMealThumb"
            :alt="'Imagen de ' + receta.strMeal"
        />
    </div>

    <div class="p-5">
        <h2 class="text-2xl truncate font-bold">~{{ receta.strMeal }}</h2>
        <button
            type="button"
            class="bg-customRed hover:bg-red-700 mt-5 w-full p-3 font-bold text-white text-lg rounded"
            @click="comidas.seleccionarComida(receta.idMeal)"
        >
            Ver Receta
        </button>
    </div>
  </div>

</template>

