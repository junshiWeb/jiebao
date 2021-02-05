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
          type: "Input",
          label: "创建人",
          prop: "cjr",
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
          label: "机构",
          prop: "jg",
        },
        {
          type: "Select",
          label: "发票信息",
          prop: "fpxx",
          placeHodel: "请选择...",
          options: [
            {
              label: "含专票",
              value: "含专票",
            },
            {
              label: "不含专票",
              value: "不含专票",
            },
            {
              label: "无",
              value: "无",
            },
          ],
        },
        {
          type: "DatePicker",
          label: "最后处理时间",
          prop: "update_time",
          labelWidth: "100px",
        },
      ],
      searchData: {
        test: "",
      },
      searchHandle: [],
      tableHead: [
        { label: "单据编号", prop: "djbh", width: "160" },
        { label: "发票信息", prop: "fpxx" },
        { label: "单据名称", prop: "djmc" },
        { label: "创建人", prop: "cjr" },
        { label: "审批环节", prop: "sphj" },
        { label: "前审批人", prop: "qspr" },
        { label: "P07状态", prop: "P07status" },
        { label: "电子报销单", prop: "dzbxd" },
        { label: "金额(元)", prop: "je" },
        { label: "创建时间", prop: "createTime" },
        { label: "最新处理时间", prop: "updateTime" },
        { label: "所属部门", prop: "ssbm" },
        { label: "纸质单据是否交接", prop: "zzdjjj" },
        { label: "备注", prop: "bz" },
        { label: "应急通道", prop: "yjtd" },
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