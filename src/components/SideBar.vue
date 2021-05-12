<template>
  <div class="flex">
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed z-20 inset-0 opacity-50 transition-opacity lg:hidden"
    ></div>

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed z-30 sideBar inset-y-0 left-0 w-64 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span   class="text-gray-600 text-2xl mx-2 font-semibold"
            > Le Glossaire <br>de la Déconstruction</span
          >
        </div>
      </div>

      <nav class="mt-10">
        <router-link
          class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
          :class="[$route.name === '' ? activeClass : inactiveClass]"
          to="/"
        >
         

          <span class="mx-4">Accueil</span>
        </router-link>

       

        <router-link
        @click="changeLoader()"
          class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
          :class="[$route.name === 'Mediatheque' ? activeClass : inactiveClass]"
          to="/mediatheque"
        >
         
          <span class="mx-4">Médiathèque</span>
        </router-link>


      </nav>
    </div>
  </div>
</template>

<script >
import { defineComponent, ref } from "vue";
import { mediatheque } from "../composable/mediatheque";
import { useSidebar } from "../composable/useSidebar";

export default defineComponent({
  setup() {
    const { isOpen } = useSidebar();
    const {changeLoader} = mediatheque();
    const activeClass = ref(
      "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
    );
    const inactiveClass = ref(
      "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
    );
    return {
      isOpen,
      activeClass,
      inactiveClass,
      changeLoader
    };
  },
});

</script>


<style scoped>
.sideBar {
  background-color: var(--color-green);
  height: 100%;
}
</style>