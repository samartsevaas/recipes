<template>
  <label class="base-search">
    <input
      class="base-search__input"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "BaseSearch",
  props: {
    placeholder: {
      type: String,
    },
    value: {
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
    width: 100%;
    position: relative;
    &:focus {
      outline: none !important;
      border: none;
    }
  }
}
</style>
