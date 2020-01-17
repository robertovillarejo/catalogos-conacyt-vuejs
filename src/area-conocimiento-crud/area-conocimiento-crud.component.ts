import { areaConocimientoHierarchy } from "@/area-conocimiento/area-conocimiento.component";
import { campoHierarchy } from "@/campo/campo.component";
import { defaultConfig, Options } from '@/catalogo.component';
import { disciplinaHierachy } from "@/disciplina/disciplina.component";
import { AreaDeConocimiento, IAreaDeConocimiento } from '@/model/area-conocimiento.model';
import { subdisciplinaHierachy } from "@/subdisciplina/subdisciplina.component";
import { NestedSelectComponent } from "@conacyt/nested-select";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import bButton from 'bootstrap-vue/es/components/button/button';
import bModal from 'bootstrap-vue/es/components/modal/modal';
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

library.add(faTimes);

@Component({
    components: {
        'b-modal': bModal,
        'nested-select': NestedSelectComponent,
        'font-awesome-icon': FontAwesomeIcon,
        'b-button': bButton
    },
    directives: {
        'b-modal': bModalDirective
    }
})
export default class AreaConocimientoCrudComponent extends Vue {

    @Prop({ required: true, type: Array })
    readonly value!: Array<IAreaDeConocimiento>;

    public hierarchyModel!: Array<any>;

    public model: any = {};

    public fullModel: Array<any> = new Array(); //Updated when 'complete' event

    public removeInstance: any;

    created() {
        switch (this.options.requiredLevel) {
            case 'area':
                this.hierarchyModel = areaConocimientoHierarchy;
                break;

            case 'campo':
                this.hierarchyModel = campoHierarchy;
                break;

            case 'disciplina':
                this.hierarchyModel = disciplinaHierachy;
                break;

            case 'subdisciplina':
                this.hierarchyModel = subdisciplinaHierachy;
                break;

            default:
                break;
        }
    }

    public get options(): Options {
        return (<any>this).$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    }

    public add() {
        this.$emit('add', this.toAreaConocimento());
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
        this.$emit('remove', this.removeInstance);
        this.closeConfirmationDialog();
    }

    public closeConfirmationDialog() {
        (<any>this.$refs).removeAreaConocimiento.hide();
    }
}