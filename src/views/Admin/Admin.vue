<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let drawer = ref(true);
let rail = ref(true);

const goToBrandAdmin = () => {
  router.push({ name: "BrandAdmin" });
};

const goToCategoryAdmin = () => {
  router.push({ name: "CategoryAdmin" });
};

const goToProductAdmin = () => {
  router.push({ name: "ProductAdmin" });
};

const goToOrderAdmin = () => {
  router.push({ name: "OrderAdmin" });
};

const goToUserAdmin = () => {
  router.push({ name: "UserAdmin" });
};
</script>
<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
      color="light-blue-darken-3"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Admin"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-truck-alert"
          title="Orders"
          value="orders"
          @click="goToOrderAdmin"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-store-alert"
          title="Products"
          value="products"
          @click="goToProductAdmin"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group"
          title="Users"
          value="users"
          @click="goToUserAdmin"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-alpha-b-box"
          title="Brands"
          value="brands"
          @click="goToBrandAdmin"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-shape-plus"
          title="Categories"
          value="categories"
          @click="goToCategoryAdmin"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="ma-10">
      <router-view />
    </v-main>
  </v-layout>
</template>
