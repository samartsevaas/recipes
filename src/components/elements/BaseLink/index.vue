<template>
  <a class="base-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "BaseLink",
}
</script>

<style scoped lang="scss">
.base-link{
  padding: 3px 7px;
  background-color: $main-white_dark;
  color: $font-color-grey;
  border-radius: 9px;
  font-size: 12px;
}
</style>