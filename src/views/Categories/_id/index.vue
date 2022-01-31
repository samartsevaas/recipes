<template>
  <section class="card-section recipe">
    <base-recipe-card
      v-for="(recipe, index) in recipesByCategory"
      :key="index"
      :recipe-id="recipe.id"
      class="main-content__wrapper"
    >
      <template v-slot:btn>
        <button class="card__like-button">
          <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
      </template>
      <template v-slot:image>
        <img :src="recipe.img" />
      </template>
      <template v-slot:recipe>
        {{ recipe.name }}
      </template>
      <template v-slot:time>
        <font-awesome-icon :icon="['fas', 'clock']" />
        {{ recipe.time }}мин.
      </template>
    </base-recipe-card>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseRecipeCard from "@elements/BaseCard/BaseRecipeCard/index.vue";
export default {
  components: {
    BaseRecipeCard,
  },
  data() {
    return {
      recipeId: null,
      categoryId: null,
    };
  },
  created() {
    this.categoryId = +this.$route.params.id;
  },
  computed: {
    ...mapGetters({
      getRecipesByCategoryId: "getRecipesByCategoryId",
    }),
    recipesByCategory() {
      return this.getRecipesByCategoryId(this.categoryId);
    },
  },
  methods: {
    ...mapActions({
      getRecipes: "getRecipes",
    }),
  },
  async mounted() {
    await this.getRecipes();
  },
};
</script>
<style lang="scss">
.card-section {
  display: flex;
  justify-content: space-around;
}
</style>
