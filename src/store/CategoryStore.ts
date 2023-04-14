import Category from "@/models/Category";
import type { CategoryType } from "@/types/category";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { computed } from "vue";

const useCategoryStore = defineStore("category", () => {
  // State
  const categories: Ref<CategoryType[]> = ref([]);

  // Getters
  const getCategories = computed(() => categories);

  // Action
  const fetchCategories = async () => {
    categories.value = (await new Category().list()).data;
  }

  return { getCategories, fetchCategories};
});

export default useCategoryStore;
