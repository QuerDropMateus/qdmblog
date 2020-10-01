/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/home/suh/Documentos/projetos/qdmblog/layouts/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-6dfd2991",
    path: "/about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6dfd2991").then(next)
    },
  },
  {
    name: "v-8a21bc52",
    path: "/2020/09/30/hello-world/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-8a21bc52").then(next)
    },
  },
  {
    path: "/2020/09/30/hello-world/index.html",
    redirect: "/2020/09/30/hello-world/"
  },
  {
    path: "/_posts/2020-1-29-hello-world.html",
    redirect: "/2020/09/30/hello-world/"
  },
  {
    name: "v-b2754d56",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b2754d56").then(next)
    },
    meta: {"pid":"post","id":"post"}
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-b1564aac").then(next)
    },
    meta: {"pid":"tag","id":"tag"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-14d71bda",
    path: "/tag/game/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-14d71bda").then(next)
    },
    meta: {"pid":"tag","id":"game"}
  },
  {
    path: "/tag/game/index.html",
    redirect: "/tag/game/"
  },
  {
    name: "v-322f0dde",
    path: "/tag/qmd/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-322f0dde").then(next)
    },
    meta: {"pid":"tag","id":"qmd"}
  },
  {
    path: "/tag/qmd/index.html",
    redirect: "/tag/qmd/"
  },
  {
    name: "v-7dbe52c5",
    path: "/tag/stream/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-7dbe52c5").then(next)
    },
    meta: {"pid":"tag","id":"stream"}
  },
  {
    path: "/tag/stream/index.html",
    redirect: "/tag/stream/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]