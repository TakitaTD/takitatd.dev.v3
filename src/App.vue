<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
@font-face {
  font-family: "JetBrainsMono-Bold";
  src: url("./assets/JetBrainsMono/JetBrainsMono-Bold.ttf");
}
@font-face {
  font-family: "JetBrainsMono-ExtraBold";
  src: url("./assets/JetBrainsMono/JetBrainsMono-ExtraBold.ttf");
}
@font-face {
  font-family: "JetBrainsMono-SemiBold";
  src: url("./assets/JetBrainsMono/JetBrainsMono-SemiBold.ttf");
}
@font-face {
  font-family: "JetBrainsMono";
  src: url("./assets/JetBrainsMono/JetBrainsMono-Medium.ttf");
}
</style>
