// Load vue core
import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';

// Load Vuetify
import vuetify from '@/plugins/vuetify';

// Load ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// Load Layout vue.
import App from '@/App.vue';

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(vuetify);
vue.use(ElementPlus);

// Run!
router.isReady().then(() => {
  vue.mount('#app');
});
