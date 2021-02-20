<template>
  <div class="name">
    <search-form
      style="background: #fff"
      size="mini"
      :searchData="searchData"
      :searchForm="searchForm"
      :labelWidth="labelWidth"
    ></search-form>
    <search-table
      :isSortable="true"
      :isSelection="true"
      :tableHead="tableHead"
      :tableData="tableData"
    ></search-table>
  </div>
</template>

<script>
import SearchForm from "@/components/search/SearchForm";
import SearchTable from "@/components/search/SearchTable";
export default {
  name: "name",
  data() {
    return {
      labelWidth: "80px",
      searchForm: [
        {
          type: "Input",
          label: "单据名称",
          prop: "djmc",
        },
        {
          type: "Input",
          label: "单据编号",
          prop: "djmh",
        },
        {
          type: "Input",
          label: "前审批人",
          prop: "qspr",
        },
        {
          type: "InputPrice",
          label: "金额",
          prop: "je",
        },
        {
          type: "Select",
          label: "单据状态",
          prop: "fpxx",
          placeHodel: "请选择...",
          options: [
            {
              label: "未提交",
              value: "未提交",
            },
            {
              label: "待处理",
              value: "待处理",
            },
            {
              label: "审判中",
              value: "审判中",
            },
            {
              label: "审批结束",
              value: "审批结束",
            },
            {
              label: "已终止",
              value: "已终止",
            },
            {
              label: "验真中",
              value: "验真中",
            },
            {
              label: "验证失败",
              value: "验证失败",
            },
            {
              label: "绿通审批失败",
              value: "绿通审批失败",
            },
          ],
        },

        {
          type: "Select",
          label: "P07状态",
          prop: "p07status",
          placeHodel: "请选择...",
          options: [
            {
              label: "发票待认证",
              value: "发票待认证",
            },
            {
              label: "发票认证失败",
              value: "发票认证失败",
            },
            {
              label: "已取消",
              value: "已取消",
            },
            {
              label: "准备付款",
              value: "准备付款",
            },
            {
              label: "准备开票",
              value: "准备开票",
            },
            {
              label: "已付",
              value: "已付",
            },
            {
              label: "部分付款",
              value: "部分付款",
            },
          ],
        },
        {
          type: "Input",
          label: "备注",
          prop: "bz",
        },
        {
          type: "DatePicker",
          label: "创建时间",
          prop: "createTime",
        },
        {
          type: "Input",
          label: "创建人",
          prop: "cjr",
        },
      ],
      searchData: {
        test: "",
      },
      searchHandle: [],
      tableHead: [
        { label: "单据编号", prop: "djbh", width: "160" },
        { label: "单据名称", prop: "djmc" },
        { label: "创建人", prop: "cjr" },
        { label: "审批状态", prop: "spzt" },
        { label: "P07状态", prop: "P07status" },
        { label: "支付方式", prop: "zffs" },
        { label: "金额(元)", prop: "je" },
        { label: "创建时间", prop: "createTime" },
        { label: "最新处理时间", prop: "updateTime" },
        { label: "所属部门", prop: "ssbm" },
        { label: "备注", prop: "bz" },
      ],
      tableData: [{ djbh: "w2222" }],
    };
  },
  components: {
    SearchForm,
    SearchTable,
  },
};
</script>

<style scoped lang='less'>
</style>