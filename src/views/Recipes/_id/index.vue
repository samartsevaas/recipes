<template>
  <recipe>
    <div v-for="(recipe, index) in recipeById" :key="index">
      <div class="recipe_title">
        <div class="recipe_title-head">
          <h1>{{ recipe.name }}</h1>
          <button
            class="button-like"
            :class="{ favorite: isFav }"
            @click="setLikedItems"
          >
            <font-awesome-icon :icon="['fas', 'heart']" class="icon" />
          </button>
        </div>
        <div class="recipe_cook">
          <div class="recipe_cook-title">Время приготовления</div>
          <div class="recipe_cook-time">
            <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>
            <div>{{ recipe.time }} мин.</div>
          </div>
        </div>
        <picture class="recipe_img">
          <img :src="recipe.img" alt="recipe" />
        </picture>
        <div class="recipe_keys">
          <base-link>{{ recipe.keys }}</base-link>
        </div>
      </div>
      <div class="recipe_ingredients">
        <h1>Ингредиенты</h1>
        <ul class="recipe_ingredients-table">
          <li
            class="recipe_ingredients-table-li"
            v-for="(ingred, index) in recipe.ingredients"
            :key="index"
          >
            <div>{{ ingred.ingredientName }}</div>
            <div>{{ ingred.value }}</div>
          </li>
        </ul>
      </div>
      <div class="recipe_supplements">
        <h1>Пищевая ценность</h1>
        <base-link href="" class="recipe_supplements-count"
          >{{ recipe.calories }}ккал.</base-link
        >
      </div>
      <base-link theme="green" class="to-basket" @click="addToBasket"
        >Добавить в корзину</base-link
      >
      <div class="recipe_steps">
        <h1>Готовим</h1>
        <ul
          class="recipe_steps-table"
          v-for="(step, index) in recipe.descriptions"
          :key="index"
        >
          <li class="recipe_steps-table-li">
            <span class="table-li__marker">{{ index + 1 }}</span
            >{{ step.specification }}
          </li>
        </ul>
      </div>
    </div>
  </recipe>
</template>

<script>
import Recipe from "@pages/Recipe/index.vue";
import BaseLink from "@elements/BaseLink/index.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "RecipeViews",
  data() {
    return {
      recipeId: null,
      isFav: false,
    };
  },
  components: {
    Recipe,
    BaseLink,
  },
  methods: {
    ...mapActions({
      getRecipes: "getRecipes",
    }),
    ...mapMutations({
      addedToBasked: "addedToBasked",
    }),
    setLikedItems() {
      let likedArray = JSON.parse(localStorage.getItem("likedId")) ?? [];
      if (!likedArray.includes(this.recipeId)) {
        likedArray.push(this.recipeId);
      } else {
        likedArray = likedArray.filter((id) => id !== this.recipeId);
      }
      this.isFav = !this.isFav;
      localStorage.setItem("likedId", JSON.stringify(likedArray));
    },
    checkFavorite() {
      return JSON.parse(localStorage.getItem("likedId")).includes(
        this.recipeId
      );
    },
    addToBasket() {
      const [{ ingredients }] = this.recipeById;
      this.addedToBasked(ingredients);
    },
  },
  computed: {
    ...mapGetters({
      getRecipeById: "getRecipeById",
    }),
    recipeById() {
      return this.getRecipeById(this.recipeId);
    },
  },
  created() {
    this.recipeId = +this.$route.params.id;
    this.isFav = this.checkFavorite();
  },

  async mounted() {
    await this.getRecipes();
  },
};
</script>
<style scoped lang="scss">
h1 {
  font-weight: bold;
}
img {
  width: 130px;
  height: 130px;
}
.container {
  display: flex;
  flex-direction: column;
}
.recipe {
  & > div {
    margin-bottom: 10px;
  }
  &_title {
    & h1 {
      font-size: 25px;
    }
    &-head {
      display: flex;
      & .button-like {
        background-color: transparent;
        border: none;
        .icon path {
          color: $font-color-grey_lightMax;
          &:hover {
            color: $notification;
          }
        }
        &.favorite {
          path {
            color: $notification;
          }
        }
      }
    }
  }
  &_img {
    display: flex;
    justify-content: center;
  }
  &_cook {
    & div {
      margin-bottom: 5px;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &-time {
      display: flex;
      & div {
        margin-left: 5px;
      }
    }
  }
  &_ingredients {
    &-table {
      background-color: $main-white_dark;
      border-radius: 10px;
      list-style: none;
      &-li {
        display: flex;
        justify-content: space-between;
        color: $font-color-grey;
        padding: 15px;
        border-bottom: 1px solid $box-shadow_nav;
      }
    }
  }
  &_steps {
    &-table {
      list-style-type: none;
      padding: 15px 0 5px 0;
      font-size: 16px;
      &-li {
        position: relative;
        margin: 0 0 0 0;
        padding: 0 0 10px 0;
        line-height: 1.4;
      }
    }
  }
}
.table-li__marker {
  width: 30px;
  height: 30px;
  background-color: $main-green;
  color: $main-white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.to-basket {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}
</style>
