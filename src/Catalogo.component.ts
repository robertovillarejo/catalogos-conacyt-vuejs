import axios from "axios";
import catalogues from "./catalogues-schema.json";
import Component from "vue-class-component";
import { Vue, Prop } from "vue-property-decorator";

@Component({
  name: "catalogo"
})
export default class CatalogoComponent extends Vue {
  private options: Array<any> = [];

  private schema: Object = {};

  private selected = {};

  private selectName: String = "";

  private url: string = "";

  @Prop({ type: String, required: true })
  host: String | undefined;

  @Prop({ type: String, default: "/api" })
  readonly context: string | undefined;

  @Prop({ type: String, default: "" })
  readonly parameters: String | undefined;

  @Prop(String)
  readonly label: String | undefined;

  @Prop({
    type: String,
    required: true,
    validator: (value: any) => Object.keys(catalogues).indexOf(value) !== -1
  })
  readonly name: string | undefined;

  @Prop(String)
  readonly lang: String = "es";

  @Prop({ type: Boolean, default: false })
  readonly required: Boolean | undefined;

  created() {
    // Selecting schema
    if (this.name) {
      this.schema = catalogues[this.name];
    }
    // Build select name
    this.selectName = "catalogo-select-" + this.name;
    // Build url
    if (this.host) {
      this.url = this.url + this.host;
    }
    if (this.context) {
      this.url = this.url + this.context;
    }
    this.url = this.url + this.name + "?idioma=" + this.lang + this.parameters;
  }

  mounted() {
    this.loadOptions();
  }

  loadOptions() {
    axios.get(this.url).then(res => {
      this.options = res.data;
    });
  }
}
