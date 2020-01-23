import { Vue } from "vue-property-decorator";
import { Options } from '@/model/options.model';
export default class CatalogoComponent extends Vue {
    options: Array<any>;
    private schema;
    selectName: string;
    private url;
    readonly pathVariable: string;
    readonly queryParameters: string;
    readonly label: string | undefined;
    value: any;
    readonly name: string;
    readonly lang: string;
    readonly required: boolean;
    readonly globalOptions: Options;
    created(): void;
    loadOptions(newVal: string, oldVal: string): void;
}
