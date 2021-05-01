<template>
  <div class="container ">
        
      <h2 class="content__title">
        
        <span class="content__title-line content__title-line--2" 
          >{{$route.params.name}}</span
        >
      </h2>
      <div>
      <Card/>
      </div>
  </div>
</template>

<script>

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Card from '../components/Card.vue'
export default {

	components:{
    Card
  },
  setup () {
    const route = useRoute()
    const data = []
    onMounted(() => {
      console.log('cuocou',route.params)
    })
  }
}
</script>

<style>

</style>