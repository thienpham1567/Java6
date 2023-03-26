import Layout from '@/layout/index.vue';
import Home from '@/views/Home/Home.vue';

export const home = {
  path: '/',
  component: Layout,
  children:[
    {
      path: '',
      name:"Home",
      component: Home,
    },
  ]
}
