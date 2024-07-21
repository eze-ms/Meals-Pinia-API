import { ref, watch, onMounted, computed } from "vue"
import { defineStore } from "pinia"
import { useComidasStore } from "./comidas"
import { useModalStore } from "./modal"
import { useNotificacionStore } from "./notificaciones"

export const useFavoritosStore = defineStore('favoritos', () => {
  const comidas = useComidasStore()
  const modal = useModalStore()
  const notificaciones = useNotificacionStore()

  const favoritos = ref([])

  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
  })

  watch(favoritos, () => {
    sincronizarLocalStorage()
  }, { deep: true })

  function sincronizarLocalStorage() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  function existeFavorito() {
    const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
    return favoritosLocalStorage.some(favorito => favorito.idMeal === comidas.receta.idMeal)
  }

  function eliminarFavorito() {
    favoritos.value = favoritos.value.filter(favorito => favorito.idMeal !== comidas.receta.idMeal)
    notificaciones.mostrarNotificacion('Eliminado de Favoritos', true)
  }

  function agregarFavorito() {
    favoritos.value.push(comidas.receta)
    notificaciones.mostrarNotificacion('Se agregó a favoritos')
  }

  function handleClickFavorito() {
    if (existeFavorito()) {
      eliminarFavorito()
    } else {
      agregarFavorito()
    }
    modal.modal = false
  }

  const noFavoritos = computed(() => favoritos.value.length === 0)

  return {
    favoritos,
    handleClickFavorito,
    existeFavorito,
    noFavoritos
  }
})
