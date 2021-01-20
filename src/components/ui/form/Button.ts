import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
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
  },

  setup({busy, type, block, rounded, style}, {slots}) {
    return () => h(
      "button",
      {
        type,
        disabled: busy,
        class: [
          "relative",
          "py-2",
          "px-3",
          "align-middle",
          "border",
          "border-transparent",
          "cursor-pointer",
          "leading-normal",
          "text-center",
          "text-base",
          "transition-all",
          "appearance-none",
          "outline-none",
          "focus:shadow-outline",
          style,
          {
            "cursor-not-allowed opacity-50": busy,
            "rounded-md": rounded,
            "w-full": block,
          }
        ]
      },
      [
        h("span", {
          class: [
            "transition-all",
            {
              "invisible opacity-0": busy
            }
          ]
        }, slots.default()),
        h("span", {
          class: [
            "btn__loader",
            {
              "visible opacity-100": busy
            },
          ]
        })
      ]
    )
  }
})
