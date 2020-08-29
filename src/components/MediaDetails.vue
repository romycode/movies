<template>
  <div v-if="media !== null" class="container is-fluid py-2">
    <div class="columns">
      <div class="column is-3">
        <div class="columns is-multiline">
          <div class="column is-full has-text-centered">
            <img :src="media.Poster" :alt="media.Title" />
          </div>
          <div class="column is-full has-text-centered">
            <i class="far fa-star fa-2x" :class="{ yellow: rate - 1 >= 0 }"></i>
            <i class="far fa-star fa-2x" :class="{ yellow: rate - 2 >= 0 }"></i>
            <i class="far fa-star fa-2x" :class="{ yellow: rate - 3 >= 0 }"></i>
            <i class="far fa-star fa-2x" :class="{ yellow: rate - 4 >= 0 }"></i>
            <i class="far fa-star fa-2x" :class="{ yellow: rate - 5 >= 0 }"></i>
          </div>
        </div>
      </div>
      <div class="column is-9">
        <div class="columns is-multiline">
          <div class="column is-full">
            <div class="level">
              <div class="level-left">
                <h1 class="title my-0">{{ `${media.Title} ( ${media.Year} )` }}</h1>
              </div>
              <div class="level-right">
                <span class="tag is-black is-large">{{ media.Rated.replace(/PG-|TV-/, "+") }}</span>
              </div>
            </div>
            <hr class="my-0 mt-5" />
          </div>
          <div class="column is-full">
            <div class="level">
              <div class="level-left">
                <div class="level-item" v-for="(genre, index) in genres" :key="index">
                  <div class="tag is-dark">{{ genre }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-10">
            <div class="container is-vertical">
              <p class="mb-2"><strong>Director:</strong> {{ media.Director }}</p>
              <p class="mb-2"><strong>Actors:</strong> {{ media.Actors }}</p>
              <p class="mb-2"><strong>Runtime:</strong> {{ media.Runtime }}</p>
              <p class="mb-2"><strong>Plot:</strong> {{ media.Plot }}</p>
              <p class="mb-2"><strong>Country:</strong> {{ media.Country }}</p>
              <p class="mb-2"><strong>Languages:</strong> {{ media.Language }}</p>
              <p class="mb-2"><strong>Production:</strong> {{ media.Production }}</p>
              <p class="mb-2"><strong>Income:</strong> {{ media.BoxOffice }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Media from "@/types/movies/Media";
import OpenMovieDatabaseApi from "@/services/OpenMovieDatabaseApi";

@Component
export default class MediaDetails extends Vue {
  private api!: OpenMovieDatabaseApi;
  private media!: Media | null;

  constructor() {
    super();

    this.media = null;
  }

  async created() {
    this.api = new OpenMovieDatabaseApi("5c287478");

    this.media = await this.api.findById(this.$route.params.id, true);
  }

  get genres(): Array<string> {
    return null === this.media ? [] : this.media.Genre.split(",");
  }

  get rate(): number {
    if (null !== this.media) {
      return 5 - (parseInt(this.media.imdbRating) % 5);
    }
    return 0;
  }
}
</script>

<style lang="scss" scoped>
.yellow {
  color: #d9b500;
}
</style>
