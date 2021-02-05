<template>
  <div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "name",
  data() {
    return {
      ass: "/sqinfo",
    };
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
    aList() {
      return this.$route.path + this.ass;
    },
  },
  components: {},
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