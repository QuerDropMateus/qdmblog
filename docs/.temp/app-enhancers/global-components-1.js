import Vue from 'vue'
Vue.component("OtherComponent", () => import("/home/suh/Documents/Github/qdmblog/docs/.vuepress/components/OtherComponent"))
Vue.component("demo-component", () => import("/home/suh/Documents/Github/qdmblog/docs/.vuepress/components/demo-component"))
Vue.component("Foo-Bar", () => import("/home/suh/Documents/Github/qdmblog/docs/.vuepress/components/Foo/Bar"))
Vue.component("BaseListLayout", () => import("/home/suh/Documents/Github/qdmblog/global-components/BaseListLayout"))
Vue.component("BlogTag", () => import("/home/suh/Documents/Github/qdmblog/global-components/BlogTag"))
Vue.component("BlogTags", () => import("/home/suh/Documents/Github/qdmblog/global-components/BlogTags"))
Vue.component("NavLink", () => import("/home/suh/Documents/Github/qdmblog/global-components/NavLink"))


export default {}