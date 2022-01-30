import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    register: "",
    auth: "",
    recipes: {},
    choosingRecipe: "",
  },
  mutations: {
    register(state, register) {
      state.register = register;
    },
    auth(state, auth) {
      state.auth = auth;
    },
    recipes(state, recipes) {
      state.recipes = recipes;
    },
    setSearchResultByRecipe(state, choosingRecipe) {
      state.choosingRecipe = choosingRecipe;
    },
  },
  actions: {
    async register({ commit }, { email, password, name }) {
      try {
        const data = await this.$services.registration.register(
          email,
          password,
          name
        );
        commit("register", data);
      } catch (error) {
        throw new Error(error.response);
      }
    },
    async authorization({ commit }, { email, password }) {
      try {
        const data = await this.$services.registration.authorization(
          email,
          password
        );
        commit("auth", data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async logOut({ commit }) {
      try {
        const data = await this.$services.registration.logOut();
        commit("logOut", data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async getRecipes({ commit }) {
      try {
        const data = await this.$services.data.getRecipes();
        commit("recipes", data);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  getters: {
    getRecipesByCategoryId: (state) => (id) => {
      {
        if (Array.isArray(state.recipes.data)) {
          return state.recipes.data.filter((recipe) => recipe.categoryId === id);
        }
      }
    },
    getRecipeById: (state) => (id) => {
      {
        if (Array.isArray(state.recipes.data)) {
          return state.recipes.data.filter((recipe) => recipe.id === id);
        }
      }
    },
    getResultBySearchingRecipe: (state) => {
      if (Array.isArray(state.recipes.data) && state.choosingRecipe) {
        return state.recipes.data.filter((recipe) =>
          recipe.name.toLowerCase().includes(state.choosingRecipe)
        );
      }
    },
    getFavoriteRecipes(state){
      let arrayKeys = JSON.parse(localStorage.getItem("likedId"));
      let favoriteArray = [];
      if (Array.isArray(state.recipes.data)) {
        for (let i = 0; i<arrayKeys.length; i++){
          state.recipes.data.forEach(function (item){
            item.id === arrayKeys[i] ? favoriteArray.push(item) : []
          })
        }
      }
      return favoriteArray
    },
  },
});
