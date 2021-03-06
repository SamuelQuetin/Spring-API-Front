import Vue from 'vue'
import VueRouter from "vue-router";
import HomeOfBook from "../views/HomeOfBook.vue";
import BookDetail from "../views/BookDetail.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HomeOfBook",
    component: HomeOfBook,
  },
  {
    path: '/book/:id',
    name: "BookDetail",
    props: true,
    component: BookDetail,
  },

  {
    path: "/useless",
    name: "UselessPage",
    component: () =>
      import(/* webpackChunkName: "useless" */ "../views/UselessPage.vue"),
  },
];

const router = new VueRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
