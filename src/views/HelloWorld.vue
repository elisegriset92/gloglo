<template>
  <div>
    <div class="content" >
      <h2 class="content__title">
        <span class="content__title-line content__title-line--1" data-splitting
          >Glossaire/</span
        >
        <span class="content__title-line content__title-line--2" data-splitting
          >Déconstruction</span
        >
      </h2>
      <div v-if="!loader && datas.length">
        
      <!-- <div class="grid" v-for="(oneData, index) in datas" :key="index" > -->
        <!-- <CardPreview :item="oneData" :index="index" /> -->
        <div class="grid">
         <a :href="'#preview-'+datas[0].uid" :class="'grid__item pos-'+datas[0].uid" :data-title="datas[0].data.name" :id="datas[0].uid"  >
          <div
            class="grid__item-img"
           :style="'background-image:url('+datas[0].data.image.url+')' "
          ></div >
          </a>
         <a :href="'#preview-'+datas[1].uid" :class="'grid__item pos-'+datas[1].uid" :data-title="datas[1].data.name" :id="datas[1].uid"  >
          <div
            class="grid__item-img"
           :style="'background-image:url('+datas[1].data.image.url+')' "
          ></div >
          </a>
         <a :href="'#preview-'+datas[2].uid" :class="'grid__item pos-'+datas[2].uid" :data-title="datas[2].data.name" :id="datas[2].uid"  >
          <div
            class="grid__item-img"
           :style="'background-image:url('+datas[2].data.image.url+')' "
          ></div >
          </a>
         <a :href="'#preview-'+datas[3].uid" :class="'grid__item pos-'+datas[3].uid" :data-title="datas[3].data.name" :id="datas[3].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[3].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[4].uid" :class="'grid__item pos-'+datas[4].uid" :data-title="datas[4].data.name" :id="datas[4].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[4].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[5].uid" :class="'grid__item pos-'+datas[5].uid" :data-title="datas[5].data.name" :id="datas[5].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[5].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[6].uid" :class="'grid__item pos-'+datas[6].uid" :data-title="datas[6].data.name" :id="datas[6].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[6].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[7].uid" :class="'grid__item pos-'+datas[7].uid" :data-title="datas[7].data.name" :id="datas[7].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[7].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[8].uid" :class="'grid__item pos-'+datas[8].uid" :data-title="datas[8].data.name" :id="datas[8].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[8].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[9].uid" :class="'grid__item pos-'+datas[9].uid" :data-title="datas[9].data.name" :id="datas[9].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[9].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[10].uid" :class="'grid__item pos-'+datas[10].uid" :data-title="datas[10].data.name" :id="datas[10].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[10].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[11].uid" :class="'grid__item pos-'+datas[11].uid" :data-title="datas[11].data.name" :id="datas[11].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[11].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[12].uid" :class="'grid__item pos-'+datas[12].uid" :data-title="datas[12].data.name" :id="datas[12].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[12].data.image.url+')' "
          ></div >
          </a>
          <a :href="'#preview-'+datas[13].uid" :class="'grid__item pos-'+datas[13].uid" :data-title="datas[13].data.name" :id="datas[13].uid"  >
          <div
            class="grid__item-img"
            
           :style="'background-image:url('+datas[13].data.image.url+')' "
          ></div >
          </a>
          </div>
      <!-- </div>  -->
      <div class="preview" v-for="(oneData, index) in datas" :key="index">
        <ItemPreview :item="oneData" :index="index" />
      </div>
      </div>
    <Loader v-else/>
    </div>
    <div class="cursor">
      <svg class="cursor__svg" width="80" height="80" viewBox="0 0 80 80">
        <circle
          vector-effect="non-scaling-stroke"
          class="cursor__svg-circle"
          cx="40"
          cy="40"
          r="20"
        />
      </svg>
      <span class="cursor__text"></span>
    </div>
  </div>
</template>

<script>
import myLib from '../../codrops/js/index'
import ItemPreview from '../components/ItemPreview.vue'
import CardPreview from '../components/CardPreview.vue'
import Loader from '../components/Loader.vue'
import { vocabulary } from "../composable/vocabulary";
export default {
  components: {
    ItemPreview,
    CardPreview,
    Loader
  },
  data () {
    return {
    }
  },
   setup () {
       const { datas, loader, deleteFromList, addToList } = vocabulary();

    return {
      datas,
      loader,
      deleteFromList,
      addToList,
     
    };
  },


  mounted () {
    myLib.call();
  },
 
}
</script>

<style scoped></style>
