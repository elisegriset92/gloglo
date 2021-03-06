import {ref, watchEffect,  reactive, toRefs } from 'vue';
import Prismic from 'prismic-javascript';
import router from '../router/index'






export function mediatheque() {
  let datas = ref([]);
  let currentRoute = ref(router.currentRoute.value.params);
  let loader = ref(true);
  watchEffect(() => {
    if (loader.value) {
      const api = Prismic.client('https://glossaire.prismic.io/api/v2');
      getWord(api);
    }
  });

  async function getWord(api) {
    // datas = ref([]);
    const final = await api.query(
      Prismic.Predicates.at('document.type', 'mediatheque')
    );
    if (currentRoute.value.id !== undefined){
     
    final.results.forEach((result)=> {
      if (result.data.voc_id.uid == currentRoute.value.id){
        datas.value.push(result)
      }
     })} else {
      datas.value = final.results;
    }
    loader.value = false;
  }

  function changeLoader() {
    loader.value =true;
  }
  

  return {
    datas,
    loader,
    currentRoute,
    changeLoader,

  };
}
