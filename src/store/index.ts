import { createStore } from "vuex";

export const store = createStore({
  state: {
    currentSlide: 1,
  },
  mutations: {
    addSlide({ currentSlide }) {
      currentSlide += 1;

      console.log(currentSlide);
    },
    backSlide({ currentSlide }) {
      currentSlide -= 1;

      console.log(currentSlide);
    },
  },
});
