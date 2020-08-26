<template>
  <div class="tabs has-background-white">
    <ul>
      <li class="is-active"><a>Action</a></li>
      <li><a>Drama</a></li>
      <li><a>Sci-Fi</a></li>
      <li><a>Thriller</a></li>
      <li><a>Comedy</a></li>
      <li><a>Short</a></li>
      <li><a>Adventure</a></li>
      <li><a>Mistery</a></li>
      <li><a>Family</a></li>
      <li><a>Fantasy</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OpenMovieDatabaseApi from "@/services/OpenMovieDatabaseApi";

@Component
export default class TheGenre extends Vue {
  constructor() {
    super();
  }
}
</script>

<style lang="scss" scoped>
$orange: #ffaa5f;
li.is-active {
  a {
    color: $orange !important;
    border-bottom-color: $orange !important;
  }
}
</style>
