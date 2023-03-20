import type { ProductType } from '@/types/product';
import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

const useProductStore = defineStore('product', () => {
  // State
  const ProductList = ref<ProductType[]>([]);

  // Actions


  return { };
});

export default useProductStore;
