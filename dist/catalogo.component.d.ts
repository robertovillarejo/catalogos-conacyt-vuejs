import { Vue } from "vue-property-decorator";
export declare class Options {
    host: string;
    context: string;
    constructor(host?: string, context?: string);
}
declare const defaultConfig: Options;
export { defaultConfig };
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
