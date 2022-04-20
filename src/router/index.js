import { createRouter, createWebHistory } from "vue-router";

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

export default createRouter({
    routes,
    history: createWebHistory(),
});
