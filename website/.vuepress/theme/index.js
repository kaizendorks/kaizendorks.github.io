// Inherit from the default @vuepress/theme-blog. See https://vuepress.vuejs.org/theme/inheritance.html#motivation
// Main reasons to override are:
//  - override the Header component, so we can display the logo
//  - override the GlobalLayout component, so we can include a sidebar in pages such as the tutorial (Copying all the sidebar components from @vuepress/theme-default)
module.exports = {
  extend: '@vuepress/theme-blog',
  globalLayout: './layouts/GlobalLayout.vue'
}