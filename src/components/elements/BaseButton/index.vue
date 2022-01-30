<template>
  <button
      :type="type"
      class="base-button"
      :class="[getTheme]"
      @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    theme: {
      type: String,
      validator: (theme) =>
          ["confirm", "delete", "cancel"].includes(theme),
      default: "confirm",
    },
    type: {
      type: String,
      default: "button",
    },
  },

  computed: {
    getTheme() {
      return `base-button_${this.theme}`;
    },
  },
};
</script>

<style lang="scss">
.base-button {
  height: 29px;
  width: 130px;
  border: none;
  font-size: 11.5px;
  color: $main-white;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  &_confirm {
    background-color: $main-green;
    &:hover {
      background: $main-green_hover;
    }
    &:active {
      background: $main-green_hover;
    }
  }
  &_delete {
    background-color: $notification;
    &:hover {
      background: $notification_hover;
    }
    &:active {
      background: $notification_hover;
    }
  }
  &_cancel {
    background-color: $button-cancel;
    &:hover {
      background: $font-color-grey_lightMax;
    }
    &:active {
      background: $font-color-grey_lightMax;
    }
  }
}
</style>
