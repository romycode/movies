<template>
  <div class="field has-addons">
    <p class="control">
      <input class="input" type="text" placeholder="Find a post" />
    </p>
    <p class="control">
      <button class="button">
        <i class="fab fa-searchengin"></i>
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TheSearch extends Vue {}
</script>

<style lang="scss" scoped></style>
