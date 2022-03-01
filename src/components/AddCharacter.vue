<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Add new character
      </v-card-title>

      <v-card-text>
        <v-text-field
          label="Character name"
          :rules="rules"
          v-model="charName"
        ></v-text-field>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="addCharacter"> I accept </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-btn size="small" class="mr-4 ml-5" color="primary" plain @click.stop="dialog = true">
    <v-icon left icon="mdi-plus"></v-icon>
    <span>Add character</span>
  </v-btn>
</template>

<script>
import { useCharacterStore } from "../store/character";

export default {
  setup() {
    const characterStore = useCharacterStore();
    return { characterStore };
  },
  data: () => ({
    dialog: false,
    charName: null,
    rules: [
      value => !!value || 'Required.',
    ],
  }),
  methods: {
    addCharacter() {
      this.characterStore.addCharacter(this.charName);
      this.dialog = false;
    }
  }
};
</script>