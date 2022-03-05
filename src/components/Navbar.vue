<template>
  <v-app-bar density="compact" app hidden-on-scroll>
    <v-app-bar-title>ArkList</v-app-bar-title>

    <v-spacer></v-spacer>

    <add-content />
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
import AddContent from './AddContent.vue';

export default {
  components: {
    AddCharacter,
    AddContent,
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