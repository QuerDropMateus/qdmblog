import Vue from 'vue'
Vue.component("OtherComponent", () => import("/home/suh/Documentos/projetos/qdmblog/docs/.vuepress/components/OtherComponent"))
Vue.component("demo-component", () => import("/home/suh/Documentos/projetos/qdmblog/docs/.vuepress/components/demo-component"))
Vue.component("Foo-Bar", () => import("/home/suh/Documentos/projetos/qdmblog/docs/.vuepress/components/Foo/Bar"))
Vue.component("BaseListLayout", () => import("/home/suh/Documentos/projetos/qdmblog/global-components/BaseListLayout"))
Vue.component("BlogTag", () => import("/home/suh/Documentos/projetos/qdmblog/global-components/BlogTag"))
Vue.component("BlogTags", () => import("/home/suh/Documentos/projetos/qdmblog/global-components/BlogTags"))
Vue.component("NavLink", () => import("/home/suh/Documentos/projetos/qdmblog/global-components/NavLink"))


export default {}