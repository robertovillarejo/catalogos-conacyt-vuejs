import { Vue } from "vue-property-decorator";
export default class CatalogoComponent extends Vue {
    private options;
    private schema;
    private selected;
    private selectName;
    private url;
    readonly host: String;
    readonly context: string;
    readonly pathVariable: string;
    readonly queryParameters: String;
    readonly label: String | undefined;
    readonly name: string;
    readonly lang: String;
    readonly required: Boolean;
    created(): void;
    replacePathVariable(url: string): string;
    loadOptions(): void;
}
