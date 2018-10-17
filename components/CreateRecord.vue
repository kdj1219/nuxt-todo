<template>
  <v-layout
    row
    wrap
    class="mt-4"
  >
    <v-flex xs8>
      <v-text-field
        :placeholder="placeholder"
        :value="value"
        @input="$emit('onInput', $event)"
        @keyup.enter="$emit('create')"
      />
    </v-flex>
    <v-flex
      xs4
      class="text-xs-right"
    >
      <v-btn
        dark
        class="mt-2"
        color="blue"
        @click="$emit('create')"
      >
        <v-icon class="mr-2">add_circle</v-icon>
        Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CreateRecord',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>

</style>
