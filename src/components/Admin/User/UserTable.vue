<script setup lang="ts">
import CoreTable from "@/components/Core/CoreTable.vue";
import { useUserStore } from "@/store";
import { onMounted } from "vue";
import type { Header } from "vue3-easy-data-table";

const headers: Header[] = [
  {
    text: "FIRST NAME",
    value: "firstName",
  },
  {
    text: "LAST NAME",
    value: "lastName",
  },
  {
    text: "EMAIL ADDRESS",
    value: "emailAddress",
  },
  {
    text: "PHONE NUMBER",
    value: "phoneNumber",
  },
];

const { getUsers, fetchUsers } = useUserStore();

onMounted(fetchUsers);
</script>
<template>
  <CoreTable :headers="headers" :items="getUsers" />
</template>
