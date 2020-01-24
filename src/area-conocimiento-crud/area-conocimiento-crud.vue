<template>
  <div>
    <form @submit.prevent novalidate class="text-left">
      <button class="btn btn-primary" v-b-modal.areaConocimientoCrud>
        <span v-text="$t('areaConocimientoCrud.add')">Agregar</span>
      </button>
    </form>
    <div class="table-responsive">
      <table class="table table-striped">
        <caption class="text-center">
          <h5 v-text="$t('areaConocimientoCrud.title')">
            Áreas de conocimiento
          </h5>
        </caption>
        <thead>
          <th scope="col" v-if="options.requiredLevel >= Level.AREA">
            <span v-text="$t('areaConocimientoCrud.area')">Área</span>
          </th>
          <th scope="col" v-if="options.requiredLevel >= Level.CAMPO">
            <span v-text="$t('areaConocimientoCrud.campo')">Campo</span>
          </th>
          <th scope="col" v-if="options.requiredLevel >= Level.DISCIPLINA">
            <span v-text="$t('areaConocimientoCrud.disciplina')"
              >Disciplina</span
            >
          </th>
          <th scope="col" v-if="options.requiredLevel >= Level.SUBDISCIPLINA">
            <span v-text="$t('areaConocimientoCrud.subdisciplina')"
              >Subdisciplina</span
            >
          </th>
          <th scope="col" v-if="options.requiredLevel >= Level.ESPECIALIDAD">
            <span v-text="$t('areaConocimientoCrud.especialidad')"
              >Especialidad</span
            >
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
      <span slot="modal-title" v-text="$t('areaConocimientoCrud.addTitle')"
        >Agregar área de conocimiento</span
      >
      <div class="modal-body">
        <form name="addAreaConocimientoForm" role="form" @submit.prevent>
          <div>
            <!--NestedSelect is a div with 'form-group' class-->
            <nested-select
              :host="options.host"
              :context="options.context"
              :hierarchy="hierarchyModel"
              v-model="model"
              :required="true"
              @complete="fullModel = $event"
            >
              <template slot="0">
                <span v-text="$t('areaConocimientoCrud.area')">Area</span>
              </template>
              <template slot="1">
                <span v-text="$t('areaConocimientoCrud.campo')">Campo</span>
              </template>
              <template slot="2">
                <span v-text="$t('areaConocimientoCrud.disciplina')"
                  >Disciplina</span
                >
              </template>
              <template slot="3">
                <span v-text="$t('areaConocimientoCrud.subdisciplina')"
                  >Subdisciplina</span
                >
              </template>
            </nested-select>
            <div v-if="$v.model.$invalid">
              <small
                class="form-text text-danger"
                v-if="!$v.model.required"
                v-text="$t('areaConocimientoCrud.validation.required')"
                >Este campo es requerido</small
              >
            </div>
            <div
              class="form-group"
              v-if="options.requiredLevel === Level.ESPECIALIDAD"
            >
              <label
                for="especialidad"
                v-text="$t('areaConocimientoCrud.especialidad')"
                >Especialidad</label
              >
              <input
                type="text"
                class="form-control"
                id="especialidad"
                name="especialidad"
                v-model.trim="especialidad"
              />
              <div v-if="$v.especialidad.$invalid">
                <small
                  class="form-text text-danger"
                  v-if="!$v.especialidad.required"
                  v-text="$t('areaConocimientoCrud.validation.required')"
                  >Este campo es requerido</small
                >
              </div>
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
          <span v-text="$t('areaConocimientoCrud.cancel')">Cancel</span>
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="confirm-add-area-conocimiento"
          :disabled="$v.model.$invalid || $v.especialidad.$invalid"
          @click="add()"
        >
          <span v-text="$t('areaConocimientoCrud.add')">Agregar</span>
        </button>
      </div>
    </b-modal>
    <b-modal ref="removeAreaConocimiento" id="removeAreaConocimiento">
      <span slot="modal-title">
        <span
          id="catalogos.areaConocimiento.delete.question"
          v-text="$t('areaConocimientoCrud.confirm.title')"
          >Confirmar operación de borrado</span
        >
      </span>
      <div class="modal-body">
        <p
          id="catalogos-delete-area-conocimiento-heading"
          v-text="$t('areaConocimientoCrud.confirm.delete')"
        >
          ¿Está seguro que quiere borrar esta Área de Conocimiento?
        </p>
      </div>
      <div slot="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          v-on:click="closeConfirmationDialog()"
        >
          <span v-text="$t('areaConocimientoCrud.cancel')">Cancel</span>
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="catalogos-confirm-delete-area-conocimiento"
          v-on:click="removeAreaConocimiento()"
        >
          <span v-text="$t('areaConocimientoCrud.delete')">Delete</span>
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
