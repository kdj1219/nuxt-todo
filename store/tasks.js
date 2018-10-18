import Vue from 'vue';

export const state = () => ({
  tasks: [],
  newTaskName: null,
})

export const getters = {
}

export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  setNewTaskName(state, newTaskName) {
    state.newTaskName = newTaskName;
  },
  appendTask(state, task) {
    state.tasks.push(task);
  },
  setTaskDescription(state, { task, description }) {
    task.description = description;
  },
  setEditMode(state, task) {
    Vue.set(task, 'isEditMode', true);
  },
  unsetEditMode(state, task) {
    Vue.set(task, 'isEditMode', false);
  },
  removeTask(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  toggleCompleted(state, task) {
    Vue.set(task, 'completed', !task.completed);
  },
}

export const actions = {
  fetchTasksForProject({ commit }, project) {
    return this.$axios.get(`/projects/${project.id}/tasks`).then(({ data }) => {
      commit('setTasks', data);
    });
  },
  createTask({ state, commit, rootState }) {
    return this.$axios.post(`/projects/${rootState.projects.currentProject.id}/tasks`, {
      description: state.newTaskName,
    }).then(({ data }) => {
      commit('appendTask', data);
      commit('setNewTaskName', null);
    });
  },
  saveTask({ commit }, task) {
    return this.$axios.patch(`/tasks/${task.id}`, task).then(() => {
      commit('unsetEditMode', task);
    });
  },
  deleteTask({ commit }, task) {
    return this.$axios.delete(`/tasks/${task.id}`).then(() => {
      commit('removeTask', task);
    });
  },
}