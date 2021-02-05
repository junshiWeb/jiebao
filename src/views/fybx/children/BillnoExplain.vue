<template>
  <el-card>
    <div slot="header" class="fybx-header">
      <span>费用说明</span>
    </div>
    <el-input
      type="textarea"
      placeholder="请输入说明，最多输入75个字符"
      v-model="textarea"
      maxlength="75"
      show-word-limit
    >
    </el-input>
  </el-card>
</template>
 
<script>
export default {
  name: "name",
  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style scoped lang='less'>
</style>