import { Options } from '@/model/options.model';
import { Vue } from "vue-property-decorator";
declare let disciplinaHierachy: {
    path: string;
    prop: string;
    label: string;
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
    }[];
}
