<template>
  <div class="mb-3">
    <EasyDataTable
      :headers="props.headers"
      :items="props.items"
      @click-row="onRowClick"
      theme-color="#0277bd"
      border-cell
      buttons-pagination
    />
  </div>
</template>

<script setup lang="ts">
import type { Header, Item } from 'vue3-easy-data-table';

export interface CoreTableProps {
  headers?: Header[];
  items?: any;
}

export type ClickRowArgument = Item & {
  isSelected?: boolean;
  indexInCurrentPage?: number;
};

const onRowClick = (item: ClickRowArgument) => {
  emits('on-row-click', item);
}

const props = defineProps<CoreTableProps>();
const emits = defineEmits(["on-row-click"]);
</script>
