<template>
  <div id="app">
    <h2>Example</h2>
    <form action @submit="processRequest">
      <h3>AreaConocimiento Component</h3>
      <area-conocimiento
        v-model="areaConocimiento"
        :required="true"
      ></area-conocimiento>
      <h3>Campo Component</h3>
      <campo v-model="campo" :required="true"></campo>
      <h3>Disciplina Component</h3>
      <disciplina v-model="disciplina" :required="true"></disciplina>
      <h3>Subdisciplina Component</h3>
      <subdisciplina v-model="subdisciplina" :required="true"></subdisciplina>
      <h3>Catalogo Component</h3>
      <catalogo
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
import CatalogoComponent from "../src/index";

Vue.use(CatalogoComponent, {
  host:
    "https://my-json-server.typicode.com/robertovillarejo/catalogos-conacyt-vuejs",
  context: ""
});

export default Vue.extend({
  data: function() {
    return {
      areaConocimiento: {
        id: 1,
        descripcion: "AreaConocimiento 1",
        descripcionEsp: "AreaConocimiento 1"
      },
      campo: {},
      disciplina: {},
      subdisciplina: {},
      myModel: {
        id: null
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
