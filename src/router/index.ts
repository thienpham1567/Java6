import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from "vue-router";
import { nextTick } from "vue";

// Pinia Store
import { useGlobalStore } from "@/store";

// Routes
import { product } from "./product";
import { home } from "./home";
import { cart } from "./cart";
import { account } from "./account";
import { admin } from "./admin"
import { checkout } from "./checkout";

const routes: Array<RouteRecordRaw> = [home, product, cart, account, admin, checkout];

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
    const { setLoading } = useGlobalStore();
    // Show Loading
    setLoading(true);
    await nextTick();

    next();
  }
);

// Global After Hooks
router.afterEach(() => {
  const { setLoading } = useGlobalStore();
  // Hide Loading
  setLoading(false);
});

export default router;
