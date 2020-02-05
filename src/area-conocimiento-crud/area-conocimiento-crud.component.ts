import { areaConocimientoHierarchy } from "@/area-conocimiento/area-conocimiento.component";
import { campoHierarchy } from "@/campo/campo.component";
import { disciplinaHierachy } from "@/disciplina/disciplina.component";
import i18nEn from "@/i18n/en/areaConocimientoCrud.json";
import i18nEs from "@/i18n/es/areaConocimientoCrud.json";
import {AreaDeConocimiento,  IAreaDeConocimiento } from "@/model/area-conocimiento.model";
import { defaultConfig, Options } from "@/model/options.model";
import { subdisciplinaHierachy } from "@/subdisciplina/subdisciplina.component";
import { NestedSelectComponent } from "@conacyt/nested-select";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import bButton from "bootstrap-vue/es/components/button/button";
import bModal from "bootstrap-vue/es/components/modal/modal";
import bModalDirective from "bootstrap-vue/es/directives/modal/modal";
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";
import { IVueI18n } from "vue-i18n/types/index";
import { required, requiredIf } from "vuelidate/lib/validators";
import { Level } from "./level.model";
import Vuelidate from "vuelidate";

library.add(faTimes);

export const areaConocimientoCrudValidations = {
  model: {
    required
  },
  especialidad: {
    required: requiredIf(model => {
      return model.options.requiredLevel === Level.ESPECIALIDAD;
    })
  }
};

@Component({
  components: {
    "b-modal": bModal,
    "nested-select": NestedSelectComponent,
    "font-awesome-icon": FontAwesomeIcon,
    "b-button": bButton
  },
  directives: {
    "b-modal": bModalDirective
  },
  validations: areaConocimientoCrudValidations
})
export default class AreaConocimientoCrudComponent extends Vue {
  public readonly Level = Level;

  @Prop({ required: true, type: Array })
  readonly value!: Array<IAreaDeConocimiento>;

  public hierarchyModel!: Array<any>;

  public model: any = {};

  public fullModel: Array<any> = new Array(); //Updated when 'complete' event

  public removeInstance: any;

  public especialidad: string = "";

  created() {
    this.initHierarchyModel();
    this.initI18n();
  }

  public get options(): Options {
    return (<any>this).$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
  }

  public add() {
    this.$emit("add", this.toAreaConocimento());
    this.closeDialog();
  }

  public toAreaConocimento() {
    let value = new AreaDeConocimiento();
    const maybeSubdisciplina = this.fullModel[3];
    if (maybeSubdisciplina) {
      value.idSubdisciplina = maybeSubdisciplina.id;
      value.subdisciplina = maybeSubdisciplina.descripcionEsp;
    }
    const maybeDisciplina = this.fullModel[2];
    if (maybeDisciplina) {
      value.idDisciplina = maybeDisciplina.id;
      value.disciplina = maybeDisciplina.descripcionEsp;
    }
    const maybeCampo = this.fullModel[1];
    if (maybeCampo) {
      value.idCampo = maybeCampo.id;
      value.campo = maybeCampo.descripcionEsp;
    }
    const maybeArea = this.fullModel[0];
    if (maybeArea) {
      value.idArea = maybeArea.id;
      value.area = maybeArea.descripcionEsp;
    }
    if (this.especialidad) {
      value.especialidad = this.especialidad;
    }
    return value;
  }

  public closeDialog() {
    (<any>this.$refs).areaConocimientoCrud.hide();
  }

  public prepareRemove(areaConocimiento: IAreaDeConocimiento) {
    this.removeInstance = areaConocimiento;
    (<any>this.$refs).removeAreaConocimiento.show();
  }

  public removeAreaConocimiento() {
    this.$emit("remove", this.removeInstance);
    this.closeConfirmationDialog();
  }

  public closeConfirmationDialog() {
    (<any>this.$refs).removeAreaConocimiento.hide();
  }

  private initHierarchyModel(): void {
    switch (this.options.requiredLevel) {
      case Level.AREA:
        this.hierarchyModel = areaConocimientoHierarchy;
        break;

      case Level.CAMPO:
        this.hierarchyModel = campoHierarchy;
        break;

      case Level.DISCIPLINA:
        this.hierarchyModel = disciplinaHierachy;
        break;

      case Level.SUBDISCIPLINA:
      case Level.ESPECIALIDAD:
        this.hierarchyModel = subdisciplinaHierachy;
        break;
      default:
        break;
    }
  }

  private initI18n(): void {
    if (this.$i18n) {
      this.$i18n.mergeLocaleMessage("es", i18nEs);
      this.$i18n.mergeLocaleMessage("en", i18nEn);
    }
  }
}
