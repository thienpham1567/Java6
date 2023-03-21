<script setup lang="ts">
import {
  computed,
  ref,
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
} from "vue";
// Stores
import { useGlobal } from "@/store";

// Components
const globalStore = useGlobal();


const service: Ref<string> = ref("");
const services: Ref<{ [key:string]: string; }[]> = ref([{title:"Contact Info"},{title:"FAQ"},{title:"Give Us Feedback"}]);

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
  get: () => globalStore.loading,
  set: (v) => globalStore.setLoading(v),
});

/** Appbar progressbar value */
const progress: ComputedRef<number | null> = computed(
  () => globalStore.progress
);
</script>

<template>
  <v-app>
    <div class="top-menu">
      <v-select
        v-model="service"
        :items="services"
        label="CustomerService"
      ></v-select>
      <v-menu :service="service">
        <template>
          Customer Service
        </template>

        <v-list>
          <v-list-item v-for="(service, index) in services" :key="index">
            <v-list-item-title>{{ service.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app>
</template>
