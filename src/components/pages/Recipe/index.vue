<template>
  <a class="container recipe" :href="`/main/recipes/${recipeId}`">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Recipe",
  data() {
    return {
      recipeId: null,
    }
  },
}
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
