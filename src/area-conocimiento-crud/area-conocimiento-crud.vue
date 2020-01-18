<template>
  <div>
    <form @submit.prevent novalidate class="text-left">
      <button class="btn btn-primary" v-b-modal.areaConocimientoCrud>
        Agregar
      </button>
    </form>
    <div class="table-responsive">
      <table class="table table-striped">
        <caption class="text-center">
          <h5>Áreas de conocimiento</h5>
        </caption>
        <thead>
          <th scope="col" v-if="options.requiredLevel >= Level.AREA">Área</th>
          <th scope="col" v-if="options.requiredLevel >= Level.CAMPO">Campo</th>
          <th scope="col" v-if="options.requiredLevel >= Level.DISCIPLINA">
            Disciplina
          </th>
          <th scope="col" v-if="options.requiredLevel >= Level.SUBDISCIPLINA">
            Subdisciplina
          </th>
          <th scope="col" v-if="options.requiredLevel >= Level.ESPECIALIDAD">
            Especialidad
          </th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr v-for="(e, i) in value" v-bind:key="i">
            <td v-if="options.requiredLevel >= Level.AREA">{{ e.area }}</td>
            <td v-if="options.requiredLevel >= Level.CAMPO">{{ e.campo }}</td>
            <td v-if="options.requiredLevel >= Level.DISCIPLINA">
              {{ e.disciplina }}
            </td>
            <td v-if="options.requiredLevel >= Level.SUBDISCIPLINA">
              {{ e.subdisciplina }}
            </td>
            <td v-if="options.requiredLevel >= Level.ESPECIALIDAD">
              {{ e.especialidad }}
            </td>
            <td class="text-right">
              <div class="btn-group flex-btn-group-container">
                <b-button
                  variant="danger"
                  class="btn btn-sm"
                  @click="prepareRemove(e)"
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                </b-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <b-modal id="areaConocimientoCrud" ref="areaConocimientoCrud">
      <span slot="modal-title">Agregar área de conocimiento</span>
      <div class="modal-body">
        <form name="addAreaConocimientoForm" role="form" @submit.prevent="">
          <div>
            <!--NestedSelect is a div with 'form-group' class-->
            <nested-select
              :host="options.host"
              :hierarchy="hierarchyModel"
              v-model="model"
              :required="true"
              @complete="fullModel = $event"
            ></nested-select>
            <div
              class="form-group"
              v-if="options.requiredLevel === Level.ESPECIALIDAD"
            >
              <label for="especialidad">Especialidad</label>
              <input
                type="text"
                class="form-control"
                id="especialidad"
                name="especialidad"
                v-model.trim="especialidad"
              />
            </div>
          </div>
        </form>
      </div>
      <div slot="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          id="cancel-add-area-conocimiento"
          @click="closeDialog()"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="confirm-add-area-conocimiento"
          @click="add()"
        >
          Agregar
        </button>
      </div>
    </b-modal>
    <b-modal ref="removeAreaConocimiento" id="removeAreaConocimiento">
      <span slot="modal-title">
        <span id="catalogos.areaConocimiento.delete.question"
          >Confirmar operación de borrado</span
        >
      </span>
      <div class="modal-body">
        <p id="catalogos-delete-area-conocimiento-heading">
          ¿Está seguro que quiere borrar esta Área de Conocimiento?
        </p>
      </div>
      <div slot="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          v-on:click="closeConfirmationDialog()"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="catalogos-confirm-delete-area-conocimiento"
          v-on:click="removeAreaConocimiento()"
        >
          Delete
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./area-conocimiento-crud.component.ts"></script>

<style scoped>
caption {
  caption-side: top;
}
</style>
