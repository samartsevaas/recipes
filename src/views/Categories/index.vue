<template>
  <section class="card-section">
    <base-card
      class="main-content__wrapper"
      v-for="(category, index) in recipes.categories"
      :key="index"
      :category-id="category.categoryId"
    >
      <template v-slot:btn>
        <button class="card__like-button">
          <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
      </template>
      <template v-slot:image>
        <img :src="category.image" />
      </template>
      <template v-slot:category>{{ category.categoryName }} </template>
      <template v-slot:count> </template>
    </base-card>
  </section>
</template>

<script>
import {mapActions, mapState} from "vuex";
import BaseCard from "@elements/BaseCard/index.vue";
export default {
  name: "Categories",
  components: {
    BaseCard,
  },
  data() {
    return {
      categoryId: null,
    };
  },
  computed: {
    ...mapState({
      recipes: (state) => state.recipes,
    }),
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

<style scoped lang="scss">
.card-section{
  display: flex;
  justify-content: space-between;
}
</style>
