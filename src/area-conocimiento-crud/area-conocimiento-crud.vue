<template>
  <div>
    <button class="btn btn-primary" v-b-modal.areaConocimientoCrud>
      Agregar
    </button>
    <table>
      <caption>
        Áreas de conocimiento
      </caption>
      <thead>
        <th scope="col">Área</th>
        <th scope="col">Campo</th>
        <th scope="col">Disciplina</th>
        <th scope="col">Subdisciplina</th>
      </thead>
      <tbody>
        <tr v-for="(e, i) in value" v-bind:key="i">
          <td>{{ e.area }}</td>
          <td>{{ e.campo }}</td>
          <td>{{ e.disciplina }}</td>
          <td>{{ e.subdisciplina }}</td>
        </tr>
      </tbody>
    </table>
    <b-modal id="areaConocimientoCrud" ref="areaConocimientoCrud">
      <span slot="modal-title">Agregar área de conocimiento</span>
      <div class="modal-body">
        <area-conocimiento
          v-model="model"
          @complete="complete"
          v-if="options.requiredLevel === 'area'"
        ></area-conocimiento>
        <campo
          v-model="model"
          @complete="complete"
          v-else-if="options.requiredLevel === 'campo'"
        ></campo>
        <disciplina
          v-model="model"
          @complete="complete"
          v-else-if="options.requiredLevel === 'disciplina'"
        ></disciplina>
        <subdisciplina
          v-model="model"
          @complete="complete"
          v-else-if="options.requiredLevel === 'subdisciplina'"
        ></subdisciplina>
      </div>
      <div slot="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          id="cancel-add-area-conocimiento"
          v-on:click="closeDialog()"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="confirm-add-area-conocimiento"
          v-on:click="add()"
        >
          Agregar
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./area-conocimiento-crud.component.ts"></script>
