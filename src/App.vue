<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, markRaw, watch } from 'vue'
import { BasicLayout } from "@scaling-ui/layouts";
import { useRoute } from "vue-router";

export default defineComponent({
  name: 'App',

  setup() {
    const layout = markRaw(BasicLayout)
    const route = useRoute()

    watch(
        () => route.meta,
        async meta => {
          try {
            const component = await import(/* @vite-ignore */`@scaling-ui/layouts/${meta.layout}`)
            layout.value = component?.default || BasicLayout
          } catch (e) {
            layout.value = BasicLayout
          }
        },
        { immediate: true }
    )

    return { layout }
  }
})
</script>
