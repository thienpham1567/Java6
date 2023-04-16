import Brand from "@/models/Brand";
import type { UpdateParams } from "@/types/brand";
import type { BrandType, CreationParams } from "@/types/brand";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { computed } from "vue";

const useBrandStore = defineStore("brand", () => {
  // State
  const brands: Ref<BrandType[]> = ref([]);
  const brand: Ref<BrandType> = ref({});

  // Getters
  const getBrands = computed(() => brands);
  const getBrand = computed(() => brand);

  // Action
  const fetchBrands = async () => {
    const { data } = await new Brand().list();
    setBrands(data);
  };

  const addBrand = async (brand: CreationParams) => {
    const { data } = await new Brand().create(brand);
    brands.value.push(data);
  };

  const updateBrand = async (id: number, brand: UpdateParams) => {
    await new Brand().update(id, brand);
    setBrand({});
    fetchBrands();
  };

  const deleteBrand = async (id: number) => {
    await new Brand().delete(id);
    setBrand({});
    fetchBrands();
  };

  const setBrands = (newBrands: BrandType[]) => brands.value = newBrands;

  const setBrand = (newBrand: BrandType) => brand.value = newBrand;


  return { getBrand , getBrands, fetchBrands, addBrand, updateBrand, deleteBrand, setBrand };
});

export default useBrandStore;
