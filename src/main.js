import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import { appAxios } from "@/utils/appAxios";

import "@/assets/style.css";

import AppHeader from "@/components/shared/AppHeader";
import BookMarkList from "@/components/shared/BookMarkList/index-comp";

const app = createApp(App);

app.use(router);
app.use(store);
app.component("AppHeader", AppHeader);
app.component("BookMarkList", BookMarkList);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
