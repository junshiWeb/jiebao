<template>
  <!-- query 参数的形式进行数据获取 -->
  <div>
    <div
      class="container"
      v-if="
        $route.query instanceof Object &&
        Object.keys(this.$route.query).length === 0
      "
    >
      <!-- <el-button @click="push">跳转</el-button> -->
      <el-card class="box-card">
        <div v-for="o in 2" :key="o" class="text item">
          <div class="box-title">
            <h4>部门费用寿险</h4>
          </div>
          <div class="bx-content">
            <a href="fybxinfo?type=sqd" class="bx-items"
              ><img src="@/assets/fybx/fysq.svg" alt="" />
              <span>部门费用申请单寿险</span></a
            >
            <a href="fybxinfo?type=bxd" class="bx-items"
              ><img src="@/assets/fybx/fybx.svg" alt="" />
              <span>部门费用报销单寿险</span></a
            >
            <a href="fybxinfo?type=jkd" class="bx-items"
              ><img src="@/assets/fybx/fyjk.svg" alt="" />
              <span>部门费用借款单寿险</span></a
            >
            <a href="fybxinfo?type=hkd" class="bx-items"
              ><img src="@/assets/fybx/fyhk.svg" alt="" />
              <span>部门费用还款单寿险</span></a
            >
          </div>
        </div>
      </el-card>
    </div>
    <bx-info
      v-else-if="'type' in this.$route.query && $route.query.type === 'bxd'"
    ></bx-info>
    <sq-info
      v-else-if="'type' in this.$route.query && $route.query.type === 'sqd'"
    ></sq-info>
    <hk-info
      v-else-if="'type' in this.$route.query && $route.query.type === 'hkd'"
    ></hk-info>
    <jk-info
      v-else-if="'type' in this.$route.query && $route.query.type === 'jkd'"
    ></jk-info>
    <billno-info v-else> </billno-info>
  </div>
</template>

<script>
import BillnoInfo from "./children/BillnoInfo";
import BxInfo from "./children/BxInfo";
import SqInfo from "./children/SqInfo";
import HkInfo from "./children/HkInfo";
import JkInfo from "./children/JkInfo";
export default {
  name: "name",
  data() {
    return {
      ass: "/sqinfo",
      iid: "iid",
    };
  },
  mounted() {
    console.log(this.$route.query);
    console.log();
    // console.log(Object.hasOwnProperty);
    console.log(Object.keys(this.$route.query));
  },
  components: {
    BillnoInfo,
    BxInfo,
    SqInfo,
    HkInfo,
    JkInfo,
  },
  methods: {
    push() {
      this.$router.push({ path: "/fybxinfo", query: { iid: "iid" } });

      // this.$router.push("/fybxinfo/:iid");
    },
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
        padding: 0 30px 0 15px;
        color: #2e6a9e;
        &:hover {
          color: #0286fa;
        }
        span {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>