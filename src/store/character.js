import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCharacterStore = defineStore("characters", {
  state: () => ({
    chars: useStorage("chars", []),
    account: useStorage("account", {
      daily: [],
      weekly: [],
      affinitySong: [],
      affinityEmote: [],
    }),
  }),
  actions: {
    toggleContent(charName, type, content) {
      const char = this.chars.find(
        (n) => n.name.toLowerCase() === charName.toLowerCase()
      );
      if (!char) {
        return;
      }

      if (char[type].filter((n) => n === content)) {
        char[type] = char[type].filter((n) => n !== content);
      } else {
        char[type].push(content);
      }
    },
    toggleAccountContent(type, content) {
      if (this.account[type].filter((n) => n === content)) {
        this.account[type] = this.account[type].filter((n) => n !== content);
      } else {
        this.account[type].push(content);
      }
    },
    addCharacter(charName) {
      this.chars.push({
        name: charName,
        class: "Gunslinger",
        daily: [],
        weekly: [],
      });
    },
    removeCharacter(charName) {
      this.chars = this.chars.filter((char) => char.name !== charName);
    },
    resetDaily() {
      this.account = {
        ...this.account,
        daily: [],
        affinityEmote: [],
        affinitySong: [],
      };
      
      this.chars = this.chars.map((char) => ({
        ...char,
        daily: [],
      }));
    },
    resetWeekly() {
      this.account = {
        ...this.account,
        weekly: [],
      };

      this.chars = this.chars.map((char) => ({
        ...char,
        weekly: [],
      }));
    },
  },
});
