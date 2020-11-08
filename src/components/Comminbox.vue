<template>
  <div class="BwComminbox">
    <div class="BwComminbox-title">
      <span class="titleTag"></span>
      <span class="titleName">{{name}}</span>
    </div>
    <div class="BwComminbox-main">
      <div class="operationBox">
        <slot name="operation"></slot>
      </div>
      <div class="commonCard">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BwComminbox',
  props:{
    name:String
  }
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
    .operationBox{
      height: 70px;
      width: 100%;
      line-height: 70px;
    }
    .commonCard{
      position: absolute;
      top: 90px;
      bottom: 0;
      background-color: #FFFFFF;
      border: 1px solid #DDDDDD;
      border-radius: 5px;
      width: 100%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
    }
  }
  
</style>
