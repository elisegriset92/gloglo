<template>
   <a  :href="'#preview-'+item.uid" :class="'grid__item pos-'+item.uid" :data-title="item.data.name" :id="item.uid"  >
          <div
            class="grid__item-img"
           :style="'background-image:url('+item.data.image.url+')' "
          ></div >
          </a>
</template>

<script>
import myLib from '../../codrops/js/index'

export default {
    props: {
    item: Object,
    index: Number
  },



  mounted () {
    myLib.call()
  },

}
</script>

<style>

</style>