import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/paging/Home.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import Calculator from '../views/Calculator.vue'
import Cart from '../views/shopping/Cart.vue'
import SignupForm from '../components/SignupForm.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
//SONY
import Homepage from '../views/sony/homepage/Homepage.vue'
import Login from '../views/sony/Login.vue'
import CopyrightRegistration from '../views/sony/copyrightRegistration/CopyrightRegistration.vue'
import CreativeWorksEdit from '../views/sony/creativeWorks/CreativeWorksEdit.vue'

import GroupRegistration from '../views/sony/groupRegistration/GroupRegistration.vue'
import GroupEdit from '../views/sony/groupRegistration/GroupEdit.vue'
import PublisherRegistration from '../views/sony/publisherRegistration/PublisherRegistration.vue'
import PublisherEdit from '../views/sony/publisherRegistration/PublisherEdit.vue'
import PublisherInformation from '../views/sony/publisherRegistration/PublisherInformation.vue'
import GroupInformation from '../views/sony/groupRegistration/GroupInformation.vue'
import ContractsRegistration from '../views/sony/contractsRegistration/ContractsRegistration.vue'

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
  },
  //SONY
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/creative_works/new',
    name: 'CopyrightRegistration',
    component: CopyrightRegistration
  },
  {
    path: '/groups/new',
    name: 'GroupRegistration',
    component: GroupRegistration
  },
  {
    path: '/publishers/new',
    name: 'PublisherRegistration',
    component: PublisherRegistration
  },
  {
    path: '/publishers/edit',
    name: 'PublisherEdit',
    component: PublisherEdit
  },
  {
    path: '/publishers',
    name: 'PublisherInformation',
    component: PublisherInformation
  },
  {
    path: '/groups',
    name: 'GroupInformation',
    component: GroupInformation
  },
  {
    path: '/groups/edit',
    name: 'GroupEdit',
    component: GroupEdit
  },
  {
    path: '/creative_works/edit',
    name: 'CreativeWorksEdit',
    component: CreativeWorksEdit
  },
  {
    path: '/contracts/new',
    name: 'ContractsRegistration',
    component: ContractsRegistration
  },

  //END SONY
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
