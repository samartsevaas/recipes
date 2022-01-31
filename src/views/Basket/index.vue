<template>
  <div>
    <ul
      class="basket-table"
      v-for="(ingredient, index) in ingredients"
      :key="index"
    >
      <li class="basket-table-li">
        <div>
          <div>{{ ingredient.ingredientName }}</div>
          <div>{{ ingredient.value }}</div>
        </div>
        <base-link @click="removeIngredientFromBasket(ingredient.ingredientId)">
          Куплено</base-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import BaseLink from "@elements/BaseLink/index.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Basket",
  components: { BaseLink },
  computed: {
    ...mapState({
      ingredients: (state) => state.ingredients,
    }),
  },
  methods: {
    removeIngredientFromBasket(id) {
      this.removeFromBasket(id);
    },
    ...mapMutations({
      removeFromBasket: "removeFromBasket",
    }),
  },
};
</script>

<style scoped lang="scss">
.basket {
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
</style>
