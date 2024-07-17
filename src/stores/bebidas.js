import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIServices from '../services/APIServices'

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([])
  const busqueda = reactive({
    nombre: '',
    categoria: ''
  })
  const recetas = ref([])

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
    console.log(meals[0]);
    
  }

  return{
    categorias,
    busqueda,
    obtenerRecetas,
    recetas,
    seleccionarComida
  }
})