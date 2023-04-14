<script setup lang='ts'>
import CoreTable from '@/components/Core/CoreTable.vue';
import type { Column } from '@/components/Core/CoreTable.vue';
import { useCategoryStore } from "@/store"

const { getCategories } = useCategoryStore();
const columns: Column[] = [
  {
    label: "ID",
    field: "categoryId"
  },
  {
    label: "Parent Category",
    field: "parentCategory",
    formatFn: function(value){
      return getCategories.value.find(category => category.categoryId === value?.categoryId)?.name;
    }
  },
  {
    label: "Name",
    field: "name"
  }
]

</script>
<template>
  <CoreTable :columns="columns" :rows="getCategories"/>
</template>
