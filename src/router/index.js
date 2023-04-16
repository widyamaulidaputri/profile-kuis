import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Album from "@/views/Album.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "AboutView",
        component: About,
    },
    {
        path: "/album",
        name: "AlbumView",
        component: Album,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
