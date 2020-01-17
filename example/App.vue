<template>
  <div id="app">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h2 class="text-center">AreaConocimientoCrud Component</h2>
        <area-conocimiento-crud
          v-model="areas"
          @add="addArea($event)"
          @remove="deleteArea($event)"
        ></area-conocimiento-crud>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
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
          <subdisciplina
            v-model="subdisciplina"
            :required="true"
          ></subdisciplina>
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
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CatalogoComponent from "../src/index";

Vue.use(CatalogoComponent, {
  host:
    "https://my-json-server.typicode.com/robertovillarejo/catalogos-conacyt-vuejs",
  context: "",
  requiredLevel: "subdisciplina"
});

export default Vue.extend({
  data: function() {
    return {
      areaConocimiento: null,
      campo: null,
      disciplina: null,
      subdisciplina: null,
      myModel: {
        id: null
      },
      pathVariable: "1",
      areas: [
        {
          id: 1,
          idArea: 1,
          area: "Área 1",
          idCampo: 1,
          campo: "Campo 1",
          idDisciplina: 1,
          disciplina: "Disciplina 1",
          idSubdisciplina: 1,
          subdisciplina: "Subdisciplina 1"
        }
      ]
    };
  },
  methods: {
    processRequest: function() {
      alert(JSON.stringify(this.myModel));
    },
    changePathVariable: function() {
      this.pathVariable = this.pathVariable + "0";
      console.log("PathVariable:", this.pathVariable);
    },
    deleteArea(area) {
      const i = this.areas.findIndex(a => {
        return a.id === a.id;
      });
      if (i >= 0) {
        this.areas.splice(i, 1);
      }
    },
    addArea(area) {
      area.id = new Date().getUTCMilliseconds();
      this.areas.push(area);
    }
  }
});
</script>
