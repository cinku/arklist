<template>
  <v-dialog v-model="dialog">
    <v-card width="300">
      <v-card-title class="text-h5 grey lighten-2">
        Add new character
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                label="Character name*"
                required
                v-model="charName"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-3">
        <v-btn color="error" size="small" text @click="dialog = false; charName = null;">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" size="small" :disabled="charName === null" text @click="addCharacter">Add</v-btn>
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
  }),
  methods: {
    addCharacter() {
      console.log(this.characterStore.chars);
      // if (this.characterStore.chars.any(n => n.name === this.charName)) {
      //   this.dialog = false;
      //   return; 
      // }
      this.characterStore.addCharacter(this.charName);
      this.dialog = false;
    }
  }
};
</script>