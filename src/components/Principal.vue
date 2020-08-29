<template>
  <div class="container is-fluid">
    <div class="columns is-centered is-multiline">
      <HoritzontalPreview class="column is-full py-0 pt-5" search-type="movie" title="Movies"></HoritzontalPreview>
      <HoritzontalPreview class="column is-full py-0 pt-5" search-type="series" title="Series"></HoritzontalPreview>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HoritzontalPreview from "@/components/HoritzontalPreview.vue";

@Component({
  components: { HoritzontalPreview }
})
export default class Principal extends Vue {}
</script>

<style lang="scss" scoped></style>
