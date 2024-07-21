<script setup>
    import { computed } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import { useComidasStore } from '../stores/comidas'
    // import { useNotificacionStore } from '../stores/notificaciones'

    const route = useRoute()
    const store = useComidasStore() // No aplicar destructuring porque rompe la reactividad
    // const notificaciones  = useNotificacionStore()
    const paginaInicio = computed(() => route.name === 'inicio') // Oculta el formulario cuando la ruta es 'inicio'

    const handleSubmit = () => {
        // if(Object.values(store.busqueda).includes('')) {
        //     notificaciones.$patch({
        //         texto : 'Todos los campos son obligatorios',
        //         mostrar: true,
        //         error : true
        //     })
        //     return
        // }
        store.obtenerRecetas()
    }
</script>

<template>
    <!-- Añade la clase de forma estática y dinámica -->
    <header
        :class="['bg-gray-900', { header: paginaInicio }]"
    >
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink 
                        :to="{name: 'inicio'}"
                    >
                        <img class="w-32" src="/img/Upside_Foods.png" alt="Logotipo" />
                    </RouterLink>
                </div>
                <nav class="flex gap-4 text-customInput">
                    <RouterLink
                        :to="{name:'inicio'}"
                        class="uppercase font-bold"
                        active-class="text-red-500"
                    >
                        Inicio
                    </RouterLink>

                    <RouterLink
                        :to="{name:'favoritos'}"
                        class="uppercase font-bold"
                        active-class="text-red-500"
                    >
                        Favoritos
                    </RouterLink>
                </nav>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center">
                <form 
                    v-if="paginaInicio"
                    class="md:w-1/3 2xl:w-1/3 bg-customRed my-32 p-10 rounded-lg shadow space-y-6"
                    @submit.prevent="handleSubmit"
                >
                <div class="space-y-4">
                    <label 
                        for="ingrediente"
                        class="block uppercase font-extrabold text-lg text-customInput"
                    >
                        Nombre o Ingredientes
                    </label>
                    <input
                        id="ingredientes"
                        type="text"
                        class="p-3 w-full rounded-lg focus:outline-none bg-customInput"
                        placeholder="Ej. Pollo, Ensalada, Pasta, etc..."
                        v-model="store.busqueda.nombre"
                    >
                </div>

                <div class="space-y-4">
                    <label 
                        for="categoria"
                        class="block uppercase font-extrabold text-lg text-customInput"
                    >
                        Categoría
                    </label>
                    <select
                        id="categoria"
                        class="p-3 w-full rounded-lg focus:outline-none bg-customInput"
                        v-model="store.busqueda.categoria"
                    >
                        <option value="">Seleccione</option>
                        <option
                            v-for="categoria in store.categorias"
                            :key="categoria.strCategory"
                            :value="categoria.strCategory"
                        >
                            {{ categoria.strCategory }}
                        </option>
                    </select>
                </div>

                <input 
                    type="submit"
                    class="bg-gray-800 hover:bg-red-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
                    value="Buscar Recetas"
                >
            </form>

            <div class="w-[50%]">
                <img v-if="paginaInicio" src="/img/slider-image.png" alt="">
            </div>

            </div>
            
        </div>
    </header>
</template>

<style>
    .header {
        background-image: url('/img/home-bg-2.jpg');
        background-size: cover;
        background-position: center;
    }
</style>
