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
import { useGlobal } from '@/store';

// Components
import { product } from './product';

const routes: Array<RouteRecordRaw> = [product];

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
    // Hide snack bar
    globalStore.setMessage('');
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
