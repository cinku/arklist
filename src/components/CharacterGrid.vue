<template>
  <div v-if="charactersNumber === 0" class="d-flex justify-center">
    <v-alert
      color="deep-orange"
      icon="mdi-fire"
      title="No characters found"
      variant="outlined"
      class="no-character-alert"
    >
      Click on the navbar to add one (or more!)
    </v-alert>
  </div>
  <div v-else class="d-flex justify-center">
    <div
      class="character-grid"
      :style="{ gridTemplateColumns: '200px ' + gridSize }"
    >
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
      <div class="full-row full-row--daily">DAILY</div>
      <template v-for="element in daily" :key="element">
        <div class="content-header content-header--daily px-5">
          <img class="content-icon mr-2" :src="getIcon(element)" />
          {{ getContentName(element) }}
        </div>
        <div class="row-wrapper row-wrapper--daily">
          <div v-for="char in characters" :key="char.name">
            <v-checkbox
              v-model="char.daily"
              color="success"
              :value="element"
              hide-details
              @click="characterStore.toggleContent(char.name, 'daily', element)"
            />
          </div>
        </div>
      </template>
      <div class="full-row full-row--daily">DAILY ACCOUNT</div>
      <template v-for="element in dailyAccount" :key="element">
        <div class="content-header content-header--daily px-5">
          <img class="content-icon mr-2" :src="getIcon(element)" />
          {{ getContentName(element) }}
        </div>
        <div class="row-wrapper row-wrapper--daily">
          <div class="affinity-row d-flex justify-center">
            <v-checkbox
              v-model="characterStore.account.daily"
              color="success"
              :value="element"
              hide-details
              @click="characterStore.toggleAccountContent('daily', element)"
            />
          </div>
        </div>
      </template>
      <div class="content-header content-header--daily px-5">
        <img class="content-icon mr-2" :src="getIcon('affinitysong')" />
        {{ getContentName("affinitysong") }}
      </div>
      <div class="row-wrapper row-wrapper--daily">
        <div class="affinity-row d-flex justify-center">
          <v-checkbox
            v-for="(_, index) in 6"
            :key="index"
            v-model="characterStore.account.affinitySong"
            color="success"
            :value="'song' + index"
            hide-details
            @click="
              characterStore.toggleAccountContent(
                'affinitySong',
                'song' + index
              )
            "
          />
        </div>
      </div>
      <div class="content-header content-header--daily px-5">
        <img class="content-icon mr-2" :src="getIcon('affinityemote')" />
        {{ getContentName("affinityemote") }}
      </div>
      <div class="row-wrapper row-wrapper--daily">
        <div class="affinity-row d-flex justify-center">
          <v-checkbox
            v-for="(_, index) in 6"
            :key="index"
            v-model="characterStore.account.affinityEmote"
            color="success"
            :value="'emote-' + index"
            hide-details
            @click="
              characterStore.toggleAccountContent(
                'affinityEmote',
                'emote-' + index
              )
            "
          />
        </div>
      </div>
      <div class="full-row full-row--weekly">WEEKLY</div>
      <template v-for="element in weekly" :key="element">
        <div class="content-header content-header--weekly px-5">
          <img class="content-icon mr-2" :src="getIcon(element)" />
          {{ getContentName(element) }}
        </div>
        <div class="row-wrapper row-wrapper--weekly">
          <div v-for="char in characters" :key="char.name">
            <v-checkbox
              v-model="char.weekly"
              color="success"
              :value="element"
              hide-details
              @click="
                characterStore.toggleContent(char.name, 'weekly', element)
              "
            />
          </div>
        </div>
      </template>
      <div class="full-row full-row--weekly">WEEKLY ACCOUNT</div>
      <template v-for="element in weeklyAccount" :key="element">
        <div class="content-header content-header--weekly px-5">
          <img class="content-icon mr-2" :src="getIcon(element)" />
          {{ getContentName(element) }}
        </div>
        <div class="row-wrapper row-wrapper--weekly">
          <div class="affinity-row d-flex justify-center">
            <v-checkbox
              v-model="characterStore.account.weekly"
              color="success"
              :value="element"
              hide-details
              @click="characterStore.toggleAccountContent('weekly', element)"
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
  unad: "Una Daily",
  chaos: "Chaos",
  guardian: "Guardian Raid",
  unaw: "Una Weekly",
  affinitysong: "Affinity Song",
  affinityemote: "Affinity Emote",
  guilds: "Guild Support",
  guildr: "Guild Research",
  ghostship: "Ghost Ship",
  island: "Adventure Island",
  fieldboss: "Field Boss",
  chaosgate: "Chaos Gate",
};

export default {
  data: () => ({
    daily: [
      "unad-1",
      "unad-2",
      "unad-3",
      "chaos-1",
      "chaos-2",
      "guardian-1",
      "guardian-2",
      "guilds",
      "guildr",
    ],
    dailyAccount: ["island", "fieldboss", "chaosgate"],
    affinity: ["affinitysong", "affinityemote"],
    weekly: ["unaw-1", "unaw-2", "unaw-3"],
    weeklyAccount: ["ghostship"],
  }),
  setup() {
    const characterStore = useCharacterStore();
    return { characterStore };
  },
  methods: {
    getIcon(element) {
      const name = element.split("-")[0];
      return new URL(`../assets/${name}.png`, import.meta.url);
    },
    dailyToggle(charName, content) {
      this.characterStore.toggleDaily(charName, content);
    },
    getContentName(content) {
      if (content.indexOf("-") !== -1) {
        const parts = content.split("-");
        const name = parts[0];
        const number = parts[1];
        return `${map[name]} #${number}`;
      } else {
        return `${map[content]}`;
      }
    },
  },
  computed: {
    characters() {
      return this.characterStore.chars;
    },
    charactersNumber() {
      return this.characterStore.chars.length;
    },
    gridSize() {
      const charNumber = this.characterStore.chars.length;
      if (charNumber < 3) {
        const size = 3 - (charNumber % 3);
        return `repeat(${charNumber}, ${size * 200}px)`;
      } else {
        return `repeat(${charNumber}, 200px)`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.character-grid {
  display: grid;
  grid-template-rows: 45px repeat(auto-fill, 30px);
}
.row-wrapper {
  display: contents;
  &--daily:hover > div {
    background: darken(#93c47d, 20%);
  }
  &--weekly:hover > div {
    background: darken(#6fa8dc, 20%);
  }
}
.content-header {
  display: flex;
  align-items: center;
  &--daily {
    background: #93c47d;
  }
  &--weekly {
    background: #6fa8dc;
  }
}
.content-icon {
  width: 24px;
  height: 24px;
}
.char-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 45px;
  position: sticky;
  top: 0;
  background: #121212;
  z-index: 3;
  border: solid 1px #676767;
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
.full-row {
  display: flex;
  justify-content: center;
  font-size: 20px;
  grid-column: 1/-1;

  &--daily {
    background: #6aa84f;
  }
  &--weekly {
    background: #3d85c6;
  }
}
.affinity-row {
  grid-column: 2 / -1;
}
</style>

<style lang="scss">
.character-grid .v-label {
  display: none !important;
  width: 0 !important;
}
.character-grid {
  .v-selection-control__wrapper, .v-checkbox .v-selection-control {
    height: 30px !important;
  }
  .v-icon--size-default {
    font-size: 1.3em !important;
  }
}

.v-selection-control {
  justify-content: center;
}

.affinity-row {
  & .v-input {
    flex: 0 0 auto;
  }
}
</style>