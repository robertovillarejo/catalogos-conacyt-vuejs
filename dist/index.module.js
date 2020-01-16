import { __extends, __decorate, __assign } from 'tslib';
import { NestedSelectComponent } from '@conacyt/nested-select';
import Component from 'vue-class-component';
import { Prop, Watch, Vue } from 'vue-property-decorator';
import axios from 'axios';

var areaConocimiento = {
	path: "/areas-conocimiento",
	valueProp: "id",
	textProp: "descripcionEsp"
};
var campo = {
	path: "/areas-conocimiento/{id}/campos",
	valueProp: "id",
	textProp: "descripcionEsp"
};
var disciplina = {
	path: "/campos/{id}/disciplinas",
	valueProp: "id",
	textProp: "descripcionEsp"
};
var subdisciplina = {
	path: "/disciplinas/{id}/subdisciplinas",
	valueProp: "id",
	textProp: "descripcionEsp"
};
var catalogues = {
	areaConocimiento: areaConocimiento,
	campo: campo,
	disciplina: disciplina,
	subdisciplina: subdisciplina
};

var Options =
/** @class */
function () {
  function Options(host, context) {
    this.host = host || '';
    this.context = context || '/services/catalogos/api';
  }

  return Options;
}();
var defaultConfig = new Options();

var CatalogoComponent =
/** @class */
function (_super) {
  __extends(CatalogoComponent, _super);

  function CatalogoComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = [];
    return _this;
  }

  Object.defineProperty(CatalogoComponent.prototype, "globalOptions", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  CatalogoComponent.prototype.created = function () {
    // Selecting schema
    this.schema = catalogues[this.name]; // Build select name

    this.selectName = "catalogo-select-" + this.name; // Build url

    this.url = this.globalOptions.host + this.globalOptions.context + this.schema["path"] + this.queryParameters;
    this.loadOptions(this.pathVariable, "");
  };

  CatalogoComponent.prototype.loadOptions = function (newVal, oldVal) {
    var _this = this;

    var replacedUrl = this.url.replace("{id}", newVal);
    axios.get(replacedUrl).then(function (res) {
      _this.options = res.data;
    });
  };

  __decorate([Prop({
    type: String,
    default: ""
  })], CatalogoComponent.prototype, "pathVariable", void 0);

  __decorate([Prop({
    type: String,
    default: ""
  })], CatalogoComponent.prototype, "queryParameters", void 0);

  __decorate([Prop(String)], CatalogoComponent.prototype, "label", void 0);

  __decorate([Prop()], CatalogoComponent.prototype, "value", void 0);

  __decorate([Prop({
    type: String,
    required: true,
    validator: function validator(value) {
      return catalogues[value] !== undefined;
    }
  })], CatalogoComponent.prototype, "name", void 0);

  __decorate([Prop({
    type: String,
    default: "es"
  })], CatalogoComponent.prototype, "lang", void 0);

  __decorate([Prop({
    type: Boolean,
    default: true
  })], CatalogoComponent.prototype, "required", void 0);

  __decorate([Watch("pathVariable")], CatalogoComponent.prototype, "loadOptions", null);

  CatalogoComponent = __decorate([Component], CatalogoComponent);
  return CatalogoComponent;
}(Vue);

var AreaConocimientoComponent =
/** @class */
function (_super) {
  __extends(AreaConocimientoComponent, _super);

  function AreaConocimientoComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hierarchyModel = [{
      path: "/areas-conocimiento",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Area de conocimiento: "
    }];
    return _this;
  }

  Object.defineProperty(AreaConocimientoComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  __decorate([Prop({
    required: true,
    type: Object
  })], AreaConocimientoComponent.prototype, "value", void 0);

  __decorate([Prop({
    required: false,
    default: true,
    type: Boolean
  })], AreaConocimientoComponent.prototype, "required", void 0);

  AreaConocimientoComponent = __decorate([Component({
    components: {
      'nested-select': NestedSelectComponent
    },
    computed: {
      model: {
        get: function get() {
          return this.value;
        },
        set: function set(v) {
          this.$emit('input', v);
        }
      }
    }
  })], AreaConocimientoComponent);
  return AreaConocimientoComponent;
}(Vue);

/* script */
var __vue_script__ = AreaConocimientoComponent;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nested-select', {
    attrs: {
      "host": _vm.options.host,
      "hierarchy": _vm.hierarchyModel,
      "required": _vm.required
    },
    model: {
      value: _vm.model,
      callback: function callback($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  });
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "area-conocimiento.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var AreaConocimientoComponent$1 = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

var CampoComponent =
/** @class */
function (_super) {
  __extends(CampoComponent, _super);

  function CampoComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hierarchyModel = [{
      path: "/areas-conocimiento",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Area de conocimiento: "
    }, {
      path: "/areas-conocimiento/[id]/campos",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Campo: "
    }];
    return _this;
  }

  Object.defineProperty(CampoComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  __decorate([Prop({
    required: true,
    type: Object
  })], CampoComponent.prototype, "value", void 0);

  __decorate([Prop({
    required: false,
    default: true,
    type: Boolean
  })], CampoComponent.prototype, "required", void 0);

  CampoComponent = __decorate([Component({
    components: {
      'nested-select': NestedSelectComponent
    },
    computed: {
      model: {
        get: function get() {
          return this.value;
        },
        set: function set(v) {
          this.$emit('input', v);
        }
      }
    }
  })], CampoComponent);
  return CampoComponent;
}(Vue);

/* script */
var __vue_script__$1 = CampoComponent;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nested-select', {
    attrs: {
      "host": _vm.options.host,
      "hierarchy": _vm.hierarchyModel,
      "required": _vm.required
    },
    model: {
      value: _vm.model,
      callback: function callback($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  });
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* component normalizer */

function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "campo.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var CampoComponent$1 = __vue_normalize__$1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1);

/* script */
var __vue_script__$2 = CatalogoComponent;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm.label ? _c('label', {
    attrs: {
      "for": _vm.selectName
    }
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c('select', {
    staticClass: "form-control",
    attrs: {
      "name": _vm.selectName,
      "id": _vm.selectName,
      "required": _vm.required
    },
    on: {
      "input": function input($event) {
        return _vm.$emit('input', _vm.options[$event.target.selectedIndex - 1]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }), _vm._v(" "), _vm._l(_vm.options, function (option, optionIndex) {
    return _c('option', {
      key: optionIndex,
      domProps: {
        "value": option[_vm.schema.valueProp],
        "selected": _vm.value && option[_vm.schema.valueProp] === _vm.value[_vm.schema.valueProp]
      }
    }, [_vm._v(_vm._s(option[_vm.schema.textProp]))]);
  })], 2)]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* component normalizer */

function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "CatalogoComponent.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var CatalogoComponent$1 = __vue_normalize__$2({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2);

var DisciplinaComponent =
/** @class */
function (_super) {
  __extends(DisciplinaComponent, _super);

  function DisciplinaComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hierarchyModel = [{
      path: "/areas-conocimiento",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Area de conocimiento: "
    }, {
      path: "/areas-conocimiento/[id]/campos",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Campo: "
    }, {
      path: "/campos/[id]/disciplinas",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Disciplinas: "
    }];
    return _this;
  }

  Object.defineProperty(DisciplinaComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  __decorate([Prop({
    required: true,
    type: Object
  })], DisciplinaComponent.prototype, "value", void 0);

  __decorate([Prop({
    required: false,
    default: true,
    type: Boolean
  })], DisciplinaComponent.prototype, "required", void 0);

  DisciplinaComponent = __decorate([Component({
    components: {
      'nested-select': NestedSelectComponent
    },
    computed: {
      model: {
        get: function get() {
          return this.value;
        },
        set: function set(v) {
          this.$emit('input', v);
        }
      }
    }
  })], DisciplinaComponent);
  return DisciplinaComponent;
}(Vue);

/* script */
var __vue_script__$3 = DisciplinaComponent;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nested-select', {
    attrs: {
      "host": _vm.options.host,
      "hierarchy": _vm.hierarchyModel,
      "required": _vm.required
    },
    model: {
      value: _vm.model,
      callback: function callback($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  });
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* component normalizer */

function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "disciplina.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var DisciplinaComponent$1 = __vue_normalize__$3({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3);

var DisciplinaComponent$2 =
/** @class */
function (_super) {
  __extends(DisciplinaComponent, _super);

  function DisciplinaComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hierarchyModel = [{
      path: "/areas-conocimiento",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Area de conocimiento: "
    }, {
      path: "/areas-conocimiento/[id]/campos",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Campo: "
    }, {
      path: "/campos/[id]/disciplinas",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Disciplina: "
    }, {
      path: "/disciplinas/[id]/subdisciplinas",
      prop: "id",
      label: "descripcionEsp",
      selectLabel: "Subdisciplina: "
    }];
    return _this;
  }

  Object.defineProperty(DisciplinaComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  __decorate([Prop({
    required: true,
    type: Object
  })], DisciplinaComponent.prototype, "value", void 0);

  __decorate([Prop({
    required: false,
    default: true,
    type: Boolean
  })], DisciplinaComponent.prototype, "required", void 0);

  DisciplinaComponent = __decorate([Component({
    components: {
      'nested-select': NestedSelectComponent
    },
    computed: {
      model: {
        get: function get() {
          return this.value;
        },
        set: function set(v) {
          this.$emit('input', v);
        }
      }
    }
  })], DisciplinaComponent);
  return DisciplinaComponent;
}(Vue);

/* script */
var __vue_script__$4 = DisciplinaComponent$2;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nested-select', {
    attrs: {
      "host": _vm.options.host,
      "hierarchy": _vm.hierarchyModel,
      "required": _vm.required
    },
    model: {
      value: _vm.model,
      callback: function callback($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  });
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* component normalizer */

function __vue_normalize__$4(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "subdisciplina.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var SubdisciplinaComponent = __vue_normalize__$4({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4);

var index = {
  install: function install(Vue, globalOptions) {
    var options = __assign({}, defaultConfig, globalOptions);

    Vue.prototype.$CATALOGOS_DEFAULT_OPTIONS = options;
    Vue.component("catalogo", CatalogoComponent$1);
    Vue.component("area-conocimiento", AreaConocimientoComponent$1);
    Vue.component("campo", CampoComponent$1);
    Vue.component("disciplina", DisciplinaComponent$1);
    Vue.component("subdisciplina", SubdisciplinaComponent);
  }
};

export default index;
export { AreaConocimientoComponent$1 as AreaConocimientoComponent, CampoComponent$1 as CampoComponent, CatalogoComponent$1 as CatalogoComponent, DisciplinaComponent$1 as DisciplinaComponent, SubdisciplinaComponent };
//# sourceMappingURL=index.module.js.map
