import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';
import { nextTick } from 'vue';
import Layout from '@/layout/index.vue';

// Pinia Store
import { useGlobal } from '@/store';

// Components
import { product } from './product';

const home = {
  path: '/',
  name:'Home',
  component: Layout,
}
const routes: Array<RouteRecordRaw> = [home,product];

// Vue Router
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

// Global before guards
router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const globalStore = useGlobal();
    // Show Loading
    globalStore.setLoading(true);
    await nextTick();

    next();
  }
);

// Global After Hooks
router.afterEach(() => {
  const globalStore = useGlobal();
  // Hide Loading
  globalStore.setLoading(false);
});

export default router;
