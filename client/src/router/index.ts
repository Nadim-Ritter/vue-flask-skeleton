import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import ContainerLayout from "@/components/layout/ContainerLayout.vue"
import ExamplePage from "@/components/views/ExamplePage.vue"

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "LoginPage",
  //   component: LoginPage
  // },
  // {
  //   path: "/register",
  //   name: "RegisterPage",
  //   component: RegisterPage
  // },
  {
    path: "/",
    component: ContainerLayout,
    children: [
      {
        path: "/example",
        name: "ExamplePage",
        component: ExamplePage
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
