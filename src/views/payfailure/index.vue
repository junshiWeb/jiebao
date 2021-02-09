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
          label: "备注",
          prop: "bz",
        },
        {
          type: "InputPrice",
          label: "金额",
          prop: "je",
        },
        {
          type: "DatePicker",
          label: "创建时间",
          prop: "createTime",
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
        { label: "说明", prop: "sm" },
        { label: "审批状态", prop: "spzt" },
        { label: "当前审批人", prop: "dqspr" },
        { label: "支付方式", prop: "zffs" },
        { label: "金额(元)", prop: "je" },
        { label: "创建时间", prop: "createTime" },
        { label: "最新处理时间", prop: "updateTime" },
        { label: "所属部门", prop: "ssbm" },
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