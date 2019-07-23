import { Vue } from "vue-property-decorator";
export default class CatalogoComponent extends Vue {
    private options;
    private schema;
    private selected;
    private selectName;
    private url;
    host: String | undefined;
    readonly context: string | undefined;
    readonly parameters: String | undefined;
    readonly label: String | undefined;
    readonly name: string | undefined;
    readonly lang: String;
    readonly required: Boolean | undefined;
    created(): void;
    mounted(): void;
    loadOptions(): void;
}
