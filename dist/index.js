'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_1 = require('tslib');
var nestedSelect = require('@conacyt/nested-select');
var Component = _interopDefault(require('vue-class-component'));
var vuePropertyDecorator = require('vue-property-decorator');
var axios = _interopDefault(require('axios'));
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var faTimes = require('@fortawesome/free-solid-svg-icons/faTimes');
var vueFontawesome = require('@fortawesome/vue-fontawesome');
var bButton = _interopDefault(require('bootstrap-vue/es/components/button/button'));
var bModal = _interopDefault(require('bootstrap-vue/es/components/modal/modal'));
var bModalDirective = _interopDefault(require('bootstrap-vue/es/directives/modal/modal'));

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
  function Options(host, context, requiredLevel) {
    this.requiredLevel = requiredLevel;
    this.host = host || '';
    this.context = context || '/services/catalogos/api';
  }

  return Options;
}();
var defaultConfig = new Options();

var CatalogoComponent =
/** @class */
function (_super) {
  tslib_1.__extends(CatalogoComponent, _super);

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

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: String,
    default: ""
  })], CatalogoComponent.prototype, "pathVariable", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: String,
    default: ""
  })], CatalogoComponent.prototype, "queryParameters", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop(String)], CatalogoComponent.prototype, "label", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop()], CatalogoComponent.prototype, "value", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: String,
    required: true,
    validator: function validator(value) {
      return catalogues[value] !== undefined;
    }
  })], CatalogoComponent.prototype, "name", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: String,
    default: "es"
  })], CatalogoComponent.prototype, "lang", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: Boolean,
    default: true
  })], CatalogoComponent.prototype, "required", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Watch("pathVariable")], CatalogoComponent.prototype, "loadOptions", null);

  CatalogoComponent = tslib_1.__decorate([Component], CatalogoComponent);
  return CatalogoComponent;
}(vuePropertyDecorator.Vue);

var areaConocimientoHierarchy = [{
  path: "/areas-conocimiento",
  prop: "id",
  label: "descripcionEsp",
  selectLabel: "Area de conocimiento: "
}];

var AreaConocimientoComponent =
/** @class */
function (_super) {
  tslib_1.__extends(AreaConocimientoComponent, _super);

  function AreaConocimientoComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hierarchyModel = areaConocimientoHierarchy;
    return _this;
  }

  Object.defineProperty(AreaConocimientoComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: Object,
    default: {}
  })], AreaConocimientoComponent.prototype, "value", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    required: false,
    default: false,
    type: Boolean
  })], AreaConocimientoComponent.prototype, "required", void 0);

  AreaConocimientoComponent = tslib_1.__decorate([Component({
    components: {
      'nested-select': nestedSelect.NestedSelectComponent
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
}(vuePropertyDecorator.Vue);

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

var campoHierarchy = [{
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

var CampoComponent =
/** @class */
function (_super) {
  tslib_1.__extends(CampoComponent, _super);

  function CampoComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hierarchyModel = campoHierarchy;
    return _this;
  }

  Object.defineProperty(CampoComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: Object,
    default: {}
  })], CampoComponent.prototype, "value", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    required: false,
    default: false,
    type: Boolean
  })], CampoComponent.prototype, "required", void 0);

  CampoComponent = tslib_1.__decorate([Component({
    components: {
      'nested-select': nestedSelect.NestedSelectComponent
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
}(vuePropertyDecorator.Vue);

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

var disciplinaHierachy = [{
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

var DisciplinaComponent =
/** @class */
function (_super) {
  tslib_1.__extends(DisciplinaComponent, _super);

  function DisciplinaComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hierarchyModel = disciplinaHierachy;
    return _this;
  }

  Object.defineProperty(DisciplinaComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: Object,
    default: {}
  })], DisciplinaComponent.prototype, "value", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    required: false,
    default: false,
    type: Boolean
  })], DisciplinaComponent.prototype, "required", void 0);

  DisciplinaComponent = tslib_1.__decorate([Component({
    components: {
      'nested-select': nestedSelect.NestedSelectComponent
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
}(vuePropertyDecorator.Vue);

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

var subdisciplinaHierachy = [{
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

var SubdisciplinaComponent =
/** @class */
function (_super) {
  tslib_1.__extends(SubdisciplinaComponent, _super);

  function SubdisciplinaComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hierarchyModel = subdisciplinaHierachy;
    return _this;
  }

  Object.defineProperty(SubdisciplinaComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: Object,
    default: {}
  })], SubdisciplinaComponent.prototype, "value", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    required: false,
    default: false,
    type: Boolean
  })], SubdisciplinaComponent.prototype, "required", void 0);

  SubdisciplinaComponent = tslib_1.__decorate([Component({
    components: {
      'nested-select': nestedSelect.NestedSelectComponent
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
  })], SubdisciplinaComponent);
  return SubdisciplinaComponent;
}(vuePropertyDecorator.Vue);

/* script */
var __vue_script__$4 = SubdisciplinaComponent;
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


var SubdisciplinaComponent$1 = __vue_normalize__$4({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4);

var AreaDeConocimiento =
/** @class */
function () {
  function AreaDeConocimiento(id, idArea, area, idCampo, campo, idDisciplina, disciplina, idSubdisciplina, subdisciplina, especialidad) {
    this.id = id;
    this.idArea = idArea;
    this.area = area;
    this.idCampo = idCampo;
    this.campo = campo;
    this.idDisciplina = idDisciplina;
    this.disciplina = disciplina;
    this.idSubdisciplina = idSubdisciplina;
    this.subdisciplina = subdisciplina;
    this.especialidad = especialidad;
  }

  return AreaDeConocimiento;
}();

fontawesomeSvgCore.library.add(faTimes.faTimes);

var AreaConocimientoCrudComponent =
/** @class */
function (_super) {
  tslib_1.__extends(AreaConocimientoCrudComponent, _super);

  function AreaConocimientoCrudComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.model = {};
    _this.fullModel = new Array(); //Updated when 'complete' event

    return _this;
  }

  AreaConocimientoCrudComponent.prototype.created = function () {
    switch (this.options.requiredLevel) {
      case 'area':
        this.hierarchyModel = areaConocimientoHierarchy;
        break;

      case 'campo':
        this.hierarchyModel = campoHierarchy;
        break;

      case 'disciplina':
        this.hierarchyModel = disciplinaHierachy;
        break;

      case 'subdisciplina':
        this.hierarchyModel = subdisciplinaHierachy;
        break;

      default:
        break;
    }
  };

  Object.defineProperty(AreaConocimientoCrudComponent.prototype, "options", {
    get: function get() {
      return this.$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  AreaConocimientoCrudComponent.prototype.add = function () {
    this.$emit('add', this.toAreaConocimento());
    this.closeDialog();
  };

  AreaConocimientoCrudComponent.prototype.toAreaConocimento = function () {
    var value = new AreaDeConocimiento();
    var maybeSubdisciplina = this.fullModel[3];

    if (maybeSubdisciplina) {
      value.idSubdisciplina = maybeSubdisciplina.id;
      value.subdisciplina = maybeSubdisciplina.descripcionEsp;
    }

    var maybeDisciplina = this.fullModel[2];

    if (maybeDisciplina) {
      value.idDisciplina = maybeDisciplina.id;
      value.disciplina = maybeDisciplina.descripcionEsp;
    }

    var maybeCampo = this.fullModel[1];

    if (maybeCampo) {
      value.idCampo = maybeCampo.id;
      value.campo = maybeCampo.descripcionEsp;
    }

    var maybeArea = this.fullModel[0];

    if (maybeArea) {
      value.idArea = maybeArea.id;
      value.area = maybeArea.descripcionEsp;
    }

    return value;
  };

  AreaConocimientoCrudComponent.prototype.closeDialog = function () {
    this.$refs.areaConocimientoCrud.hide();
  };

  AreaConocimientoCrudComponent.prototype.prepareRemove = function (areaConocimiento) {
    this.removeInstance = areaConocimiento;
    this.$refs.removeAreaConocimiento.show();
  };

  AreaConocimientoCrudComponent.prototype.removeAreaConocimiento = function () {
    this.$emit('remove', this.removeInstance);
    this.closeConfirmationDialog();
  };

  AreaConocimientoCrudComponent.prototype.closeConfirmationDialog = function () {
    this.$refs.removeAreaConocimiento.hide();
  };

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    required: true,
    type: Array
  })], AreaConocimientoCrudComponent.prototype, "value", void 0);

  AreaConocimientoCrudComponent = tslib_1.__decorate([Component({
    components: {
      'b-modal': bModal,
      'nested-select': nestedSelect.NestedSelectComponent,
      'font-awesome-icon': vueFontawesome.FontAwesomeIcon,
      'b-button': bButton
    },
    directives: {
      'b-modal': bModalDirective
    }
  })], AreaConocimientoCrudComponent);
  return AreaConocimientoCrudComponent;
}(vuePropertyDecorator.Vue);

/* script */
var __vue_script__$5 = AreaConocimientoCrudComponent;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('form', {
    staticClass: "text-left",
    attrs: {
      "novalidate": ""
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
      }
    }
  }, [_c('button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.areaConocimientoCrud",
      modifiers: {
        "areaConocimientoCrud": true
      }
    }],
    staticClass: "btn btn-primary"
  }, [_vm._v("Agregar")])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.value, function (e, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(e.area))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(e.campo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(e.disciplina))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(e.subdisciplina))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_c('div', {
      staticClass: "btn-group flex-btn-group-container"
    }, [_c('b-button', {
      staticClass: "btn btn-sm",
      attrs: {
        "variant": "danger"
      },
      on: {
        "click": function click($event) {
          return _vm.prepareRemove(e);
        }
      }
    }, [_c('font-awesome-icon', {
      attrs: {
        "icon": "times"
      }
    })], 1)], 1)])]);
  }), 0)])]), _vm._v(" "), _c('b-modal', {
    ref: "areaConocimientoCrud",
    attrs: {
      "id": "areaConocimientoCrud"
    }
  }, [_c('span', {
    attrs: {
      "slot": "modal-title"
    },
    slot: "modal-title"
  }, [_vm._v("Agregar área de conocimiento")]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('nested-select', {
    attrs: {
      "host": _vm.options.host,
      "hierarchy": _vm.hierarchyModel,
      "required": true
    },
    on: {
      "complete": function complete($event) {
        _vm.fullModel = $event;
      }
    },
    model: {
      value: _vm.model,
      callback: function callback($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  })], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button",
      "id": "cancel-add-area-conocimiento"
    },
    on: {
      "click": function click($event) {
        return _vm.closeDialog();
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "id": "confirm-add-area-conocimiento"
    },
    on: {
      "click": function click($event) {
        return _vm.add();
      }
    }
  }, [_vm._v("Agregar")])])]), _vm._v(" "), _c('b-modal', {
    ref: "removeAreaConocimiento",
    attrs: {
      "id": "removeAreaConocimiento"
    }
  }, [_c('span', {
    attrs: {
      "slot": "modal-title"
    },
    slot: "modal-title"
  }, [_c('span', {
    attrs: {
      "id": "catalogos.areaConocimiento.delete.question"
    }
  }, [_vm._v("Confirmar operación de borrado")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('p', {
    attrs: {
      "id": "catalogos-delete-area-conocimiento-heading"
    }
  }, [_vm._v("¿Está seguro que quiere borrar esta Área de Conocimiento?")])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.closeConfirmationDialog();
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "id": "catalogos-confirm-delete-area-conocimiento"
    },
    on: {
      "click": function click($event) {
        return _vm.removeAreaConocimiento();
      }
    }
  }, [_vm._v("Delete")])])])], 1);
};

var __vue_staticRenderFns__$5 = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('caption', {
    staticClass: "text-center"
  }, [_c('h5', [_vm._v("Áreas de conocimiento")])]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('thead', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Área")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Campo")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Disciplina")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Subdisciplina")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  })]);
}];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-a24d9bce_0", {
    source: "caption[data-v-a24d9bce]{caption-side:top}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = "data-v-a24d9bce";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* component normalizer */

function __vue_normalize__$5(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "area-conocimiento-crud.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;
      style.ids.push(id);

      if ( css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var AreaConocimientoCrudComponent$1 = __vue_normalize__$5({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__, __vue_create_injector__);

var index = {
  install: function install(Vue, globalOptions) {
    var options = tslib_1.__assign({}, defaultConfig, globalOptions);

    Vue.prototype.$CATALOGOS_DEFAULT_OPTIONS = options;
    Vue.component("catalogo", CatalogoComponent$1);
    Vue.component("area-conocimiento", AreaConocimientoComponent$1);
    Vue.component("campo", CampoComponent$1);
    Vue.component("disciplina", DisciplinaComponent$1);
    Vue.component("subdisciplina", SubdisciplinaComponent$1);
    Vue.component("area-conocimiento-crud", AreaConocimientoCrudComponent$1);
  }
};

exports.AreaConocimientoComponent = AreaConocimientoComponent$1;
exports.AreaConocimientoCrudComponent = AreaConocimientoCrudComponent$1;
exports.CampoComponent = CampoComponent$1;
exports.CatalogoComponent = CatalogoComponent$1;
exports.DisciplinaComponent = DisciplinaComponent$1;
exports.SubdisciplinaComponent = SubdisciplinaComponent$1;
exports.default = index;
//# sourceMappingURL=index.js.map
