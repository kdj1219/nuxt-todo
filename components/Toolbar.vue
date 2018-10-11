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
      :class="textColor"
      to="/"
      icon>
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
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
  }
</script>

<style lang="sass" scoped>
.title
  text-decoration: none
  &:visited
    color: #fff
</style>