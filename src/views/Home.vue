<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <div class="header">
      <zp-header class="ppp"></zp-header>
    </div>
    <!--中间部分-->
    <div class="content">
      <!-- 侧边栏 -->
      <div class="aside"></div>
      <!-- 主体内容 -->
      <div class="main"></div>
    </div>
    <!-- 页脚 -->
    <div class="footer"></div>
  </div>
</template>

<script>
import header from "../components/Header";
export default {
  name: "Home",
  components: {
    'zp-header':header
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 60px;
  width: 100%;
  background-color: #409eff;
}
.content {
  flex: 1;
  width: 100%;
  display: flex;
  .aside {
    width: 200px;
    height: 100%;
    display: none;
  }
  .main {
    height: 100%;
    flex: 1;
  }
}
.footer {
  height: 40px;
  width: 100%;
}

</style>
