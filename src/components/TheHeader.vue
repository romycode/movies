<template>
  <nav
    class="navbar is-fixed-top is-fixed-top-desktop is-fixed-top-touch"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand" @click="$router.push('/')">
      <img src="/img/movies.png" alt="" class="my-1 px-1" data-v-9a9f6144="" width="50" height="45" />
      <div class="navbar-item no-hover has-text-black has-text-weight-bold" style="font-size: 1.25em;">
        <h1>Media Finder</h1>
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <!--        <a class="navbar-item" @click="this.$router.push('/movies')">-->
        <!--          Movies-->
        <!--        </a>-->

        <!--        <a class="navbar-item" @click="this.$router.push('/series')">-->
        <!--          Series-->
        <!--        </a>-->
      </div>
      <div class="navbar-end">
        <div v-if="false" class="navbar-item no-hover">
          <TheSearch />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheSearch from "@/components/TheSearch.vue";

@Component({
  components: { TheSearch }
})
export default class TheHeader extends Vue {
  get path(): string {
    return process.env.BASE_URL as string;
  }
}
</script>

<style lang="scss" scoped>
$orange: #ffaa5f;
$hover: #eaeaea;
.navbar {
  background-color: $orange;

  .navbar-item:hover {
    color: black;
    background-color: $hover;
  }

  .no-hover:hover {
    background-color: $orange;
  }
}
</style>
