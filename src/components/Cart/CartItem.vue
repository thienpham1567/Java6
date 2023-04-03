<script setup lang="ts">
import { ref, type Ref } from "vue";

const quantity: Ref<number> = ref(1);

</script>

<template>
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
      ></v-select>
      <v-btn prepend-icon="mdi-trash-can-outline" color="light-blue-darken-3">
        Remove
      </v-btn>
    </div>
  </div>
</template>
