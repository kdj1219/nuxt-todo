<template>
  <v-toolbar
    :clipped-left="clipped"
    :color="toolbarColor"
    fixed
    dark
    app
  >
    <v-toolbar-side-icon
      :class="textColor"
      @click="$emit('change-drawer')"
    />
    <v-toolbar-title>
      <nuxt-link
        class="title"
        to="/">
        {{ title }}
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-if="isLoggedIn"
      :class="textColor"
      flat
      @click="logout"
    >
      <v-icon class="mr-2">exit_to_app</v-icon>
      Logout
    </v-btn>
    <v-btn
      v-else
      :class="textColor"
      :to="{ name: 'login' }"
      flat>
      <v-icon class="mr-2">fingerprint</v-icon>
      Login
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "Toolbar",
    props: {
      toolbarColor: {
        type: String,
        default: '#fff'
      },
      textColor: {
        type: String,
        default: 'black--text'
      },
      clipped: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        title: 'Vue Todo Program'
      }
    },
    computed: {
      ...mapGetters('authentication', [
        'isLoggedIn',
      ]),
    },
    methods: {
      ...mapActions('authentication', [
        'logout',
      ]),
    },
  }
</script>

<style lang="sass" scoped>
.title
  text-decoration: none
  &:visited
    color: #fff
</style>