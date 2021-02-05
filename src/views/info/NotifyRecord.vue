<template>
  <div class="name">
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
  name: "name",
  components: {
    SearchForm,
    SearchTable,
  },
};
</script>

<style scoped lang='less'>
</style>