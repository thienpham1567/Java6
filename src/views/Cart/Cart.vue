<script setup lang="ts">
import { ref, type Ref } from "vue";
import { onMounted } from "vue";
import { useGlobalStore } from "@/store";

const { getLoading } = useGlobalStore();
const quantity: Ref<Number> = ref(1);

const logQuantity = () => {
  console.log(quantity.value);
};
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
            <div class="item">
              <div class="content-item">
                <img
                  src="https://m.media-amazon.com/images/I/71xmGzaTFJL._SR255,340_.jpg"
                  alt="item"
                />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="action-item">
                <p>$200</p>
                <v-select
                  v-model="quantity"
                  label="Select"
                  :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  variant="solo"
                  @update:model-value="logQuantity"
                ></v-select>
                <v-btn
                  prepend-icon="mdi-trash-can-outline"
                  color="light-blue-darken-3"
                >
                  Remove
                </v-btn>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="ps-0">
        <v-card class="w-100" color="blue-grey-lighten-5">
          <v-card-title>Cart Summary</v-card-title>
          <v-card-text class="d-flex align-center justify-space-between">
            <p>Subtotal:</p>
            <p>$333</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="light-blue-darken-3"
              prepend-icon="mdi-cart-outline"
              size="large"
              variant="tonal"
              block
            >
              My Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
