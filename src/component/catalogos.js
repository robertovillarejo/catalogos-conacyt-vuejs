import axios from '../../node_modules/axios/dist/axios';

export default {
  name: 'catalogo',
  components: {},
  props:
  {
    host: {
      type: String,
      default: ''
    },
    context: {
      type: String,
      default: '/api'
    },
    parameters: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: 'es'
    },
    required: {
      type: Boolean
    }
  },
  data() {
    return {
      options: [],
      schema: undefined,
      selected: null,
      selectName: null,
      catalogues: {
        "estatusSni": {
          valueProp: "idEstatusSni",
          textProp: "descEstatusSni"
        },
        "tipoInstitucion": {
          valueProp: "idTipoInstitucion",
          textProp: "descTipoInstitucion"
        }
      }
    }
  },
  computed: {
  },
  created() {
    this.schema = this.catalogues[this.name];
    this.selectName = 'catalogo-select-' + this.name;
  },
  mounted() {
    this.loadOptions();
  },
  methods: {
    loadOptions: function () {
      const url = this.host + this.context + this.name + '?idioma=' + this.lang + this.parameters;
      axios.get(url).then(res => {
        this.options = res.data;
      });
    }
  }
}
