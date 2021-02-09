<template>
  <el-form inline size="small">
    <billno-header title="费用借款单"></billno-header>
    <billno-card
      headerTitle="报销明细"
      :formLabel="formLabelBxmx"
    ></billno-card>
    <billno-card headerTitle="付款信息" :formLabel="formLabelFkq"></billno-card>
    <billno-explain headerTitle="借款说明"></billno-explain>
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
  name: "JkInfo",
  data() {
    return {
      jkcxChange: false,
      ifFlex: true,
      formLabelBxmx: [
        {
          type: "Input",
          prop: "jkyt",
          label: "借款用途",
          rules: [{ required: true, message: "不能为空" }],
        },
        {
          type: "Input",
          prop: "glsq",
          label: "关联申请单",
          rules: [{ required: true, message: "不能为空" }],
        },
        {
          type: "Input",
          prop: "syed",
          label: "剩余额度",
          rules: [{ required: true, message: "不能为空" }],
        },
        {
          type: "Select",
          prop: "bm",
          label: "",
          value: "四川财务会计部",
          options: [
            {
              label: "四川财务会计部",
              value: "四川财务会计部",
            },
          ],
        },
        {
          type: "Select",
          prop: "wdzh",
          label: "",
          value: "维度组合",
          rules: [{ required: true, message: "不能为空" }],
          options: [
            {
              label: "维度组合",
              value: "维度组合",
            },
          ],
        },
        {
          type: "Select",
          prop: "fylx",
          label: "",
          value: "费用类型",
          rules: [{ required: true, message: "不能为空" }],
          options: [
            {
              label: "费用类型",
              value: "费用类型",
            },
          ],
        },
        {
          type: "Input",
          prop: "price",
          label: "金额",
        },
      ],
      formLabelFkq: [
        {
          type: "Input",
          prop: "zfdxsx",
          label: "支付对象属性",
          rules: [{ required: true, message: "支付对象属性不能为空" }],
        },
        {
          type: "Input",
          prop: "skrmc",
          label: "收款人名称",
        },
        {
          type: "Input",
          prop: "skrkhh",
          label: "收款人开户行",
        },

        {
          type: "Select",
          prop: "dq",
          label: "地区",
          value: "上海市",
          options: [
            {
              label: "上海市",
              value: "上海市",
            },
            {
              label: "南平市",
              value: "南平市",
            },
          ],
        },
        {
          type: "Select",
          prop: "ssyh",
          label: "所属银行",
          value: "交通银行",
          options: [
            {
              label: "交通银行",
              value: "交通银行",
            },
            {
              label: "兴业银行",
              value: "兴业银行",
            },
          ],
        },
        {
          type: "Select",
          prop: "zhfs",
          label: "支付方式",
          relus: [{ required: true, message: "支付方式不能为空" }],
          value: "支付方式",
          options: [
            {
              label: "已支付",
              value: "已支付",
            },
            {
              label: "未支付",
              value: "未支付",
            },
            {
              type: "Input",
              prop: "price",
              label: "金额",
            },
          ],
        },
      ],
      formLabelFjsmq: [
        {
          type: "Select",
          prop: "dl",
          value: "大类",
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
          prop: "qksm",
          value: "情况说明",
          options: [
            {
              label: "情况说明",
              value: "情况说明",
            },
            {
              label: "情况说明2",
              value: "情况说明2",
            },
          ],
        },
        {
          type: "Select",
          prop: "yy",
          value: "原因",
          options: [
            {
              label: "30天",
              value: "30天",
            },
            {
              label: "90天",
              value: "90天",
            },
          ],
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