<template>
  <recipe>
    <div v-for="(recipe,index) in recipeById" :key="index">
    <div class="recipe_title">
      <h1>{{recipe.name}}</h1>
      <div class="recipe_cook">
        <div class="recipe_cook-title">Время приготовления</div>
        <div class="recipe_cook-time">
          <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>
          <div>{{recipe.time}} мин.</div>
        </div>
      </div>
      <picture class="recipe_img">
        <img
            :src="recipe.img"
            alt="recipe"
        />
      </picture>
      <div class="recipe_keys">
        <base-link>{{ recipe.keys }}</base-link>
      </div>
    </div>
    <div class="recipe_ingredients">
      <h1>Ингредиенты</h1>
      <ul class="recipe_ingredients-table">
        <li class="recipe_ingredients-table-li" v-for="(ingred,index) in recipe.ingredients" :key="index">
          <div>{{ingred.ingredientName}}</div>
          <div>{{ingred.value}}</div>
        </li>
      </ul>
    </div>
    <div class="recipe_supplements">
      <h1>Пищевая ценность</h1>
      <base-link class="recipe_supplements-count">225ккал.</base-link>
    </div>
    <div class="recipe_steps">
      <h1>Готовим</h1>
      <ol class="recipe_steps-table" v-for="(step,index) in recipe.descriptions" :key="index">
        <li class="recipe_steps-table-li">{{step.specification}}</li>
      </ol>
    </div>
    </div>
  </recipe>
</template>

<script>
import Recipe from "@pages/Recipe/index.vue";
import BaseLink from "@elements/BaseLink/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RecipeViews",
  data() {
    return {
      recipeId: null,
    }
  },
  components: {
    Recipe,
    BaseLink
  },
  methods:{
    ...mapActions({
      getRecipes: "getRecipes",
    }),
  },
  computed: {
    ...mapGetters({
      getRecipeById: "getRecipeById"
    }),
    recipeById() {
      return this.getRecipeById(this.recipeId);
    },
  },
  created() {
    this.recipeId = +this.$route.params.id;
  },
  async mounted(){
    await this.getRecipes();
  }
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
      counter-reset: num;
      margin: 0 0 0 45px;
      padding: 15px 0 5px 0;
      font-size: 16px;
      &-li {
        position: relative;
        margin: 0 0 0 0;
        padding: 0 0 10px 0;
        line-height: 1.4;
        &::before {
          content: counter(num);
          counter-increment: num;
          display: inline-block;
          position: absolute;
          top: 0;
          left: -38px;
          width: 28px;
          height: 28px;
          background: $main-green;
          color: $main-white;
          text-align: center;
          line-height: 28px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
