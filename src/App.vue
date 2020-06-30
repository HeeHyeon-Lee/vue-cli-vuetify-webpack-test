<template>
  <v-app>
    <div id="app">
      <v-sheet>Hello World!</v-sheet>
      <v-radio-group>
        <v-radio label="ㅇㅇ" />
      </v-radio-group>
      <v-btn text tile>안녕</v-btn>
    </div>
  </v-app>
</template>
<script lang="ts">
'use strict';
import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue{}
</script>
<style lang="scss" scoped>
    h1 {
        color: navy;
    }
</style>