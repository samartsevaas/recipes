<template>
  <router-link
    :to="{ name: 'categoryId', params: { id: categoryId } }"
    class="card"
  >
    <div class="card__wrapper">
      <slot name="image"></slot>
    </div>
    <div>
      <h3><slot name="category"></slot></h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    categoryId: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style lang="scss">
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
  width: 180px;
  height: 300px;
  &:hover {
    transform: scale(1.2);
  }
  &__wrapper {
    position: relative;
  }

  img {
    width: 130px;
    height: 130px;
  }
}
</style>
