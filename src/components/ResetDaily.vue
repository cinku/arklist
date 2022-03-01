<template>
  <v-btn size="small" class="mr-4 ml-5" color="warning" plain @click="characterStore.resetDaily">
    <v-icon left icon="mdi-refresh"></v-icon>
    <span>Reset Daily</span>
  </v-btn>
</template>

<script>
import { useCharacterStore } from "../store/character";

export default {
  setup() {
    const characterStore = useCharacterStore();
    return { characterStore };
  },
};
</script>

<style lang="scss">
.v-theme--dark .v-field__input {
  color: white !important;
}
</style>