<script setup lang="ts">
defineProps<{ name: string; link: string; icon: string }>();
</script>

<template>
  <div :class="$style.TechBox">
    <a :href="link" target="_blank">
      <div :style="`background-image: url('${icon}')`" :class="$style.icon" />
      <span :class="$style.title"> {{ name }} </span>
    </a>
  </div>
</template>

<style scoped module lang="scss">
.TechBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 60%;
  max-height: 80%;
  aspect-ratio: 1/1;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
  padding: 0.7rem;
  margin: 1rem;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    color: #eceff4;
    .icon {
      width: 80%;
      aspect-ratio: 1/1;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .title {
      font-family: "JetBrainsMono-Bold", sans-serif;
      font-size: 150%;
    }
  }
}
.TechBox:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
