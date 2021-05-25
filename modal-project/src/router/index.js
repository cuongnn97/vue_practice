import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/paging/Home.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import Calculator from '../views/Calculator.vue'
import Cart from '../views/shopping/Cart.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import SignupForm from '../components/SignupForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id/:name',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/signupForm',
    name: 'SignupForm',
    component: SignupForm,
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
