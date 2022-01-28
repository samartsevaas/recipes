<template>
  <label class="base-search">
    <input class="base-search__input" :placeholder="placeholder" />
  </label>
</template>

<script>
export default {
  name: "BaseSearch",
  props: {
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.base-search {
  & path {
    color: green;
  }
  & svg {
    margin-right: 5px;
  }
  &__input {
    border: none;
    color: $base-font_color;
    &:focus {
      outline: none !important;
      border: none;
    }
  }
}
</style>
