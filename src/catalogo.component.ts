import axios from "axios";
import catalogues from "./catalogues-schema.json";
import Component from "vue-class-component";
import { Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class CatalogoComponent extends Vue {
  private options: Array<any> = [];

  private schema!: Object;

  private selected: Object = {};

  private selectName!: String;

  private url!: string;

  @Prop({ type: String, required: true, default: "" })
  readonly host!: String;

  @Prop({ type: String, default: "/services/api/catalogos" })
  readonly context!: string;

  @Prop({ type: String, default: '' })
  readonly pathVariable!: string;

  @Prop({ type: String, default: "" })
  readonly queryParameters!: String;

  @Prop(String)
  readonly label: String | undefined;

  @Prop({
    type: String,
    required: true,
    validator: (value: any) => catalogues[value] !== undefined
  })
  readonly name!: string;

  @Prop({ type: String, default: "es" })
  readonly lang!: String;

  @Prop({ type: Boolean, default: true })
  readonly required!: Boolean;

  created() {
    // Selecting schema
    this.schema = catalogues[this.name];
    // Build select name
    this.selectName = "catalogo-select-" + this.name;
    // Build url
    this.url = this.host + this.context + this.schema['path'] + this.queryParameters;
    this.loadOptions(this.pathVariable, '');
  }

  @Watch('pathVariable')
  loadOptions(newVal: string, oldVal: string) {
    let replacedUrl = this.url.replace('{id}', newVal);
    axios.get(replacedUrl).then(res => {
      this.options = res.data;
    });
  }
}
