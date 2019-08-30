import { Vue } from "vue-property-decorator";
export default class CatalogoComponent extends Vue {
    options: Array<any>;
    private schema;
    selectName: String;
    private url;
    readonly host: String;
    readonly context: string;
    readonly pathVariable: string;
    readonly queryParameters: String;
    readonly label: String | undefined;
    value: any;
    readonly name: string;
    readonly lang: String;
    readonly required: Boolean;
    created(): void;
    loadOptions(newVal: string, oldVal: string): void;
}
