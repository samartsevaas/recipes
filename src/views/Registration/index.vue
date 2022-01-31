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
      <div class="auth-data_action">Регистрация</div>
      <form class="auth-data_email">
        <div type="text" class="auth-data_email-label">Имя</div>
        <base-input v-model="name"></base-input>
      </form>
      <form class="auth-data_email">
        <div type="text" class="auth-data_email-label">E-mail</div>
        <base-input v-model="email"></base-input>
      </form>
      <form class="auth-data_password">
        <div class="auth-data_password-label">Пароль</div>
        <base-input
          type="password"
          v-model="password"
        ></base-input>
        <div v-show="isErrorInvalidEmail" :class="[onError]">
          Введите корректный e-mail адрес
        </div>
        <div v-show="isEmailUseError" :class="[onError]">
          Этот e-mail адрес уже используется
        </div>
        <div v-show="isErrorPassword" :class="[onError]">
          Пароль должен состоять минимум из 8 знаков
        </div>
        <div v-show="isMissingEmailError" :class="[onError]">
          Введите e-mail адрес
        </div>
        <div v-show="isError" :class="[onError]">
          Неизвестная ошибка, попробуйте повторить регистрацию
        </div>
      </form>
      <div class="auth-data_buttons">
        <div class="auth-data_buttons-request">
          <base-button
            theme="confirm"
            type="button"
            @click.native="sendRegisterData"
          >
            Зарегистрироваться
          </base-button>
        </div>
        <div class="auth-data_buttons-enter">
          <base-button theme="confirm" type="button" @click.native="toAuth"
            >Уже с нами? Войти</base-button
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
      name: "",
      email: "",
      password: "",
      isErrorInvalidEmail: false,
      isErrorPassword: false,
      isEmailUseError: false,
      isMissingEmailError: false,
      isError: false,
    };
  },
  methods: {
    ...mapActions({
      register: "register",
    }),
    async sendRegisterData() {
      this.isEmailUseError = false;
      this.isErrorPassword = false;
      this.isErrorInvalidEmail = false;
      this.isMissingEmailError = false;
      this.isError = false;
      try {
        await this.register({
          email: this.email,
          password: this.password,
          name: this.name,
        });
        this.email = "";
        this.password = "";
        await this.$router.push("/main/recipes");
      } catch (e) {
        console.log(e)
        let missingEmailError = 'Error: FirebaseError: Firebase: Error (auth/missing-email).';
        let passwordError =
          "Error: FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).";
        let emailInvalidError =
          "Error: FirebaseError: Firebase: Error (auth/invalid-email).";
        let emailUseError =
          "Error: FirebaseError: Firebase: Error (auth/email-already-in-use).";
        switch (true){
          case e==missingEmailError:
            this.isErrorInvalidEmail = true;
            break;
          case e==emailInvalidError:
            this.isErrorInvalidEmail = true;
            break;
          case e==passwordError:
            this.isErrorPassword = true;
            break;
          case e==emailUseError:
            this.isEmailUseError = true;
            break;
          default:
            this.isError = true;
            break;
        }
      }
      this.email = "";
      this.password = "";
    },
    toAuth() {
      return this.$router.push("/auth");
    },
  },
  computed: {
    onError() {
      if (
        this.isEmailUseError ||
        this.isErrorPassword ||
        this.isErrorInvalidEmail ||
        this.isError
      ) {
        return "isError";
      } else {
        return "clean";
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
    justify-content: space-between;
  }
}
.isError {
  font-size: 10.5px;
  color: $notification;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.clean{
  display: none;
}
</style>
