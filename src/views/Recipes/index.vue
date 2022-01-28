<template>
  <div class="main-content">
    <div class="main-content__title">ВРЕМЯ ПЕРЕСМОТРЕТЬ РАЦИОН?</div>
    <Slider id="slider" :autoplay="true">
      <SliderItem>
        <div class="item-slogan">Проводите меньше времени на кухне</div>
        <picture class="item-image">
          <img src="~@/assets/images/slide1.png" />
        </picture>
      </SliderItem>
      <SliderItem>
        <div class="item-slogan">Оптимизируйте затраты на продукты</div>
        <picture class="item-image">
          <img src="~@/assets/images/slide2.png" />
        </picture>
      </SliderItem>
      <SliderItem>
        <div class="item-slogan">Сократите количество выбрасываемой еды</div>
        <picture class="item-image">
          <img src="~@/assets/images/slide3.png" />
        </picture>
      </SliderItem>
      <SliderItem>
        <div class="item-slogan">Больше не нужно сидеть на диете</div>
        <picture class="item-image">
          <img src="~@/assets/images/slide4.png" />
        </picture>
      </SliderItem>
      <SliderItem>
        <div class="item-slogan">
          Вдохновляйтесь пополняющейся библиотекой рецептов
        </div>
        <picture class="item-image">
          <img src="~@/assets/images/slide5.png" />
        </picture>
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
export default {
  name: "Recipes",
};
</script>

<style lang="scss">
.slider-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.slider-btn {
  background: none !important;
}
.slider-icon {
  border-left: 2px solid #5fb946 !important;
  border-bottom: 2px solid #5fb946 !important;
}
.slider-btn-left {
  background: none !important;
}
.slider-btn-right {
  background: none !important;
}
.item-image {
  & img {
    width: 100px;
    height: 100px;
    margin-top: 10px;
  }
}
</style>
