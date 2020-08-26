<template>
  <div id="app">
    <TheHeader />
    <TheGenre />
    <router-view></router-view>
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
