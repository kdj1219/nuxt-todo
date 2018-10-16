<template>
  <v-container>
    <v-layout
      row
      wrap>
      <v-flex
        xs6
        offset-xs3>
        <h1>Register</h1>
        <v-form>
          <v-text-field
            :value="registerEmail"
            label="Email"
            placeholder="Email"
            @input="setRegisterEmail" />
          <v-text-field
            :value="registerPassword"
            label="Password"
            placeholder="Password"
            type="password"
            autocomplete="new-password"
            @input="setRegisterPassword" />

          <v-alert
            :value="registerError"
            type="error">
            {{ registerError }}
          </v-alert>

          <v-btn
            color="green"
            dark
            @click="register">
            <v-icon class="mr-2">account_circle</v-icon>
            Register
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState('authentication', [
        'registerEmail',
        'registerPassword',
        'registerError',
      ]),
    },
    methods: {
      ...mapMutations('authentication', [
        'setRegisterEmail',
        'setRegisterPassword',
      ]),
      ...mapActions('authentication', [
        'register',
      ]),
    },
  };
</script>

<style scoped>

</style>
