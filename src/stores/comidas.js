import { ref, reactive, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import APIServices from '../services/APIServices'
import { useModalStore } from './modal'

export const useComidasStore = defineStore('comidas', () => {
  const modal = useModalStore()
  const categorias = ref([])
  const busqueda = reactive({
    nombre: '',
    categoria: ''
  })
  const recetas = ref([])
  const receta = ref({})

  onMounted(async function name() {
    const {data: {meals}} = await APIServices.obtenerCategorias() // Omitimos get porque es por defecto
    categorias.value = meals
    
  })

  async function obtenerRecetas() {
    const {data: {meals}} = await APIServices.buscarRecetas(busqueda)
    recetas.value = meals
  }

  async function seleccionarComida(id) {
    const { data: {meals} } = await APIServices.buscarReceta(id)
    receta.value = meals[0]

    modal.handleClickModal()
  }

  const noRecetas = computed(() => recetas.value.length === 0)

  return{
    categorias,
    busqueda,
    recetas,
    receta,
    obtenerRecetas,
    seleccionarComida,
    noRecetas
  }
})