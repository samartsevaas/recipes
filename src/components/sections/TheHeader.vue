<template>
  <header class="header wrapper">
    <div class="header__search">
      <base-search
        class="header__search-input"
        placeholder="Найти рецепт..."
      ></base-search>
    </div>
    <div class="header__panel">
      <div class="header__user">
        <img
          src="https://developeravocados.net/img/avatar-icon.png"
          alt="userpic"
        />
        <div class="header__user-status" v-if="register">{{ register }}</div>
        <div class="header__user-status" v-else-if="auth">{{ auth }}</div>
        <div class="header__user-status" v-else>Неавторизированный пользователь</div>
      </div>
      <div class="header__user-setting">
        <div class="uncle"></div>
      </div>
    </div>
  </header>
</template>

<script>
import BaseSearch from "@elements/BaseSearch/index.vue";
import { mapState } from "vuex";
export default {
  name: "TheHeader",
  components: {
    BaseSearch,
  },
  computed: {
    ...mapState({
      register: (state) => state.register,
      auth: (state) => state.auth,
    }),
  },
  methods:{
    toAuth(){
      return this.$router.push("/auth");
    },
  }
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
      margin: 0 80px 0 13px;
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

</style>
