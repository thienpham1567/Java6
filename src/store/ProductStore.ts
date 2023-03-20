import type { ProductType, QueryProductParams } from '@/types/product';
import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import Product from '@/models/Product';

const useProductStore = defineStore('product', () => {
  // State
  const productList : Ref<ProductType[]> = ref([]);

  //  Getters

  // Actions
  async function getList(params?: QueryProductParams){
    const { data } = await new Product().list(params);
    productList.value = data
  }

  return {productList, getList};
});

export default useProductStore;
