<script setup lang="ts">
import { onMounted } from "vue";
import { ref, type Ref } from "vue";
import { useCartStore, useGlobalStore } from "@/store";
import { useRoute } from "vue-router";
import Product from "@/models/Product";
import type { ProductItemType } from "@/types/productItem";

const route = useRoute();
const { getLoading, setLoading } = useGlobalStore();
const { addUpToCart } = useCartStore();
const { productId } = route.params;
const product: Ref<ProductItemType | undefined> = ref({});

const getProductById = async () => {
  setLoading(true);
  const { data } = await new Product().detail(+productId);
  product.value = data;
  setLoading(false);
};

onMounted(getProductById);
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
      <v-col cols="12" md="7">
        <v-img cover :src="product?.imageUrl?.split('|')[0]"></v-img>
      </v-col>
      <v-col cols="12" md="5" class="content-product">
        <h1>{{ product?.product?.name }}</h1>
        <v-chip color="light-blue-darken-3" class="text-h5 font-weight-bold">${{ product?.price?.toFixed(2) }}</v-chip>
        <div class="mt-5">
          <p>Colors:</p>
        </div>
        <div class="">
          <p>Sizes:</p>
        </div>
        <v-btn color="light-blue-darken-3" size="large" class="mt-auto w-100" @click="addUpToCart(+productId, 1)">
          Add To Cart
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
