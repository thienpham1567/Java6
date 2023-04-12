import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { CartType } from "@/types/cart";
import type { CartItemType, CreationParams } from "@/types/cartItem";
import { computed } from "vue";
import Cart from "@/models/Cart";
import { watch } from "vue";

const useCartStore = defineStore("cart", () => {
  // State
  const cartItems: Ref<CartItemType[]> = ref([]);
  const cart: Ref<CartType> = ref({});
  const subTotalPrice: Ref<number> = ref(0);
  const totalQuantity: Ref<number> = ref(0);

  // Getters
  const getCartItems = computed(() => cartItems);
  const getSubTotalPrice = computed(() => subTotalPrice);
  const getTotalQuantity = computed(() => totalQuantity);

  // Actions
  const fetchCartItems = async () => {
    const cartIdFromLocalStorege = cart.value.cartId! ?? localStorage.getItem("cartId");
    const { data } = await new Cart().list({ cartId: cartIdFromLocalStorege! });
    cartItems.value = data!;
    subTotalPrice.value = calculateTotalSubPrice();
    totalQuantity.value = calculateTotalQuantity();
  }

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

  watch(cart, () => {
    fetchCartItems();
  });

  const calculateTotalSubPrice = (): number => cartItems.value.reduce((price,item) => price + item.price!,0);
  const calculateTotalQuantity = (): number => cartItems.value.reduce((quantity,item) => quantity + item.quantity!,0);

  return { getCartItems, getSubTotalPrice, getTotalQuantity , addUpToCart, removeItemFromCart, fetchCartItems };
});

export default useCartStore;
