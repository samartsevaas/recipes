import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    register: "",
    auth: "",
    recipes: {},
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
    }
  },
});
