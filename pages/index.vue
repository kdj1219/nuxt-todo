<template>
  <v-container class="home">
    <v-layout>
      <v-flex xs4>
        <Projects />
      </v-flex>

      <v-flex
        v-if="currentProject"
        xs8
        class="pl-4"
      >
        <!--<Tasks :projectTitle="currentProject.title"></Tasks>-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import Projects from '~/components/Projects.vue';

  // import Tasks from './../components/Tasks.vue';

  // @ is an alias to /src
  export default {
    name: 'Home',
    middleware: 'userAuth',
    components: {
      Projects,
      // Tasks,
    },
    computed: {
      ...mapState('projects', [
        'currentProject',
      ]),
    },
  };
</script>