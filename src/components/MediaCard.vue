<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by4">
        <img :src="media.Poster" :alt="media.Title" />
      </figure>
    </div>
    <div class="card-content pt-2 pb-0 px-0">
      <div class="media">
        <div class="media-content" style="min-height: 50px">
          <p class="title has-text-centered is-7 py-1 px-1">{{ media.Title }}</p>
        </div>
      </div>

      <div class="content">
        {{ media.Plot }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Media from "@/types/movies/Media";

@Component
export default class MediaCard extends Vue {
  @Prop({ required: true, type: Object as () => Media }) media!: Media;
}
</script>

<style scoped></style>
