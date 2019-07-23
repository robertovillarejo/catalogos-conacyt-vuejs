<template>
  <div id="app">
    <h2>Example</h2>
    <form action @submit="processRequest">
      <catalogo
        :host="
          'https://my-json-server.typicode.com/robertovillarejo/catalogos-conacyt-vuejs/'
        "
        :context="''"
        :name="'tipoInstitucion'"
        :lang="lang"
        :required="true"
        v-model="myModel"
      ></catalogo>
      <p></p>
      <button type="submit">Send</button>
    </form>
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
  },
  methods: {
    processRequest: function() {
      alert(JSON.stringify(this.myModel));
    }
  }
});
</script>
