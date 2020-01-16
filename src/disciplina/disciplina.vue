<template>
  <nested-select
    :host="options.host"
    :hierarchy="hierarchyModel"
    v-model="model"
    :required="required"
  ></nested-select>
</template>

<script lang="ts" src="./disciplina.component.ts"></script>
