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
import useAccountStore from './AccountStore';
import useBrandStore from './BrandStore';
import useCategoryStore from './CategoryStore';
import useUserStore from './UserStore';
import userOrderStore from './OrderStore'

export { useGlobalStore, useProductStore, useCartStore, useAccountStore, useBrandStore, useCategoryStore, useUserStore, userOrderStore };
