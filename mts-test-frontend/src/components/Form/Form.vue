<template>
  <div :class="styles.formContainer">
    <div :class="styles.cornerLine"></div>
    <div :class="styles.left">
      <div :class="styles.title">Заполните форму</div>
      <div :class="styles.desc">
        На основе ваших ответов теста мы сформируем рекомендации для применения инструментов у вас в компании
      </div>
    </div>
    <div :class="styles.right">
      <Select
        v-model="selectedOption"
        :options="options"
        :placeholder="'Выберите вариант'"
      />
      <Input
        v-model="email"
        type="email"
        :placeholder="'Электронная почта'"
      />
      <Button :disabled="!selectedOption || !email" :class="styles.button" @click="onSubmit">Отправить</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';
import Button from '../Button';
import Select from '../Select';
import Input from '../Input';
import styles from './Form.module.scss';

export interface Option {
  id: string;
  title: string;
  value: string;
}

export default defineComponent({
  name: 'Form',
  components: { Button, Select, Input },
  props: {
    options: {
      type: Array as PropType<Option[]>,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['submit'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    const selectedOption = ref<string | undefined>(undefined);
    const email = ref('');

    function validateEmail(email: string): boolean {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function onSubmit() {
      if (!selectedOption.value || !email.value) return;
      if (!validateEmail(email.value)) {
        alert('Некорректный email');
        return;
      }
      
      // Найти выбранную опцию по id и получить её value
      const selectedOptionData = props.options.find(opt => opt.id === selectedOption.value);
      
      emit('submit', {
        option: selectedOptionData?.value || selectedOption.value,
        email: email.value
      });
      selectedOption.value = undefined;
      email.value = '';
    }

    return {
      selectedOption,
      email,
      onSubmit,
      styles
    };
  }
});
</script> 