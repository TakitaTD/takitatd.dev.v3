import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
import "vite-ssg";
import "vue-router";
const About$1 = "_About_1d2pv_1";
const Header = "_Header_1d2pv_13";
const content = "_content_1d2pv_16";
const style0 = {
  About: About$1,
  Header,
  content
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.About
  }, _attrs))} data-v-701615b0><header class="${ssrRenderClass(_ctx.$style.Header)}" data-v-701615b0>&#39;sup, employers!</header><p style="${ssrRenderStyle({ "font-size": "1.5rem" })}" data-v-701615b0>Here&#39;s some more info about myself</p><div class="${ssrRenderClass(_ctx.$style.content)}" data-v-701615b0><p data-v-701615b0>I love playing videogames</p></div></div>`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/routes/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules], ["__scopeId", "data-v-701615b0"]]);
export {
  About as default
};
