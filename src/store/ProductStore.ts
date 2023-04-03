import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { useGlobalStore } from "@/store";
import type { ProductType } from "@/types/product";
import Product from "@/models/Product";
import { computed } from "vue";

const useProductStore = defineStore("product", () => {
  // State
  const productList: Ref<ProductType[]> = ref([]);

  // Getters
  const getProducts = computed(() => productList);

  // Actions
  const fetchProducts = async (brand?: number, category?: number) => {
    const { getLoading, setLoading } = useGlobalStore();
    setLoading(false);
    const { data } = await new Product().list({ brand, category });
    productList.value = data;
    setLoading(true);
  };

  return { getProducts, fetchProducts };
});

export default useProductStore;
