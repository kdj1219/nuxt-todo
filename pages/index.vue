<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <h1>Search iTunes</h1>
      <br>
      <v-form @submit.prevent="submit">
        <v-text-field
          v-validate="'required|max:50'"
          v-model="search"
          :error-messages="errors.collect('artist name')"
          data-vv-name="artist name"
          type="text"
          placeholder="Enter Artist Name"
          append-icon="search"
          required
          counter="50"
          color="blue"
          autofocus />
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },

  methods: {
    async submit(event) {
      let validated = await this.$validator.validateAll();
      if(validated) {
        this.$router.push(`results/${this.search}`);
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  h1
    padding: 20px 0
  div.flex
    min-width: 50%
    &>h1
      text-align: center
</style>
