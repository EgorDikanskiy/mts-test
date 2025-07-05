<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
    :class="styles.input"
    v-bind="filteredAttrs"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import styles from './Input.module.scss';

function filterAttrs(attrs: Record<string, unknown>) {
  const { class: _class, ...rest } = attrs;
  return rest;
}

export default defineComponent({
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  computed: {
    styles() {
      return styles;
    },
    filteredAttrs() {
      return filterAttrs(this.$attrs);
    }
  },
  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLInputElement | null;
      this.$emit('update:modelValue', target ? target.value : '');
    }
  }
});
</script> 