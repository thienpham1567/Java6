<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useCartStore, useProductStore } from "@/store";
import { useGlobalStore } from "@/store";

const route = useRoute();
const { getLoading } = useGlobalStore();
const { getProducts, fetchProducts } = useProductStore();
const { addUpToCart } = useCartStore();

watch(
  () => route.query,
  async toParams => {
    if(toParams.brand || toParams.category){
      await fetchProducts(toParams.brand, toParams.category);
    }
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
        md="4"
        lg="3"
      >
        <v-card max-width="500">
          <router-link
            :to="{ name: 'Product', params: { productId: product.productItemId } }"
          >
            <v-img height="400" :src="product.imageUrl?.split('|')[0]" cover></v-img>
          </router-link>
          <v-card-subtitle class="font-weight-bold">{{ product.product?.name }}</v-card-subtitle>
          <v-card-subtitle class="pt-4">
            ${{ product.price?.toFixed(2) }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
