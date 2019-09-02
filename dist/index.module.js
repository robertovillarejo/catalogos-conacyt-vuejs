import { __extends, __decorate } from 'tslib';
import axios from 'axios';
import Component from 'vue-class-component';
import { Prop, Watch, Vue } from 'vue-property-decorator';

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

var CatalogoComponent =
/** @class */
function (_super) {
  __extends(CatalogoComponent, _super);

  function CatalogoComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = [];
    return _this;
  }

  CatalogoComponent.prototype.created = function () {
    // Selecting schema
    this.schema = catalogues[this.name]; // Build select name

    this.selectName = "catalogo-select-" + this.name; // Build url

    this.url = this.host + this.context + this.schema["path"] + this.queryParameters;
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
    required: false,
    default: ""
  })], CatalogoComponent.prototype, "host", void 0);

  __decorate([Prop({
    type: String,
    default: "/services/catalogos/api"
  })], CatalogoComponent.prototype, "context", void 0);

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

/* script */
var __vue_script__ = CatalogoComponent;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('label', {
    attrs: {
      "for": _vm.selectName
    }
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('select', {
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


var CatalogoComponent$1 = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

var index = {
  install: function install(Vue, options) {
    Vue.component("catalogo", CatalogoComponent$1);
  }
};

export default index;
export { CatalogoComponent$1 as CatalogoComponent };
//# sourceMappingURL=index.module.js.map
