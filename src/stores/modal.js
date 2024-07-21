import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFavoritosStore } from './favoritos'
import { useComidasStore } from './comidas'

export const useModalStore = defineStore('modal', () => {

  const favoritos = useFavoritosStore()
  const comidas = useComidasStore()
  const modal = ref(false)

  function handleClickModal() {
    modal.value = !modal.value
  }

  const textBoton = computed(() => {
    return favoritos.existeFavorito(comidas.receta.idMeal) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'
  })

  return {
    modal,
    handleClickModal,
    textBoton
  }
})