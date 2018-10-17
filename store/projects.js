export const state = () => ({
  projects: [],
  newProjectName: null,
  currentProject: null,
})

export const getters = {
}

export const mutations = {
  setCurrentProject(state, project) {
    state.currentProject = project;
  },
  setNewProjectName(state, name) {
    state.newProjectName = name;
  },
  appendProject(state, project) {
    state.projects.push(project);
  },
  removeProject(state, project) {
    state.projects.splice(state.projects.indexOf(project), 1);
  },
  setProjects(state, projects) {
    state.projects = projects;
  },
  setProjectTitle(state, { project, title }) {
    project.title = title;
  },
  setEditMode(state, project) {
    Vue.set(project, 'isEditMode', true);
  },
  unsetEditMode(state, project) {
    Vue.set(project, 'isEditMode', false);
  },
}

export const actions = {
  fetchProjects({ commit }) {
    return this.$axios.get('/projects').then(({ data }) => {
      commit('setProjects', data);
    });
  },
  createProject({ state, commit }) {
    return this.$axios.post('/projects', {
      title: state.newProjectName,
    }).then(({ data }) => {
      commit('appendProject', data);
      commit('setNewProjectName', null);
    });
  },
  saveProject({ commit }, project) {
    return this.$axios.patch(`/projects/${project.id}`, project).then(() => {
      commit('unsetEditMode', project);
    });
  },
  deleteProject({ commit }, project) {
    return this.$axios.delete(`/projects/${project.id}`).then(() => {
      commit('removeProject', project);
    });
  },
}