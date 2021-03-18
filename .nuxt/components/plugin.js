import Vue from 'vue'

const components = {
  AppFooter: () => import('../..\\components\\AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => c.default || c),
  AppHeader: () => import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c),
  AppPageBottom: () => import('../..\\components\\AppPageBottom.vue' /* webpackChunkName: "components/app-page-bottom" */).then(c => c.default || c),
  AppPrevNext: () => import('../..\\components\\AppPrevNext.vue' /* webpackChunkName: "components/app-prev-next" */).then(c => c.default || c),
  AppSearch: () => import('../..\\components\\AppSearch.vue' /* webpackChunkName: "components/app-search" */).then(c => c.default || c),
  AppSidebar: () => import('../..\\components\\AppSidebar.vue' /* webpackChunkName: "components/app-sidebar" */).then(c => c.default || c),
  AppToc: () => import('../..\\components\\AppToc.vue' /* webpackChunkName: "components/app-toc" */).then(c => c.default || c),
  CodeBlock: () => import('../..\\components\\CodeBlock.vue' /* webpackChunkName: "components/code-block" */).then(c => c.default || c),
  CodeGroup: () => import('../..\\components\\CodeGroup.vue' /* webpackChunkName: "components/code-group" */).then(c => c.default || c),
  IconArrowLeft: () => import('../..\\components\\IconArrowLeft.vue' /* webpackChunkName: "components/icon-arrow-left" */).then(c => c.default || c),
  IconArrowRight: () => import('../..\\components\\IconArrowRight.vue' /* webpackChunkName: "components/icon-arrow-right" */).then(c => c.default || c),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  IconsBuiltWithNuxtDark: () => import('../..\\components\\icons\\BuiltWithNuxtDark.vue' /* webpackChunkName: "components/icons-built-with-nuxt-dark" */).then(c => c.default || c),
  IconsBuiltWithNuxtLight: () => import('../..\\components\\icons\\BuiltWithNuxtLight.vue' /* webpackChunkName: "components/icons-built-with-nuxt-light" */).then(c => c.default || c),
  IconsIconBadgeCheck: () => import('../..\\components\\icons\\IconBadgeCheck.vue' /* webpackChunkName: "components/icons-icon-badge-check" */).then(c => c.default || c),
  IconsIconCheckCircle: () => import('../..\\components\\icons\\IconCheckCircle.vue' /* webpackChunkName: "components/icons-icon-check-circle" */).then(c => c.default || c),
  IconsIconChevronRight: () => import('../..\\components\\icons\\IconChevronRight.vue' /* webpackChunkName: "components/icons-icon-chevron-right" */).then(c => c.default || c),
  IconsIconClipboardCheck: () => import('../..\\components\\icons\\IconClipboardCheck.vue' /* webpackChunkName: "components/icons-icon-clipboard-check" */).then(c => c.default || c),
  IconsIconClipboardCopy: () => import('../..\\components\\icons\\IconClipboardCopy.vue' /* webpackChunkName: "components/icons-icon-clipboard-copy" */).then(c => c.default || c),
  IconsIconExclamationCircle: () => import('../..\\components\\icons\\IconExclamationCircle.vue' /* webpackChunkName: "components/icons-icon-exclamation-circle" */).then(c => c.default || c),
  IconsIconExternalLink: () => import('../..\\components\\icons\\IconExternalLink.vue' /* webpackChunkName: "components/icons-icon-external-link" */).then(c => c.default || c),
  IconsIconGithub: () => import('../..\\components\\icons\\IconGithub.vue' /* webpackChunkName: "components/icons-icon-github" */).then(c => c.default || c),
  IconsIconInformationCircle: () => import('../..\\components\\icons\\IconInformationCircle.vue' /* webpackChunkName: "components/icons-icon-information-circle" */).then(c => c.default || c),
  IconsIconMenu: () => import('../..\\components\\icons\\IconMenu.vue' /* webpackChunkName: "components/icons-icon-menu" */).then(c => c.default || c),
  IconsIconMoon: () => import('../..\\components\\icons\\IconMoon.vue' /* webpackChunkName: "components/icons-icon-moon" */).then(c => c.default || c),
  IconsIconSearch: () => import('../..\\components\\icons\\IconSearch.vue' /* webpackChunkName: "components/icons-icon-search" */).then(c => c.default || c),
  IconsIconSun: () => import('../..\\components\\icons\\IconSun.vue' /* webpackChunkName: "components/icons-icon-sun" */).then(c => c.default || c),
  IconsIconTranslate: () => import('../..\\components\\icons\\IconTranslate.vue' /* webpackChunkName: "components/icons-icon-translate" */).then(c => c.default || c),
  IconsIconTwitter: () => import('../..\\components\\icons\\IconTwitter.vue' /* webpackChunkName: "components/icons-icon-twitter" */).then(c => c.default || c),
  IconsIconX: () => import('../..\\components\\icons\\IconX.vue' /* webpackChunkName: "components/icons-icon-x" */).then(c => c.default || c),
  IconsIconXCircle: () => import('../..\\components\\icons\\IconXCircle.vue' /* webpackChunkName: "components/icons-icon-xcircle" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
