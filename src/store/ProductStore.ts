import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { useGlobalStore } from "@/store";
import type { ProductType } from "@/types/product";
import Product from "@/models/Product";
import { computed } from "vue";
import type { ProductItemType } from "@/types/productItem";

const useProductStore = defineStore("product", () => {
  // State
  const productItemList: Ref<ProductItemType[]> = ref([]);

  // Getters
  const getProducts = computed(() => productItemList);

  // Actions
  const fetchProducts = async (brand?: number, category?: number) => {
    const { data } = await new Product().list({ brand, category });
    productItemList.value = data;
  };

  return { getProducts, fetchProducts };
});

export default useProductStore;
