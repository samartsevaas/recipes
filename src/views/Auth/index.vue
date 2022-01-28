<template>
  <div class="auth">
    <div class="auth-company">
      <div class="auth-company_logo">
        <img src="~@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="auth-company_slogan">
        <span>Nastya's recipes</span>
      </div>
    </div>
    <div class="auth-data">
      <div class="auth-data_action">Вход</div>
      <form class="auth-data_email">
        <div type="text" class="auth-data_email-label">E-mail</div>
        <base-input v-model="email"
        ></base-input>
      </form>
      <form class="auth-data_password">
        <div class="auth-data_password-label">Пароль</div>
        <base-input
            type="password"
            :class="[onError]"
            v-model="password"
        ></base-input>
        <div v-show="isError" class="isError">
          Вы ввели неверный логин/пароль
        </div>
      </form>
      <div class="auth-data_buttons">
        <div class="auth-data_buttons-enter">
          <base-button
              theme="confirm"
              type="button"
              @click.native="verifyAuthData"
          >Войти</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@elements/BaseButton/index.vue";
import BaseInput from "@elements/BaseInput/index.vue";
import { mapActions } from "vuex";
export default {
  name: "Registration",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      email: "",
      password: "",
      isError: false,
    };
  },
  methods: {
    ...mapActions({
      auth: "authorization",
    }),
    async verifyAuthData() {
      try {
        await this.auth({ email: this.email, password: this.password });
        this.email = "";
        this.password = "";
        await this.$router.push("/main/recipes");
      } catch (e) {
        return (this.isError = true);
      }
      this.email = "";
      this.password = "";
      this.isError = false;
    },
  },
  computed: {
    onError() {
      if (this.isError) {
        return "onError";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  max-width: 376px;
  margin: 0 auto;
  align-self: center;
  width: 100%;
  &-company {
    display: flex;
    justify-content: center;
    margin-bottom: 16.5px;
    &_logo {
      margin-right: 11.5px;
      & img {
        width: 50px;
        height: 50px;
      }
    }
    &_slogan {
      align-self: center;
      & span {
        font-size: 24px;
      }
    }
  }
}
.auth-data {
  box-shadow: 0 1px 0 rgba(90, 97, 105, 0.11), 0 2px 4px rgba(90, 97, 105, 0.12),
  0 5px 5px rgba(90, 97, 105, 0.06), 0 3.5px 35px rgba(90, 97, 105, 0.1);
  border-radius: 9px;
  padding: 11px 19.5px 17px 19px;
  &_action {
    display: flex;
    justify-content: center;
    margin-bottom: 35.5px;
  }
  &_email,
  &_password {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 10.5px;
    margin-bottom: 15px;
    &-label {
      color: $auth-label;
      font-size: 10.5px;
      margin-bottom: 8.5px;
    }
    & input {
      width: 100%;
    }
  }
  &_buttons {
    display: flex;
    justify-content: center;
  }
}
.isError {
  font-size: 10.5px;
  color: $notification;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
