<template>
  <v-container>
    <v-layout
      row
      wrap>
      <v-flex
        xs6
        offset-xs3>
        <h1>Login</h1>
        <v-form>
          <v-text-field
            :value="loginEmail"
            label="Email"
            placeholder="Email"
            @keyup.enter="login"
            @input="setLoginEmail" />
          <v-text-field
            :value="loginPassword"
            label="Password"
            placeholder="Password"
            type="password"
            autocomplete="new-password"
            @keyup.enter="login"
            @input="setLoginPassword" />

          <v-alert
            :value="loginError"
            type="error">
            {{ loginError }}
          </v-alert>

          <v-btn
            color="green"
            dark
            @click="login">
            <v-icon class="mr-2">fingerprint</v-icon>
            Login
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapState('authentication', [
        'loginEmail',
        'loginPassword',
        'loginError',
      ]),
    },
    beforeCreate() {
      if(this.$store.getters['authentication/isLoggedIn']) {
        this.$router.push('/');
      }
    },
    methods: {
      ...mapMutations('authentication', [
        'setLoginEmail',
        'setLoginPassword',
      ]),
      ...mapActions('authentication', [
        'login',
      ]),
    },
  };
</script>

<style scoped>

</style>
