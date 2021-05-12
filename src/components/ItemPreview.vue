<template>
  <div class="preview__item text-gray-600 rounded  shadow-lg mt-6"  :id="'preview-' + item.uid">
    <button class="preview__item-back unbutton"><span>Retour</span></button>
    <div class="preview__item-imgwrap">
      <div
        class="preview__item-img"
          :style="'background-image:url('+item.data.image.url+')' "
      ></div>
    </div>
    <h2 data-splitting class="preview__item-title">{{ item.data.name }}</h2>
    <div class="preview__item-content">
      <div class="preview__item-meta">
        <span>{{ item.data.type }}</span>
      </div>
      <p class="preview__item-description">{{ item.data.def.length? item.data.def[0].text : 'pas de définition' }}</p>
      <button class="preview__item-info unbutton"></button>
      <router-link  :to="{  path: '/mediatheque', name: 'mediatheque', params: {name: item.data.name, id: item.uid } }"
        ><button class="preview__item-button">
          Recommandations sur le sujet
        </button>
        </router-link>
    </div>
  </div>
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

<style></style>
