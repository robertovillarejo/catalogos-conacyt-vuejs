import { Options } from '@/model/options.model';
import { Vue } from "vue-property-decorator";
declare let campoHierarchy: {
    path: string;
    prop: string;
    label: string;
    selectLabel: string;
}[];
export { campoHierarchy };
export default class CampoComponent extends Vue {
    readonly value: any;
    readonly required: boolean;
    readonly options: Options;
    hierarchyModel: {
        path: string;
        prop: string;
        label: string;
        selectLabel: string;
    }[];
}
