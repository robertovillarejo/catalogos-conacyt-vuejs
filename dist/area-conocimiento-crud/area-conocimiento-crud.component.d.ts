import { Options } from '@/catalogo.component';
import { AreaDeConocimiento, IAreaDeConocimiento } from '@/model/area-conocimiento.model';
import { Vue } from "vue-property-decorator";
export default class AreaConocimientoCrudComponent extends Vue {
    readonly value: Array<IAreaDeConocimiento>;
    hierarchyModel: Array<any>;
    model: any;
    fullModel: Array<any>;
    removeInstance: any;
    created(): void;
    readonly options: Options;
    add(): void;
    toAreaConocimento(): AreaDeConocimiento;
    closeDialog(): void;
    prepareRemove(areaConocimiento: IAreaDeConocimiento): void;
    removeAreaConocimiento(): void;
    closeConfirmationDialog(): void;
}
