<template>
  <div class="name">
    <bread-crumb></bread-crumb>
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
import BreadCrumb from "@/components/content/BreadCrumb";
import SearchForm from "@/components/search/SearchForm";
import SearchTable from "@/components/search/SearchTable";
export default {
  name: "name",
  components: {
    BreadCrumb,
    SearchForm,
    SearchTable,
  },
};
</script>

<style scoped lang='less'>
</style>