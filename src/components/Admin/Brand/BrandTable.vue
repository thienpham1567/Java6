<script setup lang="ts">
import CorePopup from "@/components/Core/CorePopup.vue";
import CoreTable from "@/components/Core/CoreTable.vue";
import type { Header , Item} from 'vue3-easy-data-table';
import { useBrandStore, useGlobalStore } from "@/store";
import type { BrandType } from "@/types/brand";
import type { Ref } from "vue";
import { ref } from "vue";

export type ClickRowArgument = Item & {
  isSelected?: boolean;
  indexInCurrentPage?: number;
};

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
const { getBrands, addNewBrand, updateBrand, deleteBrand } = useBrandStore();
const brand: Ref<BrandType> = ref({});

const onRowTableClick = (item: ClickRowArgument) => {
  brand.value = item as BrandType;
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
    :model-id="brand.brandId"
    model-name="Brand"
    @add-model="addNewBrand(brand)"
    @update-model="updateBrand(brand.brandId!, brand)"
    @delete-model="deleteBrand(brand.brandId!)"
  >
    <!-- <p class="text-h5 mb-5" v-if="brand?.brandId === undefined">Add Brand</p> -->
    <p class="text-h5 mb-5" v-if="brand.brandId !== undefined">Edit Brand</p>
    <p class="text-h5 mb-5" v-else>Add Brand</p>
    <v-text-field v-model="brand.name" label="Brand name"></v-text-field>
  </CorePopup>
</template>
