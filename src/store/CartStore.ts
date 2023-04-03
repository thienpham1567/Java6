import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { OrderType } from "@/types/order";
import type { OrderDetailType } from "@/types/orderDetail";
import { v4 as uuidv4 } from "uuid";
import { useProductStore } from "@/store";
import { computed } from "vue";
import OrderStatus from "@/types/orderStatus";
import { getTotalPriceInOrder } from "@/utils/cart";

const useCartStore = defineStore("cart", () => {
  // State
  const orderDetails: Ref<Map<number, OrderDetailType>> = ref(new Map());
  const order: Ref<OrderType> = ref({});

  // Getters
  const myOrder = computed(() => orderDetails);

  // Actions
  const addUpToCart = (productId: number, quantity: number): void => {
    let existInCart: boolean = orderDetails.value.has(productId);
    if (existInCart) {
      let targetItem: OrderDetailType = orderDetails.value.get(productId)!;
      targetItem.quantity = targetItem?.quantity! + quantity;
    } else {
      const { getProducts } = useProductStore();
      const product = getProducts.value.find(
        product => (product.productId = productId)
      );
      let newItem: OrderDetailType = {
        productId: productId,
        quantity: quantity,
        detailPrice: product?.price! * quantity,
      };
      orderDetails.value.set(product?.productId!, newItem);
    }
  };

  const removeItemFromCart = (productId: number): void => {
    orderDetails.value.delete(productId);
  };

  const createOrder = (): OrderType => {
    return {
      orderStatusId: OrderStatus.PendingPayment,
      orderAmount: getTotalPriceInOrder(Array.from(orderDetails.value.values)),
      orderItems: Array.from(orderDetails.value.values),
    };
  };

  return { myOrder, addUpToCart, removeItemFromCart, createOrder };
});

export default useCartStore;
