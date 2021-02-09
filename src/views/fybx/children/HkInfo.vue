<template>
  <el-form inline size="small">
    <billno-header title="费用还款单"></billno-header>
    <div class="jkcx-card">
      <el-checkbox v-model="jkcxChange" size="medium"
        ><span class="text">借款冲销</span
        ><span class="primary"
          >(有借款冲销的请优先选择借款冲销！)</span
        ></el-checkbox
      >
      <billno-card
        v-if="jkcxChange"
        headerTitle="借款信息"
        :isFlex="ifFlex"
        :formLabel="formLabelJkxx"
      ></billno-card>
    </div>

    <billno-card
      headerTitle="还款明细"
      :isFlex="ifFlex"
      :formLabel="formLabelHkmx"
    ></billno-card>
    <billno-explain headerTitle="还款说明"></billno-explain>
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
  name: "HkInfo",
  data() {
    return {
      jkcxChange: true,
      ifFlex: true,
      formLabelJkxx: [
        {
          type: "Select",
          prop: "jkdh",
          value: "借款单号",
          relus: [{ required: true, message: "借款单号不能为空" }],
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
          type: "Input",
          prop: "jkje",
          label: "借款金额",
          rules: [{ required: true, message: "借款金额不能为空" }],
        },
        {
          type: "Input",
          prop: "whje",
          label: "未还金额",
          rules: [{ required: true, message: "未还金额不能为空" }],
        },
        {
          type: "Input",
          prop: "bchkje",
          label: "本次还款金额",
          rules: [{ required: true, message: "本次还款金额不能为空" }],
        },
      ],
      formLabelHkmx: [
        {
          type: "Select",
          prop: "bm",
          value: "费用类型",
          relus: [{ required: true, message: "费用类型不能为空" }],
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
          type: "Input",
          prop: "hksm",
          label: "还款说明",
          rules: [{ required: true, message: "还款说明不能为空" }],
        },
        {
          type: "Select",
          prop: "hkfs",
          value: "还款方式",
          rules: [{ required: true, message: "不能为空" }],
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
          prop: "hkje",
          label: "还款金额",
          rules: [{ required: true, message: "不能为空" }],
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