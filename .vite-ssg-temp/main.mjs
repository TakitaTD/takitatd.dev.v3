import { ViteSSG } from "vite-ssg";
import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { createRouter, createWebHistory } from "vue-router";
const style = "";
const NavBar$1 = "_NavBar_1dn0k_1";
const nav = "_nav_1dn0k_11";
const navLink = "_navLink_1dn0k_24";
const style0$1 = {
  NavBar: NavBar$1,
  nav,
  navLink
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.NavBar
  }, _attrs))} data-v-7acc5b8d><ul class="${ssrRenderClass(_ctx.$style.nav)}" data-v-7acc5b8d>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/About/",
    class: _ctx.$style.navLink
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-v-7acc5b8d${_scopeId}><path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z" data-v-7acc5b8d${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512"
          }, [
            createVNode("path", { d: "M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/",
    class: _ctx.$style.navLink
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-7acc5b8d${_scopeId}><path fill="currentColor" d="M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z" data-v-7acc5b8d${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512"
          }, [
            createVNode("path", {
              fill: "currentColor",
              d: "M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/Projects/",
    class: _ctx.$style.navLink
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-7acc5b8d${_scopeId}><path d="M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z" data-v-7acc5b8d${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }, [
            createVNode("path", { d: "M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></nav>`);
}
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules$1], ["__scopeId", "data-v-7acc5b8d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "/assets/yuki.34039b59.gif";
const __default__ = defineComponent({
  methods: {
    milk() {
      return alert("I LOVE MULK");
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass(_ctx.$style.Home)}" data-v-ce5f729e><div style="${ssrRenderStyle({ "width": "100%", "display": "flex", "flex-direction": "row", "height": "60%" })}" data-v-ce5f729e><img class="${ssrRenderClass(_ctx.$style.icon)}"${ssrRenderAttr("src", _imports_0)} alt="Person typing fast lol" title="Yuki typing" data-v-ce5f729e><div class="${ssrRenderClass(_ctx.$style.body)}" data-v-ce5f729e><header class="${ssrRenderClass(_ctx.$style.Header)}" data-v-ce5f729e>\u{1F44B} TakitaTD.dev</header><div class="${ssrRenderClass(_ctx.$style.description)}" data-v-ce5f729e><p data-v-ce5f729e> Hello, World! I am TakitaTD. A programmer who loves open source, stackoverflow, and Linux. </p><p data-v-ce5f729e> I&#39;ve been programming since I was 8 years old, writing TypeScript and drinking <span data-v-ce5f729e>milk</span></p></div></div></div><div class="${ssrRenderClass(_ctx.$style["extra-content"])}" data-v-ce5f729e><div class="${ssrRenderClass(_ctx.$style.item)}" data-v-ce5f729e><p data-v-ce5f729e>My favourite programming languages:</p><ol style="${ssrRenderStyle({ "text-align": "left" })}" data-v-ce5f729e><li data-v-ce5f729e>Rust</li><li data-v-ce5f729e>Typescript</li><li data-v-ce5f729e>C#</li></ol></div><div class="${ssrRenderClass(_ctx.$style.item)}" data-v-ce5f729e><p data-v-ce5f729e>My social medias:</p><ul style="${ssrRenderStyle({ "text-align": "left" })}" data-v-ce5f729e><li data-v-ce5f729e><a href="//github.com/TakitaTD" target="_blank" referrerpolicy="noref" data-v-ce5f729e>Github</a> &amp; <a href="//gitlab.com/TakitaTD" target="_blank" referrerpolicy="noref" data-v-ce5f729e>Gitlab</a>: TakitaTD </li><li data-v-ce5f729e>I have no other public social medias</li><li data-v-ce5f729e> YouTube: <a href="//www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA" target="_blank" referrerpolicy="noref" data-v-ce5f729e>T-Series</a></li></ul></div><div class="${ssrRenderClass(_ctx.$style.item)}" data-v-ce5f729e><p data-v-ce5f729e>Favourite TV-Shows and Movies</p><ul data-v-ce5f729e><li data-v-ce5f729e><a href="//www.imdb.com/title/tt2467372/" target="_blank" referrerpolicy="noref" data-v-ce5f729e>Brooklyn 99</a></li><li data-v-ce5f729e><a href="//www.imdb.com/title/tt0386676/" target="_blank" referrerpolicy="noref" data-v-ce5f729e>The Office (U.S)</a></li><li data-v-ce5f729e><a href="//www.imdb.com/title/tt11639414/" target="_blank" referrerpolicy="noref" data-v-ce5f729e>The Midnight Gospel</a></li></ul></div></div></div><div class="${ssrRenderClass(_ctx.$style.divider)}" data-v-ce5f729e></div><!--]-->`);
    };
  }
});
const Home$1 = "_Home_4b9u8_12";
const icon = "_icon_4b9u8_21";
const body = "_body_4b9u8_31";
const Header = "_Header_4b9u8_38";
const description = "_description_4b9u8_42";
const divider = "_divider_4b9u8_53";
const item = "_item_4b9u8_72";
const yuki = "_yuki_4b9u8_1";
const style0 = {
  Home: Home$1,
  icon,
  body,
  Header,
  description,
  divider,
  "extra-content": "_extra-content_4b9u8_62",
  item,
  yuki
};
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/routes/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-ce5f729e"]]);
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/About/",
    component: () => import("./assets/About.9a5b205b.js")
  },
  {
    path: "/Projects/",
    component: () => import("./assets/Projects.74f27837.js")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
const createApp = ViteSSG(
  _sfc_main$1,
  {
    routes
  },
  ({ app, router: router$1, routes: routes2, isClient, initialState }) => {
    app.use(router);
  }
);
export {
  _export_sfc as _,
  createApp
};
