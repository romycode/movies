<template>
  <div class="field has-addons">
    <p class="control">
      <input class="input" type="text" :placeholder="placeholder" v-model="search" />
    </p>
    <p class="control">
      <button @click="$emit('search', search)" class="button">
        <i class="fab fa-searchengin"></i>
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  @Prop({ required: true, type: String, default: "" }) private placeholder!: string;
  private search!: string;
}
</script>

<style lang="scss" scoped></style>
