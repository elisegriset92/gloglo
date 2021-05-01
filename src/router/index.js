import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";
import Mediatheque from "../views/Mediatheque.vue";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/mediatheque",
    name: "Mediathèque",
    component: Mediatheque,
    children: [
      {

        path: '/mediatheque/:name',
        name: 'mediatheque',
        params: {name: '', id: null},
        component: Mediatheque
      },
      
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;