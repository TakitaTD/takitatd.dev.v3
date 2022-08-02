<script lang="ts" setup>
import { defineComponent } from "vue";
import Valknut from "../components/Valknut.vue";
</script>
<script lang="ts">
export default defineComponent({
  methods: {
    milk() {
      return alert("I LOVE MULK");
    },
  },
});
</script>

<template>
  <div :class="$style.Home">
    <div style="width: 100%; display: flex; flex-direction: row; height: 60%">
      <img :class="$style.icon" src="../assets/yuki.gif" />
      <div :class="$style.body">
        <header :class="$style.Header">👋 TakitaTD.dev</header>
        <div :class="$style.description">
          <p>
            Hello, World! I am TakitaTD. A young programmer who loves open
            source, and Linux.
          </p>
          <p>
            I've been programming since I was 8 years old, writing TypeScript
            and drinking
            <span
              @click="(e: any) => {if(e.target.textContent === 'milk') {
                e.target.textContent = '🥛'
                milk()
            }
            else {
                e.target.textContent = 'milk'
            }}"
              >milk</span
            >
          </p>
        </div>
      </div>
    </div>
    <div :class="$style['extra-content']">
      <div style="background-color: #fff; width: 3px; height: 80%" />

      <div :class="$style.item">
        <p>My favourite programming languages:</p>
        <ol style="text-align: left">
          <li>Rust</li>
          <li>Typescript</li>
          <li>C#</li>
        </ol>
      </div>
      <div style="background-color: #fff; width: 3px; height: 80%" />
      <div :class="$style.item">
        <p>My social medias:</p>
        <ul style="text-align: left">
          <li>Github & Gitlab: TakitaTD</li>
          <li>I have no other public social medias</li>
          <li>YouTube: T-Series</li>
        </ul>
      </div>
      <div style="background-color: #fff; width: 3px; height: 80%" />
      <div :class="$style.item">
        <p>Favourite TV-Shows and Movies</p>
        <ul>
          <li>Brooklyn 99</li>
          <li>The Office (U.S)</li>
          <li>The Midnight Gospel</li>
        </ul>
      </div>
      <div style="background-color: #fff; width: 3px; height: 80%" />
    </div>
  </div>
  <div :class="$style.divider" />
</template>

<style module scoped lang="scss">
@keyframes yuki {
  0% {
    transform: translateY(-2%);
  }
  50% {
    transform: translateY(2%);
  }
  100% {
    transform: translateY(-2%);
  }
}
.Home {
  display: flex;
  width: 80%;
  height: 70%;
  flex-direction: column;
  font-family: JetBrainsMono-SemiBold, sans-serif;
  justify-content: space-around;
  align-items: center;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 5px;
    outline: solid 3px #eceff4;
    animation: yuki 4s infinite ease-out;
  }
  .body {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    header.Header {
      font-family: "JetBrainsMono-Bold", sans-serif;
      font-size: 4.5rem;
    }
    .description {
      display: flex;
      flex-direction: column;
      width: 80%;
      font-family: JetBrainsMono, sans-serif;
      margin-top: 5%;
      p {
        font-size: 1.3rem;
      }
    }
  }
}
.divider {
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0px;
  bottom: 0;
  background: linear-gradient(to right bottom, #282d39 49%, #3b4252 50%),
    linear-gradient(-50deg, #3b4252 16px, #000 0);
}
.extra-content {
  width: 100%;
  height: 40%;
  text-align: left;
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  align-items: center;
  justify-content: flex-start;
  .item {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 1rem;
  }
}
</style>
