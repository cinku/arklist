<template>
  <v-btn size="x-small" class="mr-1 ml-1" color="warning" title="Grid options" variant="outlined">
    <v-icon icon="mdi-dots-horizontal"></v-icon>
    <v-menu activator="parent" :close-on-content-click="true">
      <v-list>
        <v-list-subheader>Column Size</v-list-subheader>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          @click="setGridSize(item.size)"
        >
          <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script>
import { useGridStore } from '../store/grid';

export default {
  data: () => ({
    items: [
      { size: '50', title: 'Extra Small' },
      { size: '100', title: 'Small' },
      { size: '200', title: 'Normal' },
    ],
  }),
  setup() {
    const gridStore = useGridStore();
    return { gridStore };
  },
  methods: {
    setGridSize(size) {
      this.gridStore.setGridSize(size);
    }
  }
}
</script>