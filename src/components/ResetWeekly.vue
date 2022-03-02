<template>
  <v-btn size="small" class="mr-1 ml-1" color="warning" variant="outlined" @click="characterStore.resetWeekly">
    <v-icon left icon="mdi-refresh"></v-icon>
    <span>Weekly</span>
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