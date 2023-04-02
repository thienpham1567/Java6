<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/store";
import { useGlobalStore } from "@/store";

const route = useRoute();
const { getLoading } = useGlobalStore();
const { getProducts, fetchProducts } = useProductStore();

watch(
  () => route.query,
  async toParams => {
    await fetchProducts(toParams.brand, toParams.category);
  }
);

onMounted(async () => {
  await fetchProducts(route.query.brand, route.query.category);
});
</script>

<template>
  <div v-if="getLoading" class="loading">
    <v-progress-circular
      :size="60"
      :width="6"
      color="light-blue-darken-3"
      indeterminate
    ></v-progress-circular>
  </div>
  <v-container v-else class="padding-y-page">
    <v-row>
      <v-col
        v-for="product in getProducts"
        :key="product.productId"
        cols="12"
        sm="6"
        lg="4"
      >
        <router-link
          :to="{ name: 'Product', params: { productId: product.productId } }"
          class="text-decoration-none"
        >
          <v-card max-width="500">
            <v-img height="400" :src="product.imageLink" cover></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle class="pt-4">
              ${{ product.price?.toFixed(2) }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="light-blue-darken-3">Quick order</v-btn>
            </v-card-actions>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
