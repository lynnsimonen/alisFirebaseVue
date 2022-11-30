import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Create from '../views/Create.vue'
import Read from '../views/Read.vue'
import Update from '../views/Update.vue'

const routes: Array<RouteRecordRaw> = [
   {
    path: '/create',
    name: 'CreateItem',
    component: Create,
  },
  {
    path: '/read',
    name: 'ReadItem',
    component: Read,
  },
  {
    path: '/update/:id',
    name: 'UpdateItem',
    component: Update,
    props: true
  },
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
