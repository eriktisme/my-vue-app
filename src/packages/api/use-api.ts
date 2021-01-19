import { ref } from "vue";

export const useApi = (endpoint: string) => {
  const loading = ref(true);
  const data = ref();
  const error = ref();

  const post = (payload?: Record<string, any>) => {
    console.log('call api endpoint')
  }

  return {
    loading,
    data,
    error,
    post,
  }
}
