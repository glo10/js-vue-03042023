
import HomeView from '@/views/Homeview.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/open',
    name: 'open',
    component: () => import('@/views/GenericView.vue')
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: () => import('@/views/GenericView.vue')
  },
  {
    path: '/advice',
    name: 'advice',
    component: () => import('@/views/GenericView.vue')
  },
  {
    path: '/currency',
    name: 'currency',
    component: () => import('@/views/CurrencyView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/UsersView.vue'),
  },
  {
    path: '/user/:login',
    name: 'userDetails',
    component: () => import('@/views/UserDetailsView.vue'),
    props: (route) => ({login: route.params.login}),
    children: [
      {
      path: '/user/:login/repositories',
      name: 'repositories',
      component: () => import('@/views/UserRepositoriesView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound404',
    component: () => import('@/views/NotFoundView.vue')
  },
]