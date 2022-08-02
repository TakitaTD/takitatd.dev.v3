<script lang="ts" setup>
import { defineComponent } from "vue";
</script>

<template>
  <div :class="$style.About">
    <div :class="$style.content">
      <p style="font-size: 2.25rem">Here's some more info about me:</p>
      <p>(This is scrollable)</p>
      <p>
        I started coding when I was 8 years old, when I was first introduced to
        Linux.
      </p>
      <p>
        In 2018, I enabled developer mode on my chromebook I bought for school.
        I realised, that with this,<br />
        I can use a custom operating system via Legacy Boot mode.
      </p>
      <p>
        For my first custom operating system, I used
        <a href="//galliumos.org" target="_blank">GalliumOS</a>
      </p>
      <p>
        My first "real" languages were Javascript and C#.<br />
        When making websites, I didn't use a website until I was completely
        acclimated to using <code>document.createElement</code>
      </p>
      <p>
        My first Javascript UI library was React.JS, I used React for quite a
        long time, trying out Angular and Svelte on the way.
      </p>
      <p>
        This was around the same time I actually flashed custom firmware to the
        chromebook I bought. I put SeaBIOS and CoreBoot on my firmware. If
        you're interested in trying this yourself, I followed
        <a href="//mrchromebox.tech" target="_blank">Mr ChromeBox's</a>
        tutorial
      </p>
      <p>
        Most of my time spent programming after that was spent making small
        projects that never really amounted to anything.
      </p>
      <p>
        A notable project I made was a website for my YouTube channel at the
        time. On my website, I hosted a website were I hosted some GBA ROM
        files.
      </p>
      <p>
        I also made a website where you can listen to music, I later turned it
        into a chrome extension that got popular around my school.
      </p>
      <p>
        Sadly, though coding at my school was not supported. All the I.T.
        courses were coding with blocks (<a
          href="//scratch.mit.edu"
          target="_blank"
          >Scratch</a
        >).
      </p>
      <p>
        I've always been good at computers, I got an iPad when I was 6, which is
        either a good thing or a bad thing depending on how you looked at it,
        but it definitely jump-started my interest in computers and coding.
      </p>
    </div>
    <div :class="$style.sectwo">
      <header :class="$style.Header">'sup, employers!</header>
      <p>(Left): This is a bit of a history of me and coding</p>
      <p>Current Linux Distro: Arch Linux x86_64</p>
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  gap: 5%;
  font-family: "JetBrainsMono", sans-serif;
  // outline: solid 3px #eceff4;
  border-radius: 3px;
  width: 80%;
  height: 70%;
  .sectwo {
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
