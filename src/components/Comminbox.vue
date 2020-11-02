<template>
  <div class="BwComminbox">
    <div class="BwComminbox-title">
      <span class="titleTag"></span>
      <span class="titleName">档案管理</span>
    </div>
    <div class="BwComminbox-main">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BwComminbox'
}
</script>
<style lang="less" scoped>
  .BwComminbox{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .BwComminbox-title{
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    .titleTag{
      width: 8px;
      height: 20px;
      background-color: #409EFF;
      margin-right: 20px;
    }
    .titleName{
      font-size: 20px;
      font-weight: 500px;
    }
  }
  .BwComminbox-main{
    position: absolute;
    top: 50px;
    width: 100%;
    bottom: 0;
  }
  
</style>
