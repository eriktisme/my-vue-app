import { defineComponent, h } from "vue";

export const Card = defineComponent({
  setup(_, { slots }) {
    return () => h(
      "div",
      {
        class: [
          "bg-white",
          "rounded",
          "border",
          "border-gray-200",
        ]
      },
      slots.default()
    )
  }
})
