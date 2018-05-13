import Home from './components/Home.vue'
import Product from './components/Product.vue'
import AboutUs from './components/AboutUs.vue'
import ContactUs from './components/ContactUs.vue'
export default [
  {
    path: '/home',
    component:Home
  },
  {
    path: '/product',
    component:Product
  },
  {
    path: '/aboutus',
    component:AboutUs
  },
  {
    path: '/contactus',
    component: ContactUs
  },
  {
    path: '/*',
    component: Home
  }
]
