import { AreaDeConocimiento, IAreaDeConocimiento } from '@/model/area-conocimiento.model';
import { Options } from '@/model/options.model';
import { Vue } from "vue-property-decorator";
import { required } from 'vuelidate/lib/validators';
import { Level } from './level.model';
export declare const areaConocimientoCrudValidations: {
    model: {
        required: typeof required;
    };
    especialidad: {
        required: import("vuelidate/lib/validators").ValidationRule;
    };
};
export default class AreaConocimientoCrudComponent extends Vue {
    readonly Level: typeof Level;
    readonly value: Array<IAreaDeConocimiento>;
    hierarchyModel: Array<any>;
    model: any;
    fullModel: Array<any>;
    removeInstance: any;
    especialidad: string;
    created(): void;
    readonly options: Options;
    add(): void;
    toAreaConocimento(): AreaDeConocimiento;
    closeDialog(): void;
    prepareRemove(areaConocimiento: IAreaDeConocimiento): void;
    removeAreaConocimiento(): void;
    closeConfirmationDialog(): void;
    private initHierarchyModel;
}
