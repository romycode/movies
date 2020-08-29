<template>
  <div class="container is-fluid">
    <div v-if="!isLoading" class="columns is-centered is-multiline">
      <HoritzontalPreview class="column is-full py-0 pt-3" title="Movies">
        <div class="columns">
          <div
            class="column is-2"
            v-for="(movie, index) in movies"
            :key="index"
            @click="$router.push({ name: 'movie.details', params: { id: movie.imdbID } })"
          >
            <MediaCard :media="movie"></MediaCard>
          </div>
        </div>
      </HoritzontalPreview>
      <HoritzontalPreview class="column is-full py-0 pt-3" title="Series">
        <div class="columns">
          <div
            class="column is-2"
            v-for="(serie, index) in series"
            :key="index"
            @click="$router.push({ name: 'serie.details', params: { id: serie.imdbID } })"
          >
            <MediaCard :media="serie"></MediaCard>
          </div>
        </div>
      </HoritzontalPreview>
    </div>
    <progress v-else class="progress is-small is-primary" max="100">15%</progress>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HoritzontalPreview from "@/components/HoritzontalPreview.vue";
import OpenMovieDatabaseApi from "@/services/OpenMovieDatabaseApi";
import MediaCard from "@/components/MediaCard.vue";
import { PreviewInfo } from "@/types/movies/PreviewInfo";

@Component({
  components: { MediaCard, HoritzontalPreview }
})
export default class Principal extends Vue {
  private api!: OpenMovieDatabaseApi;
  private isLoading: boolean;
  private movies: Array<PreviewInfo> = [];
  private series: Array<PreviewInfo> = [];

  constructor() {
    super();

    this.isLoading = false;
    this.movies = [];
    this.series = [];
  }

  async created() {
    this.api = new OpenMovieDatabaseApi("5c287478");
    try {
      this.isLoading = true;
      this.movies = await this.api.findMoviesByWord("Last", false);
      this.series = await this.api.findSeriesByWord("Last", false);
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
    }
  }
}
</script>

<style lang="scss" scoped></style>
