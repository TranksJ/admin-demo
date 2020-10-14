<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <div class="header"></div>
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
export default {
  name: 'Home'
}
</script>
<style lang="less" scoped>
.home{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  height: 60px;
  width: 100%;
  background-color: #409EFF;
}
.content{
  flex: 1;
  width: 100%;
  display: flex;
  .aside{
    width: 200px;
    height: 100%;
  }
  .main{
    height: 100%;
    flex: 1;
  }
}
.footer{
  height: 40px;
  width: 100%;
}
</style>
