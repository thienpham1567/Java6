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
import VueGoodTablePlugin from "vue-good-table-next";

// import the styles
import "vue-good-table-next/dist/vue-good-table-next.css";

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(vuetify);
vue.use(VueGoodTablePlugin);

// Run!
router.isReady().then(() => {
  vue.mount("#app");
});
