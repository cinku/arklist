<template>
  <v-app-bar density="compact" app>
    <v-app-bar-title>ArkList</v-app-bar-title>

    <v-spacer></v-spacer>

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
import AddCharacter from './AddCharacter.vue';

export default {
  components: {
    AddCharacter,
  },
  methods: {
    toggleTheme() {
      this.$emit("toggleTheme");
    },
  },
};
</script>