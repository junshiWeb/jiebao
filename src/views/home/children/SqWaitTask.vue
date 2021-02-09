<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="300"
      :default-sort="{ prop: 'date', order: 'descending' }"
      :header-row-class-name="active"
    >
      <el-table-column
        v-for="(heads, index) in tableHead"
        :key="index"
        :prop="heads.data"
        :label="heads.name"
        :width="heads.width"
        sortable
      >
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50" :pager-count="5">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "SqWaitTask",
  data() {
    return {
      tableHead: [
        { name: "申请单编号", data: "id", width: "200" },
        { name: "单据名称", data: "name" },
        { name: "创建人", data: "creator" },
        { name: "审批状态", data: "status" },
        { name: "前审批人", data: "beforeApprover" },
        { name: "金额(元)", data: "price" },
        { name: "创建时间", data: "createTime" },
        { name: "所属部门", data: "department" },
        { name: "P07状态", data: "p07Status" },
        { name: "备注", data: "remark" },
      ],
      tableData: [
        {
          id: "JB3101001D10000001",
          name: "费用申请单",
          creator: "赵浩宇",
          status: "审批",
          beforeApprover: "方磊",
          price: "1999",
          createTime: "2021-1-29",
          department: "四川分公司",
          p07Status: "p07状态",
          remark: "备注",
        },
        {
          id: "JB3101001D10000002",
          name: "费用申请单",
          creator: "赵浩宇",
          status: "审批",
          beforeApprover: "方磊",
          price: "1999",
          createTime: "2021-1-29",
          department: "四川分公司",
          p07Status: "p07状态",
          remark: "备注",
        },
        {
          id: "JB3101001D10000003",
          name: "费用申请单",
          creator: "赵浩宇",
          status: "审批",
          beforeApprover: "方磊",
          price: "1999",
          createTime: "2021-1-29",
          department: "四川分公司",
          p07Status: "p07状态",
          remark: "备注",
        },
        {
          id: "JB3101001D10000001",
          name: "费用申请单",
          creator: "赵浩宇",
          status: "审批",
          beforeApprover: "方磊",
          price: "1999",
          createTime: "2021-1-29",
          department: "四川分公司",
          p07Status: "p07状态",
          remark: "备注",
        },
        {
          id: "JB3101001D10000001",
          name: "费用申请单",
          creator: "赵浩宇",
          status: "审批",
          beforeApprover: "方磊",
          price: "1999",
          createTime: "2021-1-29",
          department: "四川分公司",
          p07Status: "p07状态",
          remark: "备注",
        },
      ],
    };
  },
  methods: {
    formatter(row) {
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
  .wait-task-heade {
    background-color: #328be5;
    th {
      background-color: #328be5;
      color: #fff;
      padding: 2px 0;
    }
  }
}
.el-pagination {
  float: right;
}
</style>