<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: { FooterGuide },
  name: 'App',
  render: h => h(FooterGuide)
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
