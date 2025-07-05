<template>
  <div>
    <Form
      :options="options"
      :isLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Form from './components/Form';
import { useForm } from './hooks/useForm';
import type { SubmitFormPayload } from './api';

export default defineComponent({
  name: 'App',
  components: { Form },
  setup() {
    const { options, isLoading, loadOptions, submit } = useForm();

    onMounted(() => {
      loadOptions();
    });

    async function handleSubmit(payload: SubmitFormPayload) {
      try {
        await submit(payload);
        alert('Форма отправлена успешно');
      } catch (error) {
        alert('Не удалось отправить форму');
      }
    }

    return {
      options,
      isLoading,
      handleSubmit
    };
  }
});
</script>