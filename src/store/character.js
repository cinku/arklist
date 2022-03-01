import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useCharacterStore = defineStore('characters', {
  state: () => ({
      chars: useStorage('chars', [
        {
          name: 'Cinko',
          class: 'Gunslinger',
          daily: ['unad-1', 'unad-2', false, 'guardian-1'],
          weekly: [],
        },
        {
          name: 'Cinka',
          class: 'Bard',
          daily: ['guardian-2', false, false],
          weekly: [],
        },
        {
          name: 'Cinkowska',
          class: 'Soulfist',
          daily: [false, false, false],
          weekly: [],
        },
        {
          name: 'Cinkos',
          class: 'Deathblade',
          daily: [false, false, false],
          weekly: [],
        },
      ]),
      account: useStorage('account', {
        daily: [],
        weekly: [],
        affinitySong: [],
        affinityEmote: [],
      })
    }
  ),
  actions: {
    toggleContent(charName, type, content) {
      const char = this.chars.find(n => n.name.toLowerCase() === charName.toLowerCase());
      if (!char) {
        return;
      }

      if (char[type].filter(n => n === content)) {
        char[type] = char[type].filter(n => n !== content);
      } else {
        char[type].push(content);
      }
    },
    toggleAccountContent(type, content) {
      if (this.account[type].filter(n => n === content)) {
        this.account[type] = this.account[type].filter(n => n !== content);
      } else {
        this.account[type].push(content);
      }
    },
    addCharacter(charName) {
      this.chars.push({
        name: charName,
        class: 'Gunslinger',
        daily: [],
      })
    },
    removeCharacter(charName) {
      this.chars = this.chars.filter(char => char.name !== charName);
    }
  },
});