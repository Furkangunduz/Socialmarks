import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/HomePage"),
    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("@/views/LoginPage"),
    },
    {
        name: "RegisterPage",
        path: "/register",
        component: () => import("@/views/RegisterPage"),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

router.beforeEach((to, _, next) => {
    const authRequiredPages = ["HomePage"];
    const authNotRequiredPages = ["LoginPage", "RegisterPage"];

    const isAuth = store.getters._isAuthenticated;
    if (authNotRequiredPages.indexOf(to.name) > -1 && !isAuth) next();
    if (authNotRequiredPages.indexOf(to.name) > -1 && isAuth)
        next({ name: "HomePage" });

    if (authRequiredPages.indexOf(to.name) > -1 && isAuth) next();
    if (authRequiredPages.indexOf(to.name) > -1 && !isAuth)
        next({ name: "LoginPage" });

    next();
});

export default router;
