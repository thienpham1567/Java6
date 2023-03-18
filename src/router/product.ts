import Layout from '@/layout/index.vue';

export const product = {
  path: '/',
  component: Layout,
  children: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue'),
    },
  ],
}
