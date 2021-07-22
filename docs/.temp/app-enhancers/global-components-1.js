import Vue from 'vue'
Vue.component("demo-component", () => import("C:\\Users\\tumbl\\Documents\\GitHub\\qdmblog\\docs\\.vuepress\\components\\demo-component"))
Vue.component("OtherComponent", () => import("C:\\Users\\tumbl\\Documents\\GitHub\\qdmblog\\docs\\.vuepress\\components\\OtherComponent"))
Vue.component("Foo-Bar", () => import("C:\\Users\\tumbl\\Documents\\GitHub\\qdmblog\\docs\\.vuepress\\components\\Foo\\Bar"))
Vue.component("BaseListLayout", () => import("C:\\Users\\tumbl\\Documents\\GitHub\\qdmblog\\global-components\\BaseListLayout"))
Vue.component("BlogTag", () => import("C:\\Users\\tumbl\\Documents\\GitHub\\qdmblog\\global-components\\BlogTag"))
Vue.component("NavLink", () => import("C:\\Users\\tumbl\\Documents\\GitHub\\qdmblog\\global-components\\NavLink"))
Vue.component("BlogTags", () => import("C:\\Users\\tumbl\\Documents\\GitHub\\qdmblog\\global-components\\BlogTags"))


export default {}