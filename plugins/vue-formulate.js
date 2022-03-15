import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
Vue.use(VueFormulate, {
  classes: {
    outer: ({ isGrouped }) => {
      return isGrouped ? "mb-6" : "mb-6 ";
    },
    wrapper: ({ classification }) => {
      switch (classification) {
        case "box":
          return "flex";
        default:
          return "";
      }
    },
    element: ({ classification, hasValue }) => {
      switch (classification) {
        case "group":
          return "mt-2";
        case "select":
          return !hasValue ? "text-gray-500 font-light" : "";
        default:
          return "";
      }
    },
    input: ({ classification }) => {
      switch (classification) {
        case "button":
          return "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600";
        case "group":
          return "text-blue-700";
        case "box":
          return "sr-only";
        default:
          return "inputfields";
      }
    },
    decorator: ({ hasValue }) => {
      let base = "border rounded inline-block w-4 h-4 mr-2";
      if (hasValue) {
        base += " bg-green-700";
      }
      return base;
    },
    label: "font-medium text-sm",
    help: "text-xs mb-1 text-gray-600",
    error: "text-red-700 text-xs mb-1",
    h2: "text-blue-600",
  }
});
