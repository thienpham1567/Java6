<template>
  <vue-good-table
    :columns="props.columns"
    :rows="props.rows"
    :search-options="props.search"
    :sort-options="{
      enable: props.sort,
    }"
    v-on:row-click="onRowClick"
    :fixed-header="true"
    compactMode
  ></vue-good-table>
</template>

<script setup lang="ts">
export interface Column {
  label: string;
  field: string;
  formatFn?: (value: any) => void;
}

export interface SearchOptions {
  enable: boolean;
  placeholder: string;
  searchFn: () => void;
}
export interface CoreTableProps {
  columns?: Column[];
  rows?: any;
  onRowClick?: () => void;
  search?: SearchOptions;
  sort?: boolean;
}

const props = defineProps<CoreTableProps>();
</script>
