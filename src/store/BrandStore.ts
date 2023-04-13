import Brand from "@/models/Brand";
import type { BrandType } from "@/types/brand";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { computed } from "vue";

const useBrandStore = defineStore("brand", () => {
  // State
  const brands: Ref<BrandType[]> = ref([]);

  // Getters
  const getBrands = computed(() => brands);

  // Action
  const fetchBrands = async () => {
    brands.value = (await new Brand().list()).data;
    console.log(brands.value);

  }

  return { getBrands , fetchBrands};
});

export default useBrandStore;
