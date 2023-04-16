<script setup lang="ts">
import CoreTable, { type ClickRowArgument } from "@/components/Core/CoreTable.vue";
import CorePopup from "@/components/Core/CorePopup.vue";
import { useCategoryStore, useGlobalStore } from "@/store";
import type { Header } from "vue3-easy-data-table";
import { ref, type Ref } from "vue";
import type { CategoryType } from "@/types/category";

const headers: Header[] = [
  { text: "ID", value: "categoryId" },
  { text: "PARENT CATEGORY", value: "parentCategory.name" },
  { text: "NAME", value: "name" },
];

const {
  getCategory,
  getCategories,
  getMainCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  setCategory
} = useCategoryStore();
const { setShowPopup } = useGlobalStore();

const onRowTableClick = (item: ClickRowArgument) => {
  const category = item as CategoryType;
  setCategory(category);
  setShowPopup(true);
};

</script>
<template>
  <CoreTable :headers="headers" :items="getCategories"  @on-row-click="onRowTableClick"></CoreTable>
  <CorePopup
    :model-id="getCategory.categoryId"
    model-name="Category"
    @add-model="
      addCategory({
        name: getCategory.name!,
        parentCategoryId: getCategory.parentCategory?.categoryId,
      })
    "
    @update-model="updateCategory(getCategory.categoryId!, getCategory)"
    @delete-model="deleteCategory(getCategory.categoryId!)"
  >
    <p class="text-h5 mb-5" v-if="getCategory.categoryId !== undefined">
      Edit {{ getCategory.name }}
    </p>
    <p class="text-h5 mb-5" v-else>Add Category</p>
    <v-text-field
      v-model="getCategory.name"
      label="Category name"
    ></v-text-field>
    <v-select
      v-model="getCategory.parentCategory"
      label="Select Parent Category"
      :items="getMainCategories"
      item-title="name"
      return-object
      chips
    ></v-select>
  </CorePopup>
</template>
