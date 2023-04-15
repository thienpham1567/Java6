import Brand from "@/models/Brand";
import type { UpdateParams } from "@/types/brand";
import type { BrandType, CreationParams } from "@/types/brand";
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
    const { data } = await new Brand().list();
    brands.value = data;
  };

  const addNewBrand = async (brand: CreationParams) => {
    const { data } = await new Brand().create(brand);
    brands.value.push(data);
  };

  const updateBrand = async (id: number, brand: UpdateParams) => {
    await new Brand().update(id, brand);
    fetchBrands();
  };

  const deleteBrand = async (id: number) => {
    await new Brand().delete(id);
    fetchBrands();
  };

  return { getBrands, fetchBrands, addNewBrand, updateBrand, deleteBrand };
});

export default useBrandStore;
