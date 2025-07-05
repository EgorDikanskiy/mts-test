import { ref } from 'vue';
import type { Option, SubmitFormPayload } from '../api';
import { fetchOptions, submitForm } from '../api';

export function useForm() {
  const options = ref<Option[]>([]);
  const isLoading = ref(false);

  async function loadOptions() {
    isLoading.value = true;
    try {
      options.value = await fetchOptions();
    } catch (e) {
      options.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  async function submit(payload: SubmitFormPayload) {
    await submitForm(payload);
  }

  return {
    options,
    isLoading,
    loadOptions,
    submit
  };
} 