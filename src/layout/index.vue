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

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);

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
  <v-app> </v-app>
</template>
