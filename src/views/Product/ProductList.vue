<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/store";
import { useGlobalStore } from "@/store";

const { getLoading } = useGlobalStore();
const { products, getList } = useProductStore();

onMounted(getList);
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
  <div v-else>
    <v-container>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <router-link :to="{ name: 'Product', params: { id: product.id } }">
            <v-card max-width="400" class="">
              <v-img height="400" :src="product.imageLink" cover></v-img>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle class="pt-4">
                {{ product.inStock }}
              </v-card-subtitle>
              <v-card-actions>
                <v-btn color="light-blue-darken-3">Quick order</v-btn>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
