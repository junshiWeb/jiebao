<template>
  <div>
    <bread-crumb></bread-crumb>
    <div class="container">
      <el-card class="box-card">
        <div v-for="o in 3" :key="o" class="text item">
          <div class="box-title">
            <h4>部门费用寿险</h4>
          </div>
          <div class="bx-content">
            <div class="bx-items">
              <img src="@/assets/fybx/fysq.svg" alt="" />
              <a href="/sqinfo">部门费用申请单寿险</a>
            </div>
            <div class="bx-items">
              <img src="@/assets/fybx/fybx.svg" alt="" />
              <a href="">部门费用报销单寿险</a>
            </div>
            <div class="bx-items">
              <img src="@/assets/fybx/fyjk.svg" alt="" />
              <a href="">部门费用借款单寿险</a>
            </div>
            <div class="bx-items">
              <img src="@/assets/fybx/fyhk.svg" alt="" />
              <a href="">部门费用还款单寿险</a>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/content/BreadCrumb";
export default {
  name: "name",
  components: {
    BreadCrumb,
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped lang='less'>
.container {
  background: #ffffff;
  border-radius: 5px;
  .box-card {
    .box-title {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #999;
    }
    .bx-content {
      margin: 30px 2px;
      display: flex;
      .bx-items {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 30px;
        a {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>