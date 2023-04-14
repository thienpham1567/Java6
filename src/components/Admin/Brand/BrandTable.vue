<script setup lang='ts'>
import CoreTable from '@/components/Core/CoreTable.vue';
import type { Column } from '@/components/Core/CoreTable.vue';
import { useBrandStore } from "@/store"

const { getBrands } = useBrandStore();
const columns: Column[] = [
  {
    label: "ID",
    field: "brandId"
  },
  {
    label: "Name",
    field: "name"
  }
]

</script>
<template>
  <CoreTable :columns="columns" :rows="getBrands"/>
</template>
