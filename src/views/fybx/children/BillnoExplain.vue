<template>
  <el-card>
    <div slot="header" class="fybx-header">
      <span>{{ headerTitle }}</span>
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
  props: {
    headerTitle: {
      type: String,
      default: "费用说明",
    },
  },
  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style scoped lang='less'>
</style>