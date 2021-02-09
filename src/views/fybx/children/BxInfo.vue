<template>
  <el-form inline size="small">
    <billno-header title="费用报销单"></billno-header>
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
    <billno-card
      headerTitle="报销明细"
      :formLabel="formLabelBxmx"
    ></billno-card>
    <billno-card headerTitle="付款区" :formLabel="formLabelFkq"></billno-card>
    <billno-card
      headerTitle="附件说明区"
      :isFlex="ifFlex"
      :formLabel="formLabelFjsmq"
    ></billno-card>
    <billno-explain headerTitle="费用说明"></billno-explain>
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
      jkcxChange: false,
      ifFlex: true,
      formLabelYsmx: [
        {
          type: "Input",
          prop: "glsqh",
          label: "关联申请行",
          rules: [{ required: true, message: "关联申请行不能为空" }],
        },
        {
          type: "Input",
          prop: "sykyje",
          label: "剩余可用金额",
          rules: [{ required: true, message: "剩余可用金额不能为空" }],
        },
        {
          type: "Select",
          prop: "ysgsbm",
          label: "预算归属部门",
          disabled: false,
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
          label: "维度组合",
          rules: [{ required: true, message: "维度组合不能为空" }],
          value: "",
          options: [
            {
              label: "维度组合",
              value: "维度组合",
            },
          ],
        },
        {
          type: "Input",
          prop: "kykjkm",
          label: "可用会计科目",
          rules: [{ required: true, message: "可用会计科目不能为空" }],
        },
        {
          type: "Input",
          prop: "price",
          label: "金额",
          disabled: true,
        },
      ],
      formLabelBxmx: [
        {
          type: "Select",
          prop: "fylx",
          label: "费用类型",
          value: "费用类型",
          options: [
            {
              label: "费用类型",
              value: "费用类型",
            },
          ],
        },
        {
          type: "Select",
          prop: "fplx",
          label: "发票类型",
          value: "发票类型",
          options: [
            {
              label: "发票类型",
              value: "发票类型",
            },
          ],
        },
        {
          type: "Input",
          prop: "price",
          label: "金额",
        },
        {
          type: "Select",
          prop: "zjgch",
          label: "",
          value: "在建工程号",
          options: [
            {
              label: "在建工程号",
              value: "在建工程号",
            },
          ],
        },
        {
          type: "Select",
          prop: "hshd",
          label: "",
          value: "核算活动",
          options: [
            {
              label: "核算活动",
              value: "核算活动",
            },
          ],
        },
        {
          type: "Select",
          prop: "hsxz",
          label: "",
          value: "核算险种",
          options: [
            {
              label: "核算险种",
              value: "核算险种",
            },
          ],
        },
        {
          type: "Select",
          prop: "hsqd",
          label: "",
          value: "核算渠道",
          options: [
            {
              label: "核算渠道",
              value: "核算渠道",
            },
          ],
        },
        {
          type: "Select",
          prop: "sfstxs",
          label: "",
          value: "是否视同销售",
          options: [
            {
              label: "是否视同销售",
              value: "是否视同销售",
            },
          ],
        },
        {
          type: "Select",
          prop: "wplx",
          label: "",
          value: "物品类型",
          options: [
            {
              label: "物品类型",
              value: "物品类型",
            },
          ],
        },
        {
          type: "Select",
          prop: "sfwlpz",
          label: "",
          value: "是否往来凭证",
          options: [
            {
              label: "是否往来凭证",
              value: "是否往来凭证",
            },
          ],
        },
        {
          type: "Input",
          prop: "fgms",
          label: "费用描述",
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