<template>
  <div id="app">
    <TheHeader />
    <div class="hero is-fullheight-with-navbar">
      <div v-if="false" class="hero-head">
        <TheGenre />
      </div>
      <div class="hero-body py-2">
        <router-view></router-view>
      </div>
      <div class="hero-foot"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/TheHeader.vue";
import TheGenre from "@/components/TheGenre.vue";

@Component({
  components: { TheGenre, TheHeader }
})
export default class App extends Vue {}
</script>
