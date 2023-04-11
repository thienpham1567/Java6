import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { CartType } from "@/types/cart";
import type { CartItemType, CreationParams } from "@/types/cartItem";
import { v4 as uuidv4 } from "uuid";
import { useProductStore } from "@/store";
import { computed } from "vue";
import Cart from "@/models/Cart";

const useCartStore = defineStore("cart", () => {
  // State
  const cartItems: Ref<CartItemType[]> = ref([]);
  const cart: Ref<CartType> = ref({});

  // Getters
  const getCartItems = computed(() => cartItems);

  // Actions
  const addUpToCart = async (productItemId: number, quantity: number) => {
    let cartItem: CreationParams = {productItemId, cartId:cart.value.cartId ?? "", quantity};
    const { data } = await new Cart().create(cartItem);
    cart.value = data!;
    cartItems.value = cart.value.cartItems!;
  };

  const removeItemFromCart = (cartItemId: number) => {

  };

  return { getCartItems, addUpToCart, removeItemFromCart};
});

export default useCartStore;
