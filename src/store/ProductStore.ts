import type { ProductType, QueryProductParams } from '@/types/product';
import { defineStore } from 'pinia';
import Product from '@/models/Product';

interface ProductState {
  productList: ProductType[]
}

export default defineStore('product', {
  state: (): ProductState => ({
    productList: []
  }),

  getters: {

  },

  actions: {
    async getList(params?: QueryProductParams){
      const { data } = await new Product().list(params);
      this.productList = data
    }
  },

  // Data persistence destination
  persist: {
    key: 'product',
    storage: window.sessionStorage,
  },
});
