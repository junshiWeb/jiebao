<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :height="isHeight"
      :default-sort="{ prop: 'date', order: 'descending' }"
      :header-row-class-name="active"
      @cell-dblclick="cellDblclick"
      size="mini"
    >
      <!-- 全选显示 -->
      <el-table-column v-if="isSelection === true" type="selection" width="55">
      </el-table-column>
      <!-- 序号显示 -->
      <el-table-column
        v-if="isIndex === true"
        label="序号"
        type="index"
        :index="indexMethod"
      >
      </el-table-column>
      <!-- 表头数据 -->
      <template v-if="isSortable === true">
        <el-table-column
          v-for="heads in tableHead"
          :key="heads.prop"
          :prop="heads.prop"
          :label="heads.label"
          :width="heads.width"
          :align="isAlign"
          sortable
        >
        </el-table-column>
      </template>
      <template v-else>
        <el-table-column
          v-for="heads in tableHead"
          :key="heads.prop"
          :prop="heads.prop"
          :label="heads.label"
          :width="heads.width"
          :align="isAlign"
        >
        </el-table-column>
      </template>
    </el-table>

    <el-pagination
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
      :pager-count="pagerCount"
      @size-change="sizeChange"
      @current-change="currentChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "SearchTable",
  mounted() {
    // console.log(this.tableHead);
  },
  props: {
    isHeight: {
      type: String,
    },
    isAlign: {
      type: String,
      default: "center",
    },
    // 序号
    isIndex: {
      type: Boolean,
      default: false,
    },
    // 全选
    isSelection: {
      type: Boolean,
      default: false,
    },
    // 排序
    isSortable: {
      type: Boolean,
      default: false,
    },
    // 数据
    tableHead: {
      type: Array,
      default() {
        return [
          { label: "日期", prop: "date", width: "100" },
          { label: "姓名", prop: "lalla" },
        ];
      },
    },
    tableData: {
      type: Array,
      default() {
        return [
          {
            date: "2016-05-02",
            lalla: "lllllll",
          },
        ];
      },
    },
    // 分页数据
    // 组件布局
    layout: {
      type: String,
      default: "jumper, prev, pager, next,total,sizes",
    },
    // 数据总数
    total: {
      type: Number,
      default: 100,
    },
    // 页码按钮数量
    pagerCount: {
      type: Number,
      default: 5,
    },
    // 当前页数
    currentPage: {
      type: Number,
      default: 1,
    },
    // 每页显示个数选择器
    pageSizes: {
      type: Array,
      default() {
        return [10, 15, 20, 50, 100];
      },
    },
  },
  computed: {
    indexMethod() {
      return 1;
    },
  },

  methods: {
    // 双击列表
    cellDblclick(row) {
      // this.cellDbclick();
      this.$emit("cellDblclickReq", row);
    },
    // 页面显示数量
    sizeChange(val) {
      console.log("页面显示数量", val);
      this.$emit("sizeChangeReq", val);
    },
    currentChange(val) {
      console.log("页面跳转", val);
      this.$emit("currentChangeReq", val);
    },
    prevClick(val) {
      console.log("上一页", val);
      this.$emit("prevClickReq", val);
    },
    nextClick(val) {
      console.log("下一页", val);
      this.$emit("nextClickReq", val);
    },

    formatter(row) {
      console.log("row");
      return row.address;
    },
    active() {
      return "wait-task-heade";
    },
  },
};
</script>
<style lang='less'>
.el-table {
  border-radius: 3px;
  .wait-task-heade {
    background-color: #328be5;
    th {
      background-color: #328be5;
      color: #fff;
      padding: 5px 2px;
    }
  }
}
.el-pagination {
  margin-top: 10px;
  float: right;
}
</style>