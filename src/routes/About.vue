<template>
  <div :class="$style.About">
    <header :class="$style.Header">'sup, employers!</header>
    <p style="font-size: 1.5rem">Here's some more info about myself</p>
    <div :class="$style.content">
      <p>Here's some more info about myself</p>
    </div>
  </div>
</template>

<style scoped module lang="scss">
.About {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem;
  gap: 5%;
  outline: solid 3px #eceff4;
  width: 30%;
  height: 70%;
  font-family: "JetBrainsMono-SemiBold", sans-serif;
  header.Header {
    font-size: 3rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
}
</style>
