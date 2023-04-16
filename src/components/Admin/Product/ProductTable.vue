<script setup lang="ts">
import CoreTable from "@/components/Core/CoreTable.vue";
import { useProductStore } from "@/store";
import { onMounted } from "vue";
import type { Header } from "vue3-easy-data-table";

const { getProducts, fetchProducts } = useProductStore();

const headers: Header[] = [
  {
    text: "PRODUCT IMAGE",
    value: "imageUrl",
    width: 200,
  },
  {
    text: "NAME",
    value: "product.name",
    sortable: true,
    width: 300,
  },
  {
    text: "COLOR",
    value: "colorId",
  },
  {
    text: "SIZE",
    value: "sizeId",
  },
  {
    text: "SKU",
    value: "sku",
  },
  {
    text: "PRICE",
    value: "price",
    sortable: true,
  },
  {
    text: "STOCK",
    value: "quantityInStock",
    sortable: true,
  },
  {
    text: "STATUS",
    value: "status",
  },
];

onMounted(fetchProducts);
</script>
<template>
  <CoreTable :headers="headers" :items="getProducts" />
</template>
