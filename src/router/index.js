import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';

Vue.use(Router);

const JSONValidator = () => import('@/components/tools/JSONValidator.vue');
const ImageResizer = () => import('@/components/tools/ImageResizer.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/json',
      name: 'JSONValidator',
      component: JSONValidator,
      meta: {
        title: 'JSON Playground',
      },
    },
    {
      path: '/image',
      name: 'ImageResizer',
      component: ImageResizer,
      meta: {
        title: 'Image Resizer',
      },
    },
  ],
});
