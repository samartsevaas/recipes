<template>
  <label class="base-input">
    <input
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      autocomplete="on"
    />
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.base-input {
  & input {
    border-radius: 3px;
    border: 0.5px solid $border-auth;
    color: $main-yellow;
    padding: 11.5px 8px;
    font-size: 11px;
    width: 100%;
    height: 30px;
    &:hover {
      border: 0.5px solid $main-yellow_hover;
    }
  }
}
</style>
