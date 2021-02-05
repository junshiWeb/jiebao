<template>
  <div class="billno-info">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="费用报销" name="first">
        <el-form inline size="small">
          <billno-header></billno-header>
          <div class="jkcx-card">
            <el-checkbox v-model="jkcxChange" size="medium"
              ><span class="text">借款冲销</span
              ><span class="primary"
                >(有借款冲销的请优先选择借款冲销！)</span
              ></el-checkbox
            >

            <billno-card headerTitle="借款信息" v-if="jkcxChange"></billno-card>
          </div>
          <billno-card
            headerTitle="预算明细"
            :formLabel="formLabelYsmx"
          ></billno-card>
          <billno-card headerTitle="报销明细"></billno-card>
          <billno-card headerTitle="付款区"></billno-card>
          <billno-card headerTitle="附件说明区"></billno-card>
          <billno-explain></billno-explain>
          <billno-accessory></billno-accessory>

          <billno-htfj></billno-htfj>
          <billno-event
            @formSubmit="formSubmit"
            @formSave="formSave"
            @formDelete="formDelete(test)"
          ></billno-event>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="费用申请" name="second">
        <div><h2>综合费用申请</h2></div>
        <div>费用明细区</div>
        <div>申请说明</div>
        <div>附件</div>
        <div>合同附件</div>
        <div>事件</div>
      </el-tab-pane>
      <el-tab-pane label="费用还款" name="third">
        <div><h2>还款单</h2></div>
        <div>借款冲销---</div>
        <div>还款明细</div>
        <div>还款说明</div>
        <div>附件</div>
        <div>合同附件</div>
        <div>事件</div>
      </el-tab-pane>
      <el-tab-pane label="费用借款" name="fourth">
        <div><h2>费用借款单</h2></div>
        <div>报销明细</div>
        <div>付款信息</div>
        <div>借款说明</div>
        <div></div>
        <div>附件</div>
        <div>合同附件</div>
        <div>事件</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BillnoHeader from "./BillnoHeader";
import BillnoCard from "./BillnoCard";
import BillnoExplain from "./BillnoExplain";
import BillnoAccessory from "./BillnoAccessory";
import BillnoHtfj from "./BillnoHtfj";
import BillnoEvent from "./BillnoEvent";
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
      jkcxChange: false,
      activeName: "first",
      test: "申请单，报销单，还款单，借款单",
      formLabelYsmx: [
        {
          type: "Input",
          prop: "glsqh",
          label: "关联申请行",
          rules: [{ required: true, message: "关联申请行不能为空" }],
        },
      ],
    };
  },
  components: {
    BillnoHeader,
    BillnoCard,
    BillnoExplain,
    BillnoAccessory,
    BillnoHtfj,
    BillnoEvent,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    formSubmit() {
      console.log(arguments);
      console.log("提交");
    },
    formSave() {
      console.log("保存");
    },
    formDelete() {
      console.log(arguments);
      console.log("删除");
    },
  },
};
</script>

<style scoped lang='less'>
.billno-info {
  margin-bottom: 15px;
  .jkcx-card {
    margin: 15px 0;
    .text {
      color: #000;
    }
    .primary {
      color: #ff0000;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>