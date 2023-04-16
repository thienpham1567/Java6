<script setup lang="ts">
import CoreTable from "@/components/Core/CoreTable.vue";
import { useCategoryStore } from "@/store";
import type { Header } from "vue3-easy-data-table";

const {
  getCategory,
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  setCategory,
} = useCategoryStore();
const headers: Header[] = [
  {
    text: "ID",
    value: "categoryId",
  },
  {
    text: "PARENT CATEGORY",
    value: "parentCategory.name",
  },
  {
    text: "NAME",
    value: "name",
  },
];
</script>
<template>
  <CoreTable :headers="headers" :items="getCategories"></CoreTable>
</template>
