<template>
  <el-form inline size="small">
    <billno-header title="费用申请单" :headerData="headerData"></billno-header>
    <billno-card
      headerTitle="费用明细区"
      :isFlex="ifFlex"
      :formLabel="formLabelFymxq"
    ></billno-card>
    <billno-explain headerTitle="申请说明"></billno-explain>
    <billno-accessory></billno-accessory>

    <billno-htfj></billno-htfj>
    <billno-event
      @formSubmit="formSubmit"
      @formSave="formSave"
      @formDelete="formDelete(test)"
    ></billno-event>
  </el-form>
</template>

<script>
import BillnoHeader from "./BillnoHeader";
import BillnoCard from "./BillnoCard";
import BillnoExplain from "./BillnoExplain";
import BillnoAccessory from "./BillnoAccessory";
import BillnoHtfj from "./BillnoHtfj";
import BillnoEvent from "./BillnoEvent";
export default {
  name: "name",
  data() {
    return {
      ifFlex: true,
      headerData: {
        userNameStr: "方雷",
        userName: "fanflei-07",
        userDeptStr: "寿-四川分公司本部",
        userDeptCode: "LB51010101",
        deptStr: "四川财务会计部",
        deptCode: "LB51010101002",
        billnoPrice: "1.533",
        budgetType: "预算方式:(部门)",
        mainBillno: "W11111",
      },
      formLabelFymxq: [
        {
          type: "Select",
          prop: "bm",
          value: "四川财务会计部",
          options: [
            {
              label: "1",
              value: "1",
            },
            {
              label: "2",
              value: "2",
            },
          ],
        },
        {
          type: "Select",
          prop: "fylx",
          rules: [{ required: true, message: "不能为空" }],
          value:
            "日常办公用-差旅费用-不分明细-不分明细-不分明细-不分明细-不分明细",
          options: [
            {
              label:
                "日常办公用-差旅费用-不分明细-不分明细-不分明细-不分明细-不分明细",
              value:
                "日常办公用-差旅费用-不分明细-不分明细-不分明细-不分明细-不分明细",
            },
            {
              label: "情况说明2",
              value: "情况说明2",
            },
          ],
        },
        {
          type: "Input",
          prop: "bz",
          label: "备注",
          rules: [{ required: true, message: "不能为空" }],
        },
        {
          type: "Input",
          prop: "sqje",
          label: "申请金额",
        },
      ],
    };
  },
  props: {},
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
</style>