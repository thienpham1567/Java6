import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import Product from "@/models/Product";
import { computed } from "vue";
import type { ProductItemType } from "@/types/productItem";

const useProductStore = defineStore("product", () => {
  // State
  const productItemList: Ref<ProductItemType[]> = ref([]);
  const productItem: Ref<ProductItemType> = ref({});

  // Getters
  const getProducts = computed(() => productItemList);
  const getProduct = computed(() => productItem);

  // Actions
  const fetchProducts = async (brand?: number, category?: number) => {
    const { data } = await new Product().list({ brand, category });
    productItemList.value = data;
  };

  return { getProduct, getProducts, fetchProducts };
});

export default useProductStore;
