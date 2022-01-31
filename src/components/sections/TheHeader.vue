<template>
  <header class="header wrapper">
    <div class="header__search">
      <base-search
        class="header__search-input"
        placeholder="Найти рецепт..."
        v-model.trim="choosingRecipe"
        @input="updateSearch"
      >
        <ul
          v-show="choosingRecipe"
          class="dropdown__table"
          @click="cleanSearchRequest"
        >
          <li
            v-for="(result, index) in getResultBySearchingRecipe"
            :key="index"
            class="dropdown__table-li"
          >
            <router-link
              :to="{ name: 'recipeById', params: { id: `${result.id}` } }"
            >
              {{ result.name }}
            </router-link>
          </li>
        </ul>
      </base-search>
    </div>
    <div class="header__panel">
      <div class="header__user">
        <img
          src="https://developeravocados.net/img/avatar-icon.png"
          alt="userpic"
        />
        <div class="header__user-status" v-if="register">{{ register }}</div>
        <div class="header__user-status" v-else-if="auth">{{ auth }}</div>
        <div class="header__user-status" v-else>
          Неавторизированный пользователь
        </div>
      </div>
      <div class="header__user-setting">
        <div class="uncle" @click="logOutUser"></div>
      </div>
    </div>
  </header>
</template>

<script>
import BaseSearch from "@elements/BaseSearch/index.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "TheHeader",
  components: {
    BaseSearch,
  },
  data() {
    return {
      choosingRecipe: "",
    };
  },
  computed: {
    ...mapState({
      register: (state) => state.register,
      auth: (state) => state.auth,
    }),
    ...mapGetters({
      getResultBySearchingRecipe: "getResultBySearchingRecipe",
    }),
  },
  methods: {
    updateSearch() {
      this.setSearchResultByRecipe(this.choosingRecipe.toLowerCase());
    },
    ...mapMutations({
      setSearchResultByRecipe: "setSearchResultByRecipe",
    }),
    ...mapActions({
      getRecipes: "getRecipes",
      logOut: "logOut",
    }),
    cleanSearchRequest() {
      this.choosingRecipe = "";
    },
    async logOutUser(){
      try{
        await this.logOut();
      } catch (e) {
        console.log(e);
      }
      localStorage.removeItem("login");
      localStorage.removeItem("likedId");
      await this.$router.push("/");
    },
  },
  async mounted() {
    await this.getRecipes();
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: $main-white;
  box-shadow: 0 2.5px 9.5px #5a61691f;
  &__search {
    @extend .vertical;
    width: 100%;
  }
  &__panel {
    display: flex;
    &-bell {
      @extend .vertical;
    }
  }
  &__user {
    display: flex;
    @media screen and (max-width: 768px) {
      display: block;
      margin-left: 20px;
    }
    & img {
      display: flex;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-left: 25px;
      @media screen and (max-width: 768px) {
        margin-left: 0;
        width: 50px;
        height: 50px;
      }
    }
    & div {
      @extend .vertical;
      margin: 0 30px 0 13px;
      color: black;
      text-decoration: none;
      align-items: center;
      width: 150px;
      @media screen and (max-width: 768px) {
        margin: 0 20px 0 0;
      }
    }
    &-setting {
      @extend .vertical;
      & .uncle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 6px 6px 6px;
        margin-top: 6px;
        border-color: $header-border transparent transparent transparent;
      }
    }
  }
}
.dropdown__table {
  width: 50%;
  list-style: none;
  position: absolute;
  z-index: 10;
  background-color: $main-white;
  &-li {
    padding: 10px;
    & :hover {
      color: $button-change;
    }
  }
}
</style>
