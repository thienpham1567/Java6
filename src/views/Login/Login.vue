<script setup lang="ts">
import { useAccountStore } from "@/store";
import { ref } from "vue";

// Define reactive variables
const email = ref("");
const password = ref("");

const { login } = useAccountStore();

const submit = () => {
  login(email.value, password.value);
};
</script>

<template>
  <v-container class="padding-y-page">
    <v-card class="pa-5">
      <v-card-title class="text-h4 text-center mb-4">Login</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="light-blue-darken-3" variant="outlined" block @click="submit">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
