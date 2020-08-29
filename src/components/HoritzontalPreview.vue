<template>
  <section>
    <div class="hero">
      <div class="hero-head">
        <h1 class="title my-0">
          {{ title }}
        </h1>
        <hr class="my-0 mt-2" />
      </div>
      <div class="hero-body py-2 px-1">
        <div class="container slider-horitzontal">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HoritzontalPreview extends Vue {
  @Prop({ required: true, type: String }) title!: string;

  constructor() {
    super();
  }
}
</script>

<style scoped>
.slider-horitzontal {
  overflow-y: hidden;
  overflow-x: auto;
}
</style>
