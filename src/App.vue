<template>
  <v-app id="app" app :theme="theme">
    <Navbar @toggle-theme="toggleTheme" />
    <v-main app>
      <v-container>
        <character-grid />
      </v-container>
    </v-main>
    <v-footer v-if="characterStore.chars.length > 0" class="d-flex justify-center" app><img src="./assets/xdders.gif"></v-footer>
  </v-app>
</template>

<script>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import CharacterGrid from './components/CharacterGrid.vue';
import { useCharacterStore } from './store/character';

export default {
  components: {
    Navbar,
    CharacterGrid,
  },

  setup() {
    const theme = ref('dark');
    const characterStore = useCharacterStore();

    return {
      theme,
      characterStore,
      toggleTheme: () =>
        (theme.value = theme.value === 'light' ? 'dark' : 'light'),
    };
  },
};
</script>

<style lang="scss">
.v-application {
  min-height: 100vh;
  height: 100%;
}
.v-footer {
  flex: 0 0 auto !important;
}
</style>
