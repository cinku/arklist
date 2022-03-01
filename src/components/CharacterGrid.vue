<template>
  <div class="d-flex justify-center">
    <div class="character-grid" :style="{ gridTemplateColumns: '150px repeat(' + charactersNumber + ', 200px)' }">
      <div></div>
      <div class="char-header" v-for="char in characters" :key="char.name">
        <span class="char-name" :title="char.name">{{ char.name }}</span>
        <v-icon
          size="small"
          icon="mdi-close-octagon"
          color="error"
          class="char-remove-icon"
          @click="characterStore.removeCharacter(char.name)"
        >
        </v-icon>
      </div>
      <template v-for="element in content" :key="element">
        <div class="row-wrapper content-wrapper">
          <div class="content-header">
            <img class="content-icon mr-2" :src="getIcon(element)">
            {{ getContentName(element) }}
          </div>
          <div v-for="char in characters" :key="char.name">
            <v-checkbox
              v-model="char.daily"
              color="success"
              :value="element"
              hide-details
              @click="dailyToggle(char.name, element)"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { useCharacterStore } from "../store/character";

const map = {
  'unad': 'Una Daily',
  'chaos': 'Chaos',
  'guardian': 'Guardian Raid',
}

export default {
  data: () => ({
    content: [
      "unad-1",
      "unad-2",
      "unad-3",
      "chaos-1",
      "chaos-2",
      "guardian-1",
      "guardian-2",
    ],
  }),
  setup() {
    const characterStore = useCharacterStore();
    return { characterStore };
  },
  methods: {
    getIcon(element) {
      const name = element.split('-')[0];
      return new URL(`../assets/${name}.png`, import.meta.url)
    },
    dailyToggle(charName, content) {
      this.characterStore.toggleDaily(charName, content);
    },
    getContentName(content) {
      const parts = content.split('-');
      const name = parts[0];
      const number = parts[1];
      return `${map[name]} #${number}`;
    }
  },
  computed: {
    characters() {
      return this.characterStore.chars;
    },
    charactersNumber() {
      return this.characterStore.chars.length;
    }
  },
};
</script>

<style lang="scss" scoped>
.character-grid {
  display: grid;
}
// div {
//   border: 1px solid red;
// }
.row-wrapper {
  display: contents;
  &:hover > div {
    background: orange;
  }
}
.content-wrapper {
  display: contents;
  & > div {
    background: #93c47d;
  }
}
.content-header {
  display: flex;
  align-items: center;
}
.content-icon {
  width: 32px;
  height: 32px;
}
.char-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 45px;
}
.char-name {
  max-width: 90px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.char-remove-icon {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>

<style lang="scss">
.v-label {
  display: none !important;
  width: 0 !important;
}

.v-selection-control {
  justify-content: center;
}
</style>