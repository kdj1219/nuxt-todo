<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs9
      class="text-xs-left"
    >
      <slot />
      <transition-group
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
      >
        <span
          v-if="!isEditMode"
          :key="id"
          :class="{ 'record-delete': record.completed }"
          class="record-title"
          @click="$emit('onClick')"
        >
          {{ title }}
        </span>
        <v-text-field
          v-else
          :value="title"
          :key="id"
          autofocus
          @input="$emit('onInput', $event)"
          @keyup.enter="$emit('onSave')"
        />
      </transition-group>
    </v-flex>
    <v-flex
      xs3
      class="text-xs-right"
    >
      <v-icon
        v-if="!isEditMode"
        @click="$emit('onEdit')"
      >
        edit
      </v-icon>
      <v-icon
        v-else
        class="check-icon"
        @click="$emit('onSave')"
      >
        check
      </v-icon>
      <v-icon @click="$emit('onDelete')">
        delete
      </v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'EditableRecord',
  props: {
    isEditMode: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    record: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
  .record-title {
    cursor: pointer;
  }
  .check-icon {
    font-size: 28px;
    margin-top: 20px;
  }
  .v-icon:hover {
    color: #333;
  }
  .record-delete {
    text-decoration: line-through;
    color: gray;
  }
</style>
