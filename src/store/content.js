import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useContentStore = defineStore("content", {
  state: () => ({
    custom: useStorage("custom", {
      daily: [],
      dailyAccount: [],
      weekly: [],
      weeklyAccount: [],
    }),
  }),
  actions: {
    addCustomContent(content, type) {
      this.custom[type].push(content);
    },
    removeCustomContent(content, type) {
      this.custom[type] = this.custom[type].filter(c => c !== content);
    },
  },
});
