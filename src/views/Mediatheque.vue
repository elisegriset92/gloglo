<template>
<div>
  <div class="container " v-if="!loader">
    <h2 class="content__title">
      <span class="content__title-line" v-if="currentRoute.name">{{currentRoute.name }}</span>
    </h2>
    <div class="inline-flex" v-for="(oneData, index) in datas" :key="index">
      <Card  :item="oneData" :index="index" />
    </div>
    <div v-if="!datas.length"> il n'y a pas de recommendations pour ce sujet </div>
  </div>
    <Loader v-else />
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Loader from '../components/Loader.vue'
import { mediatheque } from '../composable/mediatheque'
export default {
  components: {
    Card,
    Loader
  },

  setup () {
    const { datas, loader, currentRoute } = mediatheque()

    return {
      datas,
      loader,
      currentRoute
    }
  }
}
</script>

<style></style>
