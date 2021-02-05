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
      {{ aList }}
      <el-button @click="push">跳转</el-button>
      <el-card class="box-card">
        <div v-for="o in 2" :key="o" class="text item">
          <div class="box-title">
            <h4>部门费用寿险</h4>
          </div>
          <div class="bx-content">
            <a href="/aList" class="bx-items"
              ><img src="@/assets/fybx/fysq.svg" alt="" />
              <span>部门费用申请单寿险</span></a
            >
            <a href="/sqinfo" class="bx-items"
              ><img src="@/assets/fybx/fybx.svg" alt="" />
              <span>部门费用报销单寿险</span></a
            >
            <a href="/sqinfo" class="bx-items"
              ><img src="@/assets/fybx/fyjk.svg" alt="" />
              <span>部门费用借款单寿险</span></a
            >
            <a href="/sqinfo" class="bx-items"
              ><img src="@/assets/fybx/fyhk.svg" alt="" />
              <span>部门费用还款单寿险</span></a
            >
          </div>
        </div>
      </el-card>
    </div>
    <billno-info v-else></billno-info>
  </div>
</template>

<script>
import BillnoInfo from "./children/BillnoInfo";
export default {
  name: "name",
  data() {
    return {
      ass: "/sqinfo",
      iid: "iid",
    };
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.$route.query);
    // console.log(this.$route.query instanceof Object);
    // console.log(Object.keys(this.$route.query) === 0);
    // console.log(Object.keys(this.$route.query).length === 0);
  },
  computed: {
    aList() {
      return 1;
    },
  },
  components: {
    BillnoInfo,
  },
  methods: {
    push() {
      this.$router.push({ path: "/fybxinfo", query: { iid: "iid" } });
      console.log(this.$router);
      console.log(this.$route);
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