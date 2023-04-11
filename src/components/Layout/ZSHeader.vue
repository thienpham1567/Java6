<script setup lang="ts">
import { onMounted } from "vue";
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import Brand from "@/models/Brand";
import Category from "@/models/Category";
import type { BrandType } from "@/types/brand";
import type { CategoryType } from "@/types/category";
import LoginRegister from "@/components/Dialog/LoginRegister.vue";
import { useCartStore } from "@/store";

const router = useRouter();
const services: Ref<{ [key: string]: string }[]> = ref([
  { title: "Contact Info" },
  { title: "FAQ" },
  { title: "Give Us Feedback" },
]);

const categories: Ref<CategoryType[]> = ref([]);
let mainCategories:Ref<any> = ref([]);
const brands: Ref<BrandType[]> = ref([]);
const loginRegisterDialog: Ref<boolean> = ref(false);
const { getTotalQuantity } = useCartStore();

const closeDialog = () => {
  loginRegisterDialog.value = !loginRegisterDialog.value;
};

const gotoProduct = (brand?: number, category?: number) => {
  router.push({
    name: "Products",
    query: { category: category, brand: brand },
  });
};

const goToCart = () => {
  router.push("/cart");
};

const fetchData = async () => {
  categories.value = (await new Category().list()).data;
  brands.value = (await new Brand().list()).data;
  createCategories();
};

const createCategories = () => {
  mainCategories.value = [categories.value[0],categories.value[1],categories.value[2]];
  for (const category1 of mainCategories.value) {
    category1.children = categories.value.filter(category2 => category2.parentCategory?.categoryId === category1.categoryId);
  }
}

onMounted(fetchData);
</script>

<template>
  <div class="top-header padding-x-page">
    <v-menu>
      <template v-slot:activator="{ props }">
        <div class="text-menu">
          <p v-bind="props">
            <strong>Customer Services</strong>
            <span class="mdi mdi-arrow-down-right"></span>
          </p>
        </div>
      </template>
      <v-list>
        <v-list-item
          v-for="service in services"
          :key="service.title"
          :value="service"
        >
          <v-list-item-title>{{ service.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <p class="text-right">
      Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day
      Return Policy!
      <strong>More About Shipping &amp; Returns</strong>
    </p>
  </div>
  <header class="header padding-x-page">
    <router-link to="/">
      <div class="logo">
        <img src="../../assets/img/zapsoonlogo.png" alt="Zapsoon" />
      </div>
    </router-link>
    <div class="search">
      <v-text-field label="Search" variant="outlined">
        <template v-slot:prepend-inner-icon>
          <span class="mdi mdi-magnify"></span>
        </template>
      </v-text-field>
      <div class="cart-btn text-right">
        <v-btn
          color="light-blue-darken-3"
          prepend-icon="mdi-cart-outline"
          size="large"
          variant="tonal"
          @click="goToCart"
        >
          My Cart ({{ getTotalQuantity }})
        </v-btn>
      </div>
    </div>
  </header>
  <nav class="nav-menu padding-x-page">
    <div class="menu">
      <v-menu v-for="category in mainCategories" :key="category.categoryId">
        <template v-slot:activator="{ props }">
          <div v-bind="props" class="menu-item">
            <p>{{ category.name }}</p>
            <span class="mdi mdi-arrow-down-thin"></span>
          </div>
        </template>
        <v-list>
          <v-list-item
            v-for="child in category.children"
            :key="child.categoryId"
            :value="child.name"
            @click="gotoProduct(undefined, child.categoryId)"
          >
            <v-list-item-title>{{ child.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu>
        <template v-slot:activator="{ props }">
          <div v-bind="props" class="menu-item">
            <p>Brands</p>
            <span class="mdi mdi-arrow-down-thin"></span>
          </div>
        </template>
        <v-list>
          <v-list-item
            v-for="brand in brands"
            :key="brand.brandId"
            :value="brand"
            @click="gotoProduct(brand.brandId, undefined)"
          >
            <v-list-item-title>{{ brand.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-dialog v-model="loginRegisterDialog" width="auto">
      <template v-slot:activator="{ props }">
        <p v-bind="props">Sign In / Register</p>
      </template>
      <LoginRegister @close-dialog="closeDialog" />
    </v-dialog>
  </nav>
</template>
