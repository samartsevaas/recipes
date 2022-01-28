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
