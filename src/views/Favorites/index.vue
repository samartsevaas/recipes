<template>
  <section class="card-section recipe">
    <div v-if="!getFavoriteRecipes.length">Добавьте рецепты в избранные и они будут радовать вас тут :)</div>
    <base-recipe-card
      v-else
      v-for="(favorite, index) in getFavoriteRecipes"
      :key="index"
      :recipe-id="favorite.id"
      class="main-content__wrapper"
    >
      <template v-slot:btn>
        <button class="card__like-button">
          <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
      </template>
      <template v-slot:image>
        <img :src="favorite.img" />
      </template>
      <template v-slot:recipe>
        {{ favorite.name }}
      </template>
      <template v-slot:time>
        <font-awesome-icon :icon="['fas', 'clock']" />
        {{ favorite.time }}мин.
      </template>
    </base-recipe-card>
  </section>
</template>

<script>
import BaseRecipeCard from "@elements/BaseCard/BaseRecipeCard/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Favorites",
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
  methods: {
    ...mapActions({
      getRecipes: "getRecipes",
    }),
  },
  computed: {
    ...mapGetters({
      getFavoriteRecipes: "getFavoriteRecipes",
    }),
  },
  async mounted() {
    await this.getRecipes();
  },
};
</script>

<style scoped lang="scss">
.card-section {
  display: flex;
  justify-content: space-around;
}
</style>
