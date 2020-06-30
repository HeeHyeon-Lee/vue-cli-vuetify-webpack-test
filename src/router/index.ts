import Vue from "vue";
import VueRouter from "vue-router";
import App from "../views/Home.vue";
// import "../assets/styles/main.scss";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: App
  },
  // {
  //   path: "/proSoccer",
  //   name: "proSoccer",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(
  //       /* webpackChunkName: 'proSoccer.index' */
  //       "../views/proSoccer.index.vue"
  //     )
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
