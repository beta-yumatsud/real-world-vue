import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventCreate from '../views/EventCreate.vue'
import EventDetail from '../views/EventDetail.vue'

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: 'EventDetail',
    props: true,
    component: EventDetail,
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
