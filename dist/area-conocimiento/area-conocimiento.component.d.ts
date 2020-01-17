import { Vue } from "vue-property-decorator";
import { Options } from '@/catalogo.component';
declare const areaConocimientoHierarchy: {
    path: string;
    prop: string;
    label: string;
    selectLabel: string;
}[];
export { areaConocimientoHierarchy };
export default class AreaConocimientoComponent extends Vue {
    readonly value: any;
    readonly required: boolean;
    hierarchyModel: {
        path: string;
        prop: string;
        label: string;
        selectLabel: string;
    }[];
    readonly options: Options;
}
