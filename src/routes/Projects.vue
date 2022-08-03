<script setup lang="ts"></script>

<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <div :class="$style.Projects">
      <header :class="$style.Header">My Projects</header>
      <div>
        <p>
          So, this will be a list of projects I've made that I'm proud of.
          However, I don't have many projects worth sharing.
        </p>
        <p>This page is currently [UNDER CONSTRUCTION]</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped module>
.Content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  // transform: translate(-50%, -50%);
}
.TakitaTD-dev {
  display: flex;
  width: 80%;
  height: 70%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  header.Header {
    font-family: "JetBrainsMono-Bold", sans-serif;
    font-size: 4.5rem;
  }
}
.Projects {
  display: flex;
  width: 80%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "JetBrainsMono-SemiBold", sans-serif;
  font-size: 2rem;
  gap: 10%;
  header.Header {
    font-family: "JetBrainsMono-Bold", sans-serif;
    font-size: 4.5rem;
  }
}
.divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 103px;
  transform: rotateY(180deg);
}

.divider .shape-fill {
  fill: #3b4252;
}
</style>
