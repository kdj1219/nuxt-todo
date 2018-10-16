<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <toolbar
      :toolbar-color="toolbarColor"
      :text-color="textColor"
      @change-drawer="drawer = !drawer"
    />
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Toolbar from '~/components/Toolbar.vue';

    export default {
      components: {
        Toolbar
      },

      data() {
        return {
          toolbarColor: 'blue',
          textColor: 'white--text',
          clipped: false,
          drawer: false,
          fixed: false,
          miniVariant: false,
          right: true,
          rightDrawer: false,
        }
      },

      computed: {
        ...mapGetters('authentication', [
          'isLoggedIn',
        ]),
        items() {
          if(this.isLoggedIn) {
            return [
              { icon: 'playlist_add_check', title: 'Projects', to: '/' },
            ]
          }
          return [
            { icon: 'person_add', title: 'Register', to: '/register' },
            { icon: 'fingerprint', title: 'Login', to: '/login' }
          ]
        }
      },

      mounted () {
        this.$validator.localize('en')
      },
    }
</script>
