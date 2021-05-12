<template>
  <div class="p-5">
    <div class="max-w-sm rounded bg-white overflow-hidden shadow-lg mt-6">
      <img
        width="300"
        height="300"
        :src="
          item.data.image.url
            ? item.data.image.url
            : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'
        "
        :alt="item.data.title[0].text"
      />
      <div class="px-6 py-4">
        <div class="text-gray-900 font-bold text-xl mb-2">
          {{ item.data.title[0].text }}
        </div>
        <p class="text-gray-700 text-base">
          {{
            item.data.description.length
              ? item.data.description[0].text
              : 'pas de description'
          }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2" >
       <a :href="item.data.link.url" target="_blank"><span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ item.data.link_name.length  ? item.data.link_name[0].text : 'pas de source' }}</span
        ></a>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number
  }
}
</script>
