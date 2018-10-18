<template>
  <Panel :title="title">
    <transition-group
      name="task-list"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div
        v-for="task in tasks"
        :key="task.id"
        class="mt-2 task"
      >
        <EditableRecord
          :is-edit-mode="task.isEditMode"
          :id="task.id"
          :title="task.description"
          :record="task"
          @onInput="setTaskDescription({ task, description: $event })"
          @onEdit="setEditMode(task)"
          @onSave="saveTask(task)"
          @onDelete="deleteTask(task)"
        >
          <v-icon
            v-if="!task.isEditMode"
            @click="checkClicked(task)"
          >
            {{ task.completed ? 'check_box' : 'check_box_outline_blank' }}
          </v-icon>
        </EditableRecord>
      </div>
    </transition-group>
    <div
      v-if="tasks.length===0"
      class="pl-4 pr-4 pt-2 pb-2"
    >
      <slot>No Tasks</slot>
    </div>
    <CreateRecord
      :value="newTaskName"
      placeholder="I need to..."
      @onInput="setNewTaskName"
      @create="createTask"
    />
  </Panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CreateRecord from './../components/CreateRecord.vue';
import EditableRecord from './../components/EditableRecord.vue';
import Panel from '~/components/Panel.vue';

export default {
  name: 'Tasks',
  components: {
    CreateRecord,
    EditableRecord,
    Panel
  },
  props: {
    projectTitle: {
      type: String,
      default: ''
    },
  },
  computed: {
    title() {
      return `Tasks of ${this.projectTitle}`;
    },
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
  },
  mounted() {
  },
  methods: {
    ...mapMutations('tasks', [
      'setNewTaskName',
      'setTaskDescription',
      'setEditMode',
      'unsetEditMode',
      'toggleCompleted',
    ]),
    ...mapActions('tasks', [
      'createTask',
      'saveTask',
      'deleteTask',
    ]),
    checkClicked(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
  },
};
</script>

<style scoped>
  .task {
    font-size: 16px;
  }
</style>
