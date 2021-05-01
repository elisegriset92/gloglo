import {ref, watchEffect} from 'vue';
import Prismic from 'prismic-javascript';
export function vocabulary() {
  let datas = ref([]);

  let loader = ref(true);

  watchEffect(() => {
    if (loader.value) {
      const api = Prismic.client('https://glossaire.prismic.io/api/v2');
      getVocabulary(api);
    }
  });

  async function getVocabulary(api) {
    const final = await api.query(
      Prismic.Predicates.at('document.type', 'vocabulaire')
    );
    datas.value = final.results;
    loader.value = false;
  }

  function deleteFromList(id) {
    todos.value = todos.value.filter(todo => {
      return todo.id !== id;
    });
  }

  function addToList() {
    console.log('hello', this.$refs)
    // todos.value.push({
    //   id: todos.value.length,
    //   title: `New item! ${todos.value.length}`,
    // });
  }

  return {
    datas,
    loader,
    deleteFromList,
    addToList,
  };
}
