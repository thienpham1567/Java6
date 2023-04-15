// Load vue core
import { createApp } from "vue";
import router from "@/router";
import store from "@/store";

// Load Vuetify
import vuetify from "@/plugins/vuetify";

// Global css
import "@/styles/settings.scss";
import "@/styles/global.scss";
// Load Layout vue.
import App from "@/App.vue";

import Vue3EasyDataTable from 'vue3-easy-data-table';

// import the styles
import 'vue3-easy-data-table/dist/style.css';

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(vuetify);
vue.component('EasyDataTable', Vue3EasyDataTable);

// Run!
router.isReady().then(() => {
  vue.mount("#app");
});
