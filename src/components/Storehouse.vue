<template>
  <div class="BwStorehouse">
    <bw-comminbox name="库房设置">
      <template v-slot:operation>
        <el-button type="primary">入库登记</el-button>
      </template>
      <template v-slot:main>
        
      </template>
    </bw-comminbox>
  </div>
</template>
<script>
// 通用容器
import BwComminbox from "../components/Comminbox";
export default {
  name: 'BwStorehouse',
  components: {
    'BwComminbox':BwComminbox
  }
}
</script>
<style lang="less" scoped>
  .BwStorehouse{
    height: 100%;
    width: 100%;
  }
</style>
