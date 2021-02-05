<template>
  <el-card class="box-card">
    <div slot="header" class="fybx-header">
      <span>{{ headerTitle }}</span>
      <span class="header-button">
        <el-button
          v-for="btn in headerButton"
          :key="btn.label"
          :type="btn.type"
          @click="btn.eventName"
          size="small"
          >{{ btn.label }}</el-button
        >
      </span>
    </div>
    <billno-form :formLabel="formLabel"></billno-form>
  </el-card>
</template>

<script>
import BillnoForm from "./BillnoForm";
export default {
  name: "name",
  props: {
    headerTitle: {
      type: String,
      default: "预算明细",
    },
    headerButton: {
      type: Array,
      default() {
        return [
          {
            type: "",
            label: "下载",
            eventName: () => {
              console.log("下载");
            },
          },
          {
            type: "",
            label: "导入",
            eventName: () => {
              console.log("导入");
            },
          },
        ];
      },
    },
    formLabel: {
      type: Array,
    },
  },
  components: {
    BillnoForm,
  },
};
</script>

<style scoped lang='less'>
.box-card {
  .header-button {
    float: right;
  }
  .el-card__body {
    height: 100px;
  }
}
</style>