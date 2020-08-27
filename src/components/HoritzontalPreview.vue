<template>
  <section>
    <div class="hero">
      <div class="hero-head">
        <h1 class="title my-0">
          {{ title }}
        </h1>
        <hr class="my-1" />
      </div>
      <div class="hero-body">
        <div class="container"></div>
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

<style scoped></style>
