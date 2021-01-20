import { ref } from "vue";

export const useApi = (endpoint: string) => {
  const loading = ref(false);
  const data = ref();
  const errors = ref();

  const post = (payload?: Record<string, any>) => {
    loading.value = true;
    errors.value = undefined;
  }

  return {
    loading,
    data,
    errors,
    post,
  }
}
