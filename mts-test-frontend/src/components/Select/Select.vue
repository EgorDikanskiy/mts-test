<template>
  <select
    :value="modelValue"
    @change="onChange"
    :class="styles.select"
    v-bind="filteredAttrs"
  >
    <option :value="null" disabled selected>{{ placeholder }}</option>
    <option v-for="option in options" :key="option.id" :value="option.value">
      {{ option.title }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import styles from './Select.module.scss';

function filterAttrs(attrs: Record<string, unknown>) {
  const { class: _class, ...rest } = attrs;
  return rest;
}

export interface Option {
  id: string;
  title: string;
  value: string;
}

export default defineComponent({
  name: 'Select',
  props: {
    options: {
      type: Array as () => Option[],
      required: true
    },
    modelValue: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Выберите вариант'
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
    onChange(event: Event) {
      const target = event.target as HTMLSelectElement | null;
      this.$emit('update:modelValue', target ? target.value : null);
    }
  }
});
</script> 