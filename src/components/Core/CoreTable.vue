<template>
  <div class="mb-3">
    <EasyDataTable
      :headers="headers"
      :items="items"
      @click-row="onRowClick"
      theme-color="#0277bd"
      border-cell
      buttons-pagination
    >
    <template #item-imageUrl="item">
        <v-img
          class="bg-white"
          width="200"
          aspect-ratio="16/9"
          :src="item.imageUrl.split('|')[0]"
          cover
        ></v-img>
      </template>
    </EasyDataTable>
  </div>
</template>

<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";

export interface CoreTableProps {
  headers?: Header[];
  items?: any;
}

export type ClickRowArgument = Item & {
  isSelected?: boolean;
  indexInCurrentPage?: number;
};

const onRowClick = (item: ClickRowArgument) => {
  emits("on-row-click", item);
};

const { headers, items } = defineProps<CoreTableProps>();
const emits = defineEmits(["on-row-click"]);
</script>
