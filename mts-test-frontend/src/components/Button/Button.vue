<template>
  <button :type="type as 'button' | 'submit' | 'reset'" :disabled="disabled" :class="styles.mts__btn" v-bind="$attrs">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import styles from './Button.module.scss';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles() {
      return styles;
    }
  }
});
</script>

<style scoped>
.mts-btn {
  padding: 8px 16px;
  background: #e60000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}
.mts-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style> 