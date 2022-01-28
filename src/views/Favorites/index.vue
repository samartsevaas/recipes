<template>
  <section class="card-section">
    <base-card class="main-content__wrapper">
      <template v-slot:btn>
        <button class="card__like-button card__like-button-fav">
          <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
      </template>
      <template v-slot:image>
        <img src="~@/assets/images/bump.webp" />
      </template>
      <template v-slot:category> Запеченая тыква </template>
      <template v-slot:value>
        <font-awesome-icon :icon="['fas', 'clock']" /> 120 минут
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@elements/BaseCard/index.vue";

export default {
  name: "Favorites",
  components: {
    BaseCard,
  },
};
</script>

<style scoped lang="scss"></style>
