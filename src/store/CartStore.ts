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
  const getCart = computed(() => cart);

  const getTotalQuantity = computed(() => cart.value.ItemTotalQuantity);

  // Actions
  const addUpToCart = async (productItemId: number, quantity: number) => {
    const cartIdFromLocalStorege = localStorage.getItem("cartId");
    if (cartIdFromLocalStorege !== null) {
      let cartItem: CreationParams = {
        productItemId: productItemId,
        cartId: cartIdFromLocalStorege,
        quantity: quantity,
      };
      const { data } = await new Cart().create(cartItem);
      cart.value = data!;
    } else {
      let cartItem: CreationParams = {
        productItemId: productItemId,
        quantity: quantity,
      };
      const { data } = await new Cart().create(cartItem);
      cart.value = data!;
      localStorage.setItem("cartId", cart.value.cartId!);
    }
  };

  const removeItemFromCart = async (cartItemId: number) => {
    const cartId = cart.value.cartId! ?? localStorage.getItem("cartId");
    const { data } = await new Cart().delete(cartId,cartItemId);
    cart.value = data!;
  };

  return { getCart, getCartItems, getTotalQuantity, addUpToCart, removeItemFromCart };
});

export default useCartStore;
