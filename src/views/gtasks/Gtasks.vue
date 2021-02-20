<template>
  <div class="name">
    <search-form
      style="background: #fff"
      size="mini"
      :searchData="searchData"
      :searchForm="searchForm"
      :labelWidth="labelWidth"
      @selectFromReq="selectFromReq"
    ></search-form>
    <search-table
      :isSortable="true"
      :isSelection="true"
      :tableHead="tableHead"
      :tableData="tableData"
      :total="total"
      @cellDblclickReq="cellDblclickReq"
      @sizeChangeReq="sizeChangeReq"
      @currentChangeReq="currentChangeReq"
      @prevClickReq="prevClickReq"
      @nextClickReq="nextClickReq"
    ></search-table>
  </div>
</template>

<script>
import SearchForm from "@/components/search/SearchForm";
import SearchTable from "@/components/search/SearchTable";
import { getGtasks, getGtasksCount, getGtasksSelect } from "@/api/tasks";
import { dateFormat } from "@/utils/index";
export default {
  name: "Gtasks",
  created() {
    getGtasks().then((res) => {
      this.tableData = res.data;
      this.tableData.filter((item) => {
        item.create_time = dateFormat(
          "YYYY-mm-dd HH:MM:SS",
          new Date(item.create_time)
        );
        item.update_time = dateFormat(
          "YYYY-mm-dd HH:MM:SS",
          new Date(item.update_time)
        );
        return item;
      });
    });
    getGtasksCount().then((res) => {
      this.total = res.data[0].num;
    });
  },
  data() {
    return {
      labelWidth: "80px",
      searchForm: [
        {
          type: "Input",
          label: "单据名称",
          prop: "billno_name",
        },
        {
          type: "Input",
          label: "单据编号",
          prop: "billno",
        },
        {
          type: "Input",
          label: "前审批人",
          prop: "before_approver",
        },
        {
          type: "InputPrice",
          label: "金额",
          prop: "price",
          prop1: "price1",
          prop2: "price2",
        },
        {
          type: "Input",
          label: "创建人",
          prop: "creator",
        },
        {
          type: "Select",
          label: "P07状态",
          prop: "p07_status",
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
          prop: "remack",
        },
        {
          type: "DatePicker",
          label: "创建时间",
          prop: "create_time",
        },
        {
          type: "Input",
          label: "机构",
          prop: "organization",
        },
        {
          type: "Select",
          label: "发票信息",
          prop: "invoice_info",
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
        billno_name: "",
        billno: "",
        before_approver: "",
        price1: "",
        price2: "",
        creator: "",
        p07_status: "",
        remack: "",
        create_time: "",
        organization: "",
        invoice_info: "",
        update_time: "",
      },
      searchHandle: [],
      tableHead: [
        { label: "单据编号", prop: "billno", width: "160" },
        { label: "发票信息", prop: "invoice_info" },
        { label: "单据名称", prop: "billno_name" },
        { label: "创建人", prop: "creator" },
        { label: "审批环节", prop: "approver" },
        { label: "前审批人", prop: "before_approver" },
        { label: "P07状态", prop: "P07status" },
        { label: "电子报销单", prop: "dzbxd" },
        { label: "金额(元)", prop: "price" },
        { label: "创建时间", prop: "create_time", width: "90" },
        { label: "最新处理时间", prop: "update_time", width: "90" },
        { label: "所属部门", prop: "department" },
        { label: "纸质单据是否交接", prop: "zzdjjj" },
        { label: "备注", prop: "remack" },
        { label: "应急通道", prop: "yjtd" },
      ],
      tableData: [],
      total: 100,
    };
  },
  components: {
    SearchForm,
    SearchTable,
  },
  methods: {
    // 表单事件
    selectFromReq(formDate) {
      console.log(formDate);
      console.log(
        Object.values(formDate).filter((item) => {
          return item !== "";
        })
      );
      getGtasksSelect(formDate).then((res) => {
        console.log(res);
      });
    },
    // 表格事件
    cellDblclickReq(row) {
      console.log("父组件", row.billno);
    },
    sizeChangeReq(val) {
      console.log("父组件", val);
    },
    currentChangeReq(val) {
      console.log("父组件", val);
    },
    // 上一页
    prevClickReq(val) {
      console.log("父组件", val);
    },
    // 下一页
    nextClickReq(val) {
      console.log("父组件", val);
    },
  },
};
</script>

<style scoped lang='less'>
</style>