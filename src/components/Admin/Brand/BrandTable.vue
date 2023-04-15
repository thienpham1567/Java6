<script setup lang="ts">
import CorePopup from "@/components/Core/CorePopup.vue";
import CoreTable from "@/components/Core/CoreTable.vue";
import type { Column } from "@/components/Core/CoreTable.vue";
import { useBrandStore } from "@/store";
import type { BrandType } from "@/types/brand";
import type { Ref } from "vue";
import { ref } from "vue";

const columns: Column[] = [
  {
    label: "ID",
    field: "brandId",
  },
  {
    label: "Name",
    field: "name",
  },
];
const brand: Ref<BrandType> = ref({});
const { getBrands } = useBrandStore();
</script>
<template>
  <CoreTable :columns="columns" :rows="getBrands" />

  <CorePopup model-name="Brand">
    <p class="text-h5 mb-5" v-if="brand.brandId === undefined">Add Brand</p>
    <p class="text-h5 mb-5" v-else>Edit Brand</p>
    <v-text-field v-model="brand.name" label="Brand name"></v-text-field>
  </CorePopup>
</template>
