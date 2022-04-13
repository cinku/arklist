import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useGridStore = defineStore("grid", {
  state: () => ({
    size: useStorage("gridSize", 200),
  }),
  actions: {
    setGridSize(size) {
      this.size = size;
    },
  },
});
