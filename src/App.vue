<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HUD from "./components/HUD.vue";
</script>

<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <HUD />
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
@font-face {
  font-family: "JetBrainsMono-Light";
  src: url("./assets/JetBrainsMono/JetBrainsMono-Light.ttf");
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s, transform 0.7s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
