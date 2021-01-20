<template>
  <span class="relative">
    <input :value="value"
           :type="type"
           :disabled="disabled"
           :aria-label="label"
           :placeholder="placeholder"
           class="rounded-md p-2 block w-full text-black leading-normal align-middle bg-gray-100 text-base bg-clip-padding appearance-none outline-none border focus:shadow-outline transition-all"/>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputField',
  emits: ['update:modelValue'],
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String
    },
    placeholder: {
      type: String
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup({value, type, disabled, name, placeholder, label}) {
    return {
      value,
      type,
      disabled,
      name,
      placeholder,
      label
    }
  }
})
</script>
