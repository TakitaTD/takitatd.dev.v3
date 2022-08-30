import { Component } from "solid-js";

export default function NavBar() {
  return (
    <nav style={{ position: "absolute", top: 0, left: 0 }}>
      <a href="/">Index</a>
      <a href="/about">About</a>
    </nav>
  );
}
