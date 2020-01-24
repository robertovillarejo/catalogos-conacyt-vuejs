import { Options } from '@/model/options.model';
import { Vue } from "vue-property-decorator";
declare let areaConocimientoHierarchy: {
    path: string;
    prop: string;
    label: string;
}[];
export { areaConocimientoHierarchy };
export default class AreaConocimientoComponent extends Vue {
    readonly value: any;
    readonly required: boolean;
    hierarchyModel: {
        path: string;
        prop: string;
        label: string;
    }[];
    readonly options: Options;
}
