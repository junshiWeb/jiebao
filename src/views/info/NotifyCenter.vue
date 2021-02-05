<template>
  <div class="name">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读信息" name="first">
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
      </el-tab-pane>
      <el-tab-pane label="已读信息" name="second">
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
      </el-tab-pane>
    </el-tabs>
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
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped lang='less'>
</style>