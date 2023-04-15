<script setup lang="ts">
import { useGlobalStore } from "@/store";
import { ref } from "vue";

export interface CorePopupProps {
  modelId?: number | string;
  modelName?: string;
}

const { getShowPopup, setShowPopup } = useGlobalStore();
const props = defineProps<CorePopupProps>();
const emits = defineEmits(["add-model", "update-model", "delete-model"]);

const addUpModel = () => {
  if (props.modelId !== undefined) {
    emits("update-model");
  } else {
    emits("add-model");
  }
  setShowPopup(false);
};

const deleteModel = () => {
  emits("delete-model");
  setShowPopup(false);
};
</script>
<template>
  <v-btn color="light-blue-darken-3" @click="setShowPopup(true)">
    Add {{ props.modelName }}
  </v-btn>
  <v-dialog v-model="getShowPopup" class="core-popup">
    <v-card class="content">
      <slot></slot>
      <v-card-actions class="justify-space-between">
        <div>
          <v-btn
            color="light-blue-darken-3"
            variant="outlined"
            @click="deleteModel"
            v-if="props.modelId !== undefined"
          >
            Delete
          </v-btn>
        </div>
        <div>
          <v-btn
            color="light-blue-darken-3"
            variant="outlined"
            @click="setShowPopup(false)"
          >
            Close
          </v-btn>
          <v-btn
            color="light-blue-darken-3"
            variant="outlined"
            @click="addUpModel"
          >
            Save
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
