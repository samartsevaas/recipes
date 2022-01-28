<template>
  <a :href="`/main/recipes/${recipeId}`" class="card">
    <div class="card__wrapper">
      <slot name="btn"></slot>
      <slot name="image"></slot>
    </div>
    <div class="recipe_info">
      <h3><slot name="recipe"></slot></h3>
      <h4><slot name="time"></slot></h4>
    </div>
  </a>
</template>

<script>
export default {
  name: "BaseRecipeCard",
  props: {
    recipeId: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
img {
  width: 130px;
  height: 130px;
}
.card {
  border-radius: 4px;
  box-shadow: 0px 0px 38px -7px rgba(208, 211, 214, 0.38);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    transform: scale(1.2);
  }
  &__wrapper {
    position: relative;
  }
  & .recipe_info {
    display: flex;
    flex-direction: column;
  }
}
</style>
