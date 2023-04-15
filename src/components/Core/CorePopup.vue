<script setup lang="ts">
import { ref } from "vue";

export interface CorePopupProps {
  modelId?: number | string;
  modelName?: string;
  saveModel?: () => void;
}

const corePopupProps = defineProps<CorePopupProps>();
const popup = ref(false);
</script>
<template>
  <v-dialog v-model="popup" class="core-popup">
    <template
      v-slot:activator="{ props }"
      v-if="corePopupProps.modelId !== undefined"
    >
      <v-btn color="light-blue-darken-3" v-bind="props">
        Edit {{ corePopupProps.modelName }}
      </v-btn>
    </template>
    <template v-slot:activator="{ props }" v-else>
      <v-btn color="light-blue-darken-3" v-bind="props">
        Add {{ corePopupProps.modelName }}
      </v-btn>
    </template>
    <v-card class="content">
      <slot></slot>
      <v-card-actions class="justify-end">
        <v-btn color="light-blue-darken-3" variant="outlined" @click="popup = false">Close</v-btn>
        <v-btn color="light-blue-darken-3" variant="outlined" @click="saveModel">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
