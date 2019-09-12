<template>
  <div>
    <label v-bind:for="selectName" v-if="label">{{ label }}</label>
    <select
      v-bind:name="selectName"
      v-bind:id="selectName"
      :required="required"
      class="form-control"
      @input="$emit('input', options[$event.target.selectedIndex - 1])"
    >
      <option value></option>
      <option
        v-for="(option, optionIndex) in options"
        v-bind:key="optionIndex"
        v-bind:value="option[schema.valueProp]"
        :selected="
          value && option[schema.valueProp] === value[schema.valueProp]
        "
        >{{ option[schema.textProp] }}</option
      >
    </select>
  </div>
</template>

<script lang="ts" src="./catalogo.component.ts"></script>
