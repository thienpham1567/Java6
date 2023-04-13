import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia, type Pinia } from 'pinia';

/** Pinia Store */
const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

// Pinia Stores
import useGlobalStore from './GlobalStore';
import useProductStore from './ProductStore';
import useCartStore from './CartStore'
import useUserStore from './UserStore';
import useBrandStore from './BrandStore';

export { useGlobalStore, useProductStore, useCartStore, useUserStore, useBrandStore };
