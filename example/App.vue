<template>
  <div id="app">
    <h2>Example</h2>
    <form action @submit="processRequest">
      <catalogo
        :host="
          'https://my-json-server.typicode.com/robertovillarejo/catalogos-conacyt-vuejs'
        "
        :context="''"
        :name="'campo'"
        :pathVariable="pathVariable"
        :required="true"
        v-model="myModel"
      ></catalogo>
      <p></p>
      <button type="submit">Send</button>
    </form>
    <button type="button" @click="changePathVariable">
      Change pathVariable
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import CatalogoComponent from "../src/CatalogoComponent.vue";

export default Vue.extend({
  components: { catalogo: CatalogoComponent },
  data: function() {
    return {
      myModel: {
        id: 2
      },
      pathVariable: "1"
    };
  },
  methods: {
    processRequest: function() {
      alert(JSON.stringify(this.myModel));
    },
    changePathVariable: function() {
      this.pathVariable = this.pathVariable + "0";
      console.log("PathVariable:", this.pathVariable);
    }
  }
});
</script>
