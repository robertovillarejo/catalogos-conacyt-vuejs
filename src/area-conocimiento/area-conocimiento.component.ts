import { defaultConfig, Options } from '@/model/options.model';
import { NestedSelectComponent } from "@conacyt/nested-select";
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

let areaConocimientoHierarchy = [
    {
        path: "/areas-conocimiento",
        prop: "id",
        label: "descripcion"
    }
];
export { areaConocimientoHierarchy };
@Component({
    components: {
        'nested-select': NestedSelectComponent
    },
    computed: {
        model: {
            get() { return (<any>this).value; },
            set(v) { (<any>this).$emit('input', v); }
        }
    }
})
export default class AreaConocimientoComponent extends Vue {

    @Prop({ type: Object, default: {} })
    readonly value!: any;

    @Prop({ required: false, default: false, type: Boolean })
    public readonly required!: boolean;

    public hierarchyModel = areaConocimientoHierarchy;

    public get options(): Options {
        return (<any>this).$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    }
}