<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
  width: 100%;
}
#app{
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
