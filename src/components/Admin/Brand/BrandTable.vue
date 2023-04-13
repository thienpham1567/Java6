<script setup lang='ts'>
import CoreTable from '@/components/Core/CoreTable.vue';
import type { Column } from '@/components/Core/CoreTable.vue';
import { useBrandStore } from "@/store"
import { onMounted } from 'vue';

const { getBrands, fetchBrands } = useBrandStore();
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

onMounted(fetchBrands);
</script>
<template>
  <CoreTable :columns="columns" :rows="getBrands"/>
</template>
