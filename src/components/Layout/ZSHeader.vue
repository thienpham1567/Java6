<script setup lang="ts">
import { ref, type Ref } from "vue";

const services: Ref<{ [key: string]: string }[]> = ref([
  { title: "Contact Info" },
  { title: "FAQ" },
  { title: "Give Us Feedback" },
]);
const subCategories: Ref<string[]> = ref(["Shop all shoes"]);
const brands: Ref<string[]> = ref(["Nike", "Puma", "Adidas"]);
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
    <img class="logo" src="../../assets/img/zapsoonlogo.png" alt="Zapsoon" />
    <div class="search-cart">
      <v-text-field label="Search">
        <template v-slot:prepend-inner-icon>
          <span class="mdi mdi-magnify"></span>
        </template>
      </v-text-field>
      <div class="cart-btn text-right">
        <v-btn
          color="light-blue-darken-3"
          prepend-icon="mdi-cart-outline"
          size="large"
        >
          My Cart
        </v-btn>
      </div>
    </div>
  </header>
  <nav class="nav-menu padding-x-page">
    <div class="menu">
      <v-menu>
        <template v-slot:activator="{ props }">
          <div v-bind="props" class="menu-item">
            <p>Women</p>
            <span class="mdi mdi-arrow-down-thin"></span>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="item in subCategories" :key="item" :value="item">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu>
        <template v-slot:activator="{ props }">
          <div v-bind="props" class="menu-item">
            <p>Men</p>
            <span class="mdi mdi-arrow-down-thin"></span>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="item in subCategories" :key="item" :value="item">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu>
        <template v-slot:activator="{ props }">
          <div v-bind="props" class="menu-item">
            <p>Kids</p>
            <span class="mdi mdi-arrow-down-thin"></span>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="item in subCategories" :key="item" :value="item">
            <v-list-item-title>{{ item }}</v-list-item-title>
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
          <v-list-item v-for="item in brands" :key="item" :value="item">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <p>Sign In / Register</p>
  </nav>
</template>
