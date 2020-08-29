<template>
  <section>
    <div v-if="!isLoading" class="hero">
      <div class="hero-head">
        <div class="level">
          <div class="leve-left">
            <div class="level-item">
              <h1 class="title my-0">
                {{ title }}
              </h1>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <Search @search="search" :placeholder="`Find ${title.toLowerCase()}`"></Search>
            </div>
          </div>
        </div>
        <hr class="my-0 mt-2" />
      </div>
      <div class="hero-body py-2 px-1">
        <div class="container is-fluid slider-horitzontal">
          <div class="columns">
            <template v-if="0 !== medias.length">
              <div
                class="column is-2"
                v-for="(media, index) in medias"
                :key="index"
                @click="$router.push({ name: 'movie.details', params: { id: media.imdbID } })"
              >
                <MediaCard :media="media"></MediaCard>
              </div>
            </template>
            <div v-else class="column is-full px-0 has-text-centered">
              <h1 class="title my-6">¡Nothing Found!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <progress v-else class="progress is-small is-primary" max="100"></progress>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Search from "@/components/Search.vue";
import { PreviewInfo } from "@/types/movies/PreviewInfo";
import OpenMovieDatabaseApi from "@/services/OpenMovieDatabaseApi";
import MediaCard from "@/components/MediaCard.vue";
@Component({
  components: { MediaCard, Search }
})
export default class HoritzontalPreview extends Vue {
  @Prop({ required: true, type: String }) title!: string;
  @Prop({ required: true, type: String }) searchType!: string;
  private api!: OpenMovieDatabaseApi;
  private isLoading: boolean;
  private medias: Array<PreviewInfo> = [];

  constructor() {
    super();

    this.isLoading = false;
    this.medias = [];
  }

  async search(value: string) {
    this.api = new OpenMovieDatabaseApi("5c287478");
    try {
      this.isLoading = true;
      switch (this.searchType) {
        case "series":
          this.medias = await this.api.findSeriesByWord(value, false);
          break;
        case "movie":
          this.medias = await this.api.findMoviesByWord(value, false);
          break;
      }
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
.slider-horitzontal {
  overflow-y: hidden;
  overflow-x: auto;
}
</style>
