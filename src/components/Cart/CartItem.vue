<script setup lang="ts">
import { ref, type Ref } from "vue";
import { onMounted } from "vue";
import type { ProductType } from "@/types/product";
import Product from "@/models/Product";
import { useCartStore } from "@/store";
import type { CartItemType } from "@/types/cartItem";
import type { ProductItemType } from "@/types/productItem";
import Cart from "@/models/Cart";

export interface CartItemProps {
  cartItem: CartItemType;
}

export interface CartItemEmits {
  (event: "subtract-length", cartItemId: number): void;
}

onMounted(async () => {
  product.value = (await new Product().detail(cartItem?.productItemId!)).data!;
});

const { addUpToCart, removeItemFromCart } = useCartStore();
const { cartItem } = defineProps<CartItemProps>();
const emit = defineEmits<CartItemEmits>();
const product: Ref<ProductItemType> = ref({});
const quantity: Ref<number> = ref(1);

const removeItem = (cartItemId: number) => {
  removeItemFromCart(cartItemId);
  emit("subtract-length", cartItemId);
};
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
        v-model="quantity"
        label="Select"
        :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        variant="solo"
      ></v-select>
      <v-btn
        prepend-icon="mdi-trash-can-outline"
        color="light-blue-darken-3"
        class="mt-10"
        @click="removeItem(cartItem.cartItemId!)"
      >
        Remove
      </v-btn>
    </div>
  </div>
</template>
