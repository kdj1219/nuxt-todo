<template>
  <v-container class="home">
    <no-ssr placeholder="Loading...">
      <v-layout>
        <v-flex xs4>
          <Projects />
        </v-flex>

        <v-flex
          v-if="currentProject"
          xs8
          class="pl-4"
        >
          <Tasks :project-title="currentProject.title" />
        </v-flex>
      </v-layout>
    </no-ssr>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import Projects from '~/components/Projects.vue';
  import Tasks from '~/components/Tasks.vue';

  // @ is an alias to /src
  export default {
    name: 'Home',
    middleware: 'userAuth',
    components: {
      Projects,
      Tasks,
    },
    computed: {
      ...mapState('projects', [
        'currentProject',
      ]),
    },
  };
</script>