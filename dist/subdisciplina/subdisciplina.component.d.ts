import { Options } from '@/catalogo.component';
import { Vue } from "vue-property-decorator";
declare const subdisciplinaHierachy: {
    path: string;
    prop: string;
    label: string;
    selectLabel: string;
}[];
export { subdisciplinaHierachy };
export default class SubdisciplinaComponent extends Vue {
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
