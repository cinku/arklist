<template>
  <v-app :theme="theme">
    <v-layout>
      <Navbar @toggle-theme="toggleTheme" />
      <v-main>
        <v-container>
          <character-grid />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import CharacterGrid from './components/CharacterGrid.vue';

export default {
  components: {
    Navbar,
    CharacterGrid,
  },

  setup() {
    const theme = ref('dark');

    return {
      theme,
      toggleTheme: () =>
        (theme.value = theme.value === 'light' ? 'dark' : 'light'),
    };
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>
