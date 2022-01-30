<template>
  <component
    :is="defineTag.tag"
    v-bind="defineTag.attributes"
    class="base-link"
    :class="[addClass]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    href: {
      type: [Object, String],
    },
    theme: {
      type: String,
    },
  },
  computed: {
    defineTag() {
      if (this.href) {
        return {
          tag: "router-link",
          attributes: {
            to: this.href,
          },
        };
      } else {
        return {
          tag: "button",
          attributes: {
            type: "button",
          },
        };
      }
    },
    addClass() {
      return `base-link_${this.theme}`;
    },
  },
};
</script>

<style scoped lang="scss">
.base-link {
  color: $font-color-grey;
  border-radius: 9px;
  font-size: 12px;
  padding: 3px 7px;
}
.base-link_green {
  background-color: $main-green;
  color: $main-white;
  padding: 10px 20px;
}
.base-link_yellow {
  background-color: $main-yellow;
  color: $main-white;
  padding: 10px 20px;
}
</style>
