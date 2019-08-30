import CatalogoComponent from "./CatalogoComponent.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component("catalogo", CatalogoComponent);
  }
};

export { CatalogoComponent };
