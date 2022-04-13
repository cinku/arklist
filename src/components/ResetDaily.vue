<template>
  <v-btn size="x-small" class="mr-1 ml-1" color="warning" variant="outlined" @click="characterStore.resetDaily">
    <v-icon left icon="mdi-refresh"></v-icon>
    <span>Daily</span>
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