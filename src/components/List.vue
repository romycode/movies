<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OpenMovieDatabaseApi from "@/services/OpenMovieDatabaseApi";
import { Movie } from "@/types/movies/Movie";

@Component
export default class List extends Vue {
  constructor() {
    super();
  }
}
</script>

<style scoped></style>
