import Vue from 'vue'

const components = {
  Alert: () => import('../..\\components\\Alert.vue' /* webpackChunkName: "components/alert" */).then(c => c.default || c),
  AlgoliaAppSearch: () => import('../..\\components\\AlgoliaAppSearch.vue' /* webpackChunkName: "components/algolia-app-search" */).then(c => c.default || c),
  AppCopyButton: () => import('../..\\components\\AppCopyButton.vue' /* webpackChunkName: "components/app-copy-button" */).then(c => c.default || c),
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
  IconClipboardCheck: () => import('../..\\components\\IconClipboardCheck.vue' /* webpackChunkName: "components/icon-clipboard-check" */).then(c => c.default || c),
  IconClipboardCopy: () => import('../..\\components\\IconClipboardCopy.vue' /* webpackChunkName: "components/icon-clipboard-copy" */).then(c => c.default || c),
  IconMenu: () => import('../..\\components\\IconMenu.vue' /* webpackChunkName: "components/icon-menu" */).then(c => c.default || c),
  IconX: () => import('../..\\components\\IconX.vue' /* webpackChunkName: "components/icon-x" */).then(c => c.default || c),
  InboxNavigationComponent: () => import('../..\\components\\InboxNavigationComponent.vue' /* webpackChunkName: "components/inbox-navigation-component" */).then(c => c.default || c),
  InsightsNavigationComponent: () => import('../..\\components\\InsightsNavigationComponent.vue' /* webpackChunkName: "components/insights-navigation-component" */).then(c => c.default || c),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  QuickNavigationCard: () => import('../..\\components\\QuickNavigationCard.vue' /* webpackChunkName: "components/quick-navigation-card" */).then(c => c.default || c),
  SdkCard: () => import('../..\\components\\SdkCard.vue' /* webpackChunkName: "components/sdk-card" */).then(c => c.default || c),
  SubmitButton: () => import('../..\\components\\SubmitButton.vue' /* webpackChunkName: "components/submit-button" */).then(c => c.default || c),
  SwitchNavigationComponent: () => import('../..\\components\\SwitchNavigationComponent.vue' /* webpackChunkName: "components/switch-navigation-component" */).then(c => c.default || c),
  TokenNavigationComponent: () => import('../..\\components\\TokenNavigationComponent.vue' /* webpackChunkName: "components/token-navigation-component" */).then(c => c.default || c),
  IconsBuiltWithNuxtDark: () => import('../..\\components\\icons\\BuiltWithNuxtDark.vue' /* webpackChunkName: "components/icons-built-with-nuxt-dark" */).then(c => c.default || c),
  IconsBuiltWithNuxtLight: () => import('../..\\components\\icons\\BuiltWithNuxtLight.vue' /* webpackChunkName: "components/icons-built-with-nuxt-light" */).then(c => c.default || c),
  IconsIconBadgeCheck: () => import('../..\\components\\icons\\IconBadgeCheck.vue' /* webpackChunkName: "components/icons-icon-badge-check" */).then(c => c.default || c),
  IconsIconCheckCircle: () => import('../..\\components\\icons\\IconCheckCircle.vue' /* webpackChunkName: "components/icons-icon-check-circle" */).then(c => c.default || c),
  IconsIconChevronRight: () => import('../..\\components\\icons\\IconChevronRight.vue' /* webpackChunkName: "components/icons-icon-chevron-right" */).then(c => c.default || c),
  IconsIconExclamationCircle: () => import('../..\\components\\icons\\IconExclamationCircle.vue' /* webpackChunkName: "components/icons-icon-exclamation-circle" */).then(c => c.default || c),
  IconsIconExternalLink: () => import('../..\\components\\icons\\IconExternalLink.vue' /* webpackChunkName: "components/icons-icon-external-link" */).then(c => c.default || c),
  IconsIconGithub: () => import('../..\\components\\icons\\IconGithub.vue' /* webpackChunkName: "components/icons-icon-github" */).then(c => c.default || c),
  IconsIconInformationCircle: () => import('../..\\components\\icons\\IconInformationCircle.vue' /* webpackChunkName: "components/icons-icon-information-circle" */).then(c => c.default || c),
  IconsIconMoon: () => import('../..\\components\\icons\\IconMoon.vue' /* webpackChunkName: "components/icons-icon-moon" */).then(c => c.default || c),
  IconsIconSearch: () => import('../..\\components\\icons\\IconSearch.vue' /* webpackChunkName: "components/icons-icon-search" */).then(c => c.default || c),
  IconsIconSun: () => import('../..\\components\\icons\\IconSun.vue' /* webpackChunkName: "components/icons-icon-sun" */).then(c => c.default || c),
  IconsIconTranslate: () => import('../..\\components\\icons\\IconTranslate.vue' /* webpackChunkName: "components/icons-icon-translate" */).then(c => c.default || c),
  IconsIconTwitter: () => import('../..\\components\\icons\\IconTwitter.vue' /* webpackChunkName: "components/icons-icon-twitter" */).then(c => c.default || c),
  IconsIconXCircle: () => import('../..\\components\\icons\\IconXCircle.vue' /* webpackChunkName: "components/icons-icon-x-circle" */).then(c => c.default || c),
  ModalsSubmitSdkModal: () => import('../..\\components\\modals\\SubmitSdkModal.vue' /* webpackChunkName: "components/modals-submit-sdk-modal" */).then(c => c.default || c),
  ModalsSuccessfullySubmittedSdkModal: () => import('../..\\components\\modals\\SuccessfullySubmittedSdkModal.vue' /* webpackChunkName: "components/modals-successfully-submitted-sdk-modal" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
