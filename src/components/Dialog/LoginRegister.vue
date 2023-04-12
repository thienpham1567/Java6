<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(["close-dialog"]);

const signInZapsoon = () => {
  router.push("/account/login");
  emit('close-dialog');
}

const createAccountZapsoon = () => {
  router.push("/account/register");
  emit('close-dialog');
}

const signInGoogle = () => {

}
</script>

<template>
  <v-card width="400px" class="pt-4">
    <div class="dialog-login-header mb-2 px-4">
      <p class="text-h5">Sign In</p>
      <span class="mdi mdi-close" @click="$emit('close-dialog')"></span>
    </div>
    <v-divider :thickness="2" class="border-opacity-25"></v-divider>
    <div class="account-btns">
      <v-btn color="light-blue-darken-3" variant="outlined" size="large" block @click="signInZapsoon">
        <img src="@/assets/img/zapsoonlogo.png" alt="facebook">
        Sign in with Zapsoon
      </v-btn>
      <v-btn color="light-blue-darken-3" variant="outlined" size="large" block @click="signInGoogle">
        <img src="@/assets/img/icons8-google-48.png" alt="google">
        Sign in with Google
      </v-btn>
      <v-btn color="light-blue-darken-3" variant="outlined" size="large" block>
        <img src="@/assets/img/icons8-facebook-48.png" alt="facebook">
        Sign in with Facebook
      </v-btn>
      <p class="text-center">or</p>
      <v-btn color="light-blue-darken-3" variant="outlined" size="large" block @click="createAccountZapsoon">
        Create your Zapsoon account
      </v-btn>
    </div>
  </v-card>
</template>
