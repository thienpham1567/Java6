<script setup lang='ts'>
import { onMounted } from 'vue';
import { ref, type Ref } from 'vue';
import { useGlobalStore } from '@/store';
import { useRoute } from 'vue-router';
import Product from "@/models/Product";
import type { ProductType } from '@/types/product';

const route = useRoute();
const { getLoading, setLoading } = useGlobalStore();
const { productId } = route.params;
const product: Ref<ProductType | undefined> = ref({});

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
    <v-progress-circular :size="60" :width="6" color="light-blue-darken-3" indeterminate></v-progress-circular>
  </div>
  <v-container v-else class="padding-y-page">
    <v-row>
      <v-col cols="12" md="7">
        <v-img cover :src="product?.imageLink"></v-img>
      </v-col>
      <v-col cols="12" md="5">
        <div class="d-flex justify-space-between">
          <div class="d-block">
            <h1>{{ product?.name }}</h1>
            <h3>{{ product?.price }}</h3>
          </div>
          <v-btn color="light-blue-darken-3" size="large" class="w-100">
            Add To Cart
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

