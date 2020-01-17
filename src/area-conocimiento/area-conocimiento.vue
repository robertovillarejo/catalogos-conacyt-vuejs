<template>
  <nested-select
    :host="options.host"
    :hierarchy="hierarchyModel"
    v-model="model"
    :required="required"
    @complete="$emit('complete', $event)"
  ></nested-select>
</template>

<script lang="ts" src="./area-conocimiento.component.ts"></script>
