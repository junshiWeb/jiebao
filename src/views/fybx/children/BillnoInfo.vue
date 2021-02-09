<template>
  <div class="billno-info">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="费用报销" name="first">
        <bx-info></bx-info>
      </el-tab-pane>
      <el-tab-pane label="费用申请" name="second">
        <sq-info></sq-info>
      </el-tab-pane>
      <el-tab-pane label="费用还款" name="third">
        <hk-info></hk-info>
      </el-tab-pane>
      <el-tab-pane label="费用借款" name="fourth">
        <jk-info></jk-info>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BxInfo from "./BxInfo";
import HkInfo from "./HkInfo";
import JkInfo from "./JkInfo";
import SqInfo from "./SqInfo";
export default {
  name: "BillnoInfo",
  props: {
    // 单据类型
    billnoType: {
      type: String,
      default: "申请单，报销单，还款单，借款单",
    },
  },
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    BxInfo,
    HkInfo,
    JkInfo,
    SqInfo,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped lang='less'>
.billno-info {
  margin-bottom: 15px;
}
</style>