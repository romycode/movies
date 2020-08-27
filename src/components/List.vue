<template>
  <div class="container is-fluid ">
    <div class="columns is-centered is-multiline">
      <HoritzontalPreview class="column is-four-fifths" title="Movies"></HoritzontalPreview>
      <HoritzontalPreview class="column is-four-fifths" title="Series"></HoritzontalPreview>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HoritzontalPreview from "@/components/HoritzontalPreview.vue";
@Component({
  components: { HoritzontalPreview }
})
export default class List extends Vue {
  constructor() {
    super();
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
