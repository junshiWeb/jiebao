<template>
  <div class="home">
    <img src="@/assets/swiper.png" alt="" />
    <home-tasks></home-tasks>
  </div>
</template>

<script>
import HomeTasks from "./children/HomeTasks";
import { getManageUser } from "@/api/manage";
export default {
  name: "Home",
  created() {
    getManageUser().then((res) => {
      console.log("请求成功");
      console.log(res);
    });
  },
  components: {
    HomeTasks,
  },
  methods: {},
};
</script>script


<style lang="less">
// @import "../style/mixin";
.home {
  margin-top: 60px;
}
</style>
