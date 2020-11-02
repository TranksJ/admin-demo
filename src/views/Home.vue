<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <div class="header">
      <bw-header>
        <!-- 插槽logo -->
        <template v-slot:default>
          <img src="../assets/img/logo.png" alt="">
        </template>
        <!-- 插槽登录用户名 -->
        <template v-slot:user>
          <span>超级管理员</span>
        </template>
      </bw-header>
    </div>
    <!--中间部分-->
    <div class="content">
      <!-- 侧边栏 -->
      <div class="aside"></div>
      <!-- 主体内容 -->
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <!-- 页脚 -->
    <div class="footer">
      ©2020 Beijing,Brewster. All rights reserved.
    </div>
  </div>
</template>

<script>
import BwHeader from "../components/Header";
import BwComminbox from "../components/Comminbox";
export default {
  name: "Home",
  components: {
    'BwHeader':BwHeader,
    'BwComminbox':BwComminbox
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
  height: 50px;
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
    box-sizing: border-box;
    padding: 20px;
  }
}
.footer {
  height: 40px;
  width: 100%;
  line-height: 40px;
  color: #999999;
  text-align: center;
}

</style>
