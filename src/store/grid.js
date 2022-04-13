import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useGridStore = defineStore("grid", {
  state: () => ({
    size: useStorage("gridSize", "m"),
  }),
  actions: {
    setGridSize(size) {
      this.size = size;
    },
  },
});
