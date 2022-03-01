<template>
  <v-btn size="small" class="mr-4 ml-5" color="warning" plain @click="characterStore.resetWeekly">
    <v-icon left icon="mdi-refresh"></v-icon>
    <span>Reset Weekly</span>
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