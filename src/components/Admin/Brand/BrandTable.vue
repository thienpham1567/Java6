<script setup lang="ts">
import CorePopup from "@/components/Core/CorePopup.vue";
import CoreTable, { type ClickRowArgument } from "@/components/Core/CoreTable.vue";
import type { Header, Item } from "vue3-easy-data-table";
import { useBrandStore, useGlobalStore } from "@/store";
import type { BrandType } from "@/types/brand";

const headers: Header[] = [
  {
    text: "ID",
    value: "brandId",
  },
  {
    text: "Name",
    value: "name",
  },
];

const { setShowPopup } = useGlobalStore();
const { getBrand, getBrands, addBrand, updateBrand, deleteBrand, setBrand } = useBrandStore();

const onRowTableClick = (item: ClickRowArgument) => {
  setBrand(item as BrandType);
  setShowPopup(true);
};
</script>
<template>
  <CoreTable
    :headers="headers"
    :items="getBrands"
    @on-row-click="onRowTableClick"
  />

  <CorePopup
    :model-id="getBrand.brandId"
    model-name="Brand"
    @add-model="addBrand({ name: getBrand.name! })"
    @update-model="updateBrand(getBrand.brandId!, getBrand)"
    @delete-model="deleteBrand(getBrand.brandId!)"
  >
    <p class="text-h5 mb-5" v-if="getBrand.brandId !== undefined">
      Edit {{ getBrand.name }}
    </p>
    <p class="text-h5 mb-5" v-else>Add Brand</p>
    <v-text-field v-model="getBrand.name" label="Brand name"></v-text-field>
  </CorePopup>
</template>
