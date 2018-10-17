<template>
  <Panel title="Projects">
    <transition-group
      name="project-list"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight">
      <div
        v-for="project in projects"
        :key="project.id"
        class="mt-2 project"
      >
        <EditableRecord
          :is-edit-mode="project.isEditMode"
          :id="project.id"
          :title="project.title"
          :record="project"
          @onInput="setProjectTitle({ project, title: $event })"
          @onEdit="setEditMode(project)"
          @onSave="saveProject(project)"
          @onDelete="deleteProject(project)"
          @onClick="projectClicked(project)"
        />
      </div>
    </transition-group>
    <CreateRecord
      :value="newProjectName"
      placeholder="My project name..."
      @onInput="setNewProjectName"
      @create="createProject"
    />
  </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import CreateRecord from '~/components/CreateRecord.vue';
import EditableRecord from '~/components/EditableRecord.vue';
import Panel from '~/components/Panel.vue';

export default {
  name: 'Projects',
  components: {
    CreateRecord,
    EditableRecord,
    Panel,
  },

  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },

  mounted() {
    this.fetchProjects();
  },

  methods: {
    projectClicked(project) {
      this.setCurrentProject(project);
      // this.fetchTasksForProject(project);
    },
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
      'setCurrentProject',
    ]),
    ...mapActions('projects', [
      'createProject',
      'saveProject',
      'deleteProject',
      'fetchProjects',
    ]),
    // ...mapActions('tasks', [
    //   'fetchTasksForProject',
    // ]),
  },
};
</script>

<style scoped>
  .project {
    font-size: 24px;
  }
</style>
