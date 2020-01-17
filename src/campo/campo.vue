<template>
  <nested-select
    :host="options.host"
    :hierarchy="hierarchyModel"
    v-model="model"
    :required="required"
  ></nested-select>
</template>

<script lang="ts" src="./campo.component.ts"></script>
