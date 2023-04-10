<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { OrderDetailType } from "@/types/orderLines";
import { onMounted } from "vue";
import type { ProductType } from "@/types/product";
import Product from "@/models/Product";
import { useCartStore } from "@/store";

export interface CartItemProps {
  orderItem: OrderDetailType;
}

onMounted(async () => {
  product.value = (await new Product().detail(orderItem.productId!)).data!;
});

const { addUpToCart, removeItemFromCart } = useCartStore();
const { orderItem } = defineProps<CartItemProps>();
const product: Ref<ProductType> = ref({});
const quantity: Ref<number> = ref(1);


</script>

<template>
  <div class="item">
    <div class="content-item">
      <img
        :src="product.imageLink"
        alt="item"
      />
      <p>{{ product.name }}</p>
    </div>
    <div class="action-item">
      <p class="mb-2">${{ orderItem.detailPrice }}</p>
      <v-select
        v-model="quantity"
        label="Select"
        :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        variant="solo"
      ></v-select>
        <v-btn prepend-icon="mdi-trash-can-outline" color="light-blue-darken-3" class="mt-10" @click="removeItemFromCart(product.productId!)">
          Remove
        </v-btn>
    </div>
  </div>
</template>
