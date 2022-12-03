import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/Tabs/TabsPage.vue'
import Create from '../views/CRUDPages/Create.vue'
import Read from '../views/CRUDPages/Read.vue'
import Update from '../views/CRUDPages/Update.vue'


const routes: Array<RouteRecordRaw> = [

  {
    path: '/eventsandmore/:id',
    component: () => import('@/views/Tabs/EventDetailsPage.vue')
  },
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
    redirect: '/alis/home'
  },
  
  {
    path: '/alis/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/alis/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Tabs/Tab1Page.vue')
      },
      {
        path: 'ordermenu',
        component: () => import('@/views/Tabs/Tab2Page.vue')
      },
      {
        path: 'eventsandmore',
        component: () => import('@/views/Tabs/Tab3Page.vue')
      },
      {
        path: "account",
        component: () => import("@/views/Tabs/Tab4Page.vue"),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
