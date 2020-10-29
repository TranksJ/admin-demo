<template>
  <div class="zp-header">
    <img src="../assets/img/logo.png" alt="">
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="#">归档管理</a></li>
      <li><a href="#">一级菜单</a></li>
      <li><a href="#">一级菜单</a></li>
      <li><a href="#">一级菜单</a></li>
      <li>
        <a href="#">一级菜单</a>
        <ul>
          <li><a href="#">二级菜单</a></li>
          <li><a href="#">二级菜单</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="less" scoped>
.zp-header {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  ul {
    /* 清除ul标签的默认样式 */
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    margin: 0 auto;
  }
  li {
    float: left; /* 使li内容横向浮动，即横向排列  */
  }
  li a:hover {
    /* 鼠标选中时背景变为黑色 */
    background-color: #111;
  }
  ul li ul {
    /* 设置二级菜单 */
    width: auto;
    background: rgb(189, 181, 181);
    position: absolute;
    display: none; /* 默认隐藏二级菜单的内容 */
  }
  ul li ul li {
    /* 二级菜单li内容的显示 */
    margin-right: 0;
    float: none;
    text-align: center;
  }
  ul li:hover ul {
    /* 鼠标选中二级菜单内容时 */
    display: block;
  }
  li a {
    /* 设置链接内容显示的格式*/
    display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none; /* 去除下划线 */
  }
  img {
    height: 100%;
    object-fit: cover;
    margin-right: 20px;
  }
}
</style>
