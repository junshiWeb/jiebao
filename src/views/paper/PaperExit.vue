<template>
  <div>
    <search-form
      style="background: #fff"
      size="mini"
      :searchData="searchData"
      :searchForm="searchForm"
      :searchHandle="searchHandle"
    ></search-form>
    <search-table
      :isSortable="true"
      :tableHead="tableHead"
      :tableData="tableData"
    ></search-table>
  </div>
</template>

<script>
import SearchForm from "@/components/search/SearchForm";
import SearchTable from "@/components/search/SearchTable";

export default {
  name: "PaperStatement",
  data() {
    return {
      searchData: {
        billno: null,
        jg: null,
        bm: null,
        cjr: null,
        thsj: null,
      },
      searchForm: [
        {
          type: "Input",
          label: "单据编号",
          prop: "billno",
          width: "180px",
        },
        {
          type: "Input",
          label: "机构",
          prop: "jg",
        },
        {
          type: "Input",
          label: "部门",
          prop: "bm",
        },
        {
          type: "Input",
          label: "单据创建人",
          labelWidth: "100px",
          prop: "cjr",
        },
        {
          type: "DatePicker",
          label: "退回时间",
          prop: "thsj",
        },
      ],
      searchHandle: [
        {
          label: "激活扫码枪退回",
          handel: () => {
            console.log("---");
          },
        },
        {
          label: "查询",
          type: "primary",
          handle: () => {
            console.log("查询");
          },
        },
        {
          label: "重置",
          type: "primary",
          handle: () => {
            console.log("重置");
          },
        },
      ],
      tableHead: [
        { label: "单据编号", prop: "djbh" },
        { label: "机构", prop: "jg" },
        { label: "部门", prop: "bm" },
        { label: "单据创建人", prop: "cjr" },
        { label: "单据金额", prop: "je" },
        { label: "退回时间", prop: "sj" },
      ],
      tableData: [
        {
          djbh: "110",
          jg: "四川",
          bm: "部门",
          cjr: "单据创建人",
          je: "单据金额",
          sj: "退回时间",
        },
      ],
      paginObj: {},
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