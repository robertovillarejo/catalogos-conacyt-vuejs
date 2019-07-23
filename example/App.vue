<template>
  <div id="app">
    <catalogo
      :host="
        'https://my-json-server.typicode.com/robertovillarejo/catalogos-conacyt-vuejs/'
      "
      :context="''"
      :label="'Estados'"
      :name="'tipoInstitucion'"
      :lang="lang"
      :required="true"
      v-model="myModel"
    ></catalogo>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import CatalogoComponent from "../src/CatalogoComponent.vue";

export default Vue.extend({
  components: { catalogo: CatalogoComponent },
  data: function() {
    return {
      lang: "es",
      myModel: null
    };
  }
});
</script>
