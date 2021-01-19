<template>
  <button :disabled="busy" class="relative px-3 py-2 transition-all"
          :class="{ 'w-full': block, 'rounded': rounded, 'is-loading': busy }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  busy: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "submit"
  },
  block: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  style: {
    type: String,
    default: "bg-blue-500 hover:bg-blue-400 text-white"
  }
})
</script>
