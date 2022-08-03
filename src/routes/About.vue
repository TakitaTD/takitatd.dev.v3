<script lang="ts" setup>
import { defineComponent } from "vue";
import TechBox from "../components/TechBox.vue";
import vueIcon from "../assets/vue.svg";
import nextjsIcon from "../assets/nextjs.svg";
import reactjsIcon from "../assets/reactjs.svg";
import svelteLogo from "../assets/svelteLogo.svg";
import nuxtLogo from "../assets/nuxtLogo.svg";
import sassLogo from "../assets/sassLogo.svg";
import reduxLogo from "../assets/reduxLogo.svg";
import gitIcon from "../assets/gitLogo.svg";
import rustIcon from "../assets/rustLogo.svg";
</script>

<template>
  <div :class="$style.About">
    <div :class="$style.head">
      <header :class="$style.Header">'sup, employers!</header>
      <p>
        If you're interested in hiring me here's some technologies I'm
        comfortable/familiar with.
      </p>
      <!-- <p>Current Linux Distro: Arch Linux x86_64</p> -->
    </div>
    <div :class="$style.techs">
      <div
        style="
          display: flex;
          justify-content: space-around;
          flex-direction: row;
          width: 100%;
          height: 100%;
        "
      >
        <TechBox link="//vuejs.org" name="Vue.JS" :icon="vueIcon" />
        <TechBox link="//nextjs.org" name="Next.JS" :icon="nextjsIcon" />
        <TechBox link="//reactjs.org" name="React.JS" :icon="reactjsIcon" />
        <TechBox link="//svelte.dev" name="Svelte" :icon="svelteLogo" />
        <TechBox link="//nuxtjs.dev" name="Nuxt.JS" :icon="nuxtLogo" />
      </div>
      <div
        style="
          display: flex;
          justify-content: space-around;
          flex-direction: row;
          width: 100%;
          height: 100%;
        "
      >
        <TechBox link="//sass-lang.com" name="Sass" :icon="sassLogo" />
        <TechBox link="//redux.js.org" name="Redux" :icon="reduxLogo" />
        <TechBox link="//git.org" name="Git" :icon="gitIcon" />
        <TechBox link="//rust-lang.org" name="Rust" :icon="rustIcon" />
      </div>
    </div>
  </div>
</template>
<style>
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

<style scoped module lang="scss">
.About {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  gap: 5%;
  font-family: "JetBrainsMono", sans-serif;
  // outline: solid 3px #eceff4;
  border-radius: 3px;
  width: 80%;
  height: 80%;
  .head {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    header.Header {
      border-radius: 3px;
      // background-color: rgba(255, 255, 255, 0.03);
      // transition: background-color 0.2s, outline 0.2s;
      // outline: solid 3px #eceff4;
      font-family: "JetBrainsMono-Bold", sans-serif;
      font-size: 4.5rem;
      // width: 70%;
    }
  }
  .techs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // flex-wrap: wrap;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    width: 80%;
    min-height: 80%;
    border-radius: 3px;
    .break {
      flex-basis: 100%;
      height: 0;
    }
  }
  .content {
    overflow-y: scroll;
    font-family: "JetBrainsMono-SemiBold", sans-serif;
    display: flex;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 5px;
    // outline: solid 3px #eceff4;
    transition: background-color 0.3s;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    height: 100%;
    font-size: 1.25rem;
    scroll-behavior: smooth;
  }
  .content:hover {
    background-color: rgba(255, 255, 255, 0.01);
  }
  .slide-button {
    position: absolute;
    z-index: 3;
    transform: translate(-50%, -50%);
    top: 50%;
  }
  .back {
    left: 0;
  }
  .forward {
    right: 0;
  }
}
</style>
