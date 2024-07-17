<script setup>
    import { useBebidasStore } from '../stores/bebidas';

    const comidas = useBebidasStore()

    defineProps({
        receta: {
            type: Object
        }
    })
</script>

<template>
  <div class="border shadow-lg">

    <div class="overflow-hidden">
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
            class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
            @click="comidas.seleccionarComida(receta.idMeal)"
        >
            Ver Receta
        </button>
    </div>
  </div>

</template>

