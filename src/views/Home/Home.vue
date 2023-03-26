<script setup lang="ts">
import { type Ref, ref } from "vue";

const brands: Ref<string[]> = ref(["Nike", "Puma", "Adidas"]);
</script>

<template>
  <div class="carousel padding-x-page">
    <v-carousel show-arrows="hover" hide-delimiters>
      <v-carousel-item
        src="https://cdn.sanity.io/images/qa41whrn/prod/815989c447851ff0489f1ffa10377125709b1aa8-1440x350.jpg?w=2160&q=80&auto=format"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/orig-ss23-festivals-dual-large-mh-d_tcm221-1006540.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
  <div class="brands padding-x-page">
    <h1 class="mb-2">Brands</h1>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="brand in brands" :key="brand" cols="12" md="4">
            <v-item>
              <v-card dark height="200">
                <h1 class="text-center">{{ brand }}</h1>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>
