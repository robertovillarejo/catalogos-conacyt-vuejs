<template>
  <div id="app">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 text-center">
        <h1 v-text="$t('title')">Catalogos Library</h1>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <form name="preferences" role="form" @submit.prevent>
          <div class="form-group">
            <label for="localeSelect">
              <span v-text="$t('language')">Idioma</span>
            </label>
            <select
              name="localeSelect"
              id="localeSelect"
              v-model="$i18n.locale"
            >
              <option
                v-bind:value="locale"
                v-for="locale in availableLocales"
                :key="locale"
                >{{ locale }}</option
              >
            </select>
          </div>
        </form>
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
import Vuelidate from "vuelidate";
import i18nEn from "../src/i18n/en/areaConocimientoCrud.json";
import i18nEs from "../src/i18n/es/areaConocimientoCrud.json";

Vue.use(VueI18n);
Vue.use(Vuelidate);

Vue.use(CatalogoComponent, {
  host: "https://my-json-server.typicode.com",
  context: "/robertovillarejo/catalogos-conacyt-vuejs",
  requiredLevel: Level.ESPECIALIDAD
});

const i18n = new VueI18n({
  locale: "en",
  messages: {
    en: {
      title: "Catalogos Library",
      language: "Language"
    },
    es: {
      title: "Librería de Catálogos",
      language: "Idioma"
    }
  }
});

i18n.mergeLocaleMessage("es", i18nEs);
i18n.mergeLocaleMessage("en", i18nEn);

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
  },
  computed: {
    availableLocales: function() {
      return Object.keys(this.$i18n.messages);
    }
  }
});
</script>
