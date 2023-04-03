import type { OrderDetailType } from "@/types/orderDetail";

export const getTotalPriceInOrder = (orderDetails: Array<OrderDetailType>): number => {
  return orderDetails.reduce((accumulator, currentValue) => accumulator + currentValue.detailPrice!, 0);
};
