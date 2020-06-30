<template>
  <div class="d-flex">
    <GlobalNav />
    <div class="content-wrap">
      <!-- <h1><marquee>みすず！！！！アイラブユー！！！！</marquee></h1> -->
    </div>
  </div>
</template>

<script lang="ts">
"use strict";
// @ is an alias to /src
import Vue from "vue";
import { Component } from "vue-property-decorator";
// import GlobalNav from "../components/navigation/GlobalNav.vue";

@Component({
  name: "Home",
  // components: { GlobalNav }
})
export default class Home extends Vue {
  hi?: boolean;
}
</script>
