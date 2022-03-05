<template>
  <v-dialog v-model="dialog">
    <v-card width="300">
      <v-card-title class="text-h5 grey lighten-2">
        Add new custom content
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Content name*"
                required
                v-model="contentName"
                @keyup.enter="addContent"
                autofocus
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-radio-group v-model="contentType" mandatory>
                <v-radio v-for="type of contentTypes" color="primary" :key="type.value" :label="type.name" :value="type.value"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-3">
        <v-btn
          color="error"
          size="small"
          text
          @click="
            dialog = false;
            contentName = null;
          "
          >Cancel</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          size="small"
          :disabled="contentName === null"
          text
          @click="addContent"
          >Add</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-btn
    size="small"
    class="mr-4 ml-5"
    color="primary"
    plain
    @click.stop="dialog = true"
  >
    <v-icon left icon="mdi-plus"></v-icon>
    <span>Add content</span>
  </v-btn>
</template>

<script>
import { useContentStore } from "../store/content";

export default {
  setup() {
    const contentStore = useContentStore();
    return { contentStore };
  },
  data: () => ({
    dialog: false,
    contentName: null,
    contentType: 'daily',
    contentTypes: [
      {
        name: 'Daily',
        value: 'daily',
      },
      {
        name: 'Daily Account',
        value: 'dailyAccount',
      },
      {
        name: 'Weekly',
        value: 'weekly',
      },
      {
        name: 'Weekly Account',
        value: 'weeklyAccount',
      },
    ]
  }),
  methods: {
    addContent() {
      if (this.contentStore.custom[this.contentType].some(n => n === this.contentName)) {
        this.dialog = false;
        return;
      }
      this.contentStore.addCustomContent(this.contentName, this.contentType);
      this.dialog = false;
      this.contentName = null;
    }
  }
};
</script>