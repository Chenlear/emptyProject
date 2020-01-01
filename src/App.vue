<template>
  <div id="app">
    <router-view :key="$route.fullPath"/><!-- 加上key,跳转任何页面都会全刷新，包括同一页面:key="$route.fullPath"-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
