<template>
  <nested-select
    :host="options.host"
    :hierarchy="hierarchyModel"
    v-model="model"
    :required="required"
  ></nested-select>
</template>

<script lang="ts" src="./area-conocimiento.component.ts"></script>
