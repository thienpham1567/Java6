import Layout from '@/layout/index.vue';

export const product = {
  path: '/products',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Product',
      component: () => import('@/views/Product/ProductList.vue'),
    },
    {
      path: ':id(\\d+)',
      component: () => import('@/components/Product/Product.vue'),
    },
  ],
}
