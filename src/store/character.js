import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useCharacterStore = defineStore('characters', {
  state: () => ({
      chars: useStorage('chars', [
        {
          name: 'Cinko',
          class: 'Gunslinger',
          daily: ['unad-1', 'unad-2', false, 'guardian-1'],
        },
        {
          name: 'Cinka',
          class: 'Bard',
          daily: ['guardian-2', false, false],
        },
        {
          name: 'Cinkowska',
          class: 'Soulfist',
          daily: [false, false, false],
        },
        {
          name: 'Cinkos',
          class: 'Deathblade',
          daily: [false, false, false],
        },
      ]),
    }
  ),
  actions: {
    toggleDaily(charName, content) {
      const char = this.chars.find(n => n.name === charName);
      if (!char) {
        return;
      }

      if (char.daily.filter(n => n === content)) {
        char.daily = char.daily.filter(n => n !== content);
      } else {
        char.daily.push(content);
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