import { Vue } from "vue-property-decorator";
import { Options } from '@/catalogo.component';
export default class CampoComponent extends Vue {
    readonly value: any;
    readonly required: boolean;
    readonly options: Options;
    readonly hierarchyModel: {
        path: string;
        prop: string;
        label: string;
        selectLabel: string;
    }[];
}
