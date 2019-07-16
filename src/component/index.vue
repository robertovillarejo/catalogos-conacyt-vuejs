<template>
  <section class="catalogo">
    <label v-bind:for="selectId">{{ label }}</label>
    <select
      v-bind:name="selectId"
      v-bind:id="selectId"
      v-model="selected"
      :required="required"
      @input="$emit('input', options[$event.target.selectedIndex])"
    >
      <option
        v-for="(option, optionIndex) in options"
        v-bind:key="optionIndex"
        v-bind:value="option[schema.valueProp]"
      >{{ option[schema.textProp] }}</option>
    </select>
  </section>
</template>
<script src="./catalogos.js"></script>
<style src="./catalogos.css" scoped lang="css"></style>

