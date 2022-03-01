<template>
  <v-app-bar density="compact" app hidden-on-scroll>
    <v-app-bar-title>ArkList</v-app-bar-title>

    <v-spacer></v-spacer>

    <reset-daily v-if="characterStore.chars.length > 0" />
    <reset-weekly v-if="characterStore.chars.length > 0" />
    <add-character />

    <v-btn
      size="x-small"
      class="mr-4"
      icon="mdi-brightness-6"
      color="primary"
      @click="toggleTheme"
      plain
    >
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useCharacterStore } from '../store/character';
import AddCharacter from './AddCharacter.vue';
import ResetDaily from './ResetDaily.vue';
import ResetWeekly from './ResetWeekly.vue';

export default {
  components: {
    AddCharacter,
    ResetDaily,
    ResetWeekly,
  },
  setup() {
    const characterStore = useCharacterStore();
    return { characterStore };
  },
  methods: {
    toggleTheme() {
      this.$emit("toggleTheme");
    },
  },
};
</script>

<style lang="scss">
.v-app-bar {
  position: absolute !important;
}
</style>