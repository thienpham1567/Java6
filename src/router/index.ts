import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';
import { nextTick } from 'vue';

// Pinia Store
import { useGlobalStore } from '@/store';

// Routes
import { product } from './product';
import { home } from './home';

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
    const globalStore = useGlobalStore();
    // Show Loading
    globalStore.setLoading(true);
    await nextTick();

    next();
  }
);

// Global After Hooks
router.afterEach(() => {
  const globalStore = useGlobalStore();
  // Hide Loading
  globalStore.setLoading(false);
});

export default router;
