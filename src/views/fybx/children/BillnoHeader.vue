<template>
  <el-form class="billno-header" inline size="mini">
    <div class="header-title">{{ title }}</div>
    <div class="header-main">
      <!-- {{ headerData }} -->
      <span>{{ headerData.userNameStr }} {{ headerData.deptStr }}</span>
      <span>{{ headerData.userDeptStr }}</span>
      <span class="header-price">{{
        headerData.billnoPrice | priceFixed
      }}</span>
      <span>{{ headerData.budgetType }} </span>
      <span class="main-billno">单据编号:{{ headerData.mainBillno }} </span>
    </div>

    <el-form-item label="附件张数" class="accessory-count">
      <el-input v-model="headerData.accessoryCount" size="small"> </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "BillnoHeader",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    headerData: {
      type: Object,
      default() {
        return {
          userNameStr: "赵浩宇",
          userName: "zhaohaoyu",
          userDeptStr: "寿-四川分公司本部",
          userDeptCode: "LB51010101",
          deptStr: "四川财务会计部",
          deptCode: "LB51010101002",
          billnoPrice: "1.533",
          budgetType: "预算方式:(部门)",
          mainBillno: "W11111",
          accessoryCount: "1",
        };
      },
    },
  },
  mounted() {
    // let res = this.headerData.billnoPrice;
  },
  filters: {
    priceFixed(val) {
      val = val * 1;
      if (isNaN(val)) {
        val = 0;
        return val.toFixed(2);
      }
      return val.toFixed(2);
    },
  },
};
</script>

<style scoped lang='less'>
.billno-header {
  background: #ffffff;
  .header-title {
    height: 45px;
    line-height: 45px;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    background: #328be5;
  }
  .header-main {
    padding: 15px 20px;
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    .header-price {
      color: #ff5347;
      font-size: 20px;
      font-weight: 700;
    }
    .main-billno {
      padding-right: 40px;
    }
  }
  .accessory-count {
    padding: 15px 20px;
  }
}
</style>