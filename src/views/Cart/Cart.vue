<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { useCartStore, useGlobalStore } from "@/store";
import CartItem from "@/components/Cart/CartItem.vue";
import type { CartItemType } from "@/types/cartItem";
import Cart from "@/models/Cart";
import { watch } from "vue";

const { getLoading } = useGlobalStore();
const { getCart, getTotalQuantity } = useCartStore();

const cartItems: Ref<CartItemType[]> = ref([]);

const removeItem = (cartItemId: number) => {
  cartItems.value = cartItems.value.filter(
    cartItem => cartItem.cartItemId !== cartItemId
  );
};

onMounted(async () => {
  const cartIdFromLocalStorege = localStorage.getItem("cartId");
  const { data } = await new Cart().list({ cartId: cartIdFromLocalStorege });
  cartItems.value = data!;
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
      <v-col cols="12" md="8">
        <v-card class="w-100">
          <v-card-title class="cart-title">
            <p>Item</p>
            <p>Price / Quantity</p>
          </v-card-title>
          <div class="items">
            <div v-for="cartItem in cartItems" :key="cartItem.cartItemId">
              <CartItem :cart-item="cartItem" @subtract-length="removeItem" />
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="ps-0">
        <v-card class="w-100" color="blue-grey-lighten-5">
          <v-card-title>Cart Summary</v-card-title>
          <v-card-text class="d-flex align-center justify-space-between">
            <p>Subtotal:</p>
            <p>${{ getCart.ItemSubtotalPrice?.toFixed(2) }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="light-blue-darken-3"
              prepend-icon="mdi-cart-outline"
              size="large"
              variant="tonal"
              block
            >
              Checkout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
