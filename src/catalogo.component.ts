import axios from "axios";
import catalogues from "./catalogues-schema.json";
import Component from "vue-class-component";
import { Vue, Prop, Watch } from "vue-property-decorator";
import { defaultConfig, Options } from '@/model/options.model';

@Component
export default class CatalogoComponent extends Vue {
  public options: Array<any> = [];

  private schema!: Object;

  public selectName!: string;

  private url!: string;

  @Prop({ type: String, default: "" })
  readonly pathVariable!: string;

  @Prop({ type: String, default: "" })
  readonly queryParameters!: string;

  @Prop(String)
  readonly label: string | undefined;
  
  @Prop()
  value: any; // Reading from v-model

  @Prop({
    type: String,
    required: true,
    validator: (value: any) => catalogues[value] !== undefined
  })
  readonly name!: string;

  @Prop({ type: String, default: "es" })
  readonly lang!: string;

  @Prop({ type: Boolean, default: true })
  readonly required!: boolean;

  public get globalOptions(): Options {
    return (<any>this).$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
  }

  created() {
    // Selecting schema
    this.schema = catalogues[this.name];
    // Build select name
    this.selectName = "catalogo-select-" + this.name;
    // Build url
    this.url =
      this.globalOptions.host + this.globalOptions.context + this.schema["path"] + this.queryParameters;
    this.loadOptions(this.pathVariable, "");
  }

  @Watch("pathVariable")
  loadOptions(newVal: string, oldVal: string) {
    let replacedUrl = this.url.replace("{id}", newVal);
    axios.get(replacedUrl).then(res => {
      this.options = res.data;
    });
  }
}
