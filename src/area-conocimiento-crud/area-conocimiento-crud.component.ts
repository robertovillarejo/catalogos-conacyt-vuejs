import AreaConocimientoComponent from "@/area-conocimiento/area-conocimiento.vue";
import CampoComponent from "@/campo/campo.vue";
import { defaultConfig, Options } from '@/catalogo.component';
import DisciplinaComponent from "@/disciplina/disciplina.vue";
import { AreaDeConocimiento, IAreaDeConocimiento } from '@/model/area-conocimiento.model';
import SubdisciplinaComponent from "@/subdisciplina/subdisciplina.vue";
import bModal from 'bootstrap-vue/es/components/modal/modal';
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

@Component({
    components: {
        'b-modal': bModal,
        'area-conocimiento': AreaConocimientoComponent,
        'campo': CampoComponent,
        'disciplina': DisciplinaComponent,
        'subdisciplina': SubdisciplinaComponent
    },
    directives: {
        'b-modal': bModalDirective
    }
})
export default class AreaConocimientoCrudComponent extends Vue {

    @Prop({ required: true, type: Array })
    readonly value!: Array<IAreaDeConocimiento>;

    @Prop({ required: false, default: false, type: Boolean })
    readonly required!: boolean;

    public model: any = {};

    public fullModel: Array<any> = new Array(); //Updated when 'complete' event

    public get options(): Options {
        return (<any>this).$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    }

    public complete(fullPath: any) {
        this.fullModel = fullPath;
    }

    public add() {
        if (this.fullModel.length) {
            this.value.push(this.toAreaConocimento());
            this.closeDialog();
        }
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
        return value;
    }

    public closeDialog() {
        (<any>this.$refs).areaConocimientoCrud.hide();
    }
}