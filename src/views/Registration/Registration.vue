<script setup lang="ts">
import { ref, type Ref } from "vue";

const firstName: Ref<string> = ref("");
const middleName: Ref<string> = ref("");
const lastName: Ref<string> = ref("");
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const confirmPassword: Ref<string> = ref("");

const submit = () => {};
</script>

<template>
  <v-container class="padding-y-page">
    <v-card class="pa-5">
      <v-card-title class="text-h4 text-center mb-4">Register</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field label="First Name" v-model="firstName"></v-text-field>
          <v-text-field label="Middle Name" v-model="middleName"></v-text-field>
          <v-text-field label="Last Name" v-model="lastName"></v-text-field>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
            v-model="confirmPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="light-blue-darken-3" variant="outlined" block @click="submit">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
