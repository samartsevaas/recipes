import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@views/Main/index.vue";
import Categories from "@views/Categories/index.vue";
import CategoriesId from "@views/Categories/_id/index.vue";
import Favorites from "@views/Favorites/index.vue";
import Basket from "@views/Basket/index.vue";
import Recipes from "@views/Recipes/index.vue";
import RecipesById from "@views/Recipes/_id/index.vue";
import Registration from "@views/Registration/index.vue";
import Auth from "@views/Auth/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/main",
    name: "MainPage",
    redirect: "/main/recipes",
    component: MainPage,
    children: [
      { path: "categories", component: Categories, name: "categories" },
      { path: "categories/:id", component: CategoriesId, name: "categoryId" },
      { path: "favorites", component: Favorites },
      { path: "basket", component: Basket, name: "basket"},
      { path: "recipes", component: Recipes },
      { path: "recipes/:id", component: RecipesById, name: "recipeById" },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
