<script setup lang="ts">
import { ref, type Ref } from "vue";
import { onMounted } from "vue";
import Product from "@/models/Product";
import { useCartStore } from "@/store";
import type { CartItemType } from "@/types/cartItem";
import type { ProductItemType } from "@/types/productItem";

export interface CartItemProps {
  cartItem: CartItemType;
}

onMounted(async () => {
  product.value = (await new Product().detail(cartItem?.productItemId!)).data!;
});

const { addUpToCart, removeItemFromCart } = useCartStore();
const { cartItem } = defineProps<CartItemProps>();
const product: Ref<ProductItemType> = ref({});

</script>

<template>
  <div class="item">
    <div class="content-item">
      <img :src="product.imageUrl?.split('|')[0]" alt="item" />
      <p>{{ product.product?.name }}</p>
    </div>
    <div class="action-item">
      <p class="mb-2">${{ cartItem.price }}</p>
      <v-select
        v-model="cartItem.quantity"
        label="Select"
        :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        variant="solo"
        @update:model-value="addUpToCart(cartItem.productItemId!,cartItem.quantity!)"
      ></v-select>
      <v-btn
        prepend-icon="mdi-trash-can-outline"
        color="light-blue-darken-3"
        class="mt-10"
        @click="removeItemFromCart(cartItem.cartItemId!)"
      >
        Remove
      </v-btn>
    </div>
  </div>
</template>
