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
        />
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CatalogoComponent from "../src/index";
import { Level } from "../src/area-conocimiento-crud/level.model";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

Vue.use(CatalogoComponent, {
  host:
    "https://my-json-server.typicode.com/robertovillarejo/catalogos-conacyt-vuejs",
  context: "",
  requiredLevel: Level.ESPECIALIDAD
});

const i18n = new VueI18n({
  locale: "en"
});

export default Vue.extend({
  i18n,
  data: function() {
    return {
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
          subdisciplina: "Subdisciplina 1",
          especialidad: "Especialidad 1"
        }
      ]
    };
  },
  methods: {
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
