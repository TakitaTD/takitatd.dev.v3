<script lang="ts" setup>
import { defineComponent } from "vue";
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
  <div :class="$style['content-wrapper']">
    <div :class="$style.Home">
      <div style="width: 100%; display: flex; flex-direction: row; height: 60%">
        <img
          :class="$style.icon"
          src="@/assets/yuki.gif"
          alt="Person typing fast lol"
          title="Yuki typing"
        />
        <div :class="$style.body">
          <header :class="$style.Header">👋 TakitaTD.dev</header>
          <div :class="$style.description">
            <p>
              Hello, World! I am TakitaTD. A programmer who loves open source,
              stackoverflow, and Linux.
            </p>
            <p>
              I've been programming since I was 8 years old, writing TypeScript
              and drinking
              <span
                @click="(e: any) => {if(e.target.textContent === 'milk' || e.target.textContent === 'molk') {
                e.target.textContent = '🥛'
                milk()
            }
            else {
                e.target.textContent = 'molk'
            }}"
                >milk</span
              >
            </p>
          </div>
        </div>
      </div>
      <div :class="$style['extra-content']">
        <div :class="$style['item-wrapper']">
          <div :class="$style.item">
            <p>My favourite programming languages:</p>
            <ol style="text-align: left">
              <li>Rust</li>
              <li>Typescript</li>
              <li>C#</li>
            </ol>
          </div>
        </div>
        <div :class="$style['item-wrapper']">
          <div :class="$style.item">
            <p>My online presence:</p>
            <ul style="text-align: left">
              <li>
                <a
                  href="//github.com/TakitaTD"
                  target="_blank"
                  referrerpolicy="noref"
                  ref="anonymous"
                  >Github</a
                >
                &
                <a
                  href="//gitlab.com/TakitaTD"
                  target="_blank"
                  referrerpolicy="noref"
                  ref="anonymous"
                  >Gitlab</a
                >: TakitaTD
              </li>
              <li>I have no other public social medias</li>
              <li>
                YouTube:
                <a
                  href="//www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA"
                  target="_blank"
                  referrerpolicy="noref"
                  ref="anonymous"
                  >T-Series</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div :class="$style['item-wrapper']">
          <div :class="$style.item">
            <p>Favourite TV-Shows and Movies</p>
            <ul>
              <li>
                <a
                  href="//www.imdb.com/title/tt2467372/"
                  target="_blank"
                  referrerpolicy="noref"
                  ref="anonymous"
                  >Brooklyn 99</a
                >
              </li>
              <li>
                <a
                  href="//www.imdb.com/title/tt0386676/"
                  target="_blank"
                  referrerpolicy="noref"
                  ref="anonymous"
                  >The Office (U.S)</a
                >
              </li>
              <li>
                <a
                  href="//www.imdb.com/title/tt11639414/"
                  target="_blank"
                  referrerpolicy="noref"
                  ref="anonymous"
                  >The Midnight Gospel</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.content-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .Home {
    display: flex;
    width: 80%;
    height: 70%;
    flex-direction: column;
    font-family: "JetBrainsMono-SemiBold", sans-serif;
    justify-content: space-between;
    align-items: center;
    // gap: %;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100%;
      border-radius: 5px;
      outline: solid 3px #eceff4;
      // animation: yuki 4s infinite ease-out;
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
        font-family: "JetBrainsMono", sans-serif;
        margin-top: 5%;
        p {
          font-size: 1.3rem;
        }
      }
    }
  }
  .extra-content {
    width: 100%;
    min-height: 30%;
    text-align: left;
    display: flex;
    flex-direction: row;
    font-size: 1.3rem;
    align-items: center;
    justify-content: space-between;
    // background-color: rgba(255, 255, 255, 0.05);
    .item-wrapper {
      // width: 20%;
      min-height: 100%;
      border-radius: 0.2rem;
      outline: solid 2px #eceff4;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      background-color: rgba(255, 255, 255, 0.05);
      transition: background-color 0.2s;
      .item {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        height: 90%;
        width: 90%;
      }
    }
    .item-wrapper:hover {
      background-color: rgba(255, 255, 255, 0);
    }
  }
}
.icons {
  display: flex;
  width: 100%;
}
</style>
