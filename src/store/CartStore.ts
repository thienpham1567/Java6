import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { OrderType } from "@/types/order";
import type { OrderDetailType } from "@/types/orderLine";
import { v4 as uuidv4 } from "uuid";
import { useProductStore } from "@/store";
import { computed } from "vue";
import OrderStatus from "@/enum/orderStatus";
import { watch } from "vue";

const useCartStore = defineStore("cart", () => {
  // State
  const orderItems: Ref<Map<number, OrderDetailType>> = ref(new Map());
  const order: Ref<OrderType> = ref({});
  const subtotalOrder = ref(0);

  // Getters
  const myOrder = computed(() => orderItems);
  const mySubtotalOrder = computed(() => subtotalOrder);

  watch(orderItems.value, (updatedOrder, oldOrder) => {
    let subtotal = 0;
    for (const orderItem of updatedOrder) {
      subtotal += orderItem[1].detailPrice!;
    }
    subtotalOrder.value = subtotal;
  })

  // Actions
  const addUpToCart = (productId: number, quantity: number): void => {
    let existInCart: boolean = orderItems.value.has(productId);
    const { getProducts } = useProductStore();
    const product = getProducts.value.find(
      product => (product.productId = productId)
    );
    if (existInCart) {
      let targetItem: OrderDetailType = orderItems.value.get(productId)!;
      targetItem.quantity = targetItem.quantity! + quantity;
      targetItem.detailPrice = targetItem.quantity * product?.price!;
    } else {
      let newItem: OrderDetailType = {
        productId: productId,
        quantity: quantity,
        detailPrice: product?.price! * quantity,
      };
      orderItems.value.set(product?.productId!, newItem);
    }
  };

  const removeItemFromCart = (productId: number): void => {
    orderItems.value.delete(productId);
  };

  const createOrder = (): void => {
    // const myOrder = {
    //   orderStatusId: OrderStatus.PendingPayment,
    //   orderAmount: 0,
    //   orderItems: myOrderItems.value,
    // };
    // myOrder.orderAmount = getTotalPriceInOrder(myOrder.orderItems);
    // order.value = myOrder;
  };

  return { myOrder, mySubtotalOrder, addUpToCart, removeItemFromCart, createOrder };
});

export default useCartStore;
