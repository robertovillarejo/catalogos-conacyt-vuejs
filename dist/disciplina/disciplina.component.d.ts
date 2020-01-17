import { Vue } from "vue-property-decorator";
import { Options } from '@/catalogo.component';
declare const disciplinaHierachy: {
    path: string;
    prop: string;
    label: string;
    selectLabel: string;
}[];
export { disciplinaHierachy };
export default class DisciplinaComponent extends Vue {
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
